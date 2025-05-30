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
import Select from "../../components/form/Select";
import FileInput from "../../components/form/input/FileInput";
import UsersTable from "../../components/sidebar tables/tables/userTable";
export interface User {
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  Fillial_id?: string
}
export default function UsersPage() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleAdding = () => {
    // Handle save logic here

    console.log("handleAdding...");

    closeModal();
    setUser(emptyUser);
  };
  let emptyUser: User = {
    firstName: "",
    lastName: "",
    phone: "901234567",
    password: "12345678",
     
  };

  
  let [User, setUser] = useState<User>(emptyUser);

  const options = [
    { value: "Mirobod", label: "Mirobod" },
    { value: "Chilonzor", label: "Chilonzor" },
    { value: "Yunusobod", label: "Yunusobod" },
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
        title="Foydalanuvchilar | HK Dashboard"
        description="HK Dashboard"
      />
      <PageBreadcrumb pageTitle="Foydalanuvchilar" />
   
       <div className="space-y-6 ">
       
       
         <ComponentCard
          title="Foydalanuvchilar ro'yxati"
          action={
            <>
              <Button
                size="sm"
                variant="primary"
                startIcon={<PlusIcon className="size-5 fill-white" />}
                onClick={()=>{
                  setUser(emptyUser)
                  openModal()
                }}
              >
                 Foydalanuvchi qo'shish
              </Button>
            </>
          }
        >
          <UsersTable />
        </ComponentCard>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Foydalanuvchi qo'shish
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Create new User with full details.
            </p>
          </div>
          <form className="flex flex-col">
            <div className="px-2 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                <div>
                  <Label>Firstname</Label>
                  <Input
                    type="text"
                    value={User.firstName}
                    onChange={(e) =>
                      setUser({
                        ...User,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <Label>Lastname</Label>
                  <Input
                    type="text"
                    value={User.lastName}
                    onChange={(e) =>
                      setUser({
                        ...User,
                        lastName: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <Label>Phonenumber</Label>
                  <Input
                    type="text"
                    value={User.phone}
                    onChange={(e) =>
                      setUser({
                        ...User,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <Label>Password</Label>
                  <Input
                    type="text"
                    value={User.password}
                    onChange={(e) =>
                      setUser({
                        ...User,
                        password: e.target.value,
                      })
                    }
                  />
                </div>

                
                <div>
                  <Label>Fillial</Label>
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
                Yopish
              </Button>
              <Button size="sm" onClick={handleAdding}>
                Saqlash
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
