import { ProfileForm } from "./ProfileForm";

export const ManageProfile = () => {
  return (
    <div className="px-6 py-3 md:py-6 w-full">
      <h2 className="text-2xl font-bold mb-4 text-neutral">
        Management Profile
      </h2>
      <ProfileForm />
    </div>
  );
};
