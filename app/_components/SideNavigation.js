"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdBrowserUpdated } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
import SignOutButton from "./SignOutButton";

function SideNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  return (
    <>
      {open && (
        <div className="w-full lg:w-1/4 border-r border-accent-800">
          <ul className="lg:min-h-[70vh] flex flex-col gap-2 text-xl font-bold">
            <li
              className={`hover:bg-accent-800 py-4 px-4 flex items-center transition-all ${
                pathname === "/account" ? "bg-accent-800" : ""
              }`}
            >
              <Link
                href="/account"
                className="flex gap-2 sm:gap-4 justify-center items-center "
              >
                <CgProfile className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[30px]" />{" "}
                <span className="text-[14px] sm:text-[16px] ">Profile</span>
              </Link>
            </li>
            <li
              className={`hover:bg-accent-800 py-4 px-4 flex items-center transition-all ${
                pathname === "/account/photos/edit" ? "bg-accent-800" : ""
              }`}
            >
              <Link
                href="/account/photos/edit"
                className="flex gap-2 sm:gap-4 justify-center items-center "
              >
                <FaEdit className="text-[20px] lg:text-[30px]" />
                <span className="text-[14px] sm:text-[16px]  ">
                  Edit photos
                </span>
              </Link>
            </li>
            <li
              className={`hover:bg-accent-800 py-4 px-4 flex items-center transition-all ${
                pathname === "/account/photos/add" ? "bg-accent-800" : ""
              }`}
            >
              <Link
                href="/account/photos/add"
                className="flex gap-2 sm:gap-4 justify-center items-center "
              >
                <FaPlusCircle className="text-[20px] lg:text-[30px]" />
                <span className="text-[14px] sm:text-[16px] ">Add photo</span>
              </Link>
            </li>
            <li
              className={`hover:bg-accent-800 py-4 px-4 flex items-center transition-all ${
                pathname === "/account/profile" ? "bg-accent-800" : ""
              }`}
            >
              <Link
                href="/account/profile"
                className="flex gap-2 sm:gap-4 justify-center items-center "
              >
                <MdBrowserUpdated className="text-[20px] lg:text-[30px]" />
                <span className="text-[14px] sm:text-[16px]">
                  Update Profile
                </span>
              </Link>
            </li>
            <SignOutButton />
          </ul>
        </div>
      )}
      <div className="absolute">
        {!open && (
          <GiHamburgerMenu
            onClick={() => setOpen(true)}
            className=" hover:text-primary-600 transition-all absolute top-[-30px] left-3 text-xl"
          />
        )}
        {open && (
          <IoClose
            onClick={() => setOpen(false)}
            className=" hover:text-primary-600 transition-all absolute top-[-30px] left-3 text-2xl"
          />
        )}
      </div>
    </>
  );
}

export default SideNavigation;
