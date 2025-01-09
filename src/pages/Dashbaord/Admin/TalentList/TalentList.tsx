import React, { useState } from "react";
import DashboardCard from "../../../../components/Reusable/DashboardCard/DashboardCard";
import DashboardHeader from "../../../../components/Reusable/DashboardHeader/DashboardHeader";
import AddTalent from "../../../../components/AddTalent/AddTalent";
import TransactionHistory from "../../../../components/ReferralPayoutsPage/TransactionHistory";

const TalentList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <DashboardHeader
          pageName="Talent List"
          pageDesc="Write something here."
        />
        <button
          onClick={handleOpenModal}
          className="px-[14px] py-4 bg-primary-10 text-white text-base font-medium leading-5 tracking-tighter rounded-[10px]"
        >
          Add a Talent
        </button>
      </div>
      <div className="grid grid-cols-4 items-center w-full gap-4">
        <DashboardCard title="Total Courses" count={5} />
        <DashboardCard title="Total Courses" count={5} />
        <DashboardCard title="Total Courses" count={5} />
        <DashboardCard title="Total Courses" count={5} />
      </div>
      <TransactionHistory />
      <AddTalent isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default TalentList;
