"use client";

import { useEffect, useState } from "react";
import { ProfileItem } from "./ProfileItem";
import { EmbedItem } from "./EmbedItem";

export const Profile = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    setUser(localUser);
  }, []);

  return (
    <div className="px-6 py-3 md:py-6 w-full">
      <h2 className="mb-4 text-2xl font-bold text-neutral">
        Welcome Back, {user?.name} 👋
      </h2>
      <ProfileItem />
      <h2 className="text-2xl font-semibold text-neutral lg:text-left text-center my-3">
        Sample Content
      </h2>
      <EmbedItem />
    </div>
  );
};
