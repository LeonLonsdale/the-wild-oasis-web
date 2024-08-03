import CabinList from "@/_components/cabins/cabin-list";
import Filter from "@/_components/cabins/filter";
import Spinner from "@/_components/common/spinner";
import { CabinsPageProps } from "@/_lib/types";

import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Cabins",
};

export default function CabinsPage({ searchParams }: CabinsPageProps) {
  const { capacity } = searchParams;
  const filter = capacity ? capacity : "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      {/* key = filter to ensure suspense is used on each filter */}
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
