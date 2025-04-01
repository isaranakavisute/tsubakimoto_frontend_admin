'use client'; 

import logo from "./images/new_logo.png";
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import { FormEvent } from 'react';
import useRouter from '@/node_modules/next/router';
//import useRouter from '@/node_modules/next/navigator';
import axios from 'axios';
//import MainScreen from '../mainpage/userscreen';
import tsubakimoto_logo from "./images/tsubakimoto_logo.svg";
//import Image from "next/image";
import RegisterScreen from  '../register/userscreen';

export default function UserScreen() {

  const router = useRouter;
 
  async function handleOnSubmit(event: FormEvent<HTMLFormElement>) 
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
    const access = formData.get('access');

    axios({
     method: "POST",
     url: "http://deploy-aws.com:3006/login",
     headers: {
      "Content-Type": "application/json"
     },
     data: {
      usr: username,
      pwd: password,
      access: access
    },
   })
   .then(res => {
    var std_json_res = res.data;
    //alert(std_json_res.login.result);
    console.log(std_json_res.login.result);
    if (std_json_res.login.result=="pass")
     {
      if (std_json_res.login.username=="admin")
       {
        console.log("admin page");
        window.location.href = "/adminpage";
       }
      else
       {
        alert('only admin mode is supported');
       }
     }
    else
     {
      alert('login failed');
     }
    })
    .catch(err => {
   });
 }

 /*
 async function openWindow()
 {
  window.open('/register', '_blank');
  alert('This is in testing');
 }
 */

  return (
      <form onSubmit={handleOnSubmit}>
       <div className="flex flex-row"> 
        <div className="flex flex-col h-[100vh] w-full">                 
         <div className="flex h-[100vh] w-full flex-row items-center justify-center bg-white">
          <div className="flex h-1/2 w-1/2 bg-white flex-col justify-center rounded-xl">
            <div className="flex flex-row w-full h-[15vh] border-0 border-solid border-black items-center justify-center mb-10 mt-10 bg-white">
             {/*<div className="text-3xl">TSUBAKIOMOTO ADMIN PANEL</div>*/}
             <div   
                  style={{
                    position: "relative",
                    width: "75%",
                    height: "75%",
                  }}
             >
              <Image
              src={tsubakimoto_logo}
              alt="tsubakimoto logo"
              fill = {true}
              />
             </div>
            </div>
            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-10 bg-white">
             <div className="text-sm">Please log in ...</div>
            </div>
            <div className="flex flex-row w-full h-[10vh] border-0 border-solid border-black items-center justify-center mb-10 bg-white">
             {/*<div className="text-3xl h-full w-1/4 border-0 border-solid border-black flex flex-col justify-center ml-5">USERNAME</div>*/}
             <div className="h-full w-1/4 border-0 border-solid border-black"><input type="text" name="username" placeholder="USERNAME" className="h-full w-full border border-solid border-yellow text-2xl cursor-wait mr-5"  /></div>
            </div>
            <div className="flex flex-row w-full h-[10vh] border-0 border-solid border-black items-center justify-center mb-10 bg-white">
             {/*<div className="text-3xl h-full w-1/4 border-0 border-solid border-black flex flex-col justify-center ml-5">PASSWORD</div>*/}
             <div className="h-full w-1/4 border-0 border-solid border-black">
              <input type="text" name="password" placeholder="PASSWORD" className="h-full w-full border border-solid border-yellow text-2xl cursor-wait mr-5"  />
             </div>
            </div>
            <div className="flex flex-row w-full h-[10vh] border-0 border-solid border-black items-center justify-center mb-10 bg-white">
             <div className="h-full w-1/4 border-0 border-solid border-black">
              <select name="access" className="h-full w-full border border-solid border-yellow">
               <option value="Please select access type">Please select access type</option>
               <option value="Tsubakimoto">Tsubakimoto</option>
               <option value="KTE">KTE</option>
               <option value="Agency">Agency</option>
              </select>
             </div>
            </div>
            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
              <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-amber-200 h-full w-[20vh] rounded-lg" value="Log In" />
              <input type="reset" className="pl-2 pr-2 pt-2 pb-2 bg-amber-200 h-full w-[20vh] rounded-lg" value="Cancel" />
            </div>
            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-start justify-center mt-10">
             <div className="text-xs text-black">If you dont have an account, please</div>
             <div className="text-xs text-red-300 ml-1"><Link href="/register">register</Link></div>
            </div>
          </div>
         </div>
        </div>
      </div>
     </form> 
    );

}
