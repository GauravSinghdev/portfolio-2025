import { Search } from "lucide-react";
import React from "react";

export default function Searchbox() {
  return (
    <button className="p-1 px-3 border baseBorder rounded-2xl flex items-center font-medium">
      <Search className="mr-1.5 size-4" />
      <span className="bg-black/10 shadow-xl px-1 py-0.5 text-xs rounded">
        Ctrl K
      </span>
    </button>
  );
}
