import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "./base";
import { ImageType } from "@/types";
export const PicturesAPI = createApi({
  reducerPath: "Pictures",
  baseQuery,
  tagTypes: ["pictures"],
  endpoints: (build) => ({
    pictures: build.query<ImageType[], void>({
      query: () => ({
        url: "/images",
      }),
      providesTags: () => ["pictures"],
    }),
  }),
});
