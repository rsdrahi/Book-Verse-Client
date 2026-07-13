export interface Book {
  _id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  coverImage: string;
  totalCopies: number;
  availableCopies: number;
}