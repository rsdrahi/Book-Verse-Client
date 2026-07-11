export type NavLink = {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: "Books",
    href: "/books"
  },
  {
    label: "About",
    href: "/about"
  },
  // {
  //   label: "Login",
  //   href: "/login"
  // },
  // {
  //   label: "Register",
  //   href: "/register"
  // },
];