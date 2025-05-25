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
import TestsTable from "../../components/tables/test/testsTable";
export interface Test {
    name?: string;
    image?: string;
    section?: string;
    book?: string
}

export default function TestsPage() {
    const { isOpen, openModal, closeModal } = useModal();
    const handleAdding = () => {
        // Handle save logic here

        console.log("handleAdding...");

        closeModal();
        setTest(emptyTest);
    };
    let emptyTest: Test = {
        name: "",
        image: "",
    };
    let [Test, setTest] = useState<Test>(emptyTest);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log("Selected file:", file.name);
        }
    };





    const all_Book_options = [
        { value: "Book 1", label: "Book 1" },
        { value: "Book 2", label: "Book 2" },
        { value: "Book 3", label: "Book 3" },
    ];

    const all_sections_options = [
        { value: "Section 1", label: "Section 1" },
        { value: "Section 2", label: "Section 2" },
        { value: "Section 3", label: "Section 3" },
    ];

    return (
        <>
            <PageMeta title="Tests | HC Dashboard" description="HC Dashboard" />
            <PageBreadcrumb pageTitle="Tests" />

            <div className="space-y-6 ">

                <ComponentCard
                    title="Tests Table"
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
                                    setTest(emptyTest);
                                    openModal();
                                }}
                            >
                                Add Test
                            </Button>
                        </div>
                    }
                >
                    <TestsTable />
                </ComponentCard>
            </div>
            <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
                <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
                    <div className="px-2 pr-14">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            Add Test
                        </h4>
                        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                            Create new Test with full details.
                        </p>
                    </div>
                    <form className="flex flex-col">
                        <div className="px-2 overflow-y-auto custom-scrollbar">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">

                                <div>
                                    <Label>Book</Label>
                                    <Select
                                        options={all_Book_options}
                                        className="dark:bg-dark-900"
                                        defaultValue={`${Test.section}`}
                                        onChange={() => { }}

                                    />
                                </div>

                                <div>
                                    <Label>Section</Label>
                                    <Select
                                        options={all_sections_options}
                                        className="dark:bg-dark-900"
                                        defaultValue={`${Test.section}`}
                                        onChange={() => { }}

                                    />
                                </div>

                                <div>
                                    <Label>Name</Label>
                                    <Input
                                        type="text"
                                        value={Test.name}
                                        onChange={(e) =>
                                            setTest({
                                                ...Test,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div>
                                    <Label>File</Label>
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
