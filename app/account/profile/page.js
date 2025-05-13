import UpdateProfile from "@/app/_components/UpdateProfile";
import { auth } from "@/app/_lib/auth";
import { getUserByEmail } from "@/app/_lib/data-service";

export const metadata = {
  title: "Update Profile",
};

async function Page() {
  const session = await auth();
  const user = await getUserByEmail(session.user.email);
  return <UpdateProfile user={user} />;
}

export default Page;
