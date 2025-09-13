import { players } from "../data/players.js";

/**
 * Returns a deterministic "daily" player based on today's date.
 * The same player will appear for everyone on the same day.
 */
export function getDailyPlayer() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0); // Jan 1 of this year
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  // Pick player index using modulo
  const index = dayOfYear % players.length;
  return players[index];
}
