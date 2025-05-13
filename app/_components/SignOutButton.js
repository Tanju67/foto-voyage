import Link from "next/link";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <li className="mt-auto hover:bg-accent-800 py-4 px-4 flex items-center transition-all">
        <button className="flex gap-2 sm:gap-4 justify-center items-center ">
          <FaSignOutAlt className="text-[20px] lg:text-[30px]" />
          <span className="text-[14px] sm:text-[16px]  ">Sign out</span>
        </button>
      </li>
    </form>
  );
}

export default SignOutButton;
