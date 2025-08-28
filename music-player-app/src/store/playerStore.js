import { create } from "zustand";

const usePlayerStore = create((set, get) => ({
  currentTrack: null,
  isPlaying: false,
  recents: [],
  favorites: [],

  setTrack: (track) => {
    const recents = get().recents;
    const exists = recents.find((t) => t.id === track.id);

    set({
      currentTrack: track,
      isPlaying: true,
      recents: exists
        ? recents
        : [track, ...recents].slice(0, 20), // keep last 20
    });
  },

  togglePlay: () =>
    set((state) => ({
      isPlaying: !state.isPlaying,
    })),

  addToFavorites: (track) => {
    const favorites = get().favorites;
    const exists = favorites.find((t) => t.id === track.id);
    if (!exists) {
      set({ favorites: [...favorites, track] });
    }
  },

  removeFromFavorites: (id) => {
    set((state) => ({
      favorites: state.favorites.filter((t) => t.id !== id),
    }));
  },
}));

export default usePlayerStore;
