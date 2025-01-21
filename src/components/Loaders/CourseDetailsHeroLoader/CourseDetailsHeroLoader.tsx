import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CourseDetailsHeroLoader = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row gap-12 justify-between py-6 md:py-12 xl:py-[80px]">
            <div className="flex flex-col justify-center">
                <Skeleton baseColor="#122755" highlightColor="#8a8b8c" height={24} width={100} />
                <h1 className="mt-1 w-full md:w-[500px] xl:w-[650px]">
                    <Skeleton baseColor="#122755" highlightColor="#8a8b8c" height={40} width={`100%`} />
                </h1>
                <p className="mt-1 max-w-[599px]">
                    <Skeleton baseColor="#122755" highlightColor="#8a8b8c" count={3} />
                </p>

                <div className="flex items-center gap-6 mt-1">
                    <div className="flex items-center gap-2">
                        <Skeleton baseColor="#122755" highlightColor="#8a8b8c" circle={true} height={40} width={40} />
                        <Skeleton baseColor="#122755" highlightColor="#8a8b8c" width={150} />
                    </div>

                    <span className="text-neutral-10 text-lg">|</span>

                    <div className="flex items-center gap-2">
                        <Skeleton baseColor="#122755" highlightColor="#8a8b8c" width={50} />
                        <Skeleton baseColor="#122755" highlightColor="#8a8b8c" width={50} />
                    </div>
                </div>

                <div className="flex items-center gap-5 mt-7">
                    <Skeleton baseColor="#122755" highlightColor="#8a8b8c" height={40} width={150} />
                    <Skeleton baseColor="#122755" highlightColor="#8a8b8c" height={40} width={120} />
                </div>
            </div>

            <Skeleton baseColor="#122755" highlightColor="#8a8b8c" height={300} width={500} className="h-[349px] xl:max-h-[300px] w-full max-w-full xl:max-w-[404px] rounded-2xl" />
        </div>
    );
};

export default CourseDetailsHeroLoader;
