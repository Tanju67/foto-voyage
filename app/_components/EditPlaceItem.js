import Image from "next/image";
import Link from "next/link";
import React from "react";
import DeletePostForm from "./DeletePostForm";

function EditPlaceItem({ place }) {
  return (
    <>
      <div className="flex gap-4 w-full bg-accent-800 items-center">
        <div className="relative w-[150px] h-[100px]">
          <Image
            src={place.image}
            alt={place.title}
            className="object-cover"
            fill
          />
        </div>
        <div className="flex-1">{place.title}</div>
        <div className="ml-auto flex flex-col bg-primary-800 self-stretch justify-around w-[100px]">
          <Link
            href={`/account/photos/edit/${place._id}`}
            className="border-b border-primary-600 flex-1 hover:bg-primary-900 transition-all flex items-center justify-center"
          >
            ✏️ Edit
          </Link>
          <DeletePostForm postId={place._id.toString()} />
        </div>
      </div>
      <hr className="border-accent-800" />
    </>
  );
}

export default EditPlaceItem;
