import { Campaign } from "./Campaign";
import { Filtering } from "./Filtering";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Influencer } from "./Influencer";
import { Navbar } from "./Navbar";

export const Landing = ({ influencerData, totalInfluencer }) => {
  return (
    <>
      <Navbar />
      <Hero totalInfluencer={totalInfluencer} />
      <Filtering />
      <Influencer influencerData={influencerData} />
      <Campaign />
      <Footer />
    </>
  );
};
