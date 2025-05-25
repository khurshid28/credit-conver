import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import { BoxIcon, PlusIcon } from "../../icons";
import Button from "../../components/ui/button/Button";
import { useModal } from "../../hooks/useModal";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import { Modal } from "../../components/ui/modal";
import { useState } from "react";
import StudentsTable from "../../components/tables/people/studentsTable";
import Select from "../../components/form/Select";
import FileInput from "../../components/form/input/FileInput";
export interface Student {
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  group_id?: string
}
export default function StudentsPage() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleAdding = () => {
    // Handle save logic here

    console.log("handleAdding...");

    closeModal();
    setStudent(emptyStudent);
  };
  let emptyStudent: Student = {
    firstName: "",
    lastName: "",
    phone: "901234567",
    password: "12345678",
     
  };

  
  let [Student, setStudent] = useState<Student>(emptyStudent);

  const options = [
    { value: "Group 1", label: "Group 1" },
    { value: "Group 2", label: "Group 2" },
    { value: "Group 3", label: "Group 3" },
  ];
  let [optionValue, setoptionValue] = useState("");

  const handleSelectChange = (value: string) => {
    setoptionValue(value);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };
  return (
    <>
      <PageMeta
        title="Students | HC Dashboard"
        description="HC Dashboard"
      />
      <PageBreadcrumb pageTitle="Students" />
   
       <div className="space-y-6 ">
       
       
         <ComponentCard
          title="Students Table"
          action={
            <>
              <Button
                size="sm"
                variant="primary"
                startIcon={<PlusIcon className="size-5 fill-white" />}
                onClick={()=>{
                  setStudent(emptyStudent)
                  openModal()
                }}
              >
                Add Student
              </Button>
            </>
          }
        >
          <StudentsTable />
        </ComponentCard>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Add Student
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Create new Student with full details.
            </p>
          </div>
          <form className="flex flex-col">
            <div className="px-2 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                <div>
                  <Label>Firstname</Label>
                  <Input
                    type="text"
                    value={Student.firstName}
                    onChange={(e) =>
                      setStudent({
                        ...Student,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <Label>Lastname</Label>
                  <Input
                    type="text"
                    value={Student.lastName}
                    onChange={(e) =>
                      setStudent({
                        ...Student,
                        lastName: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <Label>Phonenumber</Label>
                  <Input
                    type="text"
                    value={Student.phone}
                    onChange={(e) =>
                      setStudent({
                        ...Student,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <Label>Password</Label>
                  <Input
                    type="text"
                    value={Student.password}
                    onChange={(e) =>
                      setStudent({
                        ...Student,
                        password: e.target.value,
                      })
                    }
                  />
                </div>

                
                <div>
                  <Label>Group</Label>
                  <Select
              options={options}
              onChange={handleSelectChange}
              className="dark:bg-dark-900"
              defaultValue="5"
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
