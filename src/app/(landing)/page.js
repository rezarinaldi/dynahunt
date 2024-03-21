"use client";

import { Campaign } from "@/components/Campaign";
import { Filtering } from "@/components/Filtering";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InfluencerItem } from "@/components/InfluencerItem";
import { Navbar } from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    setUserData(localUser);
  }, []);

  return (
    <main>
      <Navbar userData={userData} />
      <Hero />
      <Filtering />
      <InfluencerItem userData={userData} />
      <Campaign />
      <Footer />
    </main>
  );
}
