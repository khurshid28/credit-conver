import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";

import { BoxIcon, DeleteIcon, DownloadIcon, PlusIcon, TrashBinIcon } from "../../icons";
import Button from "../../components/ui/button/Button";
import { useModal } from "../../hooks/useModal";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import { Modal } from "../../components/ui/modal";
import { useState } from "react";
import FileInput from "../../components/form/input/FileInput";
import Select from "../../components/form/Select";
import MultiSelect from "../../components/form/MultiSelect";
import ScoringModelsTable from "../../components/sidebar tables/tables/scoring-modelsTable";
import Checkbox from "../../components/form/input/Checkbox";
export interface ScoringModel {
  name?: string;
  product: {
    name: string;
  },
  createdAt: Date;
  ball?: string;
  count?: number;
  ariza_count?: number;
  status?: string;
  creteries?: CreteriaModel[];
}

export interface CreteriaModel {
  id: number;
  type?: string;
  value_type?: "Ko'proq" | "Kamroq" | "Ko'proq va teng" | "Kamroq va teng";
  value?: string;
}

export const all_creteriya = [
  {
    value: `Katm bali 200 balldan yuqori bolishi`,
    label: "Katm bali 200 balldan yuqori bolishi",
  },
  {
    value: "Qarz oluvchining hisob raqami asosiy bo'lishi",
    label: "Qarz oluvchining hisob raqami asosiy bo'lishi",
  },
  {
    value:
      "Kreditlar boyicha oxirgi 60 oy ichida 180 kundan oshgan muddati otgan qarzdorliklar soni",
    label:
      "Kreditlar boyicha oxirgi 60 oy ichida 180 kundan oshgan muddati otgan qarzdorliklar soni",
  },
  {
    value: "Qarz oluvchining kredit yuklamasi korsatkichi",
    label: "Qarz oluvchining kredit yuklamasi korsatkichi",
  },
];



export const all_products = [
  {
    value: `"Oson" avtokrediti`,
    label: `"Oson" avtokrediti`,
  },

  {
    value: `Biznes uchun avtokredit`,
    label: `Biznes uchun avtokredit`,
  },



  {
    value: `Savdoni moliyalashtirish`,
    label: `Savdoni moliyalashtirish`,
  },

  {
    value: `Overdraft`,
    label: `Overdraft`,
  },

  {
    value: `"Taraqqiyot" krediti`,
    label: `"Taraqqiyot" krediti`,
  },





  {
    value: `"Tezkor" krediti`,
    label: `"Tezkor" krediti`,
  },
  {
    value: `"Yengil start" krediti`,
    label: `"Yengil start" krediti`,
  },
  {
    value: `"Imkoniyat" krediti`,
    label: `"Imkoniyat" krediti`,
  },

  {
    value: `«Kelajakka qadam»`,
    label: `«Kelajakka qadam»`,
  },


  {
    value: `National Green`,
    label: `National Green`,
  },


  {
    value: `Servis sohasini rivojlantirish`,
    label: `Servis sohasini rivojlantirish`,
  },
  {
    value: `Xorijiy kredit liniyalari`,
    label: `Xorijiy kredit liniyalari`,
  },




];
export default function ScoringModelsPage() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleAdding = () => {
    // Handle save logic here

    console.log("handleAdding...");

    closeModal();
    setScoringModel(emptyScoringModel);
  };

  let emptyScoringModel: ScoringModel = {
    name: "",
    createdAt: new Date(),
    ball: "100",
    product: {
      name: ""
    },
    creteries: [
      {
        id: 0,
      },
      // {
      //   id: 1,
      // },
    ],
  };
  let [ScoringModel, setScoringModel] =
    useState<ScoringModel>(emptyScoringModel);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  //   const multiOptions = [
  //     { value: "Group 1", text: "Group 1", selected: false },
  //     { value: "Group 2", text: "Group 2", selected: false },
  //     { value: "Group 3", text: "Group 3", selected: false },
  //   ];

  //   const all_Subject_options = [
  //     { value: "Subject 1", label: "Subject 1" },
  //     { value: "Subject 2", label: "Subject 2"},
  //     { value: "Subject 3", label: "Subject 3"},
  //   ];

  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <PageMeta
        title="Models | HC Dashboard"
        description="HC Dashboard"
      />
      <PageBreadcrumb pageTitle="Models" />

      <div className="space-y-6 ">
        <ComponentCard
          title="Models Table"
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
                  setScoringModel(emptyScoringModel);
                  openModal();
                }}
              >
                Add Model
              </Button>
            </div>
          }
        >
          <ScoringModelsTable />
        </ComponentCard>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[800px] m-4">
        <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Add Model
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Create new Model with full details.
            </p>
          </div>
          <form className="flex flex-col">
            <div className="px-2 overflow-y-auto custom-scrollbar pb-4">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 max-h-[380px]">

                <div>
                  <Label>Product</Label>
                  <Select
                    options={all_products}
                    className="dark:bg-dark-900"
                    placeholder="Productni tanglang"
                    onChange={(e) => {
                      //  setScoringModel({
                      //   ...ScoringModel,
                      //   type: e.target.value,
                      // })
                    }}
                  />
                </div>
                <div>


                  <Label>Model nomi</Label>
                  <Input
                    type="text"
                    value={ScoringModel.name}
                    onChange={(e) =>
                      setScoringModel({
                        ...ScoringModel,
                        name: e.target.value,
                      })
                    }
                  />
                </div>


                <div>


                  <Label>O'tish bali</Label>
                  <Input
                    type="text"
                    value={ScoringModel.ball}
                    onChange={(e) =>
                      setScoringModel({
                        ...ScoringModel,
                        ball: e.target.value,
                      })
                    }
                  />
                </div>

                <div></div>


                <div className="col-span-2  px-2">
                  {ScoringModel.creteries?.map((item, index) => (
                    <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 ">
                      <div
                        className="col-span-2 pt-4 mt-4 border-t  border-gray-200 dark:border-gray-800"
                        key={`Mezonlar Bloki-${index}`}
                      >
                        <Label>Mezonlar Bloki</Label>
                        <Select
                          options={all_creteriya}
                          className="dark:bg-dark-900"
                          placeholder="Mezonlar Blokini tanlang"
                          onChange={(e) => {
                            //  setScoringModel({
                            //   ...ScoringModel,
                            //   type: e.target.value,
                            // })
                          }}
                        />
                      </div>

                      <div
                        className="flex items-center gap-3 col-span-2"
                        key={`creteries[index].type-${index}`}
                      >
                        {[
                          "Ko'proq",
                          "Kamroq",
                          "Ko'proq va teng",
                          "Kamroq va teng",
                        ].map((e, i) => (
                          <>
                            <Checkbox
                              checked={
                                (ScoringModel.creteries &&
                                  ScoringModel.creteries[index].type === e) ??
                                false
                              }
                              onChange={(v) => {
                                const updated = {
                                  ...ScoringModel,
                                  creteries: ScoringModel.creteries?.map(
                                    (c, i) =>
                                      i === index ? { ...c, type: e } : c
                                  ),
                                };
                                setScoringModel(updated);
                              }}
                            />
                            <span className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                              {e}
                            </span>
                          </>
                        ))}
                      </div>

                      <div key={`Baholash-${index}`}>
                        <Label>Baholash</Label>
                        <Input
                          type="text"
                          value={
                            (ScoringModel.creteries &&
                              ScoringModel.creteries[index].value) ??
                            ""
                          }
                          onChange={(e) => {
                            let data: ScoringModel = ScoringModel;
                            if (data.creteries) {
                              data.creteries[index].value = e.target.value;
                              setScoringModel({
                                ...ScoringModel,
                                creteries: data.creteries,
                              });
                            }
                          }}
                        />
                      </div>
                      <div></div>
                      {(ScoringModel.creteries ?? []).length > 0 && (
                        <Button
                          size="sm"
                          variant="error"
                          startIcon={
                            <TrashBinIcon className="size-5 fill-white" />
                          }
                          onClick={() => {
                            let creteries = ScoringModel.creteries ?? [];
                            creteries = creteries.filter(
                              (_item, _id) => _id != index
                            );
                            const updated = {
                              ...ScoringModel,
                              creteries: creteries,
                            };

                            setScoringModel(updated);
                          }}
                        >
                          Delete Creteria
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-start">
              <Button
                key={"add creteria"}
                size="sm"
                variant="primary"
                startIcon={<PlusIcon className="size-5 fill-white" />}
                onClick={() => {
                  const prevCreteries = ScoringModel.creteries ?? [];

                  const newId =
                    prevCreteries.length > 0
                      ? prevCreteries[prevCreteries.length - 1].id + 1
                      : 0;

                  const updated = {
                    ...ScoringModel,
                    creteries: [...prevCreteries, { id: newId }],
                  };

                  setScoringModel(updated);
                }}
              >
                Add Creteria
              </Button>
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
