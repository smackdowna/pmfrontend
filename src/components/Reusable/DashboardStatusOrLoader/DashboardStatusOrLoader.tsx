import { MouseEventHandler } from "react";
import DashboardStatusCardLoader from "../../Loaders/DashboardStatusCardLoader/DashboardStatusCardLoader";
import DashboardCard from "../DashboardCard/DashboardCard";

type TStatusCardInfo = {
    title: string;
    valueCount: number;
    onClick? : MouseEventHandler<HTMLButtonElement> | undefined;
}
type TDashboardStatusOrLoader = {
    statusCardInfo: TStatusCardInfo[];
    isLoading: boolean;
    loaderCount?: number;
}
const DashboardStatusOrLoader: React.FC<TDashboardStatusOrLoader> = ({ statusCardInfo, isLoading, loaderCount = 4 }) => {
    return (
        <>
            {isLoading ? (
                <div className="grid grid-cols-4 gap-4">
                    {[...Array(loaderCount)].map((_, index) => (
                        <DashboardStatusCardLoader key={index} />
                    ))}
                </div>
            ) : (
                <div className="flex items-center w-full gap-4">
                {statusCardInfo?.map((info:TStatusCardInfo, index:number) => (
                  <DashboardCard
                    key={index}
                    title={info.title}
                    count={info.valueCount || 0}
                    onClick={info?.onClick && info?.onClick}
                  />
                ))}
              </div>
            )}
        </>
    );
};

export default DashboardStatusOrLoader;