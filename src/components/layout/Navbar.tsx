'use client';

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Avatar, Button } from "@heroui/react";

import { navLinks } from "@/constants/navLinks";
import { signOut, useSession } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session } = useSession();
  // const session = null;
  const [open, setOpen] = useState(false);
  console.log(session, "User");

  const handleSignOut = async () => {
    await signOut();
  };

  const links = session
    ? [
        ...navLinks,
        {
          label: "Dashboard",
          href: "/dashboard",
        },
      ]
    : navLinks;

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <nav className="max-w-7xl mx-auto flex h-16 items-center justify-between px-5">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold">
            Book Verse
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium hover:text-primary transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">
          {session ? (
            <>
              <Link href="/dashboard/profile">
                <Avatar
                 size="md"
                 className="cursor-pointer"
                 >
                <Avatar.Image
                 src={session?.user?.image || ""}
                 alt={session?.user?.name || "User"}
                />

                <Avatar.Fallback>
                  {session?.user?.name
                   ?.split(" ")
                   .map((word) => word[0])
                   .join("")
                   .slice(0, 2)
                  .toUpperCase()}
               </Avatar.Fallback>
             </Avatar>
            </Link>

              <Button
                onClick={handleSignOut}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button>
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button>
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <Button
          isIconOnly
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white shadow">

          <div className="flex flex-col gap-4 p-5">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-medium"
              >
                {link.label}
              </Link>
            ))}

            <hr />

            {session ? (
              <>
                <div className="flex items-center gap-3">
                  <Avatar
                    size="sm"
                    name={session.user.name || "U"}
                  />

                  <span>{session.user.name}</span>
                </div>

                <Button
                  onClick={handleSignOut}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                >
                  <Button
                    className="w-full"
                  >
                    Login
                  </Button>
                </Link>

                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                >
                  <Button
                    className="w-full"
                  >
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;