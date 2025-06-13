"use client";
import React from "react";
import InputSearch from "../inputSearch/InputSearch";
const FormSearch = () => {
  return (
    <div>
      <InputSearch
        propStyle={{
          input:
            "w-full h-10 text-sm pl-5 pr-12 rounded-full outline-none text-black",
          button:
            "absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#FDE7EB] rounded-full default-text-color",
        }}
      />
    </div>
  );
};

export default FormSearch;
