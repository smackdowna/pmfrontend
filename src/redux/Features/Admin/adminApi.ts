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
    useGetAllUserQuery,
    useGetAllPendingKYCQuery,
} = adminApi;
