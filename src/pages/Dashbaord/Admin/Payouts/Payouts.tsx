import DashboardHeader from "../../../../components/Reusable/DashboardHeader/DashboardHeader";
import DashboardCard from "../../../../components/Reusable/DashboardCard/DashboardCard";
import TransactionHistory from "../../../../components/ReferralPayoutsPage/TransactionHistory";

const Payouts = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <DashboardHeader pageName="Payouts" pageDesc="Write something here." />
      </div>
      <div className="grid grid-cols-5 items-center w-full  gap-4">
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={"00.00%"} />
      </div>
      <TransactionHistory />
    </>
  );
};

export default Payouts;
