import { getCabins } from "@/_lib/data-service";
import CabinCard from "./cabin-card";
import { CabinListProps } from "@/_lib/types";
import { filterCabins } from "@/_lib/constants";

export default async function CabinList({ filter }: CabinListProps) {
  const cabins = await getCabins();

  if (!cabins) return null;

  const filteredCabins = filterCabins(cabins, filter);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
