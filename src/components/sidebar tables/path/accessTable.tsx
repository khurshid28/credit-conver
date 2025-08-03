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
  UserIcon,
  UserCircleIcon,
  DocsIcon,
  FileIcon,
  ErrorHexaIcon,
} from "../../../icons";
import { useEffect, useState } from "react";
import { useModal } from "../../../hooks/useModal";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";
import { Modal } from "../../ui/modal";
import Select from "../../form/Select";
import DropzoneComponent from "../../form/form-elements/DropZone";
import FileInputExample from "../../form/form-elements/FileInputExample";
import FileInput from "../../form/input/FileInput";
import MultiSelect from "../../form/MultiSelect";
import {
  FiAlignRight,
  FiArrowRight,
  FiArrowRightCircle,
  FiCheck,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";
import moment from "moment";

export interface Access {
  name?: string;
  image?: string;
  section_id?: string;
}

interface Order {
  id: number;
  name: string;
  time: string;
  role: string;
  expired: Date;
  docs?: AuthorDoc[];
  status: "success" | "panding" | "canceled";
}

interface Author {}

interface AuthorDoc {
  id: number;
  name: string;
  file?: File;
  desc?: string;
}
// Define the table data using the interface
const statictableData: Order[] = [
  {
    id: 1,
    name: "Bahodir Qodirov",
    role: "Kengash Raisi",
    expired: moment().add(2, "day").toDate(),
    status: "success",
    time: "2 kun",
    docs: [
      {
        id: 1,
        name: "Firma Guvohnomasi",
      },

      {
        id: 2,
        name: "Ariza",
      },
      {
        id: 3,
        name: "Garov",
      },
    ],
  },

  {
    id: 2,
    name: "Sherzod Mahmudov",
    role: "Kengash a'zolari",
    expired: moment().add(2, "day").toDate(),
    status: "success",
    time: "2 kun",
    docs: [
      {
        id: 3,
        name: "Pul aylanmasi",
      },

      {
        id: 4,
        name: "Firma direktorining hujjatlari",
      },
    ],
  },

  {
    id: 2,
    name: "Jasur Kamolov",
    role: "Rais O'rinbosari",
    expired: moment().add(5, "hours").toDate(),
    status: "panding",
    time: "4 kun",
    docs: [
      {
        id: 4,
        name: "Pul aylanmasi",
      },
      {
        id: 1,
        name: "Firma Guvohnomasi",
      },
    ],
  },

  {
    id: 2,
    name: "Farhod Diyorov",
    role: "Korporativ mijozlar bilan ishlash D.boshlig'i",
    expired: moment().subtract(1, "hour").toDate(),
    status: "panding",
    time: "1 kun",
    docs: [
      {
        id: 4,
        name: "Pul aylanmasi",
      },
      {
        id: 1,
        name: "Firma Guvohnomasi",
      },
    ],
  },

  {
    id: 5,
    name: "Sardor Yunusov",
    role: "Korporativ mijozlar bilan ishlash D.boshlig'i",
    expired: moment().subtract(1, "hour").toDate(),
    status: "canceled",
    time: "5 kun",
    docs: [
      {
        id: 4,
        name: "Pul aylanmasi",
      },
      {
        id: 1,
        name: "Firma Guvohnomasi",
      },
    ],
  },
];

export default function AccesssTable() {
  const [tableData, settableData] = useState(statictableData);

  const { isOpen, openModal, closeModal } = useModal();
  const handleAdding = () => {
    // Handle save logic here

    console.log("handleAdding...");

    closeModal();
    setAccess(emptyAccess);
  };
  let emptyAccess: Access = {
    name: "",
    image: "",
    section_id: "",
  };
  let [Access, setAccess] = useState<Access>(emptyAccess);

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
    { value: "Subject 2", label: "Subject 2" },
    { value: "Subject 3", label: "Subject 3" },
  ];

  const all_Subject_options = [
    { value: "Subject 1", label: "Subject 1" },
    { value: "Subject 2", label: "Subject 2" },
    { value: "Subject 3", label: "Subject 3" },
  ];

  const handleSelectAllSubjectChange = (value: string) => {};

  function timeLeft(targetDate: Date | string) {
    const now = moment();
    const end = moment(targetDate);
    const duration = moment.duration(end.diff(now));

    const days = Math.floor(duration.asDays());
    const hours = Math.floor(duration.asHours() % 24);
    const minutes = Math.floor(duration.asMinutes() % 60);

    if (days > 0)
      return `${days} ${getRussianPlural(
        days,
        "день",
        "дня",
        "дней"
      )} осталось`;
    if (hours > 0)
      return `${hours} ${getRussianPlural(
        hours,
        "час",
        "часа",
        "часов"
      )} осталось`;
    if (minutes > 0)
      return `${minutes} ${getRussianPlural(
        minutes,
        "минута",
        "минуты",
        "минут"
      )} осталось`;
    return `Время истекло`;
  }

  function getRussianPlural(n: number, one: string, few: string, many: string) {
    const mod10 = n % 10;
    const mod100 = n % 100;

    if (mod10 === 1 && mod100 !== 11) return one;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
    return many;
  }

  useEffect(() => {
    setCurrentPage(1);

    settableData(statictableData);
  }, [optionValue]);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      {/* <div className="">
        {tableData.map((item, index) => (
          <div className=" px-5 py-3 flex flex-col items-start gap-2 text-theme-sm font-medium text-gray-500 text-start  dark:text-gray-400 max-w-full overflow-x-auto">
            <span className="text-gray-800  dark:text-white/90 font-normal text-xl"> {item.product.name} {"-"} {item.name}</span>
            <div className=" px-3 py-3 flex flex-col w-full">
              {item.authors.map((author, i) => (
                <div className="flex flex-row items-center justify-between w-full border-b border-gray-100 dark:border-white/[0.05] py-2">
                  <div className="flex flex-row items-center gap-2 min-w-[280px] ">
                    <UserIcon className="text-gray-800 text-theme-sm dark:text-white/90 size-8" />
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {author.name}
                      </span>
                      <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                        {author.role}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center gap-2 min-w-[150px]">
                    <FiClock className="text-gray-800 text-theme-sm dark:text-white/90 size-8" />
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {author.expired} gacha
                      </span>
                      
                    </div>
                  </div>

                  <div className="flex flex-row items-center gap-2 min-w-[280px]">
                    <DocsIcon className="text-gray-800 text-theme-sm dark:text-white/90 size-8" />
                    <div>
                      {author.docs?.map((doc, _) => (
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {doc.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}
      <div className="px-5 py-3 inline-flex gap-4 ">
        <Button
          size="sm"
          variant="outline"
          endIcon={<FileIcon className="size-5 fill-white" />}
        >
          Результаты обработка
        </Button>

        <p className="inline-flex gap-2 items-center px-5 py-3 font-medium text-gray-500 text-start text-sm dark:text-gray-400">
          <FiClock className="text-brand-500 dark:text-brand-400 size-8 inline" />
          Обработа начата :{" "}
          {moment().subtract(25, "hour").format("DD.MM.YYYY HH:mm")}
        </p>
      </div>
      <Table>
        {/* Table Header */}
        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
          <TableRow>
            <TableCell
              isHeader
              className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
            >
              Xodimlar
            </TableCell>
            <TableCell
              isHeader
              className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
            >
              Срок
            </TableCell>
            <TableCell
              isHeader
              className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
            >
              Состояние
            </TableCell>

            <TableCell
              isHeader
              className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
            >
              Срок согласования
            </TableCell>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
          {statictableData.map((order, index) => (
            <TableRow key={index}>
              <TableCell className="px-5 py-4 sm:px-6 text-start">
                <div className="flex items-center gap-4">
                  {order.status == "success" ? (
                    <FiCheckCircle className="text-green-500 dark:text-green-400 size-8 inline" />
                  ) : order.status == "panding" ? (
                    <FiArrowRightCircle className="text-blue-500 dark:text-blue-400 size-8 inline" />
                  ) : (
                    <ErrorHexaIcon className="text-red-500 dark:text-red-400 size-8 inline" />
                  )}
                  <div>
                    <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {order.name}
                    </span>
                    <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                      {order.role}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                {order.time}
              </TableCell>

              <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                {order.status == "success"
                  ? "Согласован"
                  : order.status == "panding"
                  ? "На исполнении"
                  : "Не согласован"}
              </TableCell>

              <TableCell
                className={
                  (timeLeft(order.expired) == "Время истекло" &&
                  order.status == "panding"
                    ? "text-red-500 dark:text-red-40"
                    : "text-gray-500 dark:text-gray-40") +
                  "px-4 py-3  text-start text-theme-sm  flex-col  gap-2  justify-center "
                }
              >
                {moment(order.expired).format("DD.MM.YYYY HH:mm")}{" "}
                {order.status == "success" || order.status == "canceled"
                  ? ""
                  : " / " + timeLeft(order.expired)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Access
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update Access with full details.
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
                    defaultValue={`${Access.section_id}`}
                    onChange={() => {}}
                  />
                </div>

                <div>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    value={Access.name}
                    onChange={(e) =>
                      setAccess({
                        ...Access,
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
