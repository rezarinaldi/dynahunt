import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-10 bg-neutral text-neutral-content">
        <nav className="grid grid-flow-col gap-4">
          <Link className="link link-hover" href={"/"}>
            Home
          </Link>
          <Link className="link link-hover" href={"/#influencer"}>
            Influencer
          </Link>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by Dynacode</p>
        </aside>
      </footer>
    </>
  );
};