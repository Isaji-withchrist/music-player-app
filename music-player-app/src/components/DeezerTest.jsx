import { useState } from "react";
import usePlayerStore from "../store/playerStore";
import { Heart } from "lucide-react";

export default function DeezerTest() {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const setTrack = usePlayerStore((state) => state.setTrack);
  const addFavourite = usePlayerStore((state) => state.addFavourite);

  const searchTracks = async () => {
    try {
      const res = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}`
      );
      const data = await res.json();
      setTracks(data.data || []);
    } catch (err) {
      console.error("Error fetching Deezer:", err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Search Play</h2>

      {/* Search bar */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search artist or song..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <button
          onClick={searchTracks}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="bg-white shadow-md rounded-lg p-3 flex flex-col items-center hover:shadow-xl transition"
          >
            <img
              src={track.album.cover}
              alt={track.title}
              className="w-full h-32 object-cover rounded"
              onClick={() =>
                setTrack({
                  id: track.id,
                  title: track.title,
                  artist: track.artist.name,
                  preview: track.preview,
                  cover: track.album.cover,
                })
              }
            />
            <h3 className="mt-2 text-sm font-semibold text-center">
              {track.title}
            </h3>
            <p className="text-xs text-gray-500">{track.artist.name}</p>

            {/* Add to Favourites */}
            <button
              onClick={() =>
                addFavourite({
                  id: track.id,
                  title: track.title,
                  artist: track.artist.name,
                  preview: track.preview,
                  cover: track.album.cover,
                })
              }
              className="mt-2 bg-black-500 text-white p-2 rounded-full hover:bg-gray-600"
            >
              <Heart size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
