import { Card } from "react-bootstrap";
import { LayoutGrid, User, Phone, Mail, Locate } from "lucide-react";
import ContactRow from "./ContactRow";

export default function ContactCard({ name, phone, email,address }) {
  return (
   
      <Card className="border-2 shadow-sm"style={{
                width: "100%",
                // background: "#000000"
              }} >
     

          {/* Header */}
          <div className="d-flex align-items-center gap-3   py-3 border-bottom" >
            <div
              className="d-flex align-items-center justify-content-center rounded"
              style={{
                width: 44,
                height: 44,
                backgroundColor: "#f5f6f8"
              }}
            >
              <LayoutGrid size={20} className="text-secondary" />
            </div>

            <h6 className=" fw-semibold">Contact</h6> 
          </div>

          {/* Name */}
      {/* Name */}
<ContactRow
  icon={<User size={18} />}
  label="Name"
  value={name}
  type="text"
/>

{/* Phone */}
<ContactRow
  icon={<Phone size={18} />}
  label="Phone"
  value={phone}
  type="phone"
/>

{/* Email */}
<ContactRow
  icon={<Mail size={18} />}
  label="Email"
  value={email}
  type="email"
/>
{/* Email */}
<ContactRow
  icon={<Locate size={18} />}
  label="Address"
  value={address}
  type="address"
/>


      
      </Card>
    
  );
}
