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
  DeleteIcon,
  DownloadIcon,
  PencilIcon,
  EyeCloseIcon,
  EyeIcon,
  PlusIcon,
  TrashBinIcon,
} from "../../../icons";
import { useEffect, useState } from "react";
import { useModal } from "../../../hooks/useModal";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";
import { Modal } from "../../ui/modal";
import Select from "../../form/Select";
import { Firm } from "../../../pages/sidebar/firms";
import DropzoneComponent from "../../form/form-elements/DropZone";
import FileInputExample from "../../form/form-elements/FileInputExample";
import FileInput from "../../form/input/FileInput";
import MultiSelect from "../../form/MultiSelect";

interface Order {
  id: number;
  name: string;
  createdAt: Date;
  status: string;
  subject_id?: string;
  inn: string;
}

// Define the table data using the interface
const statictableData: Order[] = [
  {
    id: 1,

    name: `"QO'QON SADOSI" ro'znomasi`,
    createdAt: new Date("2025-03-02"),

    status: "Active",
    subject_id: "Birlik",
    inn: "202728479",
  },
  {
    id: 2,

    name: `Samarqand viloyat "Samarkand-city" hokkey klubi`,
    createdAt: new Date("2025-03-02"),

    status: "Active",
    subject_id: "Cho'pon ota",
    inn: "303379554",
  },
  {
    id: 3,

    name: `*Гилам-маркет* хусусий фирмаси`,
    createdAt: new Date("2025-04-10"),

    status: "Active",
    subject_id: "Mustaqillik",
    inn: "202283702",
  },
  {
    id: 1,

    name: `"ИСТИКЛОЛ" фермер хужалиги`,
    createdAt: new Date("2025-03-02"),

    status: "Cancel",
    subject_id: "Mustaqillik",
    inn: "204737688",
  },
  {
    id: 2,

    name: `"ARS SAVDO" савдо уйи`,
    createdAt: new Date("2025-03-02"),

    status: "Active",
    subject_id: "Nurafshon universal",
    inn: "202728479",
  },

  {
    id: 2,

    name: `"ТЕМУР" магазини`,
    createdAt: new Date("2025-03-02"),

    status: "Active",
    subject_id: "Nurafshon universal",
    inn: "202316857",
  },
];

export default function FirmsTable() {
  const [tableData, settableData] = useState(statictableData);

  const { isOpen, openModal, closeModal } = useModal();
  const handleAdding = () => {
    // Handle save logic here

    console.log("handleAdding...");

    closeModal();
    setFirm(emptyFirm);
  };
  let emptyFirm: Firm = {
    name: "",
    section_id: "",
  };
  let [Firm, setFirm] = useState<Firm>(emptyFirm);

  const options = [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "20", label: "20" },
  ];
  let [optionValue, setoptionValue] = useState("5");

  const handleSelectChange = (value: string) => {
    setoptionValue(value);
  };

  // Pationation

  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(tableData.length / +optionValue);

  const startIndex = (currentPage - 1) * +optionValue;
  const endIndex = startIndex + +optionValue;
  let currentItems: Order[] = tableData.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, maxPage));
  };
  console.log(">> currentItems length :", currentItems.length);

  useEffect(() => {
    const startIndex = (currentPage - 1) * +optionValue;
    const endIndex = startIndex + +optionValue;
    currentItems = tableData.slice(startIndex, endIndex);
  }, [currentPage, tableData]);




  const Subject_options = [
    { value: "Barcha filial", label: "Barcha filial" },
    { value: "Birlik", label: "Birlik" },
    { value: "Nurafshon universal", label: "Nurafshon universal" },
    { value: "Olmaliq universal", label: "Olmaliq universal" },
    { value: "Cho'pon ota", label: "Cho'pon ota" },
    { value: "Kamolot", label: "Kamolot" },
    { value: "Mustaqillik", label: "Mustaqillik" },
  ];

  const all_Subject_options = [
    { value: "Birlik", label: "Birlik" },
    { value: "Nurafshon universal", label: "Nurafshon universal" },
    { value: "Olmaliq universal", label: "Olmaliq universal" },
    { value: "Cho'pon ota", label: "Cho'pon ota" },
    { value: "Kamolot", label: "Kamolot" },
    { value: "Mustaqillik", label: "Mustaqillik" },
  ];

  let [subjectoptionValue, setSubjectoptionValue] = useState("Barcha filial");

  const handleSelectSubjectChange = (value: string) => {
    setSubjectoptionValue(value);
  };

  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  useEffect(() => {
    setCurrentPage(1);

    if (subjectoptionValue == "Barcha filial") {
      settableData(statictableData);
    } else {
      settableData(
        statictableData.filter((item) => item.subject_id === subjectoptionValue)
      );
    }
  }, [optionValue, subjectoptionValue]);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="px-5 py-3  flex flex-row justify-between items-center border-b border-gray-100 dark:border-white/[0.05]">
          <div className="flex flex-row items-center gap-2 text-theme-sm font-medium text-gray-500 text-start  dark:text-gray-400">
            <span>Ko'rsatish</span>
  
              <Select
                options={options}
                onChange={handleSelectChange}
                className="dark:bg-dark-900"
                defaultValue="5"
              />
          </div>
          <div className="flex flex-row items-center gap-2 text-theme-sm font-medium text-gray-500 text-start  dark:text-gray-400">
            <Select
              options={Subject_options}
              onChange={handleSelectSubjectChange}
              className="dark:bg-dark-900"
            />
          </div>
        </div>
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
              Korxona nomi
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                STIR
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Filial
              </TableCell>

              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Amal
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {currentItems.map((order, index) => (
              <TableRow key={index}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {order.name}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.inn}
                </TableCell>

                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.subject_id}
                </TableCell>

                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      order.status === "Active"
                        ? "success"
                        : order.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400 flex gap-2  flex-row items-center">
                  <Button
                    size="mini"
                    variant="outline"
                    className="text-xl fill-gray-500 dark:fill-gray-400"
                    onClick={() => {
                      setFirm({
                        name: order.name,
                        inn: order.inn,
                      });
                      openModal();
                    }}
                  >
                    <PencilIcon></PencilIcon>
                  </Button>

                  <Button
                    size="mini"
                    variant="outline"
                    onClick={async () => {}}
                  >
                    <TrashBinIcon className="text-xl fill-gray-500 dark:fill-gray-400"></TrashBinIcon>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="px-5 py-3 gap-3 flex flex-col md:flex-row justify-between md:items-center border-t border-gray-100 dark:border-white/[0.05] text-theme-sm font-medium text-gray-500  dark:text-gray-400">
        <div className="flex flex-row items-center gap-2  text-start  ">
          <Button
            size="sm"
            variant="outline"
            className="w-10 h-10"
            disabled={currentPage === 1}
            onClick={goToPreviousPage}
          >
            <ArrowRightIcon className="rotate-180 fill-gray-500  dark:fill-gray-400 scale-200" />
          </Button>

          {[...Array(maxPage)].map((_, i) => (
            <Button
              size="sm"
              variant={currentPage === i + 1 ? "primary" : "outline"}
              className="w-10 h-10"
              disabled={false}
              key={i}
              onClick={() => {
                currentPage !== i + 1 && setCurrentPage(i + 1);
              }}
            >
              {i + 1}
            </Button>
          ))}

          <Button
            size="sm"
            variant="outline"
            className="w-10 h-10"
            disabled={currentPage === maxPage}
            onClick={goToNextPage}
          >
            <ArrowRightIcon className=" fill-gray-500  dark:fill-gray-400 scale-200" />
          </Button>
        </div>
          <div> {((currentPage - 1) * +optionValue)  + 1} dan {Math.min(statictableData.length, currentPage  * +optionValue)} gacha,  {statictableData.length} ta firma</div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Firm
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update Firm with full details.
            </p>
          </div>
          <form className="flex flex-col">
            <div className="px-2 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
              

                <div>
                  <Label>Fillial</Label>
                  <Select
                    options={all_Subject_options}
                    className="dark:bg-dark-900"
                    defaultValue={`${Firm.section_id}`}
                    onChange={() => {}}
                  />
                </div>

                <div>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    value={Firm.name}
                    onChange={(e) =>
                      setFirm({
                        ...Firm,
                        name: e.target.value,
                      })
                    }
                  />
                </div>

                  <div>
                  <Label>INN</Label>
                  <Input
                    type="text"
                    value={Firm.inn}
                    onChange={(e) =>
                      setFirm({
                        ...Firm,
                        inn: e.target.value,
                      })
                    }
                  />
                </div>

                

                
                 <div>
                  <Label>Ariza</Label>
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
                Saqlash
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
