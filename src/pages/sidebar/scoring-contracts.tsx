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
import ScoringContractsTable from "../../components/sidebar tables/tables/scoring-contractsTable";
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
export interface ScoringContract {
  id?: number;
  order_id?: number;
  
  user?: {
    code?: string;
    director?: {
      fullname?: string;
    };
  };
  product?: {
    name: string;
  };
  fillial?: {
    name: string;
  };
  ball?: number;
  createdAt?: Date;
  status?: "Pending" | "Success" | "Error";
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

export default function ScoringContractsPage() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleAdding = () => {
    // Handle save logic here

    console.log("handleAdding...");

    closeModal();
    setScoringContract(emptyScoringContract);
  };

  let emptyScoringContract: ScoringContract = {
    createdAt: new Date(),
    ball: 100,

  };
  let [ScoringContract, setScoringContract] =
    useState<ScoringContract>(emptyScoringContract);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  //   const multiOptions = [
  //     { value: "Group 1", text: "Group 1", selected: false },
  //     { value: "Group 2", text: "Group 2", selected: false },
  //     { value: "Group 3", text: "Group 3", selected: false },
  //   ];

  const all_Subject_options = [
    { value: "Yuridik shaxs", label: "Yuridik shaxs" },
    { value: "YATT", label: "YATT" },
    { value: "Jismoniy shaxs", label: "Jismoniy shaxs" },
  ];

  const all_grow_options = [
    { value: "Ishlab chiqarishni kengaytirish", label: "Ishlab chiqarishni kengaytirish" },
    { value: "Bino sotib olish", label: "Bino sotib olish" },
    { value: "Texnika sotib olish", label: "Texnika sotib olish" },
    { value: "Aylanma mablag'larini oshirish", label: "Aylanma mablag'larini oshirish" },
    { value: "Asbob-uskunalar sotib olish", label: "Asbob-uskunalar sotib olish" },
  ];

  const all_company_param_options = [
    { value: "Katta korxona", label: "Katta korxona" },
    { value: "Kichik korxona", label: "Kichik korxona" },
    { value: "Mikro korxona", label: "Mikro korxona" },
  ];

  const all_docs_options = [
    { value: "Ariza", label: "Ariza" },
    { value: "Kadastr", label: "Kadastr" },
    { value: "Tex passport", label: "Tex passport" },
    { value: "Guvohnoma", label: "Guvohnoma" },
    { value: "Buyruqlar", label: "Buyruqlar" },
     { value: "Sug'urta polisi", label: "Sug'urta polisi" },
     { value: "Kafil hujjatlari", label: "Kafil hujjatlari" },
    { value: "Biznes reja", label: "Biznes reja" },
     { value: "Ta'sischilar guvohnomasi", label: "Ta'sischilar guvohnomasi" },
  ];

  const all_money_options = [
    { value: "UZS", label: "UZS" },
    { value: "USD", label: "USD" },
    { value: "EURO", label: "EURO" },
  ];

  return (
    <>
      <PageMeta title="Shartnomalar | HC Dashboard" description="HC Dashboard" />
      <PageBreadcrumb pageTitle="Shartnomalar" />

      <div className="space-y-6 ">
        <ComponentCard
          title="Shartnomalar Jadvali"
          action={
            <div className="flex flex-row gap-4">
              <div>
                <Button
                  size="sm"
                  variant="outline"
                  endIcon={<DownloadIcon className="size-5 fill-white" />}
                >
                  Download
                </Button>
              </div>
             
            </div>
          }
        >
          <ScoringContractsTable />
        </ComponentCard>
      </div>
   
    </>
  );
}
