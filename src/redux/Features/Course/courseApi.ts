import { baseApi } from "../../Api/baseApi";

const courseApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        
        getAllCourses: builder.query({
            query: ({searchQuery, categoryQuery}) => ({
                url: `/courses?keyword=${searchQuery}&category=${categoryQuery}`,
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["course"],
        }),

        getSingleCourseById: builder.query({
            query: (id) => ({
                url: `/course/single/${id}`,
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["course"],
        }),
    }),
});

export const {useGetAllCoursesQuery, useGetSingleCourseByIdQuery} = courseApi;
