import React, { useState } from "react";

const Appfont = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Sans Serif");

  const changeSelectedFont = (e) => {
    const newFont = e.target.value();
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <button onClick={toggleDropdown} className="font-bold">
            {selectedFont}
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
          >
            <path
              fill="none"
              stroke="#A445ED"
              stroke-width="1.5"
              d="m1 1 6 6 6-6"
            />
          </svg>
        </div>

        <div>
          {isOpen && (
            <ul className="absolute left-[40%] top-[90px] flex w-[200px] flex-col gap-4 rounded-2xl border bg-white p-6 shadow sm:left-[60%]">
              <li
                className="cursor-pointer font-sans text-lg font-bold hover:text-purple"
                onClick={() => changeSelectedFont()}
              >
                Sans Serif
              </li>
              <li>
                <a
                  className="cursor-pointer font-serif text-lg font-bold hover:text-purple"
                  href="#item2"
                >
                  Serif
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer font-mono text-lg font-bold hover:text-purple"
                  href="#item3"
                >
                  Mono
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Appfont;
