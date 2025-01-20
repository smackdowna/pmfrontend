import { baseApi } from "../../Api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getMyPurchasedCourses: builder.query({
      query: () => ({
        url: "/purchased/course",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user", "course"],
    }),

    myReferralSummary: builder.query({
      query: () => ({
        url: "/refral/summary",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user"],
    }),

    getMe: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user"],
    }),

    updateProfile: builder.mutation({
      query: (profileUpdatedData) => ({
        method: "PUT",
        url: `/auth/me/update`,
        body: profileUpdatedData,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetMyPurchasedCoursesQuery,
  useMyReferralSummaryQuery,
  useGetMeQuery,
  useUpdateProfileMutation,
} = userApi;
