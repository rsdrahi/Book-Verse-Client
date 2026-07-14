import { Borrow } from "@/app/types/borrow";
import { Button } from "@heroui/react";

type Props = {
  books: Borrow[];
}

const ManageBookTable = ({books}: Props) => {
  return (
    <div className="overflow-x-auto border rounded-2xl">
      <table className="w-full">
        <thead className="bg-default-100">
          <tr>
            <th className="p-4 text-center">Title</th>
            <th className="p-4 text-center">Quantity</th>
            <th className="p-4 text-center">dueDate</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr
              key={book._id}
              className="border-t"
            >
              <td className="p-4 text-center">{book.bookTitle}</td>


              <td className="p-4 text-center">{book.quantity}</td>

              <td className="p-4 text-center">
                {book.dueDate}
              </td>

              <td className="p-4 flex gap-2 justify-center"> 
                <Button
                  size="sm"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookTable;