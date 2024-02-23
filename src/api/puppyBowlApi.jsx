import { createAPI, fetchBaseQuery } from "@reduxjs/toolkit/react/query";

const API_URL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2401-FSA-ET-WEB-FT-SF-CHARLES";
const api = createAPI({
  baseQuery: fetchBaseQuery({
    baseURL: API_URL,
  }),
  endpoint: (builder) => ({
    getPlayers: builder.query({
      query: () => "/players",
    }),
  }),
  tagTypes: ["Players"],
});

export default api;
