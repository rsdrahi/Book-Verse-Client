"use client";
import { Book } from "@/app/types/books";
import { bookBorrow } from "@/lib/api/books/actions";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  book: Book;
}

const BorrowModal = ({book}: Props) => {

  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState('');

  const handleBoorBorrow = async () => {
    const borrowData = {
      bookId: book._id,
      bookTitle: book.title,
      quantity,
      dueDate,
    };
    const data = await bookBorrow(borrowData);
    // console.log(data, "Book Data");
    if (data) {
      toast.success(`You Borrowed ${book.title}`);
      router.refresh();
    }
  }

  return (
    <Modal>
      <Button size="lg" className="lg:w-full md:w-fit">
         Book Borrow
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header className="text-center">
              <Modal.Heading>Borrow Book</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField  className="w-full" name="number" type="number" variant="secondary">
                    <Label>Quantity</Label>
                    <Input placeholder=""
                      min={1}
                      onChange={(e)=> setQuantity(Number(e.target.value))}
                    />
                  </TextField>
                  <TextField className="w-full" name="date" type="date" variant="secondary" defaultValue={dueDate}>
                    <Label>Due Date</Label>
                    <Input placeholder=""
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e)=> setDueDate(e.target.value)}
                    />
                  </TextField>
                  <Modal.Footer>
                   <Button slot="close" variant="secondary">
                    Cancel
                   </Button>
                   <Button slot="close" onClick={handleBoorBorrow}>Borrow Book</Button>
             v    </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BorrowModal;