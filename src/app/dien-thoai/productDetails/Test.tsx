"use client";
import React, { useState, ReactNode } from "react";

const Test = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <div className={`transition-all ${expanded ? "" : "max-h-[300px] overflow-hidden"} relative`}>
  {children}
  {!expanded && (
    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
  )}
</div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-red-600 font-semibold mt-2"
      >
        {expanded ? "Thu gọn" : "Xem thêm"}
      </button>
    </div>
  );
};

export default Test;
