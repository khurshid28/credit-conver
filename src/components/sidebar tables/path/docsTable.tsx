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

export interface Doc {
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

export default function DocsTable() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleAdding = () => {
    // Handle save logic here

    console.log("handleAdding...");

    closeModal();
    setDoc(emptyDoc);
  };
  let emptyDoc: Doc = {
    name: "",
    image: "",
    section_id: "",
  };
  let [Doc, setDoc] = useState<Doc>(emptyDoc);

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

  let docs: {
    name: string;
    exist: boolean;
    by?: {
      name: string;
      role: string;
    };
  }[] = [
    {
      name: "Заявления",
      exist: true,
      by: {
        name: "Sherzod M",
        role: "Operator",
      },
    },
    {
      name: "Обаротка",
      exist: true,
      by: {
        name: "Sherzod M",
        role: "Operator",
      },
    },
    {
      name: "Сертификат компании",
      exist: true,
      by: {
        name: "Sherzod M",
        role: "Operator",
      },
    },
    {
      name: "Устав",
      exist: false,
    },
    {
      name: "Учредительская соглашения",
      exist: true,
      by: {
        name: "Malika T.L",
        role: "Operator",
      },
    },
    {
      name: "Залог",
      exist: false,
    },
  ];
  return (
    <div className="w-full inline-flex flex-col rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      {docs.map((item, index) => (
        <div className="px-5 py-3  gap-8 item-center flex flex-row items-center ">
          <Button
            size="sm"
            variant="outline"
            onClick={item.exist ? openModal : () => {}}
            endIcon={
              <div className="flex flex-row item-center h-full gap-2">
                <FileIcon className="size-5 fill-white" />{" "}
                {item.exist && (
                  <FiCheckCircle className="text-green-500 dark:text-green-400 size-5 " />
                )}{" "}
              </div>
            }
          >
            {item.name}
          </Button>
          {item.exist ? (
            <div className="flex flex-row items-center gap-4">
              <p className="font-medium text-gray-500 text-start text-sm dark:text-gray-400">
                сохранено :{" "}
                {moment()
                  .subtract(150 + index, "minutes")
                  .format("DD.MM.YYYY HH:mm")}
              </p>
              <p className="text-gray-500 text-xl dark:text-gray-400">|</p>
              <UserCircleIcon className="text-brand-500 dark:text-brand-400 size-5 " />

              <div>
                <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                  {item.by?.name}
                </span>
                <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                  {item.by?.role}
                </span>
              </div>
            </div>
          ) : (
            <p className="font-medium text-gray-500 text-start text-sm dark:text-gray-400 ">
              не сохранено
            </p>
          )}
        </div>
      ))}

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Документ
            </h4>
          </div>
          <form className="flex flex-col">
            <div className="px-2 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2"></div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button size="sm" onClick={handleAdding}>
                Save
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
