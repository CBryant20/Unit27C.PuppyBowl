import api from "../../api/puppyBowlApi";

const playersAPI = api.injectEndpoints({
  endpoints: (builder = {
    getPlayers: builder.query({
      query: () => "/players",
      provideTags: ["Players"],
    }),
    getPlayersById: builder.query({
      query: (id) => "/players/" + id,
      provideTags: ["Players"],
    }),
    addPlayer: builder.mutation({
      query: (recipe) => ({
        url: "/players",
        method: "POST",
        body: playersAPI,
      }),
      invalidatesTags: ["Players"],
    }),
    deletePlayer: builder.mutation({
      query: (id) => ({
        url: "/players" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["Players"],
    }),
  }),
});

export const {
  useGetPlayersQuery,
  useGetPlayersById,
  useAddPlayerMutation,
  useDeletePlayerMutation,
} = playersAPI;
