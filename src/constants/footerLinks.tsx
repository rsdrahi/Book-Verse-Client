import { FooterLink, SocialLink } from "@/app/types/footer";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export const quicksLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const categoryLinks: FooterLink[] = [
  {label: "Programming", href: "/books?category=Programming"},
  {label: "Science", href: "/books?category=Science"},
  {label: "History", href: "/books?category=History"},
  {label: "Romance", href: "/books?category=Romance"},
];

export const supportLinks: FooterLink[] = [
  { label: "FAQ", href: '/faq' },
  { label: "Privacy Policy", href: '/privacy-policy' },
  { label: "Terms & Conditions", href: '/terms' },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: <FaGithub />
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <FaLinkedin />
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: <FaFacebook />
  },

]