import { Outlet } from "react-router-dom";
import ScrollToTop from "../../hooks/useScrollToTop";

const CourseVideoLayout = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full">
        <Outlet />
      </div>
      <ScrollToTop/>
    </div>
  );
};

export default CourseVideoLayout;
