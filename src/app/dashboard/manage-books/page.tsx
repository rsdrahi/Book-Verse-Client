import ManageBookTable from '@/app/components/common/ManageBookTable';
import { getBorrowBooks } from '@/lib/api/books/server';

const MangeBookPage = async () => {

  const books = await getBorrowBooks();

  return (
    <div>
      <h2 className='font-bold text-2xl my-5 text-center'>Borrowed Book</h2>
      <ManageBookTable books={books}/>
    </div>
  );
};

export default MangeBookPage;