'use client'
import { addBookForm } from "@/lib/api/books/actions";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const categories = [
  "Programming",
  "Science",
  "History",
  "Romance",
  "Technology",
  "Travel",
  "Art",
  "Biography",
];

const AddBookPage = () => {

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const bookData = {
      title: formData.get("title") as string,
      author: formData.get("author") as string,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      coverImage: formData.get("coverImage") as string,
      totalCopies: Number(formData.get("totalCopies")),
      availableCopies: Number(formData.get("availableCopies")),
    };
    const data = await addBookForm(bookData);
    console.log(data, "Form data");
    if (data) {
      form.reset();
      toast.success("Book Added Successfully")
      router.push("/dashboard/manage-books");
    }
    else {
      toast.error("Something Went Wrong")
    }
  }

  return (
    <section className="w-full"> 
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-default-900 tracking-tight">Add New Book</h1>
        <p className="text-gray-500 mt-2">
          Fill in the information below to add a new book.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border rounded-2xl shadow-sm p-8 space-y-6 w-full">
        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium">Book Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter book title"
              className="w-full h-12 px-4 border rounded-xl outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Author</label>
            <input
              type="text"
              name="author"
              placeholder="Enter author name"
              className="w-full h-12 px-4 border rounded-xl outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium">Category</label>
            <select
              name="category"
              className="w-full h-12 px-4 border rounded-xl outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Total Copies</label>
            <input
              type="number"
              min={1}
              name="totalCopies"
              placeholder="10"
              className="w-full h-12 px-4 border rounded-xl outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Cover Image */}
        <div>
          <label className="block mb-2 font-medium">Cover Image URL</label>
          <input
            type="text"
            name="coverImage"
            placeholder="https://example.com/book.jpg"
            className="w-full h-12 px-4 border rounded-xl outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-medium">Description</label>
          <textarea
            rows={5}
            name="description"
            placeholder="Write book description..."
            className="w-full px-4 py-3 border rounded-xl outline-none resize-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-xl hover:opacity-90 transition"
          >
            Add Book
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddBookPage;