import PlaceItemForm from "@/app/_components/PlaceItemForm";
import { updatePostAction } from "@/app/_lib/actions";
import { getPostById, getUserById } from "@/app/_lib/data-service";

async function page({ params }) {
  const { placeId } = await params;
  const place = await getPostById(placeId);
  place.userId = place.userId.toString();
  const user = await getUserById(place.userId);
  user._id = user._id.toString();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit your Photo</h2>
      <PlaceItemForm
        place={place}
        user={user}
        edit={true}
        fn={updatePostAction}
      />
    </div>
  );
}

export default page;
