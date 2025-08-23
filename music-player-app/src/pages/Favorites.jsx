import { Heart, MoreHorizontal } from "lucide-react";

const artists = [
  ["AnEndlessOcean", 21],
  ["Deborah Billyben", 17],
  ["Theophilus Sunday", 28],
  ["Dunsin Oyekan", 31],
  ["Abbey Ojomu", 15],
];

export default function Favorites() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <Heart className="w-6 h-6 text-rose-600" /> Favorites
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {artists.map(([name, count]) => (
          <div key={name} className="bg-white rounded-2xl p-4 shadow flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-xs text-neutral-500">{count} songs in library</p>
            </div>
            <MoreHorizontal className="text-neutral-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
