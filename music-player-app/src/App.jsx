import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  Home,
  Clock,
  Heart,
  BarChart2,
  Settings,
} from "lucide-react";
import Player from "./components/Player";
import PremiumCard from "./components/PremiumCard";
import Recent from "./pages/Recent";
import Favorites from "./pages/Favorites";
import Trending from "./pages/Trending";
import LOGO from "../assets/LOGO.png"

export default function App() {
  return (
    <div className="flex h-dvh bg-neutral-100 text-neutral-900">
      {/* LEFT SIDEBAR */}
      <aside className="w-20 bg-neutral-200/70 backdrop-blur flex flex-col items-center py-6">
        {/* Logo / wordmark */}
        <div className="mb-8 font-extrabold tracking-wider rotate-[-10deg]">
          <img src={LOGO}/> logo
        </div>

        <nav className="flex flex-col gap-12">
          <IconLink to="/" icon={<Home />} label="Home" />
          <IconLink to="/recent" icon={<Clock />} label="Recent" />
          <IconLink to="/favorites" icon={<Heart />} label="Favorites" />
          <IconLink to="/trending" icon={<BarChart2 />} label="Trending" />
        </nav>

        <div className="mt-auto pt-8">
          <IconLink to="/settings" icon={<Settings />} label="Settings" />
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 grid grid-rows-[1fr_auto]">
        {/* Scrollable page area */}
        <div className="overflow-y-auto p-6">
          <Routes>
            <Route index element={<Recent />} />
            <Route path="/recent" element={<Recent />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="*" element={<Recent />} />
          </Routes>
        </div>

        {/* Player - sticks to bottom of main column */}
        <div className="p-4">
          <Player />
        </div>
      </main>

      {/* RIGHT SIDEBAR (Premium) */}
      <aside className="w-[300px] bg-neutral-50 border-l border-neutral-200 p-6">
        <PremiumCard />
      </aside>
    </div>
  );
}

function IconLink({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "flex items-center justify-center w-12 h-12 rounded-xl transition",
          isActive
            ? "bg-blue-600 text-white shadow"
            : "text-neutral-600 hover:text-blue-600 hover:bg-white",
        ].join(" ")
      }
      title={label}
    >
      <span className="w-6 h-6">{icon}</span>
    </NavLink>
  );
}
