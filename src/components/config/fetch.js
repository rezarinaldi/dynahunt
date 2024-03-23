export function fetchData(url, params) {
  return fetch(
    `${process.env.VERCEL_URL ?? "http://localhost:3000"}${url}`,
    params
  );
}
