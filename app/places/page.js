import { Suspense } from "react";
import SharedImages from "../_components/SharedImages";
import Spinner from "../_components/Spinner";

export const metadata = {
  title: "All Places",
};

async function page() {
  return (
    <section className="max-w-full mx-auto px-6 md:px-10 min-h-screen">
      <h1 className="text-3xl font-bold text-primary-500 mb-8">
        Captured Moments from Our Community
      </h1>
      <p className="text-lg mb-12">
        Explore the world through the lenses of our adventurers. Each photo
        shared here tells a unique story — from breathtaking landscapes to
        spontaneous street scenes. Dive in and discover the beauty of travel
        through the eyes of fellow explorers.
      </p>
      <Suspense fallback={<Spinner />}>
        <SharedImages />
      </Suspense>
    </section>
  );
}

export default page;
