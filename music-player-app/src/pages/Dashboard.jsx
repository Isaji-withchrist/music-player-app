// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import TrackCard from "../components/TrackCard";
import { BarChart2 } from "lucide-react"; // trending icon

export default function Dashboard() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    async function fetchTracks() {
      try {
        const res = await fetch("https://api.deezer.com/chart/0/tracks");
        const deezerData = await res.json();

        if (deezerData?.data) {
          setTracks(deezerData.data);
        } else {
          console.warn("No tracks found:", deezerData);
        }
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    }

    fetchTracks();
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <BarChart2 className="w-5 h-5 text-black" />
        <h2 className="text-xl font-bold">Trending Tracks</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {tracks.length > 0 ? (
          tracks.map((track) => <TrackCard key={track.id} track={track} />)
        ) : (
          <p className="text-gray-500">Loading tracks...</p>
        )}
      </div>
    </div>
  );
}
