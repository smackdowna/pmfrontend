
const CourseCardLoader: React.FC = () => {
    return (
        <div className="bg-white border border-neutral-45 rounded-[24px] font-Inter w-[312px] h-[410px] relative animate-pulse">
            <div className="rounded-t-[24px] w-full h-[182px] bg-neutral-200"></div>
            <div className="bg-white py-1 px-2 flex items-center gap-[2px] w-fit text-white font-medium text-sm absolute top-4 right-4 rounded-[12px]">
                <div className="bg-neutral-300 rounded-full h-[14px] w-[14px]"></div>
                <div className="h-[14px] w-8 bg-neutral-300 rounded"></div>
            </div>

            <div className="p-5 flex flex-col gap-4">
                <div className="flex items-center gap-[2px] py-1 px-2 bg-neutral-50 rounded-[12px] w-fit">
                    <div className="bg-neutral-300 rounded-full h-[14px] w-[14px]"></div>
                    <div className="h-[14px] w-12 bg-neutral-300 rounded"></div>
                </div>

                <div className="h-[20px] w-3/4 bg-neutral-300 rounded"></div>

                <div className="flex items-center gap-2">
                    <div className="bg-neutral-300 rounded-full h-8 w-8"></div>
                    <div className="h-[16px] w-1/2 bg-neutral-300 rounded"></div>
                </div>

                <div className="bg-neutral-300 border border-neutral-55 py-[10px] px-4 text-sm leading-5 font-semibold w-full rounded-lg text-center">
                    <div className="h-[14px] w-1/3 bg-neutral-300 mx-auto rounded"></div>
                </div>
            </div>
        </div>
    );
};

export default CourseCardLoader;
