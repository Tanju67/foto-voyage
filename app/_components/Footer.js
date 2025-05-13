"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./Logo";

function Footer() {
  const pathname = usePathname();
  return (
    <footer className="bg-accent-800  flex flex-col items-center justify-center py-8">
      <div className="flex gap-4 items-center">
        <Logo />
        <nav>
          <ul className=" flex gap-4  text-[12px]">
            <li
              className={`${
                pathname === "/" ? "text-primary-600" : ""
              } hover:text-primary-600 transition-all`}
            >
              <Link href="/">Home</Link>
            </li>
            <span>|</span>
            <li
              className={`${
                pathname.startsWith("/places") ? "text-primary-600" : ""
              } hover:text-primary-600 transition-all`}
            >
              <Link href="/places">All Places</Link>
            </li>
            <span>|</span>
            <li
              className={`${
                pathname === "/about" ? "text-primary-600" : ""
              } hover:text-primary-600 transition-all`}
            >
              <Link href="/about">About us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <span className="text-[12px] text-gray-500">
        &copy; 2025 Created by Tanju Özer for educational purposes.
      </span>
    </footer>
  );
}

export default Footer;
