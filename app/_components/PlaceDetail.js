import Image from "next/image";
import UserImageItem from "./UserImageItem";

function PlaceDetail({ place, user = false }) {
  return (
    <div className="px-6 lg:px-10 flex flex-col md:flex-row gap-8 mb-20 md:mb-10">
      <div className="relative w-full md:w-[48%] min-h-[300px]">
        <Image
          src={place.image}
          alt={place.title}
          className="object-cover md:h-[350px]"
          fill
        />
      </div>
      <div className="w-full md:w-[48%]">
        {user && (
          <UserImageItem user={user} size="60px" mb="16px" fontSize={"20px"} />
        )}
        <h2 className="text-3xl font-bold mb-2">{place.title}</h2>
        <p className="text-md italic">{place.description}</p>
      </div>
    </div>
  );
}

export default PlaceDetail;
