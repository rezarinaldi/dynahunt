"use client";

import { Header } from "@/components/influencer/Header";
import { Sidebar } from "@/components/influencer/Sidebar";
import { createContext, useState } from "react";

export const SidebarContext = createContext();

export default function InfluencerLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <section className="lg:flex w-screen min-h-dvh">
        <Sidebar />
        <Header />
        <main className="w-full">{children}</main>
      </section>
    </SidebarContext.Provider>
  );
}
