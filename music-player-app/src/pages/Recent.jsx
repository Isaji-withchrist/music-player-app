import { PlayCircle } from "lucide-react";

// Import images properly from assets
import AnEndlessOceanImg from "../assets/images (4).webp";
import OliviaImg from "../assets/images (1).webp";
import BillieImg from "../assets/images.webp";
import ArianaImg from "../assets/images (2).webp";

const cards = [
  { title: "AnEndlessOcean", tag: "Playlist", img: AnEndlessOceanImg },
  { title: "Olivia Rodrigo", tag: "Playlist", img: OliviaImg },
  { title: "Billie Eilish", tag: "Playlist", img: BillieImg },
  { title: "Ariana Grande", tag: "Playlist", img: ArianaImg },
];

export default function Recent() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <header>
        <h1 className="text-2xl font-bold">Hi, Favour</h1>
        <p className="text-neutral-500">
          Welcome back! What do you want to hear today?
        </p>
      </header>

      {/* Recent Section */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Recent</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="relative bg-white rounded-xl p-2 shadow-md w-32 flex flex-col items-center"
            >
              {/* Fixed image sizing */}
              <div className="w-28 h-28 overflow-hidden rounded-lg">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-[10px] text-neutral-500 mt-1">{c.tag}</span>
              <h3 className="text-sm font-medium text-center truncate w-full">
                {c.title}
              </h3>

              {/* Play Button */}
              <button className="absolute right-2 bottom-2">
                <PlayCircle className="w-6 h-6 text-blue-600" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Favorite Album Section */}
      <section className="bg-neutral-200/60 rounded-2xl p-4">
        <h2 className="text-lg font-semibold mb-3">My Favorite Album</h2>
        <div className="grid lg:grid-cols-[200px_1fr] gap-4">
          <div className="bg-white rounded-xl p-4 shadow">
            <p className="text-sm text-neutral-500">Playlist</p>
            <h4 className="font-semibold">Ed Sheeran</h4>
            <p className="text-xs text-neutral-500">45 songs · 2hrs 15min</p>
          </div>

          {/* Tracklist */}
          <ol className="space-y-2">
            {[
              ["Shape of You", "03:45"],
              ["Perfect", "04:45"],
              ["Bad Habits", "03:34"],
              ["I Don’t Care", "03:34"],
            ].map(([name, time], i) => (
              <li
                key={name}
                className="bg-white rounded-lg px-3 py-2 shadow flex items-center justify-between text-sm"
              >
                <span className="flex items-center gap-2">
                  <span className="w-5 text-neutral-500">{i + 1}.</span>
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
