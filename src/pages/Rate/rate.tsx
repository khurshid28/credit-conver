import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import RatesTable from "../../components/tables/rate/RatesTable";

export default function RatePage() {
  return (
    <>
      <PageMeta
        title="HC Dashboard"
        description="HC Dashboard"
      />
      <PageBreadcrumb pageTitle="Rates" />
      <div className="space-y-6">
        <ComponentCard title="Rates Table">
          <RatesTable />
        </ComponentCard>
      </div>
    </>
  );
}
