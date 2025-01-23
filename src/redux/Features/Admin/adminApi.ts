import { baseApi } from "../../Api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getAllUser: builder.query({
      query: () => ({
        url: "/all/user",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user"],
    }),

    getAllPendingKYC: builder.query({
      query: () => ({
        url: "/user/kyc/pending",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user"],
    }),

    getAllEarnings: builder.query({
      query: () => ({
        url: "/earnings",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user"],
    }),

    getAllOrders: builder.query({
      query: () => ({
        url: "/allorders",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user"],
    }),

    getSingleOrderById: builder.query({
      query: (id) => ({
        url: `/order/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user"],
    }),

    getSingleUserById: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user"],
    }),

    approveKyc: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "PUT",
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `/course/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["course"],
    }),

  }),
});

export const {
  useGetAllUserQuery,
  useGetAllPendingKYCQuery,
  useGetAllEarningsQuery,
  useGetAllOrdersQuery,
  useGetSingleOrderByIdQuery,
  useGetSingleUserByIdQuery,
  useApproveKycMutation,
  useDeleteCourseMutation,
} = adminApi;
