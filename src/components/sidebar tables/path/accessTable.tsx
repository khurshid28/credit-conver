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
  EditIcon,
  CheckLineIcon,
  ErrorIcon,
  ArrowUpIcon,
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
  FiEdit,
  FiEdit2,
  FiEdit3,
} from "react-icons/fi";
import moment from "moment";
import TextAreaInput from "../../form/form-elements/TextAreaInput";
import TextArea from "../../form/input/TextArea";
import Rate from "rc-rate";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
export interface Access {
  id?: number;
  name?: string;
  image?: string;
  section_id?: string;
  rate: number;
}

interface Order {
  id: number;
  name: string;
  time: string;
  role: string;
  expired: Date;
  docs?: AuthorDoc[];
  timer?: string;
  status: "success" | "panding" | "canceled" | "timer";
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
    id: 3,
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
    id: 4,
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

  {
    id: 6,
    name: "Javohir Saidov",
    role: "Korporativ mijozlar bilan ishlash Bo'lim boshlig'i",
    expired: moment().subtract(1, "hour").toDate(),
    status: "timer",
    timer: "3d",
    time: "3 kun",
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
    rate: 0,
  };
  let [Access, setAccess] = useState<Access>(emptyAccess);

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

  const options = [
    { label: "1 soat", value: "1h" },
    { label: "2 soat", value: "2h" },
    { label: "3 soat", value: "3h" },
    { label: "12 soat", value: "12h" },
    { label: "1 kun", value: "1d" },
    { label: "2 kun", value: "2d" },
    { label: "3 kun", value: "3d" },
  ];

  const [timer, setTimer] = useState<string | null>();

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

  function statusUi() {
    let order: Order | undefined = tableData.find(
      (item) => item.id == Access?.id
    );
    return (
      <div className="flex items-center gap-4 py-4  border-b-1 mb-4">
        {order?.status == "success" ? (
          <FiCheckCircle className="text-green-500 dark:text-green-400 size-8 inline" />
        ) : order?.status == "panding" ? (
          <FiArrowRightCircle className="text-blue-500 dark:text-blue-400 size-8 inline" />
        ) : order?.status == "canceled" ? (
          <ErrorHexaIcon className="text-red-500 dark:text-red-400 size-8 inline" />
        ) : (
          <FiClock className="text-yellow-500 dark:text-yellow-400 size-8 inline" />
        )}
        <div>
          <span className="block font-medium text-gray-800 dark:text-white/90 text-theme-sm ">
            {order?.name}
          </span>
          <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
            {order?.role}
          </span>
        </div>
      </div>
    );
  }
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

        {tableData.every((item) => item.status == "success") ? (
          <p className="inline-flex gap-2 items-center px-5 py-3 font-medium text-gray-500 text-start text-sm dark:text-gray-400">
            <FiCheckCircle className="text-green-500 dark:text-green-400 size-8 inline" />
            Обработа начата :{" "}
            {moment().subtract(25, "hour").format("DD.MM.YYYY HH:mm")}
          </p>
        ) : (
          <p className="inline-flex gap-2 items-center px-5 py-3 font-medium text-gray-500 text-start text-sm dark:text-gray-400">
            <FiClock className="text-yellow-500 dark:text-yellow-400 size-8 inline" />
            Обработа начата :{" "}
            {moment().subtract(25, "hour").format("DD.MM.YYYY HH:mm")}
          </p>
        )}
      </div>
      <Table>
        {/* Table Header */}
        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
          <TableRow>
            <TableCell
              isHeader
              className="px-5 py-3 font-bold text-gray-800 dark:text-white/90 text-start text-theme-xs "
            >
              Руководства
            </TableCell>
            <TableCell
              isHeader
              className="px-5 py-3 font-bold text-gray-800 dark:text-white/90 text-start text-theme-xs "
            >
              Срок
            </TableCell>
            <TableCell
              isHeader
              className="px-5 py-3 font-bold text-gray-800 dark:text-white/90 text-start text-theme-xs "
            >
              Состояние
            </TableCell>

            <TableCell
              isHeader
              className="px-5 py-3 font-bold  text-gray-800 dark:text-white/90 text-start text-theme-xs "
            >
              Срок согласования
            </TableCell>

            <TableCell
              isHeader
              className="px-5 py-3 font-bold  text-gray-800 dark:text-white/90 text-start text-theme-xs "
            >
              Подписания
            </TableCell>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
          {tableData.map((order, index) => (
            <TableRow key={index}>
              <TableCell className="px-5 py-4 sm:px-6 text-start">
                <div className="flex items-center gap-4">
                  {order.status == "success" ? (
                    <FiCheckCircle className="text-green-500 dark:text-green-400 size-8 inline" />
                  ) : order.status == "panding" ? (
                    <FiArrowRightCircle className="text-blue-500 dark:text-blue-400 size-8 inline" />
                  ) : order.status == "canceled" ? (
                    <ErrorHexaIcon className="text-red-500 dark:text-red-400 size-8 inline" />
                  ) : (
                    <FiClock className="text-yellow-500 dark:text-yellow-400 size-8 inline" />
                  )}
                  <div>
                    <span className="block font-medium text-gray-800 dark:text-white/90 text-theme-sm ">
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
                  : order.status == "canceled"
                  ? "Не согласован"
                  : "Ожидания" +
                    (order.timer
                      ? ` (+${
                          options.find((item) => item.value == order.timer)
                            ?.label
                        })`
                      : "")}
              </TableCell>

              <TableCell
                className={
                  (timeLeft(order.expired) == "Время истекло" &&
                  order.status == "panding"
                    ? "text-red-500 dark:text-red-400"
                    : "text-gray-500 dark:text-gray-40") +
                  "px-5 py-3  text-start text-theme-sm  flex-col  gap-2  justify-center "
                }
              >
                {moment(order.expired).format("DD.MM.YYYY HH:mm")}{" "}
                {order.status == "success" ||
                order.status == "canceled" ||
                order.status == "timer"
                  ? ""
                  : " / " + timeLeft(order.expired)}
              </TableCell>

              <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setAccess({
                      ...emptyAccess,
                      id: order.id,
                    });
                    openModal();
                    let data = tableData.find((item) => item.id == order.id);
                    if (data?.timer) {
                      setTimer(data?.timer);
                    } else {
                      setTimer(null);
                    }
                  }}
                  endIcon={
                    <div className="flex flex-row item-center h-full gap-2">
                      <PencilIcon className={"size-5"} />{" "}
                    </div>
                  }
                >
                  подписать
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Подписания
            </h4>
            {/* <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update Access with full details.
            </p> */}
          </div>
          {statusUi()}

          <form className="flex flex-col">
            <div className="px-2 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                <div className="col-span-2">
                  <Label>Описания</Label>
                  <TextArea
                    value={Access.name}
                    className="w-full flex "
                    onChange={(value) =>
                      setAccess({
                        ...Access,
                        name: value,
                      })
                    }
                    rows={8}
                  />
                </div>

                <div className="pt-8 col-span-2">
                  <Label className="flex flex-row gap-4 items-center">
                    Оценка для оператора{" "}
                    <p className="text-gray-500 text-xl dark:text-gray-400">
                      |
                    </p>
                    <div className="inline-flex  flex-row gap-2 items-center ">
                      <UserCircleIcon className="text-brand-500 dark:text-brand-400 size-5 " />
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          Sherzod M
                        </span>
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          Operator
                        </span>
                      </div>
                    </div>
                  </Label>
                  <Rater
                    interactive={true}
                    rating={Access.rate}
                    total={5}
                    onRating={(v) => {
                      setAccess({
                        ...Access,
                        rate: v,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 ">
              <Button
                size="sm"
                variant={timer ? "primary" : "outline"}
                startIcon={<FiClock className="size-5 " />}
                onClick={() => {
                  if (!timer) {
                    setTimer("1h");
                  } else {
                    setTimer(null);
                  }
                }}
              >
                ожидания
              </Button>
              {!timer && (
                <>
                  <Button
                    size="sm"
                    variant="error"
                    startIcon={<CloseIcon className="size-5 fill-white" />}
                    onClick={() => {
                      closeModal();
                      settableData(
                        tableData.map((item) => {
                          if (item.id == Access.id) {
                            return {
                              ...item,
                              status: "canceled",
                            };
                          } else {
                            return item;
                          }
                        })
                      );
                      setAccess(emptyAccess);
                    }}
                  >
                    не согласен
                  </Button>
                  <Button
                    size="sm"
                    startIcon={<CheckLineIcon className="size-5 text-white" />}
                    onClick={() => {
                      closeModal();
                      settableData(
                        tableData.map((item) => {
                          if (item.id == Access.id) {
                            return {
                              ...item,
                              status: "success",
                            };
                          } else {
                            return item;
                          }
                        })
                      );
                      setAccess(emptyAccess);
                    }}
                  >
                    подписать
                  </Button>
                </>
              )}
            </div>

            {timer && (
              <>
                {" "}
                <div className="flex gap-2 pt-4  px-2">
                  {options.map((opt) => (
                    <Button
                      key={opt.value}
                      onClick={() => {
                        // closeModal();

                        setTimer(opt.value);
                      }}
                      variant={timer === opt.value ? "primary" : "outline"}
                      className={`px-4 py-2 rounded-full border `}
                    >
                      {opt.label}
                    </Button>
                  ))}
                </div>
                <div className="flex gap-2 pt-4  px-2 lg:justify-end">
                  <Button
                    size="sm"
                    startIcon={<CheckLineIcon className="size-5 text-white" />}
                    onClick={() => {
                      closeModal();

                      settableData(
                        tableData.map((item) => {
                          if (item.id == Access.id) {
                            return {
                              ...item,
                              status: "timer",
                              timer: timer,
                            };
                          } else {
                            return item;
                          }
                        })
                      );
                      setAccess(emptyAccess);
                    }}
                  >
                    включить ожидания
                  </Button>{" "}
                </div>
              </>
            )}
          </form>
        </div>
      </Modal>
    </div>
  );
}
