import { MouseEventHandler } from "react";

interface DashboardCardProps {
  title: string;
  count?: string | number;
  width?: string;
  onClick ? : MouseEventHandler<HTMLButtonElement> | undefined;
}

const DashboardCard = ({ title, count, onClick }: DashboardCardProps) => {
  return (
    <button onClick={onClick}
      className={`flex flex-col gap-2 p-4 bg-white rounded-lg border-[1px] border-[#E2E8F0] font-Inter w-[218px]`}
    >
      <span className="text-[#6B788E] text-base font-normal leading-6 tracking-tight">
        {title}
      </span>
      <span className="text-[#15294B] text-4xl font-bold leading-10 tracking-[-1px]">
        {count}
      </span>
    </button>
  );
};

export default DashboardCard;
