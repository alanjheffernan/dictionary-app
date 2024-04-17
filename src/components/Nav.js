import React from "react";
import logo from "../assets/images/logo.svg";
import Appfont from "./AppFont";
import ColorTheme from "./ColourTheme";

const Nav = () => {
  return (
    <nav className="mb-7 flex justify-between sm:mx-auto sm:max-w-[800px]">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex gap-4">
        <Appfont />
        <ColorTheme />
      </div>
    </nav>
  );
};

export default Nav;
