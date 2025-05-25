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
import FirmsTable from "../../components/sidebar tables/tables/firmsTable";
import FileInput from "../../components/form/input/FileInput";
import Select from "../../components/form/Select";
import MultiSelect from "../../components/form/MultiSelect";
export interface Firm {
  name?: string;
  inn?: string;
  section_id? :  string
}

export default function FirmsPage() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleAdding = () => {
    // Handle save logic here

    console.log("handleAdding...");

    closeModal();
    setFirm(emptyFirm);
  };
  let emptyFirm: Firm = {
    name: "",
    inn: "",
  };
  let [Firm, setFirm] = useState<Firm>(emptyFirm);

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

  const all_Subject_options = [
    { value: "Subject 1", label: "Subject 1" },
    { value: "Subject 2", label: "Subject 2"},
    { value: "Subject 3", label: "Subject 3"},
  ];

  return (
    <>
      <PageMeta title="Firms | HC Dashboard" description="HC Dashboard" />
      <PageBreadcrumb pageTitle="Firms" />

      <div className="space-y-6 ">
        
        <ComponentCard
          title="Firms Table"
          action={
            <div className="flex flex-row gap-4">
              <div>
            
              <Button
                size="sm"
                variant="outline"
                endIcon={<DownloadIcon className="size-5 fill-white" />}
              >
                Download
              </Button>
            </div>
              <Button
                size="sm"
                variant="primary"
                startIcon={<PlusIcon className="size-5 fill-white" />}
                onClick={() => {
                  setFirm(emptyFirm);
                  openModal();
                }}
              >
                Add Firm
              </Button>
            </div>
          }
        >
          <FirmsTable />
        </ComponentCard>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Add Firm
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Create new Firm with full details.
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
              defaultValue={`${Firm.section_id}`}
              onChange={()=>{}}
             
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
                Saves
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
