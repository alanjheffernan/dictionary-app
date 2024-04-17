import React, { useState } from "react";
import iconSearch from "../assets/images/icon-search.svg";

const SearchBar = ({ onSearch }) => {
  const [searchWord, setSearchWord] = useState("");
  const [emptyString, setemptyString] = useState(false);

  const handleInputChange = (event) => {
    setSearchWord(event.target.value);
    setemptyString(false);
  };

  const handleSearch = () => {
    console.log("word" + searchWord);
    if (searchWord === "") {
      return setemptyString(true);
    }
    setemptyString(false);
    onSearch(searchWord);
  };

  return (
    <div className="mb-6 flex flex-col sm:mx-auto sm:max-w-[800px] ">
      <div
        className={`mb-2 flex rounded-2xl border bg-grey-lighter ${emptyString ? "border-red" : "border-grey-lighter"} focus-within:border-purple`}
      >
        <input
          type="text"
          placeholder="Search for any word..."
          className="w-full rounded-2xl bg-grey-lighter py-5 pl-6 text-xl font-bold caret-purple focus:text-grey-darker focus:outline-none"
          value={searchWord}
          onChange={handleInputChange}
        />
        <img
          src={iconSearch}
          alt="Search Icon"
          className="mr-4 cursor-pointer"
          onClick={() => handleSearch()}
        />
      </div>
      <div>
        {emptyString && <p className="text-red">Whoops, Can't be empty</p>}
      </div>
    </div>
  );
};

export default SearchBar;
