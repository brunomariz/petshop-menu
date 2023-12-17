import React from "react";
import logo from "../img/metropole.png";

// type Props = {};

function Header() {
  return (
    <div className="p-2 bg-white flex items-center justify-center w-full h-32">
      <img alt="Logo do Metropole Pet Shop" src={logo} className="h-full" />
    </div>
  );
}

export default Header;
