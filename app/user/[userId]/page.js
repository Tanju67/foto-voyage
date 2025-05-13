import PlaceDetail from "@/app/_components/PlaceDetail";
import UserImageItem from "@/app/_components/UserImageItem";
import { getPostByUserId, getUserById } from "@/app/_lib/data-service";

export async function generateMetadata({ params }) {
  const { userId } = await params;
  const user = await getUserById(userId);

  return {
    title: user.fullName || "User Profile",
  };
}

async function Page({ params }) {
  const { userId } = await params;
  const places = await getPostByUserId(userId);
  const user = await getUserById(userId);
  return (
    <section className="min-h-screen">
      <div>
        <div className="px-10">
          <UserImageItem user={user} size={"100px"} mb="16px" fontSize="40px" />
        </div>

        {places.map((place) => (
          <PlaceDetail key={place._id.toString()} place={place} />
        ))}
      </div>
    </section>
  );
}

export default Page;
