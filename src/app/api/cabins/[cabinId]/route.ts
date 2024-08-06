import { getBookedDatesByCabinId, getCabin } from "@/_lib/data-service";
import { type NextRequest } from "next/server";

type Params = {
  params: { cabinId: string };
};

export async function GET(request: NextRequest, { params }: Params) {
  const { cabinId } = params;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ status: 200, cabin, bookedDates });
  } catch (error: unknown) {
    if (typeof error === "object" && error !== null && "digest" in error) {
      if ((error as { digest: string }).digest === "NEXT_NOT_FOUND")
        return Response.json({ status: 404, message: "Cabin not found" });
    }
    return Response.json({ status: 500, message: "Something went wrong" });
  }
}
