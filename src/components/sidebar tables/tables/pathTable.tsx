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
  import { Path } from "../../../pages/sidebar/paths";
  import DropzoneComponent from "../../form/form-elements/DropZone";
  import FileInputExample from "../../form/form-elements/FileInputExample";
  import FileInput from "../../form/input/FileInput";
import MultiSelect from "../../form/MultiSelect";
  
  interface Order {
    id: number;
    name: string;
    createdAt: Date;
    status: string;

  }
  
  // Define the table data using the interface
  const statictableData: Order[] = [
    {
      id: 1,
  
      name: "Ипотека",
      createdAt: new Date("2025-03-02"),
  
      status: "Active",
    },
    {
      id: 2,
  
      name: "Лизинг",
      createdAt: new Date("2025-03-02"),
  
      status: "Active",
    },
    {
      id: 3,
  
      name: "Авто",
      createdAt: new Date("2025-04-10"),
  
      status: "Active",
    },
    {
      id: 1,
  
      name: "Факторинг",
      createdAt: new Date("2025-03-02"),
  
      status: "Active",
    },
    {
      id: 2,
  
      name: "На оборотные средства",
      createdAt: new Date("2025-03-02"),
  
      status: "Active",
    },
   
  ];
  
  export default function PathsTable() {
    const [tableData, settableData] = useState(statictableData);
  
    const { isOpen, openModal, closeModal } = useModal();
    const handleAdding = () => {
      // Handle save logic here
  
      console.log("handleAdding...");
  
      closeModal();
      setPath(emptyPath);
    };
    let emptyPath: Path = {
      name: "",
      image: "",
      section_id  : ""
     
    };
    let [Path, setPath] = useState<Path>(emptyPath);
  
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
    }, [currentPage,tableData]);
  
  
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        console.log("Selected file:", file.name);
      }
    };
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const multiOptions = [
      { value: "Group 1", text: "Group 1", selected: false },
      { value: "Group 2", text: "Group 2", selected: false },
      { value: "Group 3", text: "Group 3", selected: false },
    ];
  

    const Subject_options = [
      { value: "All subjects", label: "All Subject" },
      { value: "Subject 1", label: "Subject 1" },
      { value: "Subject 2", label: "Subject 2"},
      { value: "Subject 3", label: "Subject 3"},
    ];

    const all_Subject_options = [
      { value: "Subject 1", label: "Subject 1" },
      { value: "Subject 2", label: "Subject 2"},
      { value: "Subject 3", label: "Subject 3"},
    ];
    
 
    
   
    
  
    const handleSelectAllSubjectChange = (value: string ) => {
    };

    useEffect(() => {
      setCurrentPage(1);
      
      settableData(statictableData);

     
    }, [optionValue,]);



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
           
          </div>
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Paths
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Added
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
                      {/* <div className="w-10 h-10 overflow-hidden rounded-sm ">
                        <img
                          width={40}
                          height={40}
                          src={order.image}
                          alt={order.name}
                        />
                      </div> */}
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {order.name}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {Moment(order.createdAt).format("MMMM DD, yyyy")}
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
                        setPath({
                          name: order.name,
                          image: "",
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
          <div>
            <div> {((currentPage - 1) * +optionValue)  + 1} dan {Math.min(statictableData.length, currentPage  * +optionValue)} gacha,  {statictableData.length} ta yo'nalish</div>
          </div>
        </div>
  
        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
          <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
            <div className="px-2 pr-14">
              <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Path
              </h4>
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                Update Path with full details.
              </p>
            </div>
            <form className="flex flex-col">
              <div className="px-2 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                <div>
                  <MultiSelect
                    label="Groups"
                    options={multiOptions}
                    onChange={(values) => setSelectedValues(values)}
                  />
                  <p className="sr-only">
                    Selected Values: {selectedValues.join(", ")}
                  </p>
                </div>

                <div>
                  <Label>Subjects</Label>
                  <Select
              options={all_Subject_options}
              className="dark:bg-dark-900"
              defaultValue={`${Path.section_id}`}
              onChange={()=>{}}
             
            />
                </div>

                  <div>
                    <Label>Name</Label>
                    <Input
                      type="text"
                      value={Path.name}
                      onChange={(e) =>
                        setPath({
                          ...Path,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
  
                  <div>
                    <Label>Image</Label>
                    <FileInput
                      onChange={handleFileChange}
                      className="custom-class"
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
  