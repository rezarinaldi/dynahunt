import { CampaignItem } from "./CampaignItem";

export const OfferCampaigns = () => {
  return (
    <div className="px-6 py-3 lg:py-6 w-full">
      <h2 className="text-2xl font-bold mb-4 text-neutral">
        Offered Campaigns
      </h2>
      <p>List of Company or Brand that have been interested:</p>
      <CampaignItem />
    </div>
  );
};
