"use client";

import { useContext, useEffect } from "react";
import { SidebarContext } from "@/app/influencer/layout";
import { FaListAlt } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Toast from "@/lib/toast";

export const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { toastSuccess } = Toast();

  useEffect(() => {
    const sidebar = document.getElementById("sidebar");

    document.addEventListener("mousedown", (event) => {
      if (
        !sidebar.contains(event.target) &&
        !sidebar.className.includes("hidden")
      ) {
        setIsOpen(!isOpen);
      }
    });
  }, [isOpen, setIsOpen]);

  function logout() {
    localStorage.removeItem("user");
    Cookies.remove("token");
    toastSuccess("Log out successfully!");
    router.push("/login");
  }

  return (
    <aside
      id="sidebar"
      className={`lg:block z-50 fixed ${
        !isOpen && "hidden"
      } max-w-60 w-full min-h-full h-screen bg-[#601FCE] border-slate-300 lg:sticky left-0 top-0 drop-shadow-xs shadow-slate-600`}
    >
      <div className="flex flex-col p-6 h-full">
        <Link
          href={"/"}
          className="text-xl font-bold tracking-wider overflow-hidden text-white inline-block text-transparent bg-clip-text"
        >
          <div className="flex items-center justify-center gap-3">
            <Image
              src={"img/dh-white.svg"}
              width={40}
              height={40}
              alt={"logo"}
            />{" "}
            DynaHunt
          </div>
        </Link>
        <div className="h-[1px] bg-slate-200 my-4"></div>

        <div className="flex flex-col gap-2">
          <Link href="/influencer">
            <div
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition delay-100 ease-in ${
                pathname === "/influencer"
                  ? "bg-base-200 text-neutral"
                  : "text-white hover:bg-base-200 hover:text-neutral"
              }`}
            >
              <GoPeople />
              <p className="text-sm">Profile</p>
            </div>
          </Link>
          <Link href="/influencer/manage">
            <div
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition delay-100 ease-in ${
                pathname === "/influencer/manage"
                  ? "bg-base-200 text-neutral"
                  : "text-white hover:bg-base-200 hover:text-neutral"
              }`}
            >
              <FaListAlt />
              <p className="text-sm">Management Profile</p>
            </div>
          </Link>
          <Link href="/influencer/offered">
            <div
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition delay-100 ease-in ${
                pathname === "/influencer/offered"
                  ? "bg-base-200 text-neutral"
                  : "text-white hover:bg-base-200 hover:text-neutral"
              }`}
            >
              <FaListAlt />
              <p className="text-sm">Offered Campaigns</p>
            </div>
          </Link>
        </div>
        <button
          onClick={logout}
          className="btn bg-[#FCE72D] text-neutral border-none btn-sm mt-auto"
        >
          Log Out
        </button>
      </div>
    </aside>
  );
};
