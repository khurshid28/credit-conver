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
import ScoringRequestsTable from "../../components/sidebar tables/tables/scoring-requestsTable";
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
export interface ScoringRequest {
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

export default function ScoringRequestsPage() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleAdding = () => {
    // Handle save logic here

    console.log("handleAdding...");

    closeModal();
    setScoringRequest(emptyScoringRequest);
  };

  let emptyScoringRequest: ScoringRequest = {
    createdAt: new Date(),
    ball: 100,
  };
  let [ScoringRequest, setScoringRequest] =
    useState<ScoringRequest>(emptyScoringRequest);

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
      <PageMeta title="Arizalar | HC Dashboard" description="HC Dashboard" />
      <PageBreadcrumb pageTitle="Arizalar" />

      <div className="space-y-6 ">
        <ComponentCard
          title="Arizalar Table"
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
              <Button
                size="sm"
                variant="primary"
                startIcon={<PlusIcon className="size-5 fill-white" />}
                onClick={() => {
                  setScoringRequest(emptyScoringRequest);
                  openModal();
                }}
              >
                Ariza yaratish
              </Button>
            </div>
          }
        >
          <ScoringRequestsTable />
        </ComponentCard>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="max-w-[1200px] m-4"
      >
        <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11 ">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Ariza yaratish
            </h4>
          </div>
          <form className="flex flex-col">
            <div className="px-2 overflow-y-auto custom-scrollbar pb-4">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-3 max-h-[640px]">
                <div className="pt-4 mt-4  col-span-3 flex flex-row items-center gap-2 border-t border-gray-100 dark:border-white/[0.05] text-xl font-semibold text-gray-800 dark:text-white/90">
                  <BoxIconLine className="size-5  fill-gray-500 dark:fill-gray-400" />
                  <p>Kredit mahsuloti</p>
                </div>

                <div>
                  <Label>Mahsulot ID</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>

                <div>
                  <Label>Mahsulot nomi</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>

                {/* user */}

                <div className="pt-4 mt-4  col-span-3 flex flex-row items-center gap-2 border-t border-gray-100 dark:border-white/[0.05] text-xl font-semibold text-gray-800 dark:text-white/90">
                  <UserCircleIcon className="size-5  fill-gray-500 dark:fill-gray-400" />
                  <p>Ariza beruvchi haqida ma'lumot</p>
                </div>

                <div className="col-span-1">
                  <Label>Subyek turi</Label>
                  <Select
                    options={all_Subject_options}
                    className="dark:bg-dark-900"
                    placeholder="Subyek turini tanlang"
                    onChange={() => {}}
                  />
                </div>
                <div>
                  <Label>Mijoz kodi</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>

                <div>
                  <Label>Telefon raqami</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>

                <div>
                  <Label>Mijoz UID</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>

                <div className="col-span-2">
                  <Label>Mijoz UID nomi</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>

                <div>
                  <Label>Kredit oluvchi turi</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>

                <div className="col-span-2">
                  <Label>Kredit oluvchi nomi</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>

                {/* business */}

                <div className="pt-4 mt-4  col-span-3 flex flex-row items-center gap-2 border-t border-gray-100 dark:border-white/[0.05] text-xl font-semibold text-gray-800 dark:text-white/90">
                  <FiCalendar className="size-5  " />
                  <p>Biznes-reja ma'lumotlari</p>
                </div>

                <div className="col-span-1">
                  <Label>Yangi o'sish belgilari</Label>
                  <Select
                    options={all_grow_options}
                    className="dark:bg-dark-900"
                    placeholder="Yangi o'sish belgisini tanlang"
                    onChange={() => {}}
                  />
                </div>
                <div>
                  <Label>Yaratilgan ish o'rinlar soni</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>

                <div className="col-span-1">
                  <Label>Tashkilot tasnifi</Label>
                  <Select
                    options={all_company_param_options}
                    className="dark:bg-dark-900"
                    placeholder="Tashkilot tasnifini tanlang"
                    onChange={() => {}}
                  />
                </div>

                <div>
                  <Label>EGRCP yozuvlari {`( Raqam )`}</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>

                <div className="col-span-1">
                  <Label>EGRCP yozuvlari {`( Sana )`}</Label>
                  <Input
                    type="text"
                    onChange={(e) => {}}
                    placeholder={`01-01-2025`}
                  />
                </div>

                <div></div>

                <div>
                  <Label>Mulk shakli</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>

                <div className="col-span-2">
                  <Label>Mulk shakli nomi</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>

                <div className="col-span-2">
                  <Label>Qisqacha nomi</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>
                <div></div>

                <div className="col-span-1">
                  <Label>Xodimlar soni</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>

                <div className="col-span-1">
                  <Label>Sof soliq solinadigan daromad</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>

                <div></div>

                {/* ariza asosiy parametr */}

                <div className="pt-4 mt-4  col-span-3 flex flex-row items-center gap-2 border-t border-gray-100 dark:border-white/[0.05] text-xl font-semibold text-gray-800 dark:text-white/90">
                  <FiFolderMinus className="size-5  " />
                  <p>Ariza asosiy parametrlari</p>
                </div>

                <div className="col-span-1">
                  <Label>Hujjat turi</Label>
                  <Select
                    options={all_docs_options}
                    className="dark:bg-dark-900"
                    placeholder="Hujjat turini tanlang"
                    onChange={() => {}}
                  />
                </div>
               
                <div className="col-span-1">
                   <Label>Hujjatlar</Label>
                  <FileInput
                    onChange={handleFileChange}
                    className="custom-class"
                    accept=".png, .jpg, .jpeg,.doc,.docx,.pdf"
                  />
                </div>
                <div>
                  <Label>Summa</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>

                

                <div>
                  <Label>Kredit olish muddati {`( Oylik )`}</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>
                <div>
                  <Label>Kredit olish muddati {`( Kunlik )`}</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>

                <div></div>

                <div>
                  <Label>Boshlang'ich to'lov</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>
                <div>
                  <Label>Maqsadli muddat</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>
                <div className="col-span-1">
                  <Label>Valyuta</Label>
                  <Select
                    options={all_money_options}
                    className="dark:bg-dark-900"
                    placeholder="Valyutani tanlang"
                    onChange={() => {}}
                  />
                </div>


                
                <div className="col-span-3">
                  <Label>Kredit liniyasining maqsadi</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>


                  
                <div className="col-span-1">
                  <Label>Kredit turi</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>

                 <div className="col-span-2">
                  <Label>Kredit nomi</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>


                    <div className="col-span-1">
                  <Label>Kredit maqsadi {`(kredit kod)`}</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>

                 <div className="col-span-2">
                  <Label>Kredit maqsadi nomi</Label>
                  <Input type="text" onChange={(e) => {}} />
                </div>







                {/* bojxona */}


                   <div className="pt-4 mt-4  col-span-3 flex flex-row items-center gap-2 border-t border-gray-100 dark:border-white/[0.05] text-xl font-semibold text-gray-800 dark:text-white/90">
                  <FiCompass className="size-5  " />
                  <p>Bojxona parametrlari</p>
                </div>

                <div className="col-span-1">
                   <Label>Ariza</Label>
                  <FileInput
                    onChange={handleFileChange}
                    className="custom-class"
                    accept=".png, .jpg, .jpeg,.doc,.docx,.pdf"
                  />
                </div>
               <div className="col-span-1">
                   <Label>Firma Guvohnomasi</Label>
                  <FileInput
                    onChange={handleFileChange}
                    className="custom-class"
                    accept=".png, .jpg, .jpeg,.doc,.docx,.pdf"
                  />
                </div>

              </div>
            </div>

            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button size="sm" onClick={handleAdding}>
                Saves
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
