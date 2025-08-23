import { useState } from "react";
import {
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
  Volume2,
} from "lucide-react";

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(28);
  const [volume, setVolume] = useState(70);

  return (
    <div className="w-full bg-white rounded-2xl shadow p-4 md:p-5 flex items-center gap-4 md:gap-8">
      {/* Song/artist (placeholder to match your layout) */}
      <div className="min-w-[140px]">
        <p className="font-semibold leading-tight">Shape of You</p>
        <p className="text-sm text-neutral-500">Ed Sheeran</p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-5 md:gap-6 mx-auto">
        <button className="icon-btn" aria-label="Shuffle">
          <Shuffle className="w-5 h-5" />
        </button>

        <button className="icon-btn" aria-label="Previous">
          <SkipBack className="w-6 h-6" />
        </button>

        <button
          className="w-10 h-10 rounded-full bg-blue-600 text-white grid place-items-center"
          onClick={() => setIsPlaying((p) => !p)}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>

        <button className="icon-btn" aria-label="Next">
          <SkipForward className="w-6 h-6" />
        </button>

        <button className="icon-btn" aria-label="Repeat">
          <Repeat className="w-5 h-5" />
        </button>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-3 md:gap-4 flex-1 max-w-[520px]">
        <time className="text-xs text-neutral-500 tabular-nums w-10 text-right">
          {formatTime((progress / 100) * 225)}
        </time>
        <input
          type="range"
          min={0}
          max={100}
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
          className="w-full accent-blue-600"
        />
        <time className="text-xs text-neutral-500 tabular-nums w-10">
          {formatTime(225)}
        </time>
      </div>

      {/* Volume */}
      <div className="hidden sm:flex items-center gap-2">
        <Volume2 className="w-5 h-5 text-neutral-600" />
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-24 accent-blue-600"
          aria-label="Volume"
        />
      </div>
    </div>
  );
}

function formatTime(seconds) {
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  const m = Math.floor(seconds / 60).toString();
  return `${m}:${s}`;
}
