import { useGetPlayersQuery } from "./features/players/Players";

function Puppies() {
  const { data: players, isLoading } = useGetPlayersQuery();

  return (
    <>
      <div className='App'>
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
      </div>
    </>
  );
}

export default Puppies;
