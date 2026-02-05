import { Share2, EllipsisIcon, Phone, Mail, X, ClosedCaption, Cross, Delete, DeleteIcon } from "lucide-react";
import { useState } from "react";

export default function BottomNav() {
  const [showActions, setShowActions] = useState(false);
const handleShare = async () => {
  const shareData = {
    title: "Bhargav Shukla – Digital Card",
    text: "Check out my digital profile",
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard");
    }
  } catch (err) {
    console.error("Share failed:", err);
  }
};

  const saveContact = () => {
    const vCard = `
BEGIN:VCARD
VERSION:3.0
N:Shukla;Bhargav;;;
FN:Bhargav Shukla
ORG:S.S. White Technologies Pvt Ltd
TITLE:Jr. Software Developer
TEL;TYPE=CELL:9327190323
EMAIL;TYPE=WORK:bhargav@gmail.com
END:VCARD
    `.trim();

    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Bhargav_Shukla.vcf";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <>
     {showActions && (
    <div className=" card absolute bottom-full right-0 mb-3 w-44   rounded-xl shadow-xl p-2 space-y-2 animate-scaleUp" >
    
{/* <div className="flex flex-col  "> 
  <h3 className="text-sm font-semibold text-black text-center">
    Action
  </h3>

  <button
    onClick={() => setShowActions(false)}
    className="w-full py-2 text-sm text-black bg-white rounded-lg border"
  >
    Cancel
  </button>
</div> */}


 <div className="card-body flex flex-col gap-3">
   <div className="row p-1">
  <ActionButton
    icon={<Phone size={16} />}
    label="Call"
    onClick={() => (window.location.href = "tel:9327190323")}
  />
  </div>
   <div className="row p-1">

  <ActionButton
    icon={<Mail size={16} />}
    label="Email"
    onClick={() => (window.location.href = "mailto:bhargav@gmail.com")}
  />
  </div>
    <div className="row p-1">

  <ActionButton
    icon={<Share2 size={16} />}
    label="Save Contact"
    onClick={saveContact}
  />
  </div>
   <div className="row p-1">

  <button
    onClick={() => setShowActions(false)}
    className="w-full py-2 text-sm font-medium text-black bg-white rounded-lg border"
  >
    Cancel
  </button>
  
    </div>

</div>
    </div>  
  )}
   <div className="fixed bottom-5  right-5 flex justify-end z-20 pt-2" style={{    paddingLeft:" 275px"}}>
        <button
          onClick={() => setShowActions(!showActions)}
          className="bg-black text-white p-3 rounded-xl shadow-lg"
        >
          <EllipsisIcon size={20} />
        </button>
        
      </div>
      <div className="fixed bottom-5  right-5 flex justify-end z-20 pt-2" style={{    paddingLeft:" 275px"}}>
       <button
    onClick={handleShare}
  className="bg-black text-white p-3 rounded-xl shadow-lg"
>
  <Share2 size={20} />
</button>

        
      </div>

    </>
  );
}

/* Small helper */
function ActionButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
     className="w-full flex items-center py-2 bg-white text-black border rounded-lg text-sm font-medium hover:bg-gray-50"

    >
<span className="w-6 p-2 flex justify-center mr-3">
    {icon}
  </span>
  {label}
    </button>
  );
}

