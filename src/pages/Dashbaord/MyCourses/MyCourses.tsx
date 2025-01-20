import MyCoursesCardLoader from "../../../components/Loaders/MyCourseCardLoader/MyCourseCardLoader";
import MyCoursesCard from "../../../components/MyCoursesPage/MyCoursesCard";
import { useGetMyPurchasedCoursesQuery } from "../../../redux/Features/User/userApi";

const MyCourses = () => {
  const {data:myPurchasedCourses, isLoading} = useGetMyPurchasedCoursesQuery({});
  console.log(myPurchasedCourses);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-neutral-90">My Courses</h1>
        <p className="text-neutral-90">Write something here</p>
      </div>
      <div className="grid grid-cols-3 2xl:grid-cols-4 gap-6">
        {
        isLoading ? 
        [1,2,3,4].map((_ , index) => 
          <MyCoursesCardLoader key={index} />
        )
        :
        myPurchasedCourses?.purchasedCourses?.map((course) => (
          <MyCoursesCard key={course._id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
