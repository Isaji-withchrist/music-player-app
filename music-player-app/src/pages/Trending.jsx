// src/pages/Trending.jsx
import { useEffect, useState } from "react";
import TrackCard from "../components/TrackCard";

export default function Trending() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function fetchTrending() {
      const res = await fetch("https://api.deezer.com/chart");
      const data = await res.json();
      setTrending(data.tracks?.data || []);
    }
    fetchTrending();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Trending Now</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {trending.length > 0 ? (
          trending.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))
        ) : (
          <p className="text-neutral-500">Loading trending tracks...</p>
        )}
      </div>
    </div>
  );
}
