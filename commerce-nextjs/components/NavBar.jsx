import React from "react";
import Logo from "./Logo";
import LinkList from "./LinkList";
const NavBar = () => {
  return (
    <div className="flex bg-white">
      <Logo />
      <LinkList />
    </div>
  );
};

export default NavBar;
