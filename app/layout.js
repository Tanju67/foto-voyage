import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  // weight: "400",
});

export const metadata = {
  title: {
    default: "Foto Voyage",
    template: "%s | Foto Voyage",
  },
  description: "A new way to see the world",
};

export default async function RootLayout({ children, params }) {
  const locale = (await params).locale;
  return (
    <html lang="en">
      <body
        className={`${josefin.className} min-h-screen flex flex-col justify-start bg-accent-900 text-accent-100`}
      >
        <Header />
        <hr className="border-accent-800 mb-10" />
        {children}
      </body>
    </html>
  );
}
