import React from "react";
import Logo from "./Logo";
import MainNavigation from "./MainNavigation";

function Header() {
  return (
    <header className="z-50 py-2">
      <div className="flex justify-between items-center  px-10 text-primary-100">
        <Logo />
        <MainNavigation />
      </div>
    </header>
  );
}

export default Header;
