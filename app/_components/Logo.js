import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="relative flex items-center gap-4 z-10">
      <Image
        src="/logo.png"
        height="80"
        width="80"
        alt="Foto Voyage Logo"
        // quality={100}
      />
    </Link>
  );
}

export default Logo;
