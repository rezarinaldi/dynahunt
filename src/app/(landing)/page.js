import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InfluencerItem } from "@/components/InfluencerItem";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <InfluencerItem />
      <Footer />
    </main>
  );
}
