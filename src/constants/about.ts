import { Feature, Technology } from "@/app/types/about";
import { BookOpen, Library, Search, ShieldCheck } from "lucide-react";

export const features: Feature[] = [
  {
    title: "Book Management",
    description: "Add, update, delete and manage books efficiently.",
    icon: Library,
  },
  {
    title: "Borrow System",
    description: "Borrow books with due date tracking.",
    icon: BookOpen,
  },
  {
    title: "Secure & Reliable",
    description: "Built with modern technologies.",
    icon: ShieldCheck,
  },
  {
    title: "Smart Search",
    description: "Find books instantly with search.",
    icon: Search,
  },
];

export const technologies: Technology[] = [
  {
    id: 1,
    name: "Next.js",
  },
  {
    id: 2,
    name: "TypeScript",
  },
  {
    id: 3,
    name: "Express.js",
  },
  {
    id: 4,
    name: "MongoDB",
  },
  {
    id: 5,
    name: "Tailwind CSS",
  },
  {
    id: 6,
    name: "HeroUI",
  },
]