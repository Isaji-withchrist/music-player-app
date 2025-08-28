// src/pages/Favorites.jsx
import usePlayerStore from "../store/playerStore";
import TrackCard from "../components/TrackCard";

export default function Favorites() {
  const { favorites } = usePlayerStore();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Favorites</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {favorites.length > 0 ? (
          favorites.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))
        ) : (
          <p className="text-neutral-500">No favorites yet.</p>
        )}
      </div>
    </div>
  );
}
