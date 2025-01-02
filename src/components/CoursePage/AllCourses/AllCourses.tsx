/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Shared/Container/Container";
import CourseCard from "./CourseCard";
import { TCourse } from "./course.types";

const AllCourses = () => {
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

    const courses: TCourse[] = [
        {
            _id: "1",
            title: "UI UX Design Decoded",
            instructor: "Pani Puri",
            enrolled: "300+ Enrolled",
            rating: 4.5,
            image: IMAGES.courseImg,
            category: "Design",
        },
        {
            _id: "2",
            title: "React for Beginners",
            instructor: "John Smith",
            enrolled: "500+ Enrolled",
            rating: 4.8,
            image: IMAGES.courseImg,
            category: "Development",
        },
        {
            _id: "3",
            title: "Mastering JavaScript",
            instructor: "Jane Doe",
            enrolled: "700+ Enrolled",
            rating: 4.7,
            image: IMAGES.courseImg,
            category: "IT & Software",
        },
        {
            _id: "4",
            title: "Business Strategy Essentials",
            instructor: "Alice Brown",
            enrolled: "1,000+ Enrolled",
            rating: 4.9,
            image: IMAGES.courseImg,
            category: "Business",
        },
    ];

    const designCourses = courses.filter((course) => course.category === "Design");
    const developmentCourses = courses.filter((course) => course.category === "Development");
    const itSoftwareCourses = courses.filter((course) => course.category === "IT & Software");
    const businessCourses = courses.filter((course) => course.category === "Business");



    return (
        <Container>
            <div className="font-Inter py-[96px] flex flex-col gap-20">
                {/* Categories */}
                <div className="flex items-center justify-center gap-4">
                    {
                        categories?.map((category) =>
                            <button onClick={() => setSelectedCategory(category?.name)} key={category?.name} className={`${category?.name === selectedCategory ? "bg-primary-10 border-primary-10 text-white font-semibold" : "border-neutral-10 bg-white text-neutral-10 font-medium"} text-xl leading-7 border px-5 py-3 flex items-center gap-[10px] rounded-[100px]`}>
                                {
                                    category?.icon &&
                                    <img src={category.icon} alt="" />
                                }
                                {category?.name}
                            </button>
                        )
                    }
                </div>

                {/* Courses */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
                    {
                        selectedCategory === "All Courses" ? courses.map((course) => <CourseCard key={course._id} {...course} />)
                            : selectedCategory === "Design" ? designCourses.map((course) => <CourseCard key={course._id} {...course} />)
                                : selectedCategory === "Development" ? developmentCourses.map((course) => <CourseCard key={course._id} {...course} />)
                                    : selectedCategory === "IT & Software" ? itSoftwareCourses.map((course) => <CourseCard key={course._id} {...course} />)
                                        : businessCourses.map((course) => <CourseCard key={course._id} {...course} />)
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