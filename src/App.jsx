 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfilePage from './pages/ProfilePage'
import { useEffect, useState } from "react";
import logo from "./assets/Logo (1).png"; // 👈 your logo
function App() {
const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // ⏱ 2 seconds

    return () => clearTimeout(timer);
  }, []);  if (loading) {
    return (
          
      <div className="loader-screen">
        <img src={logo} alt="Company Logo" className="loader-logo" style={{width:"500px",height:"100%"}} />
      </div>
   
    );
  }

  return (
    <div className="app-wrapper">
      <ProfilePage />
      
    </div>
  );
}

export default App
