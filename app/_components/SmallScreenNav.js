"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function SmallScreenNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <ul>
      <li className={` sm:hidden`}>
        <GiHamburgerMenu
          onClick={() => setOpen(true)}
          className="hover:text-primary-600 transition-all"
        />
      </li>
      {open && (
        <div>
          <div
            onClick={() => setOpen(false)}
            className="fixed bg-black top-0 left-0 w-full h-screen z-50 opacity-80"
          ></div>
          <div className="fixed bg-primary-800 top-1/2 left-1/2 w-3/4 h-3/4 z-50 translate-x-[-50%] translate-y-[-50%]">
            <ul className=" flex flex-col gap-4 justify-center items-center h-full">
              <span
                onClick={() => setOpen(false)}
                className="absolute top-2 right-4 text-5xl hover:text-primary-600 transition-all cursor-pointer  "
              >
                &times;
              </span>
              <li
                className={`${
                  pathname === "/" ? "text-primary-600" : ""
                } hover:text-primary-600 transition-all`}
              >
                <Link onClick={() => setOpen(false)} href="/">
                  Home
                </Link>
              </li>
              <li
                className={`${
                  pathname.startsWith("/places") ? "text-primary-600" : ""
                } hover:text-primary-600 transition-all`}
              >
                <Link onClick={() => setOpen(false)} href="/places">
                  All Places
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/about" ? "text-primary-600" : ""
                } hover:text-primary-600 transition-all`}
              >
                <Link onClick={() => setOpen(false)} href="/about">
                  About us
                </Link>
              </li>
              <li
                className={`${
                  pathname.startsWith("/account") ? "text-primary-600" : ""
                } hover:text-primary-600 transition-all`}
              >
                <Link onClick={() => setOpen(false)} href="/account">
                  User Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </ul>
  );
}

export default SmallScreenNav;
