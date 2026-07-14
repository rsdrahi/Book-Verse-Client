import { Cards, Menus } from "@/app/types/dashboard";
import { BookOpen, ClipboardList, LayoutDashboard, PlusCircle, User } from "lucide-react";

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
    name: "Profile",
    href: "/dashboard/profile",
    icon: User,
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
    title: "Profile",
    value: "Profile",
    icon: User,
  },
]