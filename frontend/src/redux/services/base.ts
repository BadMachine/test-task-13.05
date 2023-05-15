import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
});
