'use client'; 

import logo from "./images/new_logo.png";
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import { FormEvent, useEffect } from 'react';
import useRouter from '@/node_modules/next/router';
//import useRouter from '@/node_modules/next/navigator';
import axios from 'axios';
import React from "react";
import { unstable_cache } from "next/cache";
//import MainScreen from '../mainpage/userscreen';



export default function UserScreen() {

  const router = useRouter;
  const [std_json_res, set_std_json_res] = React.useState([{"Id": "value","usr": "value","pwd": "value","access": "value"}]); //React.useState(null);
  //var std_json_res;

  function autoload()
  {
    axios({
     method: "POST",
     url: "http://deploy-aws.com:3006/listuser",
     headers: {
      "Content-Type": "application/json"
     }
   })
   .then(res => {
    set_std_json_res(res.data);
    return res.data;
    })
    .catch(err => {
   });
 }

  useEffect(() => {
    autoload();
  }, []);

  return (
        <div className="flex flex-col w-full h-[100vh] bg-white">                 
         <div className="flex h-full w-full flex-row items-center justify-center bg-white">
          <div className="flex h-full w-full bg-white flex-col justify-start items-center rounded-xl">
            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center bg-amber-600">
             <div className="text-3xl text-black">Registered user</div>
            </div>
            <div className="flex flex-col w-full h-[5vh] border-0 border-solid bg-amber-600 items-center justify-start"> 
             <div className="flex flex-row w-full h-full border-0 border-solid border-black">
              <div className="flex flex-row w-1/5 h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">USER ID</div>
              <div className="flex flex-row w-1/5 h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">USERNAME</div>
              <div className="flex flex-row w-1/5 h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">PASSWORD</div>
              <div className="flex flex-row w-1/5 h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">ACCESS</div>
              <div className="flex flex-row w-1/5 h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">ADMIN TOOL</div>
             </div>
            </div>
            {/* <div className="flex flex-col w-full h-[5vh] bg-white justify-start items-center mb-10"> 
             <div className="flex flex-row w-9/10 h-full bg-black">
             </div>
            </div> */}
            <div className="flex flex-col w-full h-full border-1 border-solid border-purple items-center justify-start overflow-y-auto"> 
            {/* <div className="flex flex-col w-9/10 h-full border-1 border-solid border-yellow items-center justify-center">  */}
             {/* <table className="border-1 border-solid border-purple w-full h-full">
             <tr className="border-1 border-solid border-black w-full">
                  <td className="border-1 border-solid border-black w-1/4"><div>1</div></td>
                  <td className="border-1 border-solid border-black w-1/4"><div>1</div></td>
                  <td className="border-1 border-solid border-black w-1/4"><div>1</div></td>
                  <td className="border-1 border-solid border-black w-1/4"><div>1</div></td>
             </tr> */}
             {
              std_json_res.map((post) => (
                // <tr className="border-1 border-solid border-black w-full">
                //   <td className="border-1 border-solid border-black w-1/4"><div>{post.Id}</div></td>
                //   <td className="border-1 border-solid border-black w-1/4"><div>{post.usr}</div></td>
                //   <td className="border-1 border-solid border-black w-1/4"><div>{post.pwd}</div></td>
                //   <td className="border-1 border-solid border-black w-1/4"><div>{post.access}</div></td>
                // </tr>
              
                  // <tr className="border-1 border-solid border-black w-full">
                  //   <td className="border-1 border-solid border-black w-1/4"><div>{post.Id}</div></td>
                  //   <td className="border-1 border-solid border-black w-1/4"><div>{post.myusername}</div></td>
                  //   <td className="border-1 border-solid border-black w-1/4"><div>{post.mypassword}</div></td>
                  //   <td className="border-1 border-solid border-black w-1/4"><div>{post.myemail}</div></td>
                  // </tr>

                  <div className="flex flex-row w-full bg-amber-100" key={post.Id}>
                   <div className="border-1 border-solid border-black w-1/5 text-xl text-black">{post.Id}</div>
                   <div className="border-1 border-solid border-black w-1/5 text-xl text-black">{post.usr}</div>
                   <div className="border-1 border-solid border-black w-1/5 text-xl text-black">{post.pwd}</div>
                   <div className="border-1 border-solid border-black w-1/5 text-xl text-black">{post.access}</div>
                   <div className="border-1 border-solid border-black w-1/5 text-xl text-black">Admin Tool</div>
                  </div>
                
               ) 
              )
             }
             {/* </table> */}
            {/* </div> */}
            </div>
          </div>
         </div>
        </div>
    );
}
