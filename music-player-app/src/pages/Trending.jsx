import { Flame, Play } from "lucide-react";

const trending = [
  ["Song of the Summer", "Artist A"],
  ["Viral Track", "Artist B"],
  ["Top 50 Hit", "Artist C"],
  ["Club Anthem", "Artist D"],
  ["Indie Darling", "Artist E"],
];

export default function Trending() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <Flame className="text-orange-600" /> Trending
      </h1>

      <ul className="space-y-3">
        {trending.map(([title, artist], i) => (
          <li key={title} className="bg-white rounded-xl px-4 py-3 shadow flex items-center justify-between">
            <span className="flex items-center gap-3">
              <span className="w-6 text-neutral-500">{i + 1}.</span>
              <span className="font-medium">{title}</span>
              <span className="text-neutral-500">— {artist}</span>
            </span>
            <button className="icon-btn" aria-label="Play">
              <Play className="w-5 h-5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
