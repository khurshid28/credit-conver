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

export default function InfoTable() {
  const { isOpen, openModal, closeModal } = useModal();





  return (
    <div className="relative  px-5 py-3  inline-flex flex-col rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="pb-2  font-medium text-gray-500 text-start text-md dark:text-gray-400  border-b border-gray-200  dark:border-white/[0.05] ">
        Sardor Shirinliklari Mchj
      </div>
      <div className="pt-2  font-medium text-gray-500 text-start text-md dark:text-gray-400">
        Address : г. Ташкент, Шайхантахурский район, ул. Коратош, 1
      </div>

      <div className="  font-medium text-gray-500 text-start text-md dark:text-gray-400">
        Tel: (+99871) 238-69-61
      </div>

      <div className="  font-medium text-gray-500 text-start text-md dark:text-gray-400">
        P/c 20208000900600293001
      </div>

      <div className="  font-medium text-gray-500 text-start text-md dark:text-gray-400">
        AO Bank
      </div>

      <div className="  font-medium text-gray-500 text-start text-md dark:text-gray-400">
        MFO - 00417
      </div>

      <div className="  font-medium text-gray-500 text-start text-md dark:text-gray-400">
        INN - 201441023
      </div>

      <div className="  font-medium text-gray-500 text-start text-md dark:text-gray-400">
        OKED - 94120
      </div>

       <FileIcon
        className="absolute bottom-4 right-4 text-gray-500 cursor-pointer hover:text-blue-500 size-8"
        onClick={openModal}
        
      />

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
