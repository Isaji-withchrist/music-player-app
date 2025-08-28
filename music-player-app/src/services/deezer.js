// services/deezer.js
const API_BASE = "https://api.deezer.com";

export async function fetchTrending() {
  const res = await fetch(`${API_BASE}/chart/0/tracks`);
  const data = await res.json();
  return data.data; // array of tracks
}

export async function fetchRandom() {
  const res = await fetch(`${API_BASE}/chart/0/tracks`);
  const data = await res.json();
  return data.data.sort(() => 0.5 - Math.random()).slice(0, 6);
}

export async function fetchAlbums() {
  const res = await fetch(`${API_BASE}/chart/0/albums`);
  const data = await res.json();
  return data.data;
}

export async function fetchArtists() {
  const res = await fetch(`${API_BASE}/chart/0/artists`);
  const data = await res.json();
  return data.data;
}

export async function fetchRecommended() {
  // Use chart tracks as "recommended"
  const res = await fetch(`${API_BASE}/chart/0/tracks`);
  const data = await res.json();
  return data.data.slice(0, 6);
}
