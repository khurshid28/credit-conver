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
    PaperPlaneIcon,
    TableIcon,
    FileIcon,
  } from "../../../icons";
  import { useEffect, useState } from "react";
  import { useModal } from "../../../hooks/useModal";
  import Input from "../../form/input/InputField";
  import Label from "../../form/Label";
  import { Modal } from "../../ui/modal";
  import Select from "../../form/Select";
  import { Credit } from "../../../pages/sidebar/credits";
  import DropzoneComponent from "../../form/form-elements/DropZone";
  import FileInputExample from "../../form/form-elements/FileInputExample";
  import FileInput from "../../form/input/FileInput";
  import MultiSelect from "../../form/MultiSelect";
  import { FiDownload } from "react-icons/fi";
  
  interface Order {
    id: number;
    order_id: number;
    user: {
      code: string;
      director: {
        fullname: string;
      };
    };
    amount : string;
    date :string;
    product: {
      name: string;
    };
    fillial: {
      name: string;
    };
    ball: number;
    createdAt: Date;
  }
  
  // Define the table data using the interface
  const statictableData: Order[] = [
    {
      id: 131,
      order_id: 235,
      amount :"2 000 000 000 so'm",
      createdAt: new Date("2025-03-02 12:45"),
      ball: 75,
      user: {
        code: "739101",
        director: {
          fullname: "Bekzod Hamroyev",
        },
      },
      fillial: {
        name: "Chilonzor",
      },
      product: {
        name: `Savdoni moliyalashtirish`,
      },
      date :"18 oy",
    },

  
    {
      id: 130,
      order_id: 234,
      createdAt: new Date("2025-02-06 13:20"),
      amount :"1 200 000 000 so'm",
  
      ball: -16,
      user: {
        code: "540180",
        director: {
          fullname: "Mahmud Ergashov",
        },
      },
      fillial: {
        name: "Mirobod",
      },
      product: {
        name: `"Oson" avtokrediti`,
      },
      date :"24 oy",
    },
  
    {
      id: 129,
      order_id: 233,
      createdAt: new Date("2025-01-19 10:06"),
  
      amount :"900 000 000 so'm",
      ball: -27,
      user: {
        code: "5402298",
        director: {
          fullname: "Elyor Dilshodov",
        },
      },
      fillial: {
        name: "Mirobod",
      },
      product: {
        name: "Savdoni moliyalashtirish",
      },
      date :"18 oy",
    },
  
  
     {
      id: 128,
      order_id: 232,
      createdAt: new Date("2025-01-18 15:22"),
  
      amount :"750 000 000 so'm",
      ball: 0,
      user: {
        code: "4502361",
        director: {
          fullname: "Sherzod Komilov",
        },
      },
      fillial: {
        name: "Yunusobod",
      },
      product: {
        name: `"Yengil start" krediti`,
      },
      date :"12 oy",
    },
  ];
  
  export default function CreditssTable() {
    const [tableData, settableData] = useState(statictableData);
  
    const { isOpen, openModal, closeModal } = useModal();
    const handleAdding = () => {
      // Handle save logic here
  
      console.log("handleAdding...");
  
      closeModal();
      setCredits(emptyCredits);
    };
    let emptyCredits: Credit = {
  
      createdAt: new Date(),
      
    };
    let [Credits, setCredits] =
      useState<Credit>(emptyCredits);
  
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
  
    // const Subject_options = [
    //   { value: "Barcha filial", label: "Barcha filial" },
    //   { value: "Birlik", label: "Birlik" },
    //   { value: "Nurafshon universal", label: "Nurafshon universal" },
    //   { value: "Olmaliq universal", label: "Olmaliq universal" },
    //   { value: "Cho'pon ota", label: "Cho'pon ota" },
    //   { value: "Kamolot", label: "Kamolot" },
    //   { value: "Mustaqillik", label: "Mustaqillik" },
    // ];
  
    // const all_Subject_options = [
    //   { value: "Birlik", label: "Birlik" },
    //   { value: "Nurafshon universal", label: "Nurafshon universal" },
    //   { value: "Olmaliq universal", label: "Olmaliq universal" },
    //   { value: "Cho'pon ota", label: "Cho'pon ota" },
    //   { value: "Kamolot", label: "Kamolot" },
    //   { value: "Mustaqillik", label: "Mustaqillik" },
    // ];
  
    //   let [subjectoptionValue, setSubjectoptionValue] = useState("Barcha filial");
  
    //   const handleSelectSubjectChange = (value: string) => {
    //     setSubjectoptionValue(value);
    //   };
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        console.log("Selected file:", file.name);
      }
    };
  
    useEffect(() => {
      setCurrentPage(1);
  
      // if (subjectoptionValue == "Barcha filial") {
      //   settableData(statictableData);
      // } else {
      //   settableData(
      //     statictableData.filter((item) => item.subject_id === subjectoptionValue)
      //   );
      // }
    }, [optionValue]);
  
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
            {/* <div className="flex flex-row items-center gap-2 text-theme-sm font-medium text-gray-500 text-start  dark:text-gray-400">
              <Select
                options={Subject_options}
                onChange={handleSelectSubjectChange}
                className="dark:bg-dark-900"
              />
            </div> */}
          </div>
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium  text-start text-theme-xs text-gray-800 dark:text-white/90"
                >
                  ID
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium  text-center text-theme-xs text-gray-800 dark:text-white/90"
                >
                  Ariza ID
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium  text-center text-theme-xs text-gray-800 dark:text-white/90"
                >
                  Mijoz kodi
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium  text-start text-theme-xs text-gray-800 dark:text-white/90"
                >
                  Mijoz ismi
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium  text-start text-theme-xs text-gray-800 dark:text-white/90"
                >
                  Fillial
                </TableCell>
  
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium  text-start text-theme-xs text-gray-800 dark:text-white/90"
                >
                  Mahsulot nomi
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium  text-start text-theme-xs text-gray-800 dark:text-white/90"
                >
                  Yaratilgan vaqti
                </TableCell>

                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium  text-start text-theme-xs text-gray-800 dark:text-white/90"
                >
                  Summa
                </TableCell>
               
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium  text-start text-theme-xs text-gray-800 dark:text-white/90"
                >
                  Muddati
                </TableCell>
               
  
            
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium  text-start text-theme-xs text-gray-800 dark:text-white/90"
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
                        <span className="block font-medium  text-theme-sm text-gray-500 dark:text-gray-400">
                          {order.id}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    {order.order_id}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    {order.user.code}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.user.director.fullname}
                  </TableCell>
  
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.fillial.name}
                  </TableCell>
  
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.product.name}
                  </TableCell>
  
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {Moment(order.createdAt).format("HH:mm  MMMM DD, yyyy")}
                  </TableCell>
  
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    {order.amount}
                  </TableCell>

                  
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    {order.date}
                  </TableCell>
  
               
  
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400 flex gap-2  flex-row items-center">
                    <Button
                      size="mini"
                      variant="outline"
                      onClick={async () => {}}
                    >
                      <FileIcon className="text-xl fill-gray-500 dark:fill-gray-400"></FileIcon>
                    </Button>
  
                    <Button
                      size="mini"
                      variant="outline"
                      onClick={async () => {}}
                    >
                      <DownloadIcon className="text-xl fill-gray-500 dark:fill-gray-400"></DownloadIcon>
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
          
             <div> {((currentPage - 1) * +optionValue)  + 1} dan {Math.min(statictableData.length, currentPage  * +optionValue)} gacha,  {statictableData.length} ta kredit</div>
           
        </div>
  
        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
          <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
            <div className="px-2 pr-14">
              <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                Edit Ariza
              </h4>
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                Update Ariza with full details.
              </p>
            </div>
            <form className="flex flex-col">
              <div className="px-2 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  {/* <div>
                    <Label>Fillial</Label>
                    <Select
                      options={all_Subject_options}
                      className="dark:bg-dark-900"
                      defaultValue={`${Credits.section_id}`}
                      onChange={() => {}}
                    />
                  </div> */}
  
                  <div>
                    <Label>Mijoz kodi</Label>
                    <Input
                      type="text"
                      value={Credits.user?.code}
                      onChange={(e) =>
                        setCredits({
                          ...Credits,
                          user: {
                              ...Credits.user,
                              code: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
  
                  {/* <div>
                    <Label>INN</Label>
                    <Input
                      type="text"
                      value={Credits.inn}
                      onChange={(e) =>
                        setCredits({
                          ...Credits,
                          inn: e.target.value,
                        })
                      }
                    />
                  </div> */}
  
                  {/* <div>
                    <Label>Ariza</Label>
                    <FileInput
                      onChange={handleFileChange}
                      className="custom-class"
                      accept=".png, .jpg, .jpeg,.doc,.docx,.pdf"
                    />
                  </div> */}
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
  