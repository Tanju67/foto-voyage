import EditPlaceItem from "@/app/_components/EditPlaceItem";
import NoPostFound from "@/app/_components/NoPostFound";
import { auth } from "@/app/_lib/auth";
import { getPostByUserId, getUserByEmail } from "@/app/_lib/data-service";
import React from "react";

export const metadata = {
  title: "Edit Photos",
};

async function Page() {
  const session = await auth();
  const user = await getUserByEmail(session.user.email);
  const places = await getPostByUserId(user._id);

  if (places.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold px-6 lg:px-10">Edit your Photos</h2>
        <NoPostFound link="/account/photos/add" />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-4">Edit your Photos</h2>
      {places?.map((place) => (
        <EditPlaceItem key={place._id.toString()} place={place} />
      ))}
    </div>
  );
}

export default Page;
