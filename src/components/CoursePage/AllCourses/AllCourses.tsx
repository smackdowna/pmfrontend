/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ICONS } from "../../../assets";
import Container from "../../Shared/Container/Container";
import CourseCard from "./CourseCard";
import { TCourse } from "./course.types";
import { useGetAllCoursesQuery } from "../../../redux/Features/Course/courseApi";

const AllCourses = () => {
    const { data: allCourses } = useGetAllCoursesQuery({})
    console.log(allCourses);
    const [selectedCategory, setSelectedCategory] = useState("All Courses");
    const categories = [
        {
            name: "All Courses",

        },
        {
            name: "Design",
            icon: ICONS.design,
        },
        {
            name: "Development",
            icon: ICONS.development,
        },
        {
            name: "IT & Software",
            icon: ICONS.itSoftware,
        },
        {
            name: "Business",
            icon: ICONS.business,
        },
    ];

    const designCourses = allCourses?.courses.filter((course: TCourse) => course?.category === "Design");
    const developmentCourses = allCourses?.courses.filter((course: TCourse) => course?.category === "web development");
    const itSoftwareCourses = allCourses?.courses.filter((course: TCourse) => course?.category === "IT & Software");
    const businessCourses = allCourses?.courses.filter((course: TCourse) => course?.category === "Business");



    return (
        <Container>
            <div className="font-Inter py-[96px] flex flex-col gap-20">
                {/* Categories */}
                <div className="w-full overflow-x-auto lg:flex lg:justify-center">
                    <div className="flex items-center gap-4 min-w-max">
                        {categories?.map((category) => (
                            <button
                                key={category?.name}
                                onClick={() => setSelectedCategory(category?.name)}
                                className={`${category?.name === selectedCategory
                                        ? "bg-primary-10 border-primary-10 text-white font-semibold"
                                        : "border-neutral-10 bg-white text-neutral-10 font-medium"
                                    } text-xl leading-7 border px-5 py-3 flex items-center gap-[10px] rounded-[100px] whitespace-nowrap`}
                            >
                                {category?.icon && <img src={category.icon} alt="" />}
                                {category?.name}
                            </button>
                        ))}
                    </div>
                </div>



                {/* Courses */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
                    {
                        selectedCategory === "All Courses" ? allCourses?.courses.map((course: TCourse) => <CourseCard key={course._id} {...course} />)
                            : selectedCategory === "Design" ? designCourses.map((course: TCourse) => <CourseCard key={course._id} {...course} />)
                                : selectedCategory === "Development" ? developmentCourses.map((course: TCourse) => <CourseCard key={course._id} {...course} />)
                                    : selectedCategory === "IT & Software" ? itSoftwareCourses.map((course: TCourse) => <CourseCard key={course._id} {...course} />)
                                        : businessCourses.map((course: TCourse) => <CourseCard key={course._id} {...course} />)
                    }
                </div>

                <div className="flex items-center justify-center">
                    <button className="py-3 px-5 bg-[#0051FF] text-white text-xl font-semibold leading-7 rounded-[100px]">Load More Courses</button>
                </div>
            </div>
        </Container>
    );
};

export default AllCourses;