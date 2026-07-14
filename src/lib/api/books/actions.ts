import baseUrl from "../baseUrl"

export const addBook = async (book: unknown) => {
  const res = await fetch(`${baseUrl}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  return res.json();
}

export const bookBorrow = async (borrowData: {
  bookId: string;
  bookTitle: string;
  quantity: number;
  dueDate: string;
}) => {
  const res = await fetch(`${baseUrl}/borrow`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(borrowData),
  });
  return res.json();
}