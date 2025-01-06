import { Outlet } from "react-router-dom";

const CourseVideoLayout = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default CourseVideoLayout;
