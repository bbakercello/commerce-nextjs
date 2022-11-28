import React from "react";
import Logo from "./logos/Logo";
import LinkList from "./LinkList";
import CartLogo from './logos/CartLogo'
import SignInLogo from './logos/SignInLogo'
import SearchLogo from './logos/SearchLogo'

import { Sign } from "crypto";
const NavBar = () => {
  return (
    <div className="flex justify-around bg-white">
      <div>
        <Logo />
      </div>
      <div className="flex flex-col justify-center">
        <LinkList />
      </div>
      <div></div>
      <div className="flex flex-col justify-center">
        <SearchLogo />
      </div>
      <div className="flex flex-col justify-center">
        <SignInLogo />
      </div>
      <div className="flex flex-col justify-center">
        <CartLogo />
      </div>
    </div>
  );
};

export default NavBar;
