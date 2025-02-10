import Skeleton from "react-loading-skeleton";

const DashboardStatusCardLoader = () => {
    return (
        <div className="p-4 bg-white rounded-lg border-[1px] border-[#E2E8F0] flex flex-col gap-2 h-[106px]">
            <Skeleton highlightColor='#ffffff' width={150} height={20} />
            <Skeleton  width={40} height={20} />
        </div>
    );
};

export default DashboardStatusCardLoader;