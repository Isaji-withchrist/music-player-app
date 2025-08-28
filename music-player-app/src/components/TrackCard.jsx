// src/components/TrackCard.jsx
import React from "react";
import { Play, Heart } from "lucide-react";

export default function TrackCard({ track }) {
  if (!track) return null;

  const playPreview = () => {
    if (!track.preview) return;
    const audio = new Audio(track.preview);
    audio.play();
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer">
      {/* Album Cover */}
      <img
        src={track.album?.cover_medium}
        alt={track.title}
        className="w-full h-40 object-cover rounded-md"
      />

      {/* Info */}
      <h3 className="font-bold mt-2 truncate">{track.title}</h3>
      <p className="text-sm text-gray-600 truncate">{track.artist?.name}</p>

      {/* Controls */}
      <div className="flex justify-between items-center mt-3">
        <button
          onClick={playPreview}
          className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
          title="Play Preview"
        >
          <Play size={18} />
        </button>

        <button
          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          title="Add to Favorites"
        >
          <Heart size={18} />
        </button>
      </div>
    </div>
  );
}
