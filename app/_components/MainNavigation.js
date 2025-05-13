import { auth } from "../_lib/auth";
import { getUserByEmail } from "../_lib/data-service";
import NavLink from "./NavLink";
import SmallScreenNav from "./SmallScreenNav";

export const dynamic = "force-dynamic";

async function MainNavigation() {
  const session = await auth();
  const user = await getUserByEmail(session?.user?.email);

  return (
    <nav>
      <ul className="hidden sm:flex gap-4 md:gap-12 lg:gap-20 text-md sm:text-xl justify-center items-center">
        <NavLink title="Home" href="/" />
        <NavLink title="All places" href="/places" other={true} />
        <NavLink title="About us" href="/about" />
        {!user && <NavLink title="User account" href="/login" other={true} />}
        {user && (
          <NavLink
            title={user.fullName}
            href="/account"
            other={true}
            image={user.image}
          />
        )}
      </ul>
      <SmallScreenNav user={user} />
    </nav>
  );
}

export default MainNavigation;
