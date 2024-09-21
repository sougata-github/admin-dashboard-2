"use client";

import { useState } from "react";
import SearchCommand from "./SearchCommand";
import { Command, SearchIcon } from "lucide-react";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-stone-200 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
        <SearchIcon className="mr-2 size-4 text-stone-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none"
          onFocus={(e) => {
            e.target.blur();
            setIsOpen(true);
          }}
        />

        <span className="p-1 text-xs flex gap-0.5 items-center shadow bg-stone-50 rounded absolute right-1.5 top-1/2 -translate-y-1/2 text-stone-400">
          <Command className="size-4" />K
        </span>
      </div>
      <SearchCommand isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Search;
