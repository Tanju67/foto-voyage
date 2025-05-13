import Image from "next/image";
import Link from "next/link";
import UserImageItem from "./UserImageItem";

async function ImageItem({ place }) {
  const user = place.userId;
  return (
    <li className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] mb-16">
      <UserImageItem user={user} size={"32px"} mb="16px" fontSize="12px" />
      <Link href={`/places/${place._id}`}>
        <div className="relative h-[200px] mb-4">
          <Image
            src={place.image}
            alt={place.title}
            fill
            className="object-cover object-center  md:hover:blur-sm md:hover:scale-105 md:hover:rotate-1 transition-transform duration-300 shadow-xl"
          />
        </div>

        <h3 className="italic hover:text-primary-400 transition-all">
          {place.title}
        </h3>
      </Link>
    </li>
  );
}

export default ImageItem;
