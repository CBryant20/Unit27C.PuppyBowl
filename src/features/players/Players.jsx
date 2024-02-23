import api from "../../api/puppyBowlApi";

const playersAPI = api.injectEndpoints({
  endpoints: (builder = {
    getPlayers: builder.query({
      query: () => "/players",
      provideTags: ["Players"],
      transformResponse: (response) => response.data.players,
    }),
    ///// Added for fun!! Will come back to this /////////
    // getPlayersById: builder.query({
    //   query: (id) => "/players/" + id,
    //   provideTags: ["Players"],
    // }),
    // addPlayer: builder.mutation({
    //   query: (player) => ({
    //     url: "/players",
    //     method: "POST",
    //     body: player,
    //   }),
    //   invalidatesTags: ["Players"],
    // }),
    // deletePlayer: builder.mutation({
    //   query: (id) => ({
    //     url: "/players" + id,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Players"],
    // }),
  }),
});

export const {
  useGetPlayersQuery,
  //   useGetPlayersById,
  //   useAddPlayerMutation,
  //   useDeletePlayerMutation,
} = playersAPI;
