import { useState } from "react";
import { ICONS } from "../../../assets";
import Container from "../../Shared/Container/Container";
import CourseCard from "./CourseCard";

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
    ]
    return (
        <Container>
            <div className="font-Inter py-[96px]">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 max-w-[1000px] mx-auto">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
        </Container>
    );
};

export default AllCourses;