import PlaceItemForm from "@/app/_components/PlaceItemForm";
import { createPostAction } from "@/app/_lib/actions";
import { auth } from "@/app/_lib/auth";
import { getUserByEmail } from "@/app/_lib/data-service";
import React from "react";

export const metadata = {
  title: "Add Photos",
};

async function page() {
  const session = await auth();
  const user = await getUserByEmail(session.user.email);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add a New Photo</h2>
      <PlaceItemForm user={user} fn={createPostAction} />
    </div>
  );
}

export default page;
