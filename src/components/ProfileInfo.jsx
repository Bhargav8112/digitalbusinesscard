export default function ProfileInfo({ name, role, tagline }) {
  return (
    <div className="text-center mt-1 ">
      <h2 className="text-lg font-bold" style={{fontWeight:"bold"}} >{name}</h2>
      <p className="text-sm text-slate-400"style={{fontWeight:"400",fontFamily:"sans-serif"}}>{role}</p>
      
    </div>
  );
}
