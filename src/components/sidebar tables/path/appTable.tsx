import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import "./index.css";

import Moment from "moment";
import {
  RPProvider,
  RPDefaultLayout,
  RPPages,
  RPConfig,
} from "@pdf-viewer/react";

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
  FiArrowDownCircle,
  FiArrowRight,
  FiArrowRightCircle,
  FiCheck,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";
import moment from "moment";

// Define the table data using the interface

export default function AppTable() {
  const { isOpen, openModal, closeModal } = useModal();

  // Pationation

  return (
    <div className="relative px-5 py-3 w-full inline-flex flex-col rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className=" w-full flex flex-row justify-center font-bold text-blue-500 text-start text-md dark:text-blue-400  ">
        Договор{" "}
        <span className="pl-1 text-gray-500 text-md dark:text-gray-400">
          № 4 - 16 от 27.07.2025
        </span>
      </div>

      <span className="pb-4 w-full flex flex-row justify-center font-medium text-gray-500 text-start text-sm dark:text-gray-400 ">
        на <span className= "pl-1 text-blue-500  dark:text-blue-400">'Biznes uchun avtokredit'</span>
      </span>

      <div className="pt-4  font-medium text-gray-500 text-start text-md dark:text-gray-400">
        Сумма:{" "}
        <span className="text-blue-500  dark:text-blue-400 ">
          490 000 000,00 UZS
        </span>
      </div>

      <div className="  font-medium text-gray-500 text-start text-md dark:text-gray-400">
        Льготный период:{" "}
        <span className="text-blue-500  dark:text-blue-400 ">3 месяц</span>
      </div>

      <div className="  font-medium text-gray-500 text-start text-md dark:text-gray-400">
        Срок действия :{" "}
        <span className="text-blue-500  dark:text-blue-400 ">
          c 29.08.2025 до 29.07.2029
        </span>
      </div>


       <div className="  font-medium text-gray-500 text-start text-md dark:text-gray-400">
        Ответ Скоринга :{" "}
        <span className="text-blue-500  dark:text-blue-400 ">
         Успешно
        </span>
      </div>

      

      <div className="  font-medium text-gray-500 text-start text-md dark:text-gray-400">
        Резидент банка:{" "}
        <span className="text-blue-500  dark:text-blue-400 ">Да</span>
      </div>

        <div className="pb-8  font-medium text-gray-500 text-start text-md dark:text-gray-400">
        Залог: <span className="text-blue-500  dark:text-blue-400 ">Да</span>
      </div>

      <div className="  font-medium text-gray-500 text-start text-md dark:text-gray-400">
        Организация :{" "}
        <span className="text-blue-500  dark:text-blue-400 ">
          Sardor Shirinliklari Mchj
        </span>
      </div>

    

      <div className="  font-medium text-gray-500 text-start text-md dark:text-gray-400">
        Оператор банка:{" "}
        <span className="text-blue-500  dark:text-blue-400 ">Sherzod M </span> (
        27.07.2025 )
      </div>


      <div className="  font-medium text-gray-500 text-start text-md dark:text-gray-400">
        Email:{" "}
        <span className="text-blue-500  dark:text-blue-400 ">sardorshirinlik@mail.ru </span>
      </div>



    <div className="  font-medium text-gray-500 text-start text-md dark:text-gray-400">
        Address:{" "}
        <span className="text-blue-500  dark:text-blue-400 "> г. Ташкент, Шайхантахурский район, ул. Коратош, 1 </span>
      </div>

  <div className="absolute w-80 md:w-120   bottom-0 right-0 ">
              <img
                src={`/images/product/product-1.webp`}
                alt="avto"
                className="w-full h-auto object-contain "
              />
            </div>

      {/* {docs.map((item, index) => (
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
      ))} */}

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[800px] m-4">
        <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Документ
            </h4>
          </div>
          {/* <form className="flex flex-col">
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
          </form> */}

          {/* <RPConfig>
            <RPProvider src="https://www.princexml.com/samples/textbook/somatosensory.pdf" >
              <RPDefaultLayout style={{ height: "420px" }} >
                <RPPages />
              </RPDefaultLayout>
            </RPProvider>
          </RPConfig> */}

          <iframe
            src="document.pdf"
            className="min-h-[400px] min-w-[700px]"
            title="PDF Viewer"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>
      </Modal>
    </div>
  );
}
