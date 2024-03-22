import { Campaign } from "@/components/Campaign";
import { Filtering } from "@/components/Filtering";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InfluencerItem } from "@/components/InfluencerItem";
import { Navbar } from "@/components/Navbar";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Filtering />
      <InfluencerItem />
      <Campaign />
      <Footer />
    </main>
  );
}
