import baseUrl from "./baseUrl"

export const serverFetch = async (path: string) => {
  const res = await fetch(`${baseUrl}${path}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch Error");
  }
  return res.json();
}