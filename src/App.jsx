import { useGetPlayersQuery } from "./api/puppyBowlApi";

function App() {
  const { data, isLoading } = useGetPlayersQuery();

  return (
    <>
      <div className='App'>
        <h1>Puppy Bowl 2024</h1>
        <p>Here are the players:</p>
        <ul>
          {isLoading ? (
            <li>Loading...</li>
          ) : (
            data?.data.players.map((player) => (
              <li key={player.id}>
                <h2>{player.name}</h2>
                <p>{player.description}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
