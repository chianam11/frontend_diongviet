// utils/shouldRefetch.ts
export const shouldRefetch = (lastFetched: number | null, cacheDurationMs = 5 * 60 * 1000) => {
  if (!lastFetched) return true; // Chưa fetch lần nào
  const now = Date.now();
  return now - lastFetched > cacheDurationMs;
};
