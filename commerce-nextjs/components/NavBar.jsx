import React from "react";
import Logo from "./logos/Logo";
import LinkList from "./LinkList";
import CartLogo from "./logos/CartLogo";
import SignInLogo from "./logos/SignInLogo";
import SearchLogo from "./logos/SearchLogo";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { Menu } from "@headlessui/react";

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
        {!isLoading && !user && (
          <Link href="/api/auth/login" className="btn btn-primary btn-margin">
            <SignInLogo />
          </Link>
        )}
        {user && (
          <div>
            <div>
              <Menu>
                <Menu.Button className="text-slate-700 pl-6 relative">
                  <img
                    src={user.picture}
                    alt="Profile"
                    className="nav-user-profile rounded-circle"
                    width="50"
                    height="50"
                    decode="async"
                    data-testid="navbar-picture-desktop"
                  />
                </Menu.Button>
                <Menu.Items className="text-neutral-200 rounded-lg flex flex-col bg-slate-900 absolute">
                  <Menu.Item>{({ active }) => <p> {user.name}</p>}</Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/profile"
                        icon="user"
                        testId="navbar-profile-desktop"
                      >
                        Profile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled>
                    <Link
                      href="/api/auth/logout"
                      icon="power-off"
                      testId="navbar-logout-desktop"
                    >
                      Log out
                    </Link>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center pl-2 pr-2">
        <CartLogo />
      </div>
    </div>
  );
};

export default NavBar;
