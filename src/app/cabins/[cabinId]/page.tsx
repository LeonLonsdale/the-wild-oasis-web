import Cabin from "@/_components/cabins/cabin";
import Reservation from "@/_components/cabins/reservation";
import Spinner from "@/_components/common/spinner";
import { getCabin, getCabins } from "@/_lib/data-service";
import { CabinPageProps } from "@/_lib/types";
import { Suspense } from "react";

export async function generateMetadata({ params }: CabinPageProps) {
  const { cabinId } = params;

  const cabin = await getCabin(cabinId);
  const { name } = cabin;

  return {
    title: `Cabin ${name}`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const cabinIds = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  return cabinIds;
}

export default async function Page({ params }: CabinPageProps) {
  const { cabinId } = params;

  const cabin = await getCabin(cabinId);
  const { name } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
