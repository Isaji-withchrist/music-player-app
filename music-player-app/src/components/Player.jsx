import { useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";
import usePlayerStore from "../store/playerStore";

export default function Player() {
  const { currentTrack, isPlaying, togglePlay } = usePlayerStore();
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  if (!currentTrack) {
    return (
      <div className="bg-neutral-100 p-4 rounded-xl text-neutral-600 text-sm">
        No track playing...
      </div>
    );
  }

  return (
    <div className="flex items-center bg-neutral-100 p-4 rounded-xl shadow-md">
      {/* Track Image */}
      <img
        src={currentTrack.album?.cover_small}
        alt={currentTrack.title}
        className="w-14 h-14 rounded-lg object-cover mr-4"
      />

      {/* Track Info */}
      <div className="flex-1">
        <p className="font-semibold">{currentTrack.title}</p>
        <p className="text-sm text-neutral-500">
          {currentTrack.artist?.name}
        </p>
      </div>

      {/* Play/Pause */}
      <button
        onClick={togglePlay}
        className="p-3 bg-black text-white rounded-full"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      {/* Hidden Audio */}
      <audio ref={audioRef} src={currentTrack.preview} />
    </div>
  );
}
