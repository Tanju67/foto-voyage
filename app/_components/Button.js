import Link from "next/link";
import React from "react";

export default function Button({ children, link = false }) {
  if (link) {
    return (
      <Link
        href={link}
        className=" inline-block rounded-md bg-primary-800 text-white py-4 px-8 mt-8 hover:bg-primary-900 transition-all"
      >
        {children}
      </Link>
    );
  }
  return (
    <button className=" inline-block rounded-md bg-primary-800 text-white py-4 px-8 mt-8 hover:bg-primary-900 transition-all">
      {children}
    </button>
  );
}
