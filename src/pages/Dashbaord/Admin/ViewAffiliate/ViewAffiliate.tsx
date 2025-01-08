import { ICONS } from "../../../../assets";
import DashboardCard from "../../../../components/Reusable/DashboardCard/DashboardCard";

const ViewAffiliate = () => {
  return (
    <div className="flex flex-col p-6 bg-[#F8FAFC] gap-8 w-full">
      <div className="flex items-center w-full justify-between">
        <div className="flex gap-[10px] items-center">
          <button>
            <img src={ICONS.arrowLeft} className="w-9 h-9" alt="" />
          </button>
          <span className="text-[#0F172A] font-Inter font-semibold leading-7 tracking-tighter text-2xl">
            View Affiliate
          </span>
        </div>
        <div className="flex items-center gap-[10px]">
          <button className="px-4 py-2 bg-error border-[1px] border-[#DFE2E6] rounded-lg text-white">
            Reject
          </button>
          <button className="px-4 py-2 bg-success border-[#051539] rounded-lg text-white">
            Approve KYC
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-start w-full flex-wrap gap-4">
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={200} />
        <DashboardCard title="Content" count={"00.00%"} />
      </div>
    </div>
  );
};

export default ViewAffiliate;
