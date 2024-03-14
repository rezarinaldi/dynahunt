import Link from 'next/link';

export const Hero = () => {
    return (

<div className="hero min-h-screen bg-neutral text-neutral-content">
<div className="hero-content text-center">
    <div className="max-w-md">
        <h1 className="text-5xl font-bold">
        👓 Find & Hire Influencer to Create Unique Content For Your Brand
        </h1>
        <p className="py-6">
        Search and connect with over 100,000 influencers 
        Start finding the perfect influencers for your brand 
        </p>
        <Link href={'/dashboard'}>
            <button className="btn hover:btn-neutral mr-2">
                Get Started
            </button>
        </Link>
        <Link href={'/#events'}>
            <button className="btn btn-accent">
                Explore Creator
            </button>
        </Link>
    </div>
</div>
</div>

);
};
