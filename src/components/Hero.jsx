import Link from "next/link";

export const Hero = () => {
  return (
    <div className="hero min-h-screen bg-[#601FCE] text-neutral-content">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold">
            Find & Hire Influencer to Create Unique Content for Your Company or
            Brand
          </h1>
          <p className="py-6">
            Find and connect with over 100.000 influencer. <br />
            Start finding perfect influencers for your company or brand.
          </p>
          <Link href={"/register"}>
            <button className="btn bg-[#FCE72D] border-none hover:bg-purple-500 hover:text-white mr-2">
              Join as Influencer
            </button>
          </Link>
          <Link href={"/#influencer"}>
            <button className="btn btn-ghost text-[#FCE72D] border-none hover:bg-[#FCE72D] hover:text-neutral">
              Explore Influencers
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
