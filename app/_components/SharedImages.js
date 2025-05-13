import { getAllPosts } from "../_lib/data-service";
import ImageItem from "./ImageItem";

async function SharedImages() {
  const travelPosts = await getAllPosts();
  return (
    <ul className="w-full flex flex-wrap gap-4 justify-center ">
      {travelPosts.map((place) => (
        <ImageItem key={place._id.toString()} place={place} />
      ))}
    </ul>
  );
}

export default SharedImages;
