// import { fetchData } from "@/components/config/fetch";
import { Landing } from "@/components/Landing";

// async function getInfluencers(queryValue) {
//   if (queryValue) {
//     const res = await fetch(`/api/v1/influencer?q=${queryValue}`, {
//       cache: "no-cache",
//     });
//     const data = await res.json();
//     return data;
//   }
//   const res = await fetch(`/api/v1/influencer`, {
//     cache: "no-cache",
//   });
//   const data = await res.json();
//   return data;
// }

// async function getInfluencerCount() {
//   const res = await fetch("/api/v1/influencer?count=true", {
//     cache: "no-cache",
//   });
//   const data = await res.json();
//   return data;
// }

export default async function HomePage() {
  // const q = searchParams.q;
  // const { data } = await getInfluencers(q);
  // const { data: totalAllInfluencer } = await getInfluencerCount();

  return (
    <main>
      <Landing />
    </main>
  );
}
