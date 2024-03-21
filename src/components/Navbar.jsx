"use client";

import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const Navbar = ({ userData }) => {
  const router = useRouter();
  function logout() {
    localStorage.removeItem("user");
    Cookies.remove("token");
    toast.success("Log out succesfully!");
    router.push("/login");
  }

  return (
    <div className="navbar p-4 backdrop-blur-2xl bg-base-100 sticky top-0 left-0 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/" className="links">
                Home
              </Link>
            </li>
            <li>
              <Link href={`/#influencer`} className="links">
                Explore Influencers
              </Link>
            </li>
            <li>
              <Link href={`/#campaign`} className="links">
                Campaigns
              </Link>
            </li>
            {userData ? (
              <li>
                <details>
                  <summary className="links">{userData?.name}</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li>
                      <Link href="/influencer" className="links">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button onClick={logout} className="links">
                        Log Out
                      </button>
                    </li>
                  </ul>
                </details>
              </li>
            ) : (
              <>
                <li>
                  <Link href={`/login`} className="links">
                    Log In
                  </Link>
                </li>
                <li>
                  <Link href={`/register`} className="links">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <Link href="/" className="btn btn-ghost text-xl">
          <Image src={"img/dh.svg"} width={40} height={40} alt={"logo"} />{" "}
          DynaHunt
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link href="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link href={`/#influencer`} className="links">
              Explore Influencers
            </Link>
          </li>
          <li>
            <Link href={`/#campaign`} className="links">
              Campaigns
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {userData ? (
            <li>
              <details>
                <summary className="links">{userData?.name}</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <Link href="/influencer" className="links">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button onClick={logout} className="links">
                      Log Out
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          ) : (
            <>
              <li>
                <Link
                  href={`/login`}
                  className="links bg-[#FCE72D] hover:bg-purple-700 hover:text-white"
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link href={`/register`} className="links">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
