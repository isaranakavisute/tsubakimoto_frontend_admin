
//import Sidebar from "./sidebar.tsx";
//import UserScreen from "./userscreen";
import Sidebar from "./sidebar";
//import logo from "./images/new_logo.png";
//import Image from "next/image";

export default function BackOfficeLayout({ children }: {
    children: React.ReactNode
}) {
 return (
        
          
    <div className="flex flex-row justify-start border-1 border-black border-solid">
      <div className="flex flex-col justify-start border-1 border-black border-solid">
       <Sidebar />
      </div>
      <div className="bg-primary text-white border-1 border-black border-solid">
       {children}
      </div>
    </div>
  
       
 );
}




