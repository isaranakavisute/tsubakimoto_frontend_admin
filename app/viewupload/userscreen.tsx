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
import pencil_icon from "./images/pencil-icon.svg";
import trash_icon from "./images/recycle-bin-icon.svg";


export default function UserScreen() {

  const router = useRouter;
  const [std_json_res, set_std_json_res] = React.useState([
    { 
      "category": "value",
      "part_no": "value",
      "previous_model_no": "value",
      "new_model_no": "value",
      "unit": "value",
      "manufacturer_suggested_retail_price": "value",
      "new_manufacturer_suggested_retail_price": "value",
      "conversion_to_ft": "value",
      "diff_for_cost": "value",
      "op_price": "value",
      "po_price_jpy_usd" : "value",
      "po_price_currency" : "value",
      "remark": "value",
      "thb_cost" : "value",
      "gp": "value",
      "pricelist_name" : "value",
      "multiplier": "value",
      "make_same_price_as_standard_price": "value",
      "new_make_same_price_as_standard_price": "value",
      "standard_price": "value",
      "diff": "value",
      "dist_pl_mull": "value",
      "dist_ex_rate": "value",
      "unit_price": "value",
      "new_unit_price" : "value",
      "diff_unit_price" : "value",
      "status": "value",
      "supplier_name" : "value",
      "stock_reference" : "value",
      "cutting_assembly" : "value",
      "detail": "value"
    }]); //React.useState(null);
 
 

  function autoload()
  {
    axios({
     method: "POST",
     url: "http://deploy-aws.com:3006/get_master_akt_format_kabelschlepp",
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

  function onEditIconClicked()
  {
   //alert('Item will be edited');
  }

  function onDeleteIconClicked()
  {
   //alert('Item will be deleted');
  }

  return (
        <div className="flex flex-col w-full h-[100vh] bg-white">                 
         <div className="flex h-full w-full flex-row items-center justify-center bg-white">
          <div className="flex h-full w-full bg-white flex-col justify-start items-center rounded-xl">

            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center bg-amber-600">
             <div className="text-3xl text-black">View Uploaded Data</div>
            </div>

            <div className="flex flex-col w-full h-[5vh] border-0 border-solid bg-amber-600 items-center justify-start"> 
             <div className="flex flex-row w-full h-full border-0 border-solid border-black">
             


              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">category</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">part_no</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">previous_model_no</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">new_model_no</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">unit</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">manufacturer_suggested_retail_price</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">new_manufacturer_suggested_retail_price</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">conversion_to_ft</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">diff_for_cost</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">op_price</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">po_price_jpy_usd</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">po_price_currency</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">remark</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">thb_cost</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">gp</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">pricelist_name</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">multiplier</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">make_same_price_as_standard_price</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">new_make_same_price_as_standard_price</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">standard_price</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">diff</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">dist_pl_mull</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">dist_ex_rate</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">unit_price</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">new_unit_price</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">diff_unit_price</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">status</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">supplier_name</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">stock_reference</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">cutting_assembly</div>
              <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">detail</div>


             </div>
            </div>

            <div className="flex flex-col w-full h-full border-1 border-solid border-purple items-center justify-start overflow-y-auto"> 
             {
              std_json_res.map((post) => (
                 
                  <div className="flex flex-row w-full h-[3vh] bg-amber-100" key={post.part_no}>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.category}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.part_no}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.previous_model_no}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.new_model_no}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.unit}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.manufacturer_suggested_retail_price}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.new_manufacturer_suggested_retail_price}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.conversion_to_ft}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.diff_for_cost}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.op_price}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.po_price_jpy_usd}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.po_price_currency}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.remark}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.thb_cost}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.gp}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.pricelist_name}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.multiplier}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.make_same_price_as_standard_price}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.new_make_same_price_as_standard_price}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.standard_price}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.diff}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.dist_pl_mull}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.dist_ex_rate}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.unit_price}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.new_unit_price}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.diff_unit_price}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.status}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.supplier_name}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.stock_reference}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.cutting_assembly}</div>
                   <div className="flex flex-row w-[3vh] h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">{post.detail}</div>
                  </div>
                 
                 )        
               )              
             }
           </div>
          </div>
         </div>
        </div> 
    );
}
