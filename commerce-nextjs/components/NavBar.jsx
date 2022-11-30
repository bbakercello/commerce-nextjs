import React from "react";
import Logo from "./logos/Logo";
import LinkList from "./LinkList";
import CartLogo from "./logos/CartLogo";
import SignInLogo from "./logos/SignInLogo";
import SearchLogo from "./logos/SearchLogo";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
const NavBar = () => {
  const { user, isLoading } = useUser();
  return (
    <div className="flex justify-around bg-white">
      <div>
        <Logo />
      </div>
      <div className="flex flex-col justify-center">{user && <LinkList />}</div>
      <div></div>
      <div className="flex flex-col justify-center pl-2 pr-2">
        <SearchLogo />
      </div>
      <div className="flex flex-col justify-center pl-2 pr-2">
        <SignInLogo />
        {!isLoading && !user && (
          <Link href="/api/auth/login" className="btn btn-primary btn-margin">
            Log in
          </Link>
        )}
        {user && (
          <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
            <DropdownToggle nav caret id="profileDropDown">
              <img
                src={user.picture}
                alt="Profile"
                className="nav-user-profile rounded-circle"
                width="50"
                height="50"
                decode="async"
                data-testid="navbar-picture-desktop"
              />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header data-testid="navbar-user-desktop">
                {user.name}
              </DropdownItem>
              <DropdownItem className="dropdown-profile" tag="span">
                <Link
                  href="/profile"
                  icon="user"
                  testId="navbar-profile-desktop"
                >
                  Profile
                </Link>
              </DropdownItem>
              <DropdownItem id="qsLogoutBtn">
                <Link
                  href="/api/auth/logout"
                  icon="power-off"
                  testId="navbar-logout-desktop"
                >
                  Log out
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        )}
      </div>
      <div className="flex flex-col justify-center pl-2 pr-2">
        <CartLogo />
      </div>
    </div>
  );
};

export default NavBar;
