'use client'; 

//import logo from "./images/new_logo.png";
import Image from '@/node_modules/next/image';
//import Link from '@/node_modules/next/link';
//import { FormEvent, useEffect } from 'react';
import useRouter from '@/node_modules/next/router';
//import useRouter from '@/node_modules/next/navigator';
import axios from 'axios';
import React, { FormEvent } from "react";
//import { unstable_cache } from "next/cache";
//import MainScreen from '../mainpage/userscreen';
//import pencil_icon from "./images/pencil-icon.svg";
//import trash_icon from "./images/recycle-bin-icon.svg";
import tsubakimoto_logo from "./images/tsubakimoto_logo.svg";


export default function UserScreen() {

  //const router = useRouter;
  const [std_json_res, set_std_json_res] = React.useState([{"name": "value","email": "value","password": "value","access_type": "value","company_name": "value"}]); //React.useState(null);
  const [uploaded_status, set_uploaded_status] = React.useState("not uploaded");

  async function call_upload_api(event: FormEvent<HTMLFormElement>)
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const file_to_upload = formData.get('user_list_file');
    //const password = formData.get('password');
    //const access = formData.get('access');
    axios({
     method: "POST",
     url: "http://deploy-aws.com:3006/upload_excel",
     headers: {
      "Content-Type": "application/json"
     }
   })
   .then(res => {
    set_std_json_res(res.data);
    return res.data;
    });
 }

  return (
    <form onSubmit={call_upload_api}>
     <div className="flex flex-col">
      <div className="flex h-[100vh] w-full flex-row items-center justify-center bg-white">
       <div className="flex h-full w-full bg-white flex-col justify-start rounded-xl">
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
          <div className="text-3xl text-black">Please upload file(s)</div>
         </div>
         <div className="flex flex-row w-full h-[5vh] border border-solid border-black items-center justify-start mb-10">
          <div className="text-3xl h-full w-1/4 border-0 border-solid border-black flex flex-col justify-center ml-5 mr-5">
           <div className="text-3xl text-black">USER_LIST</div>
          </div>
          <div className="h-full w-2/4 border border-solid border-black flex flex-row justify-start items-center">
           <input type="file" 
                  name="user_list_file" 
                  className="h-full w-full border border-solid border-yellow text-black"
                  onChange={
                    async (e) => 
                    {
                    if (e.target.files) {
                      const formData = new FormData();
                      Object.values(e.target.files).forEach((file) => {
                        formData.append("file", file);
                      });  
                      const file = formData.get('file');
                      axios({
                        method: "POST",
                        url: "http://deploy-aws.com:3006/upload_excel",
                        headers: {
                         "Content-Type": "application/json"
                        },
                        data: {
                         file: file
                       },
                      })
                      .then(res => {
                        alert('uploaded');
                        set_uploaded_status('uploaded');
                      })
                       .catch(err => {
                      });
                     }  
                    }
                  }
           />
          </div>
          <div className="text-sm text-red-400 ml-2">{uploaded_status}</div>
         </div>
         <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
              <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black w-[20vh] rounded-lg" value="Upload" />
              <input type="reset" className="pl-2 pr-2 pt-2 pb-2 bg-black h-full w-[20vh] rounded-lg" value="Cancel" />
         </div>
       </div>
      </div>
     </div>
    </form>
 );

}
