import Link from "next/link";

export const Hero = () => {
  return (
    <div className="hero min-h-screen bg-neutral text-neutral-content">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold">
            Find & Hire Influencer to Create Unique Content for Your Agency or
            Brand
          </h1>
          <p className="py-6">
            Find and connect with over 100.000 influencers. <br />
            Start finding perfect creators for your agency or brand.
          </p>
          <Link href={"/register"}>
            <button className="btn mr-2">Join as Influencer</button>
          </Link>
          <Link href={"/#influencer"}>
            <button className="btn btn-neutral">Explore Influencer</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
