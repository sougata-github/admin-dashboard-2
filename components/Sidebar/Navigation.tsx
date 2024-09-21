import Link from "next/link";
import { cn } from "@/lib/utils";
import { links } from "@/constants";

const Navigation = () => {
  return (
    <nav className="mt-8">
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
  );
};

export default Navigation;
