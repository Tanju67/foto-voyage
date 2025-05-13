import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";

function UserImageItem({ user, size, mb, fontSize }) {
  return (
    <Link
      href={`/user/${user?._id}`}
      className="flex items-center"
      style={{ marginBottom: mb }}
    >
      <div
        style={{ width: size, height: size }}
        className="relative rounded-full overflow-hidden "
      >
        {user.image && (
          <Image
            src={user.image}
            alt={user.fullName}
            fill
            className="object-cover "
          />
        )}
        {!user.image && (
          <CgProfile className="w-full h-full text-primary-100" />
        )}
      </div>
      <span
        className="ml-2 hover:text-primary-400 transition-all"
        style={{ fontSize: fontSize }}
      >
        {user?.fullName}
      </span>
    </Link>
  );
}

export default UserImageItem;
