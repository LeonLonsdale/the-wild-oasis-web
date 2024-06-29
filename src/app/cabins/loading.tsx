import Spinner from "@/_components/common/spinner";

export default function LoadingCabins() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-center">Loading cabin data...</p>
    </div>
  );
}
