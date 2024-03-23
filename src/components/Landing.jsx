import { Campaign } from "./Campaign";
import { Filtering } from "./Filtering";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Influencer } from "./Influencer";
import { Navbar } from "./Navbar";

export const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Filtering />
      <Influencer />
      <Campaign />
      <Footer />
    </>
  );
};
