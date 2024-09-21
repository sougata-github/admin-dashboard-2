"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { links } from "@/constants";

import Plan from "../Sidebar/Plan";
import { Menu } from "lucide-react";
import AccountToggle from "../Sidebar/AccountToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-64 bg-stone-100 px-4 flex flex-col border-b border-gray-700"
      >
        <nav className="mt-2">
          <AccountToggle />
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                href={link.link}
                key={link.label}
                className={cn(
                  "rounded hover:bg-stone-200 p-2 flex gap-2 text-sm items-center transition duration-300",
                  link.selected && "bg-white shadow hover:bg-white"
                )}
              >
                <link.icon />
                <span>{link.label}</span>
              </Link>
            ))}
          </ul>
        </nav>
        <Plan />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
