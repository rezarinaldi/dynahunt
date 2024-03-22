"use client";

import { useContext } from "react";
import { SidebarContext } from "@/app/influencer/layout";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div className="lg:hidden w-full px-6 py-4 border-b bg-[#601FCE] border-slate-300">
      <div className="flex items-center justify-between">
        <Link
          href={"/"}
          className="text-xl font-bold tracking-wider overflow-hidden text-white inline-block text-transparent bg-clip-text"
        >
          <div className="flex items-center gap-3">
            <Image
              src={"img/dh-white.svg"}
              width={40}
              height={40}
              alt={"logo"}
            />{" "}
            DynaHunt
          </div>
        </Link>
        <button
          className="p-2 border rounded-md border-slate-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars className="text-slate-100" size={16} />
        </button>
      </div>
    </div>
  );
};
