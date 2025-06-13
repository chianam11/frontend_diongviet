// components/InputSearch.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import SearchIcon from "../navIcon/SearchIcon";

type InputSearchProps = {
  propStyle?: {
    input?: string;
    button?: string;
  };
};

const InputSearch = ({ propStyle }: InputSearchProps) => {
  const [inputValue, setInputValue] = useState("");
  const debouncedInput = useDebounce(inputValue, 500);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (debouncedInput.trim()) {
      console.log("Tìm kiếm:", debouncedInput);
      // fetch(`/api/search?q=${debouncedInput}`);
    }
  }, [debouncedInput]);

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className={propStyle?.input || "w-full p-2 rounded"}
          placeholder="Tìm kiếm sản phẩm..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className={
            propStyle?.button ||
            "absolute top-1/2 right-2 transform -translate-y-1/2"
          }
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
