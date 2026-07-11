import { Button } from "@heroui/react";
import Image from "next/image";
import HeroImage from "@/app/assets/images/hero-img.png";

const Banner = () => {
  return (
    <section className="bg-slate-50 py-12 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* left side */}
        <div className="flex flex-col space-y-6">
          {/* Website Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Discover Your Next <br className="hidden lg:inline" />
            <span className="text-blue-600">Great Read</span>
          </h1>

          {/* description */}
          <p className="text-lg text-slate-600 max-w-lg">
            Thousands of books are waiting for you. Explore our vast collection, 
            find your favorite authors, and dive into new worlds today.
          </p>

          {/* cta buttons */}
          <div className="flex flex-wrap gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-6 rounded-lg shadow-md transition duration-200">
              Explore Books
            </Button>
            <Button variant="outline" className="border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold px-6 py-6 rounded-lg transition duration-200">
              Browse Categories
            </Button>
          </div>

          {/* Small Statistics */}
          <div className="pt-4 flex items-center space-x-3">
            <div className="flex text-amber-400 text-xl">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="text-sm text-slate-600 font-medium">
              <span className="text-slate-900 font-bold">50K+</span> Active Readers
            </p>
          </div>
        </div>

        {/* right side */}

        <div className="flex justify-center items-center relative">
          <div className="relative w-full h-[500px]">
            <Image
            src={HeroImage}
            alt="Hero Image"
            fill
            className="object-contain"
          />
          </div>
          
          {/* Floating Cards (পরে যোগ করার জন্য এখানে কমেন্ট বা জায়গা রাখা হলো) */}

          {/* <div className="absolute top-10 left-5"> ... </div> */}
        </div>

      </div>
    </section>
  );
};

export default Banner;