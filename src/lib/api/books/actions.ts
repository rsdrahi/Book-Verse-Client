import baseUrl from "../baseUrl"

export const addBook = async (book: unknown) => {
  const res = await fetch(`${baseUrl}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  return res.json()
}