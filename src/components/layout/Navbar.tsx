import { navLinks } from "@/constants/navLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="border-b">
      <nav className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">

        {/* logo */}
        <Link href={'/'}>
        <h1 className="text-2xl font-bold">Book Verse</h1>
        </Link>

        {/* menu */}
        <div>
          {
            navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
               {link.label}
              </Link>
            ))
          }  
        </div>

        {/* auth */}
        <div>
          Login Register
        </div>

      </nav>
    </header>
  );
};

export default Navbar;