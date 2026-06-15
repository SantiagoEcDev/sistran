const BASE_URL =
  "https://api.restjson.app/public/11ad642e-836d-4ec5-9300-c497b5a259c0";

const API_KEY = import.meta.env.VITE_API_KEY;

export async function apiFetch<T>(): Promise<T> {
  const res = await fetch(BASE_URL, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  return res.json();
}
