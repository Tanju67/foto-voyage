import React from "react";
import view1 from "@/public/about/view_1.jpeg";
import view2 from "@/public/about/view_2.jpg";
import view3 from "@/public/about/view_3.jpg";
import view4 from "@/public/about/view_4.jpg";
import Image from "next/image";

export const metadata = {
  title: "About",
};

function Page() {
  return (
    <section className="px-6 md:px-10 ">
      <h2 className=" mt-16  mb-16 text-center flex flex-col">
        <span className="text-3xl md:text-5xl font-bold text-primary-500">
          Welcome to Foto Voyage
        </span>
        <span className="text-xl">where every photo tells a story.</span>
      </h2>
      <div className="flex flex-col md:flex-row  gap-8 mb-20">
        <div className="relative w-full md:w-1/2">
          <Image src={view1} alt="Foto Voyage" className=" object-cover" />
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-bold mb-4">
            every photo is a passport, every story a journey.
          </h3>
          <p className="mb-4">
            At Foto Voyage, we believe that travel is not just about ticking
            places off a map. It&#39;s about the quiet, powerful moments that
            live in your heart long after the trip is over. A photo is not just
            a frozen image — it&#39;s the laughter of a stranger, the taste of
            street food at midnight, the awe of watching stars in a sky you
            don&#39;t recognize. It&#39;s the soul of a journey, captured in a
            single frame.
          </p>
          <p className="mb-4">
            We started Foto Voyage with one simple idea: to connect people
            through the lens of travel. We wanted to create a space where the
            world feels a little smaller, a little closer, and much more
            beautiful — not through brochures or guidebooks, but through real
            people and real stories.
          </p>
          <p>
            Here, every photo shared is an open window into someone&#39;s
            experience — a mountain hike that stole their breath, a market alley
            that surprised them with color and kindness, or a quiet lake they
            stumbled upon without even trying. Whether you&#39;re an avid
            explorer or someone who dreams from your couch, Foto Voyage invites
            you in.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-8 mb-20">
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="mb-4">
            Our mission is simple: To celebrate the world as seen through your
            eyes. We want to highlight the human side of travel — the emotions,
            the chaos, the discovery, the joy. In an age of filters and staged
            photos, we cherish authenticity. We don&#39;t need perfection. We
            want truth, beauty, and connection.
          </p>
          <p className="mb-4">
            That&#39;s why we invite travelers from all backgrounds — solo
            backpackers, families, city wanderers, nature lovers, weekend
            warriors — to share their world with us. Your journey matters, and
            your photos have a story only you can tell.
          </p>
        </div>
        <div className="relative w-full md:w-1/2">
          <Image src={view2} alt="Foto Voyage" className=" object-cover" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mb-20">
        <div className="relative w-full md:w-1/2">
          <Image src={view3} alt="Foto Voyage" className=" object-cover" />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-bold mb-4">A Community of Explorers</h3>
          <p className="mb-4">
            Foto Voyage isn&#39;t just a website. It&#39;s a global community —
            a digital campfire where stories are told and friendships are
            formed. We&#39;re here for the dreamers who collect moments instead
            of things. For the photographers who shoot with their hearts. For
            the ones who still get butterflies before boarding a plane.
          </p>
          <p className="mb-4">
            Our platform is carefully designed to make sharing easy, fun, and
            inspiring. Users can upload photos, write short captions or full
            travel tales, and explore a constantly growing map of memories.
            Whether it&#39;s a foggy morning in Kyoto, a golden afternoon in
            Santorini, or a snowy evening in Montreal — every story adds a new
            star to our constellation of travel moments.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-8 mb-20">
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-bold mb-4">Join the Journey</h3>
          <p className="mb-4">
            Whether you&#39;re a seasoned globetrotter or just starting to
            collect passport stamps, your voice belongs here. Take the shot.
            Share the story. Inspire someone else. Together, let&#39;s build a
            living, breathing album of the world — one that&#39;s full of
            emotion, memory, and discovery
          </p>
          <p className="mb-4">
            Thank you for being part of our story. We can&#39;t wait to see the
            world through your eyes.
          </p>
          <p>Foto Voyage</p>
          <p>Every photo has a soul. Every journey leaves a mark.</p>
        </div>
        <div className="relative w-full md:w-1/2">
          <Image src={view4} alt="Foto Voyage" className=" object-cover" />
        </div>
      </div>
    </section>
  );
}

export default Page;
