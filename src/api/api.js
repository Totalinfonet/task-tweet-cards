import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6459fbc895624ceb21f41bce.mockapi.io/api/v1/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "tweets",
    }),
    getUserById: builder.query({
      query: (id) => `tweets/${id}`,
    }),
    followUser: builder.mutation({
      query: ({ id, isFollow }) => ({
        url: `tweets/${id}`,
        method: "PUT",
        body: { isFollow },
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useFollowUserMutation } =
  api;
