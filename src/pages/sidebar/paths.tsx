import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";

import { BoxIcon, DownloadIcon, PlusIcon } from "../../icons";
import Button from "../../components/ui/button/Button";
import { useModal } from "../../hooks/useModal";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import { Modal } from "../../components/ui/modal";
import { useState } from "react";

import FileInput from "../../components/form/input/FileInput";
import Select from "../../components/form/Select";
import MultiSelect from "../../components/form/MultiSelect";
import AccesssTable from "../../components/sidebar tables/path/accessTable";
import DocsTable from "../../components/sidebar tables/path/docsTable";
import InfoTable from "../../components/sidebar tables/path/infoTable";
import AppTable from "../../components/sidebar tables/path/appTable";

export default function PathsPage() {
  const { isOpen, openModal, closeModal } = useModal();

  const [selected, setSelected] = useState<"1" | "2" | "3" | "4" >(
    "1"
  );

  const getButtonClass = (option: "1" | "2" | "3" | "4" ) =>
    selected === option
      ? "shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
      : "text-gray-500 dark:text-gray-400";

  function body() {
    let content;

    switch (selected) {
      case "1":
        content = <AppTable />;
        break;
      case "2":
        content = <InfoTable />;
        break;
      case "3":
        content = <AccesssTable />;
        break;

      case "4":
        content = <DocsTable />;
        break;

      default:
        content = <></>;
    }

    return <div>{content}</div>;
  }
  return (
    <>
      <PageMeta
        title="Hujjatlar aylanmasi | HK Dashboard"
        description="HK Dashboard"
      />
      <PageBreadcrumb pageTitle="Hujjatlar aylanmasi" />

      <div className="space-y-6 ">
        <ComponentCard
          title="Hujjatlar aylanmasi jadvali"
          action={
            <div className="flex flex-row gap-4">
              <div>
                <Button
                  size="sm"
                  variant="outline"
                  endIcon={<DownloadIcon className="size-5 fill-white" />}
                >
                  Yuklash
                </Button>
              </div>
            </div>
          }
        >
          {/* <PathsTable /> */}

          <div className="inline-flex  items-center gap-8 rounded-lg bg-gray-100 p-1 dark:bg-gray-900 flex-wrap">
            <button
              onClick={() => setSelected("1")}
              className={`px-3 py-2 font-medium  rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white ${getButtonClass(
                "1"
              )}`}
            >
              Обзор
            </button>

            <button
              onClick={() => setSelected("2")}
              className={`px-3 py-2 font-medium  rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white ${getButtonClass(
                "2"
              )}`}
            >
              Реквизиты
            </button>

            <button
              onClick={() => setSelected("3")}
              className={`px-3 py-2 font-medium  rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white ${getButtonClass(
                "3"
              )}`}
            >
              Обработка (2)
            </button>

            {/* <button
              onClick={() => setSelected("4")}
              className={`px-3 py-2 font-medium  rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white ${getButtonClass(
                "4"
              )}`}
            >
              Категории
            </button> */}

            <button
              onClick={() => setSelected("4")}
              className={`px-3 py-2 font-medium  rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white ${getButtonClass(
                "4"
              )}`}
            >
              Документы (4)
            </button>

            {/* <button
              onClick={() => setSelected("6")}
              className={`px-3 py-2 font-medium  rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white ${getButtonClass(
                "6"
              )}`}
            >
              Доступ (4)
            </button>*/}
          </div> 

          {body()}
        </ComponentCard>
      </div>
    </>
  );
}
