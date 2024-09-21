import { FiCalendar } from "react-icons/fi";
import { getFormattedDate } from "@/lib/utils";
import MobileNav from "./MobileNav";

const TopBar = () => {
  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
      <div className="flex items-center justify-between px-0.5 py-2">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-bold block">Welcome back!</span>
          <span className="text-xs block text-stone-500">
            {getFormattedDate()}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="max-sm:hidden rounded flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-stone-200 px-3 py-1.5">
            <FiCalendar />
            <span>Prev 6 Months</span>
          </button>
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
