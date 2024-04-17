import React from "react";
import { useState } from "react";

const ColorTheme = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex items-center">
      <button
        className={`h-6 w-11 rounded-full border-2 ${isToggled ? "border-purple bg-purple" : "border-grey bg-grey"}`}
        onClick={toggleSwitch}
      >
        <div
          className={`h-5 w-5 transform rounded-full bg-white shadow-md ${isToggled ? "translate-x-full" : ""}`}
        ></div>
      </button>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        className="ml-4"
      >
        <path
          fill="none"
          stroke="#838383"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          className={` ${isToggled ? "stroke-purple" : "stroke-grey"}`}
        />
      </svg>
    </div>
  );
};

export default ColorTheme;
