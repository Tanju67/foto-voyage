import { get } from "mongoose";
import NoPostFound from "../_components/NoPostFound";
import PlaceDetail from "../_components/PlaceDetail";
import UserImageItem from "../_components/UserImageItem";
import { auth } from "../_lib/auth";
import { getPostByUserId, getUserByEmail } from "../_lib/data-service";

async function Page() {
  const session = await auth();
  const user = await getUserByEmail(session.user.email);
  const places = await getPostByUserId(user._id);

  if (places.length === 0) {
    return (
      <section>
        <div>
          <div className="px-2 lg:px-10">
            <UserImageItem
              user={user}
              size={"100px"}
              mb="16px"
              fontSize="40px"
            />
          </div>
          <NoPostFound link="/account/photos/add" />
        </div>
      </section>
    );
  }

  return (
    <section>
      <div>
        <div className="px-2 lg:px-10">
          <UserImageItem user={user} size={"100px"} mb="16px" fontSize="40px" />
        </div>

        {places?.map((place) => (
          <PlaceDetail key={place?._id} place={place} />
        ))}
      </div>
    </section>
  );
}

export default Page;
