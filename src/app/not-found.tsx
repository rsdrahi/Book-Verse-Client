import Link from "next/link";
import { Button } from "@heroui/react";
import { TriangleAlert } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-lg text-center">

        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
            <TriangleAlert
              size={55}
              className="text-red-500"
            />
          </div>
        </div>

        <h1 className="text-7xl font-bold text-primary">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-default-500 mt-4">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <Link href="/">
            <Button>
              Go Home
            </Button>
          </Link>

          <Link href="/books">
            <Button>
              Browse Books
            </Button>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default NotFound;