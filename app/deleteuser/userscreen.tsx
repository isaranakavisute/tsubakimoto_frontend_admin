'use client'; 

import logo from "./images/new_logo.png";
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import { FormEvent } from 'react';
import useRouter from '@/node_modules/next/router';
//import useRouter from '@/node_modules/next/navigator';
import axios from 'axios';
//import MainScreen from '../mainpage/userscreen';
import React, { useState } from 'react';
import tsubakimoto_logo from "./images/tsubakimoto_logo.svg";
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Suspense } from 'react'

export default function DeleteScreen() {

  //const router = useRouter;

  const [deletion_status, set_deletion_status] = React.useState("user is not deleted");  
  const [user_from_initialzer, set_user_from_initialzer_status] = React.useState("not initialized");  
  const [password_from_initializer, set_password_from_initializer_status] = React.useState("not initialized");  
  const [access_from_initializer, set_access_from_initializer_status] = React.useState("Please select access type");  

  const searchParams = useSearchParams();
 
  let id: string | null = null;

  useEffect(() => {
      show_initial_param();
      populate_dialog(id);
    });
 
  function show_initial_param()
  {
    id = searchParams.get('id');
    console.log(id);
  }

  function populate_dialog(id: string | null)
  {
    axios({
      method: "POST",
      url: "http://deploy-aws.com:3006/getuserbyid",
      headers: {
       "Content-Type": "application/json"
      },
      data: {
       id: id,
     },
    })
    .then(res => {
     const std_json_res = res.data;
     if (std_json_res.user_search.search_result=="found")
      {
       //alert('user found');
       console.log(res.data);
       //set_deletion_status("User:"+usr + " is now deleted.");
       set_user_from_initialzer_status(std_json_res.user_search.result[0].usr);
       set_password_from_initializer_status(std_json_res.user_search.result[0].pwd);
       set_access_from_initializer_status(std_json_res.user_search.result[0].access);
      }
      else
      {
        //alert('user not found');
        console.log(res.data);
        //set_deletion_status("User:"+usr + " is now deleted.");
       }
     })
     .catch(err => {
    });
  }

  async function handleOnSubmit(event: FormEvent<HTMLFormElement>) 
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    //console.log(id);

    const usr = formData.get('usr');
    const pwd = formData.get('pwd');
    const access = formData.get('access');



    axios({
     method: "POST",
     url: "http://deploy-aws.com:3006/delete",
     headers: {
      "Content-Type": "application/json"
     },
     data: {
      usr: usr,
      pwd: pwd,
      access: access
    },
   })
   .then(res => {
    var std_json_res = res.data;
    if (std_json_res.deletion.result=="pass")
     {
      //alert('user deleted');
      set_deletion_status("User:"+usr + " is now deleted.");
     }
    })
    .catch(err => {
   });
 }

 function onReturnButtonClicked()
 {
  window.location.href = "/adminpage";
 }

  return (
     
      

       <form onSubmit={handleOnSubmit}>
        <div className="flex flex-col">        
         <div className="flex h-[100vh] w-full flex-row items-center justify-center bg-white">
          <div className="flex h-full w-1/2 bg-white flex-col justify-start rounded-xl">
              <div className="flex flex-row h-[5vh] w-full justify-center mt-5">            
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
            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-15 mt-10">
             <div className="text-3xl text-black">This is a user deletion screen</div>
            </div>
            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-start mb-10">
             <div className="text-3xl h-full w-1/4 border-0 border-solid border-black flex flex-col justify-center ml-5 mr-5">
              <div className="text-3xl text-black">USERNAME</div>
             </div>
             <div className="h-full w-3/4 border-0 border-solid border-black flex flex-row justify-start items-center"><input type="text" name="usr" className="h-full w-full border border-solid border-black text-2xl cursor-wait mr-5 text-black" value={user_from_initialzer} /></div>
            </div>
            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-start mb-10">
             <div className="text-3xl h-full w-1/4 border-0 border-solid border-black flex flex-col justify-center ml-5 mr-5">
             <div className="text-3xl text-black">PASSWORD</div>
             </div>
             <div className="h-full w-3/4 border-0 border-solid border-black flex flex-row justify-start items-center"><input type="text" name="pwd" className="h-full w-full border border-solid border-black text-2xl cursor-wait mr-5 text-black" value={password_from_initializer}  /></div>
            </div>
            {/*
            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-start mb-10">
             <div className="text-3xl h-full w-1/4 border-0 border-solid border-black flex flex-col justify-center ml-5">EMAIL</div>
             <div className="h-full w-3/4 border-0 border-solid border-black flex flex-row justify-start items-center"><input type="text" name="access" className="h-full w-full border border-solid border-yellow text-2xl cursor-wait mr-5"  /></div>
            </div>*/}
            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-10 bg-white">
             <div className="h-full w-full border-1 border-solid border-black ml-5 mr-5">
              <select name="access" className="h-full w-full border-0 border-solid border-yellow text-black" value={access_from_initializer} >
               <option value="Please select access type">Please select access type</option>
               <option value="Tsubakimoto">Tsubakimoto</option>
               <option value="KTE">KTE</option>
               <option value="Agency">Agency</option>
              </select>
             </div>
            </div>
            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
             <div className="text-xl text-red-300">{deletion_status}</div>
            </div>
            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
              <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black h-full w-[20vh] rounded-lg" value="Delete" />
              <input type="reset" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black h-full w-[20vh] rounded-lg" value="Cancel" />
              <input type="button" value="Go back to Login Page" className="pl-2 pr-2 pt-2 pb-2 bg-black h-full w-[40vh] rounded-lg"  onClick={onReturnButtonClicked} />
            </div>
          </div>
         </div>
        </div>
       </form>
       
    );

}
