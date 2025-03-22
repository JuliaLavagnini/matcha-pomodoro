// src/services/spotifyAPI.ts

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
const SCOPES = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "streaming",
  "user-read-email",
  "user-read-private",
];

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
  "%20"
)}`;

// Redirects to Spotify Login
export const redirectToSpotifyAuth = () => {
  window.location.href = AUTH_URL;
};

// Get access token from URL after redirect
export const getTokenFromUrl = (): string | null => {
  const hash = window.location.hash;
  const params = new URLSearchParams(hash.substring(1));
  const token = params.get("access_token");

  if (token) {
    localStorage.setItem("spotify_access_token", token);
    return token;
  }

  return null;
};

// Get stored token
export const getAccessToken = (): string | null => {
  return localStorage.getItem("spotify_access_token");
};

// Logout function (optional)
export const logoutSpotify = () => {
  localStorage.removeItem("spotify_access_token");
  window.location.href = "/";
};
