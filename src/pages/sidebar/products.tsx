import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";

import {
  BoxIcon,
  BoxIconLine,
  DeleteIcon,
  DollarLineIcon,
  DownloadIcon,
  EnvelopeIcon,
  InfoIcon,
  PencilIcon,
  PlugInIcon,
  PlusIcon,
  SettingsIcon,
  StarHexaIcon,
  TrashBinIcon,
  UserCircleIcon,
  UserIcon,
} from "../../icons";
import Button from "../../components/ui/button/Button";
import { useModal } from "../../hooks/useModal";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import { Modal } from "../../components/ui/modal";
import { useState } from "react";
import FileInput from "../../components/form/input/FileInput";
import Select from "../../components/form/Select";
import MultiSelect from "../../components/form/MultiSelect";
import Checkbox from "../../components/form/input/Checkbox";
import {
  FiAnchor,
  FiAward,
  FiBold,
  FiBox,
  FiCalendar,
  FiCast,
  FiCommand,
  FiCompass,
  FiCpu,
  FiDisc,
  FiDivideSquare,
  FiFileText,
  FiFolderMinus,
  FiHash,
  FiScissors,
} from "react-icons/fi";
import ProductsList from "../../components/sidebar tables/tables/products";
export interface Product {
  id?: number;

  name: string;
  title:string;
  date?: string;
  max_amount?: string;
  chance_date? :string;
 
}

export const all_creteriya = [
  {
    value: "Katm bali 200 balldan yuqori bolishi",
    label: "Katm bali 200 balldan yuqori bolishi",
  },
  {
    value: "Qarz oluvchining hisob raqami asosiy bo'lishi",
    label: "Qarz oluvchining hisob raqami asosiy bo'lishi",
  },
  {
    value:
      "Kreditlar boyicha oxirgi 60 oy ichida 180 kundan oshgan muddati otgan qarzdorliklar soni",
    label:
      "Kreditlar boyicha oxirgi 60 oy ichida 180 kundan oshgan muddati otgan qarzdorliklar soni",
  },
  {
    value: "Qarz oluvchining kredit yuklamasi korsatkichi",
    label: "Qarz oluvchining kredit yuklamasi korsatkichi",
  },
];

export default function ProductsPage() {




  return (
    <>
      <PageMeta title="Products | HC Dashboard" description="HC Dashboard" />
      <PageBreadcrumb pageTitle="Products" />

      <div className="space-y-6 ">
       <ProductsList/>
      </div>
   
    </>
  );
}
