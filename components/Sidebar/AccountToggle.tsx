import Image from "next/image";
import { ChevronsUpDown } from "lucide-react";

const AccountToggle = () => {
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
      <button className="flex py-2 px-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
        <Image
          src="/emoji.png"
          alt="avatar-image"
          width={72}
          height={72}
          priority
          unoptimized
          quality={100}
          className="size-10 rounded-full shrink-0 bg-stone-950"
        />
        <div className="text-start truncate">
          <span className="text-sm font-bold block">John Doe</span>
          <span className="text-xs block text-stone-500">
            johndoe@example.com
          </span>
        </div>

        <ChevronsUpDown className="size-[15px] text-stone-500" />
      </button>
    </div>
  );
};

export default AccountToggle;
