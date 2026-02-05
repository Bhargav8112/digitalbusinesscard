import HeaderCard from "../components/HeaderCard";
import ProfileInfo from "../components/ProfileInfo";
import OpenHoursCard from "../components/OpenHoursCard";
import SocialList from "../components/SocialList";
import BottomNav from "../components/BottomNav";

import { Linkedin } from "lucide-react";
import ContactCard from "../components/ContactCard";

export default function ProfilePage() {
  const profile = {
    company: "s.s.white Technologies pvt ltd",
    name: "Bhargav Shukla",
    role: "Jr. Software Developer",
    tagline: "Crafting digital experiences with code.",
    status: "Closed",
    day: "Monday",
    hours: "09:01 am - 05:30 pm",
    image:
      "https://hrms.sswhite.co/pic/8063.png",
    socials: [
      {
        id: 1,
        name: "LinkedIn",
        subtitle: "✨ Gemini Draft",
        icon: <Linkedin size={20} />,
      },
      
    ],
    contact : [ {
        name: "Bhargav shukla",
        phone: "9327190323",
        email: "bhargav@gmail.com",
        address: "Survey No. 2788/3, Rajkot - Ahmedabad Hwy, near Krishna Petrol Pump, Wadhwan, Gujarat 363030",
      }]
  };

  return (
<div className="w-full max-w-[400px]  ">
     
        <HeaderCard company={profile.company} image={profile.image} name={profile.name} role={profile.role} tagline={profile.tagline} />
       
        {/* <OpenHoursCard
          status={profile.status}
          day={profile.day}
          hours={profile.hours}
        /> */}
<br></br>

        <ContactCard
  name={profile.contact[0].name}
  phone={profile.contact[0].phone}
  email={profile.contact[0].email}
    address={profile.contact[0].address}
/>
<br></br>
        <SocialList socials={profile.socials} />

        <BottomNav />

      </div>
  
  );
}
