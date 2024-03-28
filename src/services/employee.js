import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://hub.dummyapis.com";

const createRequest = (url) => ({ url });

export const createEmployeApi = createApi({
  reducerPath: "createEmployeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: createRequest(`/employee?noofRecords=15&idStarts=1001`),
    }),
  }),
});

export const { useGetEmployeesQuery } = createEmployeApi;
