"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      // const providers = await getProviders();
      // setProviders(providers);
    };
    fetchProviders();
  }, []);
  return (
    <nav className="w-full flex-between mb-16 pt-4">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Prompts-AI</p>
      </Link>
      {/* desktop view  */}
      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-post" className="black_btn">
              Create Post
            </Link>
            <button
              type="button"
              className="outline_btn"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
            <Link href="/profile" className="flex gap-2 flex-center">
              <Image
                src="/assets/images/logo.svg"
                alt="profile"
                width={30}
                height={30}
                className="object-contain"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                <button
                  type="button"
                  className="black_btn"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>;
              })}
          </>
        )}
      </div>
      {/* mobile view  */}
      <div className="sm:hidden flex relative">
        {isLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              alt="profile"
              width={30}
              height={30}
              className="object-contain"
              onClick={() => {
                setToggleDropdown((prev) => !prev);
              }}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link href="/profile" className="dropdown_link">
                  My Profile
                </Link>
                <Link href="/create-post" className="dropdown_link">
                  Create Post
                </Link>
                <button
                  type="button"
                  className="black_btn mt-5 w-full "
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                <button
                  type="button"
                  className="black_btn"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>;
              })}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
Nav;
