// src/pages/Recent.jsx
import usePlayerStore from "../store/playerStore";
import TrackCard from "../components/TrackCard";

export default function Recent({ recents = [] }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Recently Played</h2>
      {recents.length === 0 ? (
        <p className="text-gray-500">No recent tracks yet</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recents.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      )}
    </div>
  )
}

