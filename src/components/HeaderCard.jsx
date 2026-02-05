// import ProfileInfo from "./ProfileInfo";

// export default function HeaderCard({ company, image ,name,role,tagline}) {
//   return (
//     <div className="bg-primary p-4 rounded-t-[2.5rem]">
//       <h2 className="text-white  " style={{fontFamily:"fantasy",textDecoration:"capitalize"}}>
//         {company}
//       </h2>

//    {/* <div className="mt-4 bg-white rounded-2xl overflow-hidden shadow">
//   <img
//         style={{    width:"100%"}}
//     src={image}
//     className="w-full h-40 object-cover"
//   />
// </div> */}
// <div className="relative mt-4 px-4">
//   {/* White Card */}
//   <div className="relative bg-white rounded-2xl shadow overflow-hidden"   style={{    padding:"0.2rem",backgroundColor:"white"}}>

//     {/* Image */}
//     <img
//      style={{    width:"100%"}}
//       src={image}
//       alt="profile"
//       className="w-full h-44 object-cover"
//     />

//  <ProfileInfo
//           name={name}
//           role={role}
//           tagline={tagline}
//         />
   
//   </div>
// </div>

//     </div>
//   );
// }

import ProfileInfo from "./ProfileInfo";

export default function HeaderCard({ company, image, name, role, tagline }) {
  return (
    <div className="relative  p-0  rounded-t-[2.5rem] overflow-hidden">

      {/* Company name */}
      <h2
        className="text-black text-center"
        style={{
          fontFamily: "fantasy",
          textTransform: "capitalize",
        }}
      >
        {company}
      </h2>

      {/* Image Card */}
    <div className="relative z-10 px-4">
  <div
    className="bg-white shadow-sm overflow-hidden"
    style={{
      borderRadius: "12px"
    }}
  >
    {/* Image wrapper (creates white border effect) */}
    <div
      style={{
        padding: "6px",
        backgroundColor: "#ffffff"
      }}
    >
      <img
        src={image}
        alt="profile"
        className="w-full h-44 object-cover"
        style={{
          borderRadius: "8px",width:"100%"
        }}
      />
    </div>

    {/* Profile text */}
    <ProfileInfo
      name={name}
      role={role}
      tagline={tagline}
    />
  </div>
</div>


   
    </div>
  );
}
