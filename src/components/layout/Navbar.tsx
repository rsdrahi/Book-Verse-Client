'use client'
import { navLinks } from "@/constants/navLinks";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {

  const { data: session, isPending } = useSession();
  console.log(session, "Session");

  const handleSignOut = async () => {
    await signOut();
  }

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
        {session ? (
          <div className="flex items-center gap-3">
            <span className="font-medium">
              {session.user.name}
            </span>
            <Button
              variant="outline"
              onClick={handleSignOut}
            >
              Logout
            </Button>
          </div>
        ) : <div className="flex items-center gap-3">
          <Link href={"/login"}>
          <Button
            variant="outline"
          >
            Login
          </Button>
          </Link>
          <Link href={"/register"}>
           <Button
            variant="outline"
          >
            Register
          </Button>
          </Link>
        </div>}

      </nav>
    </header>
  );
};

export default Navbar;