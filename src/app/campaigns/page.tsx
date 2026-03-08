import { CampaignsCta } from "@/components/campaigns/CampaignsCta";
import { CampaignsHero } from "@/components/campaigns/CampaignsHero";
import { CampaignsIndex } from "@/components/campaigns/CampaignsIndex";

export default function CampaignsPage() {
  return (
    <>
      <CampaignsHero />
      <CampaignsIndex />
      <CampaignsCta />
    </>
  );
}
