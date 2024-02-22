import { createAPI, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2401-FSA-ET-WEB-FT-SF-CHARLES/players";

const api = createAPI({
  baseQuery: fetchBaseQuery({
    baseURL: API_URL,
  }),
  endpoint: () => ({}),
});

export default api;
