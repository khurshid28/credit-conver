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
  
  interface Order {
    id: number;
    role :string;

    user: {
      image: string;
      name: string;
      phone: string;
      password: string;
    };
    createdAt: Date;
    team: {
      images: string[];
    };
    status: string;
    showPassword: boolean;
  }
  
  // Define the table data using the interface
  const statictableData: Order[] = [
    {
      id: 1,
      user: {
        image: "/images/user/user-17.jpg",
        name: "Xurshid Ismoilov",
        phone: "+998(95)064-28-27",
        password: "11223344",
      },
      showPassword: false,
      createdAt: new Date("2025-01-04"),
      team: {
        images: [
          "/images/user/user-22.jpg",
          "/images/user/user-23.jpg",
          "/images/user/user-24.jpg",
        ],
      },
      status: "Active",
      role :"Bo'lim boshlig'i"
    },
    {
      id: 2,
      user: {
        image: "/images/user/user-18.jpg",
        name: "Kaiya George",
        phone: "+998(95)064-28-27",
        password: "66223344",
      },
      createdAt: new Date("2025-02-15"),
      showPassword: false,
      team: {
        images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
      },
      status: "Pending",
          role :"Departament direktori"
    },
    {
      id: 3,
      user: {
        image: "/images/user/user-17.jpg",
        name: "Zain Geidt",
        phone: "+998(95)064-28-27",
        password: "44662244",
      },
      showPassword: false,
      createdAt: new Date("2025-02-16"),
      team: {
        images: ["/images/user/user-27.jpg"],
      },
      status: "Active",
       role :"Departament direktori"
    },
    {
      id: 4,
      user: {
        image: "/images/user/user-20.jpg",
        name: "Abram Schleifer",
        phone: "+998(95)064-28-27",
        password: "44662244",
      },
      showPassword: false,
      createdAt: new Date("2025-03-02"),
      team: {
        images: [
          "/images/user/user-28.jpg",
          "/images/user/user-29.jpg",
          "/images/user/user-30.jpg",
        ],
      },
      status: "Cancel",
       role :"Boshqarma boshlig'i"
    },
    {
      id: 5,
      user: {
        image: "/images/user/user-21.jpg",
        name: "Carla George",
        phone: "+998(95)064-28-27",
        password: "44662244",
      },
      createdAt: new Date("2025-03-02"),
      team: {
        images: [
          "/images/user/user-31.jpg",
          "/images/user/user-32.jpg",
          "/images/user/user-33.jpg",
        ],
      },
      status: "Active",
      showPassword: false,
         role :"Boshqarma boshlig'i"
    },
    {
      id: 5,
      user: {
        image: "/images/user/user-21.jpg",
        name: "Carla George",
        phone: "+998(95)064-28-27",
        password: "44662244",
      },
      createdAt: new Date("2025-03-02"),
      team: {
        images: [
          "/images/user/user-31.jpg",
          "/images/user/user-32.jpg",
          "/images/user/user-33.jpg",
        ],
      },
      status: "Active",
      showPassword: false,
         role :"Boshqarma boshlig'i"
    },
    {
      id: 5,
      user: {
        image: "/images/user/user-21.jpg",
        name: "Carla George",
        phone: "+998(95)064-28-27",
        password: "44662244",
      },
      createdAt: new Date("2025-03-02"),
      team: {
        images: [
          "/images/user/user-31.jpg",
          "/images/user/user-32.jpg",
          "/images/user/user-33.jpg",
        ],
      },
      status: "Active",
      showPassword: false,
         role :"Boshqarma boshlig'i"
    },
    {
      id: 5,
      user: {
        image: "/images/user/user-21.jpg",
        name: "Carla George",
        phone: "+998(95)064-28-27",
        password: "44662244",
      },
      createdAt: new Date("2025-03-02"),
      team: {
        images: [
          "/images/user/user-31.jpg",
          "/images/user/user-32.jpg",
          "/images/user/user-33.jpg",
        ],
      },
      status: "Active",
      showPassword: false,
         role :"Boshqarma boshlig'i"
    },
   
  ];
  
  export default function AdminsTable() {
    const [tableData, settableData] = useState(statictableData);
  
    const { isOpen, openModal, closeModal } = useModal();
    const handleAdding = () => {
      // Handle save logic here
  
      console.log("handleAdding...");
  
      closeModal();
      setAdmin(emptyAdmin);
    };
    let emptyAdmin: Admin = {
      firstName: "",
      lastName: "",
      phone: "901234567",
      password: "12345678",
      role :""
    };
    let [Admin, setAdmin] = useState<Admin>(emptyAdmin);
    function setShowPassword(id: number) {
      settableData(
        tableData.map((e) => {
          if (e.id == id) {
            e.showPassword = !e.showPassword;
          }
          return e;
        })
      );
    }
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          console.log("Selected file:", file.name);
        }
      };
  
    const options = [
      { value: "5", label: "5" },
      { value: "10", label: "10" },
      { value: "20", label: "20" },
    ];
    let [optionValue, setoptionValue] = useState("5");

    const Fillial_options = [
        { value: "Chilonzor", label: "Chilonzor" },
    { value: "Mirobod", label: "Mirobod" },
    { value: "Yunusobod", label: "Yunusobod" },
      ];
      let [FillialoptionValue, setFillialoptionValue] = useState("5");
  
    const handleSelectChange = (value: string) => {
      setoptionValue(value);
    };
    const handleSelectFillialChange = (value: string) => {
        setFillialoptionValue(value);
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
    console.log(">> data length :", statictableData.length);
  
    useEffect(() => {
      const startIndex = (currentPage - 1) * +optionValue;
      const endIndex = startIndex + +optionValue;
      currentItems = tableData.slice(startIndex, endIndex);
    }, [currentPage]);
  
    useEffect(() => {
      setCurrentPage(1);
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
            <div>
              {" "}
              <Button
                size="sm"
                variant="outline"
                endIcon={<DownloadIcon className="size-5 fill-white" />}
              >
                Yuklash
              </Button>
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
                  Admin
                </TableCell>
                  <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Lavozim
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Sana
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Parol
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
                      <div className="w-10 h-10 overflow-hidden rounded-full">
                        <img
                          width={40}
                          height={40}
                          src={order.user.image}
                          alt={order.user.name}
                        />
                      </div>
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {order.user.name}
                        </span>
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {order.user.phone}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.role}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {Moment(order.createdAt).format("MMMM DD, yyyy")}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400 flex gap-2  flex-row items-center">
                    {order.showPassword ? order.user.password : "✷✷✷✷✷"}{" "}
                    <Button
                      size="mini"
                      variant="outline"
                      onClick={() => setShowPassword(order.id)}
                    >
                      <span className="">
                        {order.showPassword ? (
                          <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                        ) : (
                          <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 " />
                        )}
                      </span>
                    </Button>
                    <Button
                      size="mini"
                      variant="outline"
                      onClick={async () => {
                        await navigator.clipboard.writeText(
                          `${order.user.phone}\n${order.user.password}`
                        );
                      }}
                    >
                      <CopyIcon></CopyIcon>
                    </Button>
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
                        let names = order.user.name.split(" ");
  
                        setAdmin({
                          firstName: names[0],
                          lastName: names[1],
                          password: order.user.password,
                          phone: order.user.phone,
                          role : order.role
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
                onClick={()=>{
                  currentPage !== i + 1 && setCurrentPage(i+1);
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
          <div> {((currentPage - 1) * +optionValue)  + 1} dan {Math.min(statictableData.length, currentPage  * +optionValue)} gacha,  {statictableData.length} ta admin</div>
        </div>
  
        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
          <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
            <div className="px-2 pr-14">
              <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                Edit Admin
              </h4>
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update Admin with full details.
              </p>
            </div>
            <form className="flex flex-col">
              <div className="px-2 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div>
                    <Label>Firstname</Label>
                    <Input
                      type="text"
                      value={Admin.firstName}
                      onChange={(e) =>
                        setAdmin({
                          ...Admin,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </div>
  
                  <div>
                    <Label>Lastname</Label>
                    <Input
                      type="text"
                      value={Admin.lastName}
                      onChange={(e) =>
                        setAdmin({
                          ...Admin,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>
  
                  <div>
                    <Label>Phonenumber</Label>
                    <Input
                      type="text"
                      value={Admin.phone}
                      onChange={(e) =>
                        setAdmin({
                          ...Admin,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
  
                  <div>
                    <Label>Password</Label>
                    <Input
                      type="text"
                      value={Admin.password}
                      onChange={(e) =>
                        setAdmin({
                          ...Admin,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                  <Label>Fillial</Label>
                  <Select
              options={Fillial_options}
              onChange={handleSelectFillialChange}
              className="dark:bg-dark-900"
             
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
  