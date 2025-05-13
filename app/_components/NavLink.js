"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavLink({ href, title, other = false, image = false }) {
  const pathname = usePathname();
  if (other) {
    return (
      <li
        className={`${
          pathname.startsWith(href) ? "text-primary-600" : ""
        } hover:text-primary-600 transition-all`}
      >
        <Link href={href} className="flex justify-center items-center gap-2">
          {image && (
            <div className="relative w-12 h-12">
              <Image
                src={image}
                alt="profile image"
                fill
                className="rounded-full object-cover"
              />
            </div>
          )}
          <span>{title}</span>
        </Link>
      </li>
    );
  }
  return (
    <li
      className={`${
        pathname === href ? "text-primary-600" : ""
      } hover:text-primary-600 transition-all`}
    >
      <Link href={href}>{title}</Link>
    </li>
  );
}

export default NavLink;
