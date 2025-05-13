import bg from "@/public/bg.png";
import Image from "next/image";
import Link from "next/link";
import { auth } from "./_lib/auth";

export default async function Home() {
  const session = await auth();
  console.log("session:", session);
  return (
    <main className="mt-16 md:mt-32">
      <Image
        src={bg}
        className="object-cover object-top"
        fill
        alt="Mountain view"
        priority
      />

      <div className="relative flex flex-col items-center lg:max-w-[75%]  text-primary-100 px-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          Welcome to Foto Voyage
        </h1>
        <Link
          href="/places"
          className=" inline-block rounded-md bg-primary-800 text-white py-4 px-8 mt-8 hover:bg-primary-900 transition-all"
        >
          Explore wonderful places
        </Link>
      </div>
    </main>
  );
}
