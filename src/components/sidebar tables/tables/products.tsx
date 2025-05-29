import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import Moment from "moment";

import Badge from "../../ui/badge/Badge";
import Button from "../../ui/button/Button";
import {
  ArrowRightIcon,
  CloseIcon,
  CloseLineIcon,
  CopyIcon,

  DownloadIcon,
  EyeCloseIcon,
  EyeIcon,
  PencilIcon,
  PlusIcon,
  TrashBinIcon,
} from "../../../icons";
import { useEffect, useState } from "react";
import { Admin } from "../../../pages/sidebar/admins";
import { useModal } from "../../../hooks/useModal";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";
import { Modal } from "../../ui/modal";
import Select from "../../form/Select";
import FileInput from "../../form/input/FileInput";
import { Product } from "../../../pages/sidebar/products";


// Define the table data using the interface
const orders: Product[] = [

  {
    id: 1,
    name: `Biznes uchun avtokredit`,
    title: "Biznesingizni rivojlantirish uchun avtokredit",
    max_amount: `10 mlrd so'mgacha`,
    date: `4 yilgacha`,
    chance_date: `3 oy`
  },

  {
    id: 2,
    name: `"Oson" avtokrediti`,
    title: "«UzAuto Motors» AJning avtotransport vositalarini yuridik shaxslar uchun birlamchi bozordan sotib olish",
    max_amount: `2 mlrd so'mgacha`,
    date: `4 yilgacha`,
    chance_date: `3 oygacha`
  },
  {
    id: 3,
    name: `Savdoni moliyalashtirish`,
    title: `Har qanday turdagi tovarlar va xizmatlarni ishonchli moliyalashtirish`,
    max_amount: `10 mlrd so'mgacha`,
    date: `1 yilgacha`
  },


  {
    id: 4,
    name: `Overdraft`,
    title: `Biznesning shoshilinch ehtiyojlari uchun`,
    max_amount: `500 mln so'mgacha`,
    date: `12 oygacha`
  },

  {
    id: 5,
    name: `"Taraqqiyot" krediti`,
    title: `Asosiy vositalar sotib olish uchun kredit`,
    max_amount: `10 mlrd so'mgacha`,
    date: `48 oygacha`,
    chance_date : `3 oy`
  },


  {
    id: 6,
    name: `"Yuksalish" krediti`,
    title: `Aylanma mablag'larni to'ldirish uchun`,
    max_amount: `10 mlrd so'mgacha`,
    date: `36 oygacha`,
    chance_date : `6 oy`
  },



];

export default function ProductsList() {





  return (
    <div className="overflow-hidden ">
      <div className="px-2 overflow-y-auto custom-scrollbar">
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
          {
            orders.map((order, index) => 
            
            
            
            // <div className="min-h-[180px] p-6 rounded-xl border border-gray-200  dark:border-white/[0.05]  bg-white dark:bg-white/[0.03] ">



              
            //   <p className="text-md font-semibold text-gray-800 dark:text-white/90">{order.name}</p>

            // </div>
            <div className="relative  overflow-hidden	 bg-white dark:bg-white/[0.03] rounded-xl p-6 flex flex-col md:flex-row justify-start items-start gap-4 border border-gray-200 dark:border-white/[0.05]">
            {/* Left Content */}
            <div className="max-w-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white/90 mb-2">
                {order.name}
              </h3>
              <p className="text-gray-700 dark:text-white/80 font-medium my-4">
              {order.title}
              </p>
              <ul className="text-gray-700 dark:text-white/80 space-y-2 mb-6 list-disc pl-6">
                <li><strong>Kredit muddati:</strong> {order.date}</li>
                <li><strong>Kredit miqdori:</strong> {order.max_amount}</li>
               {order.chance_date && <li><strong>Imtiyozli davr:</strong> {order.chance_date}</li>}
              </ul>
              <button className="px-6 py-2 rounded-md bg-gradient-to-r from-brand-500 to-brand-400 text-white font-medium shadow-md hover:opacity-90 transition">
                Batafsil
              </button>
            </div>
      
            {/* Right Image */}
            <div className="w-64 md:w-80  absolute bottom-0 right-0 ">
              <img
                src={`/images/product/product-${order.id}.webp`}
                alt="avto"
                className="w-full h-auto object-contain "
              />
            </div>
          </div>
          
          )
          }


        </div>
      </div>

    </div>
  );
}
