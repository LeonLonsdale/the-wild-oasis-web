import SelectCountry from "@/_components/account/select-country";
import UpdateProfileForm from "@/_components/account/update-profile-form";
import { auth } from "@/_lib/auth";
import { getGuest } from "@/_lib/data-service";
import { GuestDB } from "@/_lib/types";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Update Profile",
};

export default async function ProfilePage() {
  const session = await auth();
  if (!session) return redirect("/login");
  const user = session.user;
  if (!user?.email) return redirect("/login");
  const guest: GuestDB = await getGuest(user.email);

  const nationality = guest.nationality!;
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
