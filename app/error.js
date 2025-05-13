"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ErrorPage({ error }) {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-primary-600 mb-4">
        An Error Occurred
      </h1>
      <p className="text-lg ">{error.message || "Something went wrong."}</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-md hover:bg-primary-900 transition-all bg-primary-800 text-white py-4 px-8"
      >
        Go back to homepage
      </Link>
    </div>
  );
}
