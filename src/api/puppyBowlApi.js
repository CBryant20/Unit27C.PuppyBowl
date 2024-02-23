import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2401-FSA-ET-WEB-FT-SF-CHARLESS";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => "/players",
    }),
  }),
  tagTypes: ["Players"],
});
export const { useGetPlayersQuery } = api;
export default api;
