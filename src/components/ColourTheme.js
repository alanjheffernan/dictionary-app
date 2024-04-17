import React from "react";
import { useState } from 'react';
import iconMoon from "../assets/images/icon-moon.svg"

const ColorTheme = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex items-center">
      <button
        className={`w-11 h-6 border-2 rounded-full ${isToggled ? 'bg-purple border-purple' : 'bg-grey border-grey'}`}
        onClick={toggleSwitch}
      >
        <div className={`w-5 h-5 rounded-full bg-white shadow-md transform ${isToggled ? 'translate-x-full' : ''}`}></div>
      </button>
      <img  src={iconMoon} alt="icon-moon" className={`ml-4 ${isToggled ? 'stroke-purple' : 'bg-gray-300'}`}/>
    </div>
  );
};

export default ColorTheme;
