import { useState } from "react";

let nextId = 0;

interface Artist {
  id: number;
  name: string;
}

export function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState<Artist[]>([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

//-------------------------------------------------------

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export function List2() {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{" "}
            <button
              onClick={() => {
                setArtists(
                  artists.filter(
                    (a) => a.id !== artist.id // create an array that consists of those artists whose IDs are different from artist.id
                  )
                );
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
