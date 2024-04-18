import React, { useState } from "react";
import { useFontContext } from "../contexts/FontContext";

const Appfont = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { font, changeFont } = useFontContext();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const fontList = [
    {
      name: "Sans Serif",
      value: "sans-serif",
      font: "font-sans",
    },
    {
      name: "Serif",
      value: "serif",
      font: "font-serif",
    },
    {
      name: "Mono",
      value: "mono",
      font: "font-mono",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <button onClick={toggleDropdown} className="font-bold">
            {fontList.find((item) => item.font === font).name}
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
              {fontList.map((font) => (
                <li
                  key={font.value}
                  className={`cursor-pointer ${font.font} text-lg font-bold hover:text-purple`}
                  onClick={() => changeFont(font.font)}
                >
                  {font.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Appfont;
