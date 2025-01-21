import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ReferralLoader = () => {
    return (
        <div className="flex flex-row flex-wrap xl:flex-nowrap justify-between items-center gap-6">
            <div className="bg-white w-1/2 rounded-2xl border border-neutral-75 h-[218px] flex flex-col gap-4 justify-between">
                <div className="flex justify-between items-center p-6 pb-0">
                    <div className="flex gap-2">
                        <Skeleton width={100} height={20} />
                        <Skeleton circle={true} height={20} width={20} />
                    </div>
                    <Skeleton width={120} height={30} />
                </div>
                <div className="flex items-center gap-3 px-6">
                    {[...Array(2)].map((_, index) => (
                        <div key={index} className="w-full bg-neutral-60 p-2 rounded-lg flex items-center gap-3">
                            <Skeleton highlightColor='#ffffff' circle={true} height={36} width={36} />
                            <div>
                                <Skeleton width={80} height={15} />
                                <Skeleton width={100} height={20} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border-t border-neutral-45">
                    <div className="flex justify-start gap-2 py-3 items-center p-6">
                        <Skeleton width={150} height={30} />
                        <Skeleton width={80} height={30} />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex w-1/2 gap-5">
                    {[...Array(2)].map((_, index) => (
                        <div key={index} className="flex gap-3 bg-white max-h-[96px] w-full rounded-2xl p-6">
                            <Skeleton circle={true} height={56} width={56} />
                            <div>
                                <Skeleton width={100} height={15} />
                                <Skeleton width={120} height={25} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex gap-3 bg-white max-h-[96px] w-full rounded-2xl p-6 mt-5">
                    <Skeleton circle={true} height={56} width={56} />
                    <div>
                        <Skeleton width={100} height={15} />
                        <Skeleton width={120} height={25} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferralLoader;
