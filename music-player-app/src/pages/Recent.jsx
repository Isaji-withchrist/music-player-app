import { PlayCircle } from "lucide-react";

const cards = [
  { title: "AnEndlessOcean", tag: "Playlist" },
  { title: "Olivia Rodrigo", tag: "Playlist" },
  { title: "Billie Eilish", tag: "Playlist" },
  { title: "Ariana Grande", tag: "Playlist" },
];

export default function Recent() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Hi, Favour</h1>
        <p className="text-neutral-500">Welcome back! What do you want to hear today?</p>
      </header>

      <section>
        <h2 className="text-lg font-semibold mb-3">Recent</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title} className="bg-white rounded-2xl p-4 shadow relative">
              <span className="text-xs text-neutral-500">{c.tag}</span>
              <h3 className="font-semibold mt-1">{c.title}</h3>
              <button className="absolute right-3 bottom-3">
                <PlayCircle className="w-8 h-8 text-blue-600" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-200/60 rounded-2xl p-4">
        <h2 className="text-lg font-semibold mb-3">My Favorite Album</h2>
        <div className="grid lg:grid-cols-[220px_1fr] gap-4">
          <div className="bg-white rounded-xl p-4 shadow">
            <p className="text-sm text-neutral-500">Playlist</p>
            <h4 className="font-semibold">Ed Sheeran</h4>
            <p className="text-xs text-neutral-500">45 songs · 2hrs 15min</p>
          </div>
          <ol className="space-y-3">
            {[
              ["Shape of You", "03:45"],
              ["Perfect", "04:45"],
              ["Bad Habits", "03:34"],
              ["I Don’t Care", "03:34"],
            ].map(([name, time], i) => (
              <li key={name} className="bg-white rounded-xl px-4 py-3 shadow flex items-center justify-between">
                <span className="flex items-center gap-3">
                  <span className="w-6 text-neutral-500">{i + 1}.</span>
                  {name}
                </span>
                <span className="text-neutral-500">{time}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
