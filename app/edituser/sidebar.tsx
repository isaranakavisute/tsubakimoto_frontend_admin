'use client';

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";

const menuItems = [
  { id: 1, label: "Home", link: "/adminpage" },
];

const Sidebar = () => {
  

  //const router = useRouter();
  return (
        <div className="flex flex-col items-center justify-start w-full">          
           <div className="flex flex-row w-full justify-center items-center bg-green-200 mb-10">
            <div className="border-1 border-solid border-black w-full bg-amber-600 flex flex-row justify-center items-center">ADMIN MENU</div>
           </div>
        {   
           menuItems.map((menu) => (
                  <div className="flex flex-row w-full justify-center items-center bg-green-200" key={menu.label}>
                   <div className="border-1 border-solid border-black w-full bg-amber-600 pl-2"><Link href="/adminpage">{menu.label}</Link></div>
                  </div>
               )
              )
         }
        </div>
  );
};

export default Sidebar;
