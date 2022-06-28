import React from "react";
import logo from "../img/metropole.png";

type Props = {};

function Header({}: Props) {
  return (
    <div className="p-2 bg-white flex items-center justify-center w-full h-24">
      <img src={logo} className="h-full" />
    </div>
  );
}

export default Header;
