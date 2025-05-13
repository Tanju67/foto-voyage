import PlaceDetail from "@/app/_components/PlaceDetail";
import { getPostById, getUserById } from "@/app/_lib/data-service";

export async function generateMetadata({ params }) {
  const { placeId } = await params;
  const place = await getPostById(placeId);
  if (!place) return { title: "Place not found" };

  const { title } = place;
  return {
    title: `${title} `,
  };
}

async function Page({ params }) {
  const { placeId } = await params;
  const place = await getPostById(placeId);
  const user = await getUserById(place.userId);

  if (!place || !user) {
    return <div>Place or user not found</div>; // Hata mesajı veya yönlendirme
  }

  return (
    <div className="min-h-screen">
      <PlaceDetail place={place} user={user} />
    </div>
  );
}

export default Page;
