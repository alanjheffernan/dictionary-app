import React, { useState } from "react";
import iconSearch from "../assets/images/icon-search.svg";

const SearchBar = ({ onSearch }) => {
  const [searchWord, setSearchWord] = useState("");

  const handleInputChange = (event) => {
    setSearchWord(event.target.value);
  };

  return (
    <div className="border-grey-lighter focus-within:border-purple bg-grey-lighter mb-6 flex rounded-2xl border focus-within:border sm:mx-auto sm:max-w-[800px]">
      <input
        type="text"
        placeholder="Search for any word..."
        className=" caret-purple bg-grey-lighter focus:text-grey-darker w-full rounded-2xl py-5 pl-6 text-xl font-bold focus:outline-none"
        value={searchWord}
        onChange={handleInputChange}
      />
      <img
        src={iconSearch}
        alt="Search Icon"
        className="mr-4 cursor-pointer"
        onClick={() => onSearch(searchWord)}
      />
    </div>
  );
};

export default SearchBar;
