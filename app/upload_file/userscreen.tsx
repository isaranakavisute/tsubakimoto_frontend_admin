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
import Link from "next/link";

export default function UserScreen() {

  //const router = useRouter;
  const [std_json_res, set_std_json_res] = React.useState([{"name": "value","email": "value","password": "value","access_type": "value","company_name": "value"}]); //React.useState(null);
  const [uploaded_status, set_uploaded_status] = React.useState("not uploaded");

  const [uploaded_status_update_master_sugar_stock,set_uploaded_status_update_master_sugar_stock] = React.useState("not uploaded");

  const [uploaded_status_update_master_sprocket_pricelist,set_uploaded_status_update_master_sprocket_pricelist] = React.useState("not uploaded");

  const [uploaded_status_update_master_small_size_chain_pricelist,set_uploaded_status_update_master_small_size_chain_pricelist] = React.useState("not uploaded");

  const [uploaded_status_update_master_ptuc_other_dist,set_uploaded_status_update_master_ptuc_other_dist] = React.useState("not uploaded");

  const [uploaded_status_update_master_ptuc_kte,set_uploaded_status_update_master_ptuc_kte] = React.useState("not uploaded");

  const [uploaded_status_update_master_kte_stock,set_uploaded_status_update_master_kte_stock] = React.useState("not uploaded");

  const [uploaded_status_update_master_jpy_chain,set_uploaded_status_update_master_jpy_chain] = React.useState("not uploaded");

  const [uploaded_status_update_master_akt_format_warehouse_pricelist,set_uploaded_status_update_master_akt_format_warehouse_pricelist] = React.useState("not uploaded");

  const [uploaded_status_update_master_akt_format_scg_group_chain,set_uploaded_status_update_master_akt_format_scg_group_chain] = React.useState("not uploaded");

  const [uploaded_status_update_master_akt_format_scg_group_cam_clutch,set_uploaded_status_update_master_akt_format_scg_group_cam_clutch] = React.useState("not uploaded");

  const [uploaded_status_update_master_akt_format_kabelschlepp,set_uploaded_status_update_master_akt_format_kabelschlepp] = React.useState("not uploaded");

  const [uploaded_status_update_master_drivechain,set_uploaded_status_update_master_drivechain] = React.useState("not uploaded");

  const [uploaded_status_update_user_data_tsubakimoto,set_uploaded_status_update_user_data_tsubakimoto] = React.useState("not uploaded");


  async function update_master_sugar_stock(event: FormEvent<HTMLFormElement>)
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);


    axios.post("http://deploy-aws.com:3006/upload_excel_update_master_sugar_stock", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        //set_uploaded_status('uploaded');



                        set_uploaded_status_update_master_sugar_stock('uploaded');

                        // const [uploaded_status_update_master_sprocket_pricelist,set_uploaded_status_update_master_sprocket_pricelist] = React.useState("not uploaded");
                        // const [uploaded_status_update_master_small_size_chain_pricelist,set_uploaded_status_update_master_small_size_chain_pricelist] = React.useState("not uploaded");
                        // const [uploaded_status_update_master_ptuc_other_dist,set_uploaded_status_update_master_ptuc_other_dist] = React.useState("not uploaded");
                        // const [uploaded_status_update_master_ptuc_kte,set_uploaded_status_update_master_ptuc_kte] = React.useState("not uploaded");
                        // const [uploaded_status_update_master_kte_stock,set_uploaded_status_update_master_kte_stock] = React.useState("not uploaded");
                        // const [uploaded_status_update_master_jpy_chain,set_uploaded_status_update_master_jpy_chain] = React.useState("not uploaded");
                        // const [uploaded_status_update_master_akt_format_warehouse_pricelist,set_uploaded_status_update_master_akt_format_warehouse_pricelist] = React.useState("not uploaded");
                        // const [uploaded_status_update_master_akt_format_scg_group_chain,set_uploaded_status_update_master_akt_format_scg_group_chain] = React.useState("not uploaded");
                        // const [uploaded_status_update_master_akt_format_scg_group_cam_clutch,set_uploaded_status_update_master_akt_format_scg_group_cam_clutch] = React.useState("not uploaded");
                        // const [uploaded_status_update_master_akt_format_kabelschlepp,set_uploaded_status_update_mastecr_akt_format_kabelschlepp] = React.useState("not uploaded");
                        // const [uploaded_status_update_master_drivechain,set_uploaded_status_update_master_drivechain] = React.useState("not uploaded");
                        // const [uploaded_status_update_user_data_tsubakimoto,set_uploaded_status_update_user_data_tsubakimoto] = React.useState("not uploaded");






                      })
                       .catch(err => {
                      });


    //const file_to_upload = formData.get('user_list_file');
    //const password = formData.get('password');
    //const access = formData.get('access');
    //axios({
     //method: "POST",
     //url: "http://deploy-aws.com:3006/upload_excel",
     //headers: {
      //"Content-Type": "application/json"
     //}
   //})
   //.then(res => {
   // set_std_json_res(res.data);
   // return res.data;
    //});
 }

 async function update_master_sprocket_pricelist(event: FormEvent<HTMLFormElement>)
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);


    axios.post("http://deploy-aws.com:3006/upload_excel_update_master_sprocket_pricelist", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        //set_uploaded_status('uploaded');


                        set_uploaded_status_update_master_sprocket_pricelist('uploaded');

  


                      })
                       .catch(err => {
                      });


    //const file_to_upload = formData.get('user_list_file');
    //const password = formData.get('password');
    //const access = formData.get('access');
    //axios({
     //method: "POST",
     //url: "http://deploy-aws.com:3006/upload_excel",
     //headers: {
      //"Content-Type": "application/json"
     //}
   //})
   //.then(res => {
   // set_std_json_res(res.data);
   // return res.data;
    //});
 }

 async function update_master_small_size_chain_pricelist(event: FormEvent<HTMLFormElement>)
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);


    axios.post("http://deploy-aws.com:3006/upload_excel_update_master_small_size_chain_pricelist", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        //set_uploaded_status('uploaded');



                       set_uploaded_status_update_master_small_size_chain_pricelist('uploaded');

  




                      })
                       .catch(err => {
                      });


    //const file_to_upload = formData.get('user_list_file');
    //const password = formData.get('password');
    //const access = formData.get('access');
    //axios({
     //method: "POST",
     //url: "http://deploy-aws.com:3006/upload_excel",
     //headers: {
      //"Content-Type": "application/json"
     //}
   //})
   //.then(res => {
   // set_std_json_res(res.data);
   // return res.data;
    //});
 }

 async function update_master_ptuc_other_dist(event: FormEvent<HTMLFormElement>)
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);


    axios.post("http://deploy-aws.com:3006/upload_excel_update_master_ptuc_other_dist", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        //set_uploaded_status('uploaded');


                        set_uploaded_status_update_master_ptuc_other_dist('uploaded');

  
                      })
                       .catch(err => {
                      });


    //const file_to_upload = formData.get('user_list_file');
    //const password = formData.get('password');
    //const access = formData.get('access');
    //axios({
     //method: "POST",
     //url: "http://deploy-aws.com:3006/upload_excel",
     //headers: {
      //"Content-Type": "application/json"
     //}
   //})
   //.then(res => {
   // set_std_json_res(res.data);
   // return res.data;
    //});
 }

 async function update_master_ptuc_kte(event: FormEvent<HTMLFormElement>)
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);


    axios.post("http://deploy-aws.com:3006/upload_excel_update_master_ptuc_kte", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        //set_uploaded_status('uploaded');

                       set_uploaded_status_update_master_ptuc_kte('uploaded');

  


                      })
                       .catch(err => {
                      });


    //const file_to_upload = formData.get('user_list_file');
    //const password = formData.get('password');
    //const access = formData.get('access');
    //axios({
     //method: "POST",
     //url: "http://deploy-aws.com:3006/upload_excel",
     //headers: {
      //"Content-Type": "application/json"
     //}
   //})
   //.then(res => {
   // set_std_json_res(res.data);
   // return res.data;
    //});
 }

 async function update_master_kte_stock(event: FormEvent<HTMLFormElement>)
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);


    axios.post("http://deploy-aws.com:3006/upload_excel_update_master_kte_stock", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        //set_uploaded_status('uploaded');

                       set_uploaded_status_update_master_kte_stock('uploaded');

  
                      })
                       .catch(err => {
                      });


    //const file_to_upload = formData.get('user_list_file');
    //const password = formData.get('password');
    //const access = formData.get('access');
    //axios({
     //method: "POST",
     //url: "http://deploy-aws.com:3006/upload_excel",
     //headers: {
      //"Content-Type": "application/json"
     //}
   //})
   //.then(res => {
   // set_std_json_res(res.data);
   // return res.data;
    //});
 }

 async function update_master_jpy_chain(event: FormEvent<HTMLFormElement>)
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);


    axios.post("http://deploy-aws.com:3006/upload_excel_update_master_jpy_chain", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        //set_uploaded_status('uploaded');


                        set_uploaded_status_update_master_jpy_chain('uploaded');

 


                      })
                       .catch(err => {
                      });


    //const file_to_upload = formData.get('user_list_file');
    //const password = formData.get('password');
    //const access = formData.get('access');
    //axios({
     //method: "POST",
     //url: "http://deploy-aws.com:3006/upload_excel",
     //headers: {
      //"Content-Type": "application/json"
     //}
   //})
   //.then(res => {
   // set_std_json_res(res.data);
   // return res.data;
    //});
 }

 async function update_master_akt_format_warehouse_pricelist(event: FormEvent<HTMLFormElement>)
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);


    axios.post("http://deploy-aws.com:3006/upload_excel_update_master_akt_format_warehouse_pricelist", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        //set_uploaded_status('uploaded');

                        set_uploaded_status_update_master_akt_format_warehouse_pricelist('uploaded');

                       
                      })
                       .catch(err => {
                      });


    //const file_to_upload = formData.get('user_list_file');
    //const password = formData.get('password');
    //const access = formData.get('access');
    //axios({
     //method: "POST",
     //url: "http://deploy-aws.com:3006/upload_excel",
     //headers: {
      //"Content-Type": "application/json"
     //}
   //})
   //.then(res => {
   // set_std_json_res(res.data);
   // return res.data;
    //});
 }

 async function update_master_akt_format_scg_group_chain(event: FormEvent<HTMLFormElement>)
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);


    axios.post("http://deploy-aws.com:3006/upload_excel_update_master_akt_format_scg_group_chain", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        //set_uploaded_status('uploaded');

                        set_uploaded_status_update_master_akt_format_scg_group_chain('uploaded');
                      
                       
                      })
                       .catch(err => {
                      });


    //const file_to_upload = formData.get('user_list_file');
    //const password = formData.get('password');
    //const access = formData.get('access');
    //axios({
     //method: "POST",
     //url: "http://deploy-aws.com:3006/upload_excel",
     //headers: {
      //"Content-Type": "application/json"
     //}
   //})
   //.then(res => {
   // set_std_json_res(res.data);
   // return res.data;
    //});
 }

 async function update_master_akt_format_scg_group_cam_clutch(event: FormEvent<HTMLFormElement>)
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);


    axios.post("http://deploy-aws.com:3006/upload_excel_update_master_akt_format_scg_group_cam_clutch", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        //set_uploaded_status('uploaded');

                        set_uploaded_status_update_master_akt_format_scg_group_cam_clutch('uploaded');
                      
                    
                      })
                       .catch(err => {
                      });


    //const file_to_upload = formData.get('user_list_file');
    //const password = formData.get('password');
    //const access = formData.get('access');
    //axios({
     //method: "POST",
     //url: "http://deploy-aws.com:3006/upload_excel",
     //headers: {
      //"Content-Type": "application/json"
     //}
   //})
   //.then(res => {
   // set_std_json_res(res.data);
   // return res.data;
    //});
 }

 async function update_master_akt_format_kabelschlepp(event: FormEvent<HTMLFormElement>)
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);


    axios.post("http://deploy-aws.com:3006/upload_excel_update_master_akt_format_kabelschlepp", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        //set_uploaded_status('uploaded');

                        set_uploaded_status_update_master_akt_format_kabelschlepp('uploaded');
                      
                      
                      })
                       .catch(err => {
                      });


    //const file_to_upload = formData.get('user_list_file');
    //const password = formData.get('password');
    //const access = formData.get('access');
    //axios({
     //method: "POST",
     //url: "http://deploy-aws.com:3006/upload_excel",
     //headers: {
      //"Content-Type": "application/json"
     //}
   //})
   //.then(res => {
   // set_std_json_res(res.data);
   // return res.data;
    //});
 }

 async function update_master_drivechain(event: FormEvent<HTMLFormElement>)
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);


    axios.post("http://deploy-aws.com:3006/upload_excel_update_master_drivechain", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        //set_uploaded_status('uploaded');

                        set_uploaded_status_update_master_drivechain('uploaded');
                      
                       
                      })
                       .catch(err => {
                      });


    //const file_to_upload = formData.get('user_list_file');
    //const password = formData.get('password');
    //const access = formData.get('access');
    //axios({
     //method: "POST",
     //url: "http://deploy-aws.com:3006/upload_excel",
     //headers: {
      //"Content-Type": "application/json"
     //}
   //})
   //.then(res => {
   // set_std_json_res(res.data);
   // return res.data;
    //});
 }

 async function update_user_data_tsubakimoto(event: FormEvent<HTMLFormElement>)
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);


    axios.post("http://deploy-aws.com:3006/upload_excel_update_user_data_tsubakimoto", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        //set_uploaded_status('uploaded');

                        set_uploaded_status_update_user_data_tsubakimoto('uploaded');
                      })
                       .catch(err => {
                      });


    //const file_to_upload = formData.get('user_list_file');
    //const password = formData.get('password');
    //const access = formData.get('access');
    //axios({
     //method: "POST",
     //url: "http://deploy-aws.com:3006/upload_excel",
     //headers: {
      //"Content-Type": "application/json"
     //}
   //})
   //.then(res => {
   // set_std_json_res(res.data);
   // return res.data;
    //});
 }

  return (
    
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



        <div className="bg-yellow-100 mb-5">
         <form onSubmit={update_master_sugar_stock} id="master_sugar_stock">
         <div className="flex flex-row w-full h-[5vh] border border-solid border-black items-center justify-start mb-10">
          <div className="text-3xl h-full w-2/4 border-0 border-solid border-black flex flex-col justify-center ml-5 mr-5">
           <div className="text-xl text-black">Upload Data: update_master_sugar_stock</div>
          </div>
          <div className="h-full w-1/4 border border-solid border-black flex flex-row justify-start items-center">
           <input type="file" 
                  name="file" 
                  className="h-full w-full border border-solid border-yellow text-black"
                  /*
                  onChange={
                    async (e) => 
                    {
                    if (e.target.files) {
                      console.log("there is file attachement1");
                      const formData = new FormData();
                      Object.values(e.target.files).forEach((file) => {
                        console.log("there is file attachement2");
                        formData.append("file", file);
                      });  
                      axios.post("http://deploy-aws.com:3006/upload_excel", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        set_uploaded_status('uploaded');
                      })
                       .catch(err => {
                      });
                     }  
                    }
                  }
                  */
           />
          </div>
          <div className="text-sm text-red-400 ml-2">{uploaded_status_update_master_sugar_stock}</div>
         </div>
         <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
              <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black w-[20vh] rounded-lg" value="Upload" />
              <input type="reset" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black h-full w-[20vh] rounded-lg" value="Cancel" />
              <Link href="viewupload"><input type="reset" className="pl-2 pr-2 pt-2 pb-2 bg-black h-full w-[20vh] rounded-lg" value="Cancel" /></Link>
         </div>
        </form>
       </div>


       <div className="bg-yellow-100 mb-5">
         <form onSubmit={update_master_sprocket_pricelist} id="master_sprocket_pricelist">
         <div className="flex flex-row w-full h-[5vh] border border-solid border-black items-center justify-start mb-10">
          <div className="text-3xl h-full w-2/4 border-0 border-solid border-black flex flex-col justify-center ml-5 mr-5">
           <div className="text-xl text-black">Upload Data: update_master_sprocket_pricelist</div>
          </div>
          <div className="h-full w-1/4 border border-solid border-black flex flex-row justify-start items-center">
           <input type="file" 
                  name="file" 
                  className="h-full w-full border border-solid border-yellow text-black"
                  /*
                  onChange={
                    async (e) => 
                    {
                    if (e.target.files) {
                      console.log("there is file attachement1");
                      const formData = new FormData();
                      Object.values(e.target.files).forEach((file) => {
                        console.log("there is file attachement2");
                        formData.append("file", file);
                      });  
                      axios.post("http://deploy-aws.com:3006/upload_excel", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        set_uploaded_status('uploaded');
                      })
                       .catch(err => {
                      });
                     }  
                    }
                  }
                  */
           />
          </div>
          <div className="text-sm text-red-400 ml-2">{uploaded_status_update_master_sprocket_pricelist}</div>
         </div>
         <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
              <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black w-[20vh] rounded-lg" value="Upload" />
              <input type="reset" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black h-full w-[20vh] rounded-lg" value="Cancel" />
              <Link href="viewupload"><input type="reset" className="pl-2 pr-2 pt-2 pb-2 bg-black h-full w-[20vh] rounded-lg" value="Cancel" /></Link>
         </div>
        </form>
       </div>


       <div className="bg-yellow-100 mb-5">
         <form onSubmit={update_master_small_size_chain_pricelist} id="master_small_size_chain_pricelis">
         <div className="flex flex-row w-full h-[5vh] border border-solid border-black items-center justify-start mb-10">
          <div className="text-3xl h-full w-2/4 border-0 border-solid border-black flex flex-col justify-center ml-5 mr-5">
           <div className="text-xl text-black">Upload Data: update_master_small_size_chain_pricelist</div>
          </div>
          <div className="h-full w-1/4 border border-solid border-black flex flex-row justify-start items-center">
           <input type="file" 
                  name="file" 
                  className="h-full w-full border border-solid border-yellow text-black"
                  /*
                  onChange={
                    async (e) => 
                    {
                    if (e.target.files) {
                      console.log("there is file attachement1");
                      const formData = new FormData();
                      Object.values(e.target.files).forEach((file) => {
                        console.log("there is file attachement2");
                        formData.append("file", file);
                      });  
                      axios.post("http://deploy-aws.com:3006/upload_excel", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        set_uploaded_status('uploaded');
                      })
                       .catch(err => {
                      });
                     }  
                    }
                  }
                  */
           />
          </div>
          <div className="text-sm text-red-400 ml-2">{uploaded_status_update_master_small_size_chain_pricelist}</div>
         </div>
         <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
              <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black w-[20vh] rounded-lg" value="Upload" />
              <input type="reset" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black h-full w-[20vh] rounded-lg" value="Cancel" />
              <Link href="viewupload"><input type="reset" className="pl-2 pr-2 pt-2 pb-2 bg-black h-full w-[20vh] rounded-lg" value="Cancel" /></Link>
         </div>
        </form>
       </div>


       <div className="bg-yellow-100 mb-5">
         <form onSubmit={update_master_ptuc_other_dist} id="master_ptuc_other_dist">
         <div className="flex flex-row w-full h-[5vh] border border-solid border-black items-center justify-start mb-10">
          <div className="text-3xl h-full w-2/4 border-0 border-solid border-black flex flex-col justify-center ml-5 mr-5">
           <div className="text-xl text-black">Upload Data: update_master_ptuc_other_dist </div>
          </div>
          <div className="h-full w-1/4 border border-solid border-black flex flex-row justify-start items-center">
           <input type="file" 
                  name="file" 
                  className="h-full w-full border border-solid border-yellow text-black"
                  /*
                  onChange={
                    async (e) => 
                    {
                    if (e.target.files) {
                      console.log("there is file attachement1");
                      const formData = new FormData();
                      Object.values(e.target.files).forEach((file) => {
                        console.log("there is file attachement2");
                        formData.append("file", file);
                      });  
                      axios.post("http://deploy-aws.com:3006/upload_excel", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        set_uploaded_status('uploaded');
                      })
                       .catch(err => {
                      });
                     }  
                    }
                  }
                  */
           />
          </div>
          <div className="text-sm text-red-400 ml-2">{uploaded_status_update_master_ptuc_other_dist}</div>
         </div>
         <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
              <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black w-[20vh] rounded-lg" value="Upload" />
              <input type="reset" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black h-full w-[20vh] rounded-lg" value="Cancel" />
              <Link href="viewupload"><input type="reset" className="pl-2 pr-2 pt-2 pb-2 bg-black h-full w-[20vh] rounded-lg" value="Cancel" /></Link>
         </div>
        </form>
       </div>


       <div className="bg-yellow-100 mb-5">
         <form onSubmit={update_master_ptuc_kte} id="master_ptuc_kte">
         <div className="flex flex-row w-full h-[5vh] border border-solid border-black items-center justify-start mb-10">
          <div className="text-3xl h-full w-2/4 border-0 border-solid border-black flex flex-col justify-center ml-5 mr-5">
           <div className="text-xl text-black">Upload Data: update_master_ptuc_kte</div>
          </div>
          <div className="h-full w-1/4 border border-solid border-black flex flex-row justify-start items-center">
           <input type="file" 
                  name="file" 
                  className="h-full w-full border border-solid border-yellow text-black"
                  /*
                  onChange={
                    async (e) => 
                    {
                    if (e.target.files) {
                      console.log("there is file attachement1");
                      const formData = new FormData();
                      Object.values(e.target.files).forEach((file) => {
                        console.log("there is file attachement2");
                        formData.append("file", file);
                      });  
                      axios.post("http://deploy-aws.com:3006/upload_excel", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        set_uploaded_status('uploaded');
                      })
                       .catch(err => {
                      });
                     }  
                    }
                  }
                  */
           />
          </div>
          <div className="text-sm text-red-400 ml-2">{uploaded_status_update_master_ptuc_kte}</div>
         </div>
         <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
              <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black w-[20vh] rounded-lg" value="Upload" />
              <input type="reset" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black h-full w-[20vh] rounded-lg" value="Cancel" />
              <Link href="viewupload"><input type="reset" className="pl-2 pr-2 pt-2 pb-2 bg-black h-full w-[20vh] rounded-lg" value="Cancel" /></Link>
         </div>
        </form>
       </div>


       <div className="bg-yellow-100 mb-5">
         <form onSubmit={update_master_kte_stock} id="master_kte_stock">
         <div className="flex flex-row w-full h-[5vh] border border-solid border-black items-center justify-start mb-10">
          <div className="text-3xl h-full w-2/4 border-0 border-solid border-black flex flex-col justify-center ml-5 mr-5">
           <div className="text-xl text-black">Upload Data: update_master_kte_stock</div>
          </div>
          <div className="h-full w-1/4 border border-solid border-black flex flex-row justify-start items-center">
           <input type="file" 
                  name="file" 
                  className="h-full w-full border border-solid border-yellow text-black"
                  /*
                  onChange={
                    async (e) => 
                    {
                    if (e.target.files) {
                      console.log("there is file attachement1");
                      const formData = new FormData();
                      Object.values(e.target.files).forEach((file) => {
                        console.log("there is file attachement2");
                        formData.append("file", file);
                      });  
                      axios.post("http://deploy-aws.com:3006/upload_excel", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        set_uploaded_status('uploaded');
                      })
                       .catch(err => {
                      });
                     }  
                    }
                  }
                  */
           />
          </div>
          <div className="text-sm text-red-400 ml-2">{uploaded_status_update_master_kte_stock}</div>
         </div>
         <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
              <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black w-[20vh] rounded-lg" value="Upload" />
              <input type="reset" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black h-full w-[20vh] rounded-lg" value="Cancel" />
              <Link href="viewupload"><input type="reset" className="pl-2 pr-2 pt-2 pb-2 bg-black h-full w-[20vh] rounded-lg" value="Cancel" /></Link>
         </div>
        </form>
       </div>


       <div className="bg-yellow-100 mb-5">
         <form onSubmit={update_master_jpy_chain} id="master_jpy_chain">
         <div className="flex flex-row w-full h-[5vh] border border-solid border-black items-center justify-start mb-10">
          <div className="text-3xl h-full w-2/4 border-0 border-solid border-black flex flex-col justify-center ml-5 mr-5">
           <div className="text-xl text-black">Upload Data: update_master_jpy_chain</div>
          </div>
          <div className="h-full w-1/4 border border-solid border-black flex flex-row justify-start items-center">
           <input type="file" 
                  name="file" 
                  className="h-full w-full border border-solid border-yellow text-black"
                  /*
                  onChange={
                    async (e) => 
                    {
                    if (e.target.files) {
                      console.log("there is file attachement1");
                      const formData = new FormData();
                      Object.values(e.target.files).forEach((file) => {
                        console.log("there is file attachement2");
                        formData.append("file", file);
                      });  
                      axios.post("http://deploy-aws.com:3006/upload_excel", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        set_uploaded_status('uploaded');
                      })
                       .catch(err => {
                      });
                     }  
                    }
                  }
                  */
           />
          </div>
          <div className="text-sm text-red-400 ml-2">{uploaded_status_update_master_jpy_chain}</div>
         </div>
         <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
              <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black w-[20vh] rounded-lg" value="Upload" />
              <input type="reset" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black h-full w-[20vh] rounded-lg" value="Cancel" />
              <Link href="viewupload"><input type="reset" className="pl-2 pr-2 pt-2 pb-2 bg-black h-full w-[20vh] rounded-lg" value="Cancel" /></Link>
         </div>
        </form>
       </div>


       <div className="bg-yellow-100 mb-5">
         <form onSubmit={update_master_akt_format_warehouse_pricelist} id="format_warehouse_pricelist">
         <div className="flex flex-row w-full h-[5vh] border border-solid border-black items-center justify-start mb-10">
          <div className="text-3xl h-full w-2/4 border-0 border-solid border-black flex flex-col justify-center ml-5 mr-5">
           <div className="text-xl text-black">Upload Data: update_master_akt_format_warehouse_pricelist</div>
          </div>
          <div className="h-full w-1/4 border border-solid border-black flex flex-row justify-start items-center">
           <input type="file" 
                  name="file" 
                  className="h-full w-full border border-solid border-yellow text-black"
                  /*
                  onChange={
                    async (e) => 
                    {
                    if (e.target.files) {
                      console.log("there is file attachement1");
                      const formData = new FormData();
                      Object.values(e.target.files).forEach((file) => {
                        console.log("there is file attachement2");
                        formData.append("file", file);
                      });  
                      axios.post("http://deploy-aws.com:3006/upload_excel", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        set_uploaded_status('uploaded');
                      })
                       .catch(err => {
                      });
                     }  
                    }
                  }
                  */
           />
          </div>
          <div className="text-sm text-red-400 ml-2">{uploaded_status_update_master_akt_format_warehouse_pricelist}</div>
         </div>
         <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
              <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black w-[20vh] rounded-lg" value="Upload" />
              <input type="reset" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black h-full w-[20vh] rounded-lg" value="Cancel" />
              <Link href="viewupload"><input type="reset" className="pl-2 pr-2 pt-2 pb-2 bg-black h-full w-[20vh] rounded-lg" value="Cancel" /></Link>
         </div>
        </form>
       </div>

       <div className="bg-yellow-100 mb-5">
         <form onSubmit={update_master_akt_format_scg_group_chain} id="format_scg_group_chain">
         <div className="flex flex-row w-full h-[5vh] border border-solid border-black items-center justify-start mb-10">
          <div className="text-3xl h-full w-2/4 border-0 border-solid border-black flex flex-col justify-center ml-5 mr-5">
           <div className="text-xl text-black">Upload Data: update_master_akt_format_scg_group_chain</div>
          </div>
          <div className="h-full w-1/4 border border-solid border-black flex flex-row justify-start items-center">
           <input type="file" 
                  name="file" 
                  className="h-full w-full border border-solid border-yellow text-black"
                  /*
                  onChange={
                    async (e) => 
                    {
                    if (e.target.files) {
                      console.log("there is file attachement1");
                      const formData = new FormData();
                      Object.values(e.target.files).forEach((file) => {
                        console.log("there is file attachement2");
                        formData.append("file", file);
                      });  
                      axios.post("http://deploy-aws.com:3006/upload_excel", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        set_uploaded_status('uploaded');
                      })
                       .catch(err => {
                      });
                     }  
                    }
                  }
                  */
           />
          </div>
          <div className="text-sm text-red-400 ml-2">{uploaded_status_update_master_akt_format_scg_group_chain}</div>
         </div>
         <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
              <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black w-[20vh] rounded-lg" value="Upload" />
              <input type="reset" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black h-full w-[20vh] rounded-lg" value="Cancel" />
              <Link href="viewupload"><input type="reset" className="pl-2 pr-2 pt-2 pb-2 bg-black h-full w-[20vh] rounded-lg" value="Cancel" /></Link>
         </div>
        </form>
       </div>

       <div className="bg-yellow-100 mb-5">
         <form onSubmit={update_master_akt_format_scg_group_cam_clutch} id="format_scg_group_cam_clutch">
         <div className="flex flex-row w-full h-[5vh] border border-solid border-black items-center justify-start mb-10">
          <div className="text-3xl h-full w-2/4 border-0 border-solid border-black flex flex-col justify-center ml-5 mr-5">
           <div className="text-xl text-black">Upload Data: update_master_akt_format_scg_group_cam_clutch </div>
          </div>
          <div className="h-full w-1/4 border border-solid border-black flex flex-row justify-start items-center">
           <input type="file" 
                  name="file" 
                  className="h-full w-full border border-solid border-yellow text-black"
                  /*
                  onChange={
                    async (e) => 
                    {
                    if (e.target.files) {
                      console.log("there is file attachement1");
                      const formData = new FormData();
                      Object.values(e.target.files).forEach((file) => {
                        console.log("there is file attachement2");
                        formData.append("file", file);
                      });  
                      axios.post("http://deploy-aws.com:3006/upload_excel", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        set_uploaded_status('uploaded');
                      })
                       .catch(err => {
                      });
                     }  
                    }
                  }
                  */
           />
          </div>
          <div className="text-sm text-red-400 ml-2">{uploaded_status_update_master_akt_format_scg_group_cam_clutch}</div>
         </div>
         <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
              <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black w-[20vh] rounded-lg" value="Upload" />
              <input type="reset" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black h-full w-[20vh] rounded-lg" value="Cancel" />
              <Link href="viewupload"><input type="reset" className="pl-2 pr-2 pt-2 pb-2 bg-black h-full w-[20vh] rounded-lg" value="Cancel" /></Link>
         </div>
        </form>
       </div>

       <div className="bg-yellow-100 mb-5">
         <form onSubmit={update_master_akt_format_kabelschlepp} id="akt_format_kabelschlepp">
         <div className="flex flex-row w-full h-[5vh] border border-solid border-black items-center justify-start mb-10">
          <div className="text-3xl h-full w-2/4 border-0 border-solid border-black flex flex-col justify-center ml-5 mr-5">
           <div className="text-xl text-black">Upload Data: update_master_akt_format_kabelschlepp</div>
          </div>
          <div className="h-full w-1/4 border border-solid border-black flex flex-row justify-start items-center">
           <input type="file" 
                  name="file" 
                  className="h-full w-full border border-solid border-yellow text-black"
                  /*
                  onChange={
                    async (e) => 
                    {
                    if (e.target.files) {
                      console.log("there is file attachement1");
                      const formData = new FormData();
                      Object.values(e.target.files).forEach((file) => {
                        console.log("there is file attachement2");
                        formData.append("file", file);
                      });  
                      axios.post("http://deploy-aws.com:3006/upload_excel", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        set_uploaded_status('uploaded');
                      })
                       .catch(err => {
                      });
                     }  
                    }
                  }
                  */
           />
          </div>
          <div className="text-sm text-red-400 ml-2">{uploaded_status_update_master_akt_format_kabelschlepp}</div>
         </div>
         <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
              <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black w-[20vh] rounded-lg" value="Upload" />
              <input type="reset" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black h-full w-[20vh] rounded-lg" value="Cancel" />
              <Link href="viewupload"><input type="reset" className="pl-2 pr-2 pt-2 pb-2 bg-black h-full w-[20vh] rounded-lg" value="Cancel" /></Link>
         </div>
        </form>
       </div>

       <div className="bg-yellow-100 mb-5">
         <form onSubmit={update_master_drivechain} id="master_drivechain">
         <div className="flex flex-row w-full h-[5vh] border border-solid border-black items-center justify-start mb-10">
          <div className="text-3xl h-full w-2/4 border-0 border-solid border-black flex flex-col justify-center ml-5 mr-5">
           <div className="text-xl text-black">Upload Data: update_master_drivechain</div>
          </div>
          <div className="h-full w-1/4 border border-solid border-black flex flex-row justify-start items-center">
           <input type="file" 
                  name="file" 
                  className="h-full w-full border border-solid border-yellow text-black"
                  /*
                  onChange={
                    async (e) => 
                    {
                    if (e.target.files) {
                      console.log("there is file attachement1");
                      const formData = new FormData();
                      Object.values(e.target.files).forEach((file) => {
                        console.log("there is file attachement2");
                        formData.append("file", file);
                      });  
                      axios.post("http://deploy-aws.com:3006/upload_excel", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        set_uploaded_status('uploaded');
                      })
                       .catch(err => {
                      });
                     }  
                    }
                  }
                  */
           />
          </div>
          <div className="text-sm text-red-400 ml-2">{uploaded_status_update_master_drivechain}</div>
         </div>
         <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
              <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black w-[20vh] rounded-lg" value="Upload" />
              <input type="reset" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black h-full w-[20vh] rounded-lg" value="Cancel" />
              <Link href="viewupload"><input type="reset" className="pl-2 pr-2 pt-2 pb-2 bg-black h-full w-[20vh] rounded-lg" value="Cancel" /></Link>
         </div>
        </form>
       </div>

       <div className="bg-yellow-100 mb-5">
         <form onSubmit={update_user_data_tsubakimoto} id="user_data_tsubakimoto">
         <div className="flex flex-row w-full h-[5vh] border border-solid border-black items-center justify-start mb-10">
          <div className="text-3xl h-full w-2/4 border-0 border-solid border-black flex flex-col justify-center ml-5 mr-5">
           <div className="text-xl text-black">Upload Data: update_user_data_tsubakimoto</div>
          </div>
          <div className="h-full w-1/4 border border-solid border-black flex flex-row justify-start items-center">
           <input type="file" 
                  name="file" 
                  className="h-full w-full border border-solid border-yellow text-black"
                  /*
                  onChange={
                    async (e) => 
                    {
                    if (e.target.files) {
                      console.log("there is file attachement1");
                      const formData = new FormData();
                      Object.values(e.target.files).forEach((file) => {
                        console.log("there is file attachement2");
                        formData.append("file", file);
                      });  
                      axios.post("http://deploy-aws.com:3006/upload_excel", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                      .then(res => {
                        console.log(res.data);
                        alert('uploaded');
                        set_uploaded_status('uploaded');
                      })
                       .catch(err => {
                      });
                     }  
                    }
                  }
                  */
           />
          </div>
          <div className="text-sm text-red-400 ml-2">{uploaded_status_update_user_data_tsubakimoto}</div>
         </div>
         <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
              <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black w-[20vh] rounded-lg" value="Upload" />
              <input type="reset" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-black h-full w-[20vh] rounded-lg" value="Cancel" />
              <Link href="viewupload"><input type="reset" className="pl-2 pr-2 pt-2 pb-2 bg-black h-full w-[20vh] rounded-lg" value="Cancel" /></Link>
         </div>
        </form>
       </div>




    </div>
   </div>
  </div>
  
 );

}
