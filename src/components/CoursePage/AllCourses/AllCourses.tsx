import Container from "../../Shared/Container/Container";
import CourseCard from "./CourseCard";
import { TCourse } from "./course.types";
import CourseCardLoader from "../../Loaders/CourseCardLoader/CourseCardLoader";
import Ripple from "../../Reusable/Ripple/Ripple";
import { useGetAllCategoriesQuery } from "../../../redux/Features/Course/courseApi";
import NoDataFound from "../../Shared/NoDataFound/NoDataFound";

type TAllCourses = {
  allCourses: {
    courses: TCourse[];
  };
  isLoading: boolean;
  isFetching: boolean;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const AllCourses: React.FC<TAllCourses> = ({
  allCourses,
  isLoading,
  isFetching,
  selectedCategory,
  setSelectedCategory,
}) => {
  const { data: allCategories, isLoading: isCategoriesLoading } = useGetAllCategoriesQuery({});

  const filteredCourses =
    selectedCategory === "All Courses"
      ? allCourses?.courses
      : allCourses?.courses.filter((course: TCourse) => course?.category === selectedCategory);

  return (
    <Container>
      <div className="font-Inter py-[96px] flex flex-col gap-20">
        {/* Categories */}
        <div className="w-full overflow-x-auto lg:flex lg:justify-center">
          <div className="flex items-center gap-4 min-w-max">
            {isCategoriesLoading ? (
              [1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="h-[44px] w-[120px] bg-neutral-200 rounded-[100px] animate-pulse"
                ></div>
              ))
            ) : (
              <>
                {/* All Courses Button */}
                <Ripple styles="rounded-[100px]">
                  <button
                    onClick={() => setSelectedCategory("All Courses")}
                    className={`${selectedCategory === "All Courses"
                      ? "bg-primary-10 border-primary-10 text-white font-semibold"
                      : "border-neutral-10 bg-white text-neutral-10 font-medium"
                      } transition duration-700 text-xl leading-7 border px-5 py-3 flex items-center gap-[10px] rounded-[100px] whitespace-nowrap capitalize`}
                  >
                    All Courses
                  </button>
                </Ripple>

                {/* Dynamically Loaded Categories */}
                {allCategories?.categories?.map((category: string) => (
                  <Ripple key={category} styles="rounded-[100px]">
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`${category === selectedCategory
                        ? "bg-primary-10 border-primary-10 text-white font-semibold"
                        : "border-neutral-10 bg-white text-neutral-10 font-medium"
                        } transition duration-700 text-xl leading-7 border px-5 py-3 flex items-center gap-[10px] rounded-[100px] whitespace-nowrap capitalize`}
                    >
                      {category}
                    </button>
                  </Ripple>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Courses */}
        {isLoading || isFetching ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1000px] mx-auto">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <CourseCardLoader key={index} />
            ))}
          </div>
        ) : filteredCourses?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {filteredCourses.map((course: TCourse) => (
              <CourseCard key={course._id} {...course} />
            ))}
          </div>
        ) : (
          <NoDataFound message="No course found." />
        )}


        {/* Load More Button */}
        {allCourses?.courses?.length > 6 && (
          <div className="flex items-center justify-center">
            <button className="py-3 px-5 bg-[#0051FF] text-white text-xl font-semibold leading-7 rounded-[100px]">
              Load More Courses
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default AllCourses;
