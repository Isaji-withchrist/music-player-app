import { Crown, Check } from "lucide-react";

export default function PremiumCard() {
  return (
    <div className="bg-gradient-to-br from-gray-600 to-black-600 text-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <Crown className="w-5 h-5" />
        <h3 className="text-lg font-bold">Go Premium</h3>
      </div>
      <p className="text-sm text-blue-100 mb-4">
        Upgrade to enjoy ad-free listening, unlimited skips, and offline mode.
      </p>

      <ul className="space-y-2 text-sm mb-5">
        <li className="flex items-center gap-2">
          <Check className="w-4 h-4" /> Ad-free experience
        </li>
        <li className="flex items-center gap-2">
          <Check className="w-4 h-4" /> High-quality audio
        </li>
        <li className="flex items-center gap-2">
          <Check className="w-4 h-4" /> Offline downloads
        </li>
      </ul>

      <button className="w-full bg-white text-gray-700 font-semibold py-2 rounded-xl hover:bg-blue-50 transition">
        Get Premium
      </button>
    </div>
  );
}
