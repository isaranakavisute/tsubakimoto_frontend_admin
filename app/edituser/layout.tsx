//import Sidebar from "./sidebar.tsx";
import DeleteScreen from "./userscreen";
import Sidebar from "./sidebar";
//import logo from "./images/new_logo.png";
//import Image from "next/image";
import { Suspense } from "react";

export default function BackOfficeLayout({ children }: {
    children: React.ReactNode
}) {
 return (


    <div className="h-full w-full flex flex-row justify-start border-1 border-black border-solid">
      <div className="h-full w-1/4 flex flex-col justify-start border-1 border-black border-solid">
       <Sidebar />
      </div>
      <div className="bg-primary h-full w-full text-white border-1 border-black border-solid">
      

       <Suspense fallback={<div>Loading...</div>}>
        <DeleteScreen />
       </Suspense>

      </div>
    </div>


 );
}
