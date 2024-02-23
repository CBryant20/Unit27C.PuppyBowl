import {
  useAddPlayerMutation,
  useGetPlayersQuery,
  useGetPlayersById,
  useDeletePlayerMutation,
} from "./features/players/Players";

function App() {
  const { data: players, isLoading } = useGetPlayersQuery();
}

return (
  <>
    <ul>
      {isLoading ? (
        <li>Loading...</li>
      ) : (
        players.data.map((player) => (
          <li key={player.id}>
            <h2>{player.name}</h2>
            <p>{player.description}</p>
          </li>
        ))
      )}
    </ul>
  </>
);

export default App;
