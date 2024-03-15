import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
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
                Explore
              </Link>
            </li>
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
            <li>
              <details>
                <summary className="links">Testing Kak</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <Link href="/dashboard" className="links">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button onClick={""} className="links">
                      Log Out
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <Link href="/" className="btn btn-ghost text-xl">
          <Image src={"/icon.png"} width={40} height={40} alt={"logo"} />{" "}
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
              Explore
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link
              href={`/login`}
              className="links bg-neutral text-white hover:bg-base-200 hover:text-neutral"
            >
              Log In
            </Link>
          </li>
          <li>
            <Link href={`/register`} className="links">
              Register
            </Link>
          </li>
          <li>
            <details>
              <summary className="links">Testing Kak</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <Link href="/dashboard" className="links">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button onClick={""} className="links">
                    Log Out
                  </button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};