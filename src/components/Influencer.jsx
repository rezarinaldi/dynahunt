import { InfluencerItem } from "./InfluencerItem";

export const Influencer = () => {
  return (
    <div
      id="influencer"
      className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 w-full"
    >
      <InfluencerItem />
    </div>
  );
};
