'use client'
import { navLinks } from "@/constants/navLinks";
import { Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="border-b">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">

        {/* logo */}
        <Link href={'/'}>
        <h1 className="text-2xl font-bold">Book Verse</h1>
        </Link>

        {/* menu */}
        <div className="flex items-center gap-8">
          {
            navLinks.map((link) => (
              <Link key={link.href}
                href={link.href}
              className="font-medium transition hover:text-primary"
              >
               {link.label}
              </Link>
            ))
          }  
        </div>

        {/* auth */}
        <div className="flex items-center gap-3">
          <Link href={"/login"}>
          <Button
            variant="outline"
            // color="primary"
            // radius="full"
          >
            Login
          </Button>
          </Link>

          <Link href={"/register"}>
           <Button
            variant="outline"
            // color="primary"
            // radius="full"
          >
            Register
          </Button>
          </Link>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;