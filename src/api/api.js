import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import axios from "axios";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6459fbc895624ceb21f41bce.mockapi.io/api/v1/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "tweets",
    }),
  }),
});

export const { useGetUsersQuery } = api;
