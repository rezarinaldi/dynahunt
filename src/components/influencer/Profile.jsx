"use client";

import { useEffect, useState } from "react";
import { ProfileItem } from "./ProfileItem";

export const Profile = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    setUser(localUser);
  }, []);

  return (
    <div className="px-6 py-3 lg:py-6 w-full">
      <h2 className="text-2xl font-bold text-neutral">
        Welcome back, {user?.name} 👋
      </h2>
      <div className="p-6 rounded-lg mt-4 shadow-sm bg-base-300">
        <h3 className="text-xl font-semibold mb-4">Profile</h3>
        <ProfileItem />
      </div>
    </div>
  );
};
