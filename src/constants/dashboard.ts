import { Cards, Menus } from "@/app/types/dashboard";
import { BookOpen, ClipboardList, LayoutDashboard, PlusCircle } from "lucide-react";

export const menus: Menus[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Add Book",
    href: "/dashboard/add-book",
    icon: PlusCircle,
  },
  {
    name: "Manage Book",
    href: "/dashboard/manage-books",
    icon: BookOpen,
  },
  {
    name: "Borrow Summary",
    href: "/dashboard/borrow-summary",
    icon: ClipboardList,
  },
];

export const cards: Cards[] = [
  {
    title: "Add Book",
    value: "Create new book",
    icon: PlusCircle,
  },
  {
    title: "Manage Books",
    value: "Update & Delete",
    icon: BookOpen,
  },
  {
    title: "Borrow Summary",
    value: "Borrow History",
    icon: ClipboardList,
  },
]