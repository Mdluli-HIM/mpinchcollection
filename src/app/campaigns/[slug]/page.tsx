import { notFound } from "next/navigation";

import { CampaignDetailCredits } from "@/components/campaign-detail/CampaignDetailCredits";
import { CampaignDetailGallery } from "@/components/campaign-detail/CampaignDetailGallery";
import { CampaignDetailHero } from "@/components/campaign-detail/CampaignDetailHero";
import { CampaignDetailStory } from "@/components/campaign-detail/CampaignDetailStory";
import { campaignDetails, getCampaignBySlug } from "@/content/campaigns";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return campaignDetails.map((item) => ({
    slug: item.slug,
  }));
}

export default async function CampaignDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);

  if (!campaign) {
    notFound();
  }

  return (
    <>
      <CampaignDetailHero campaign={campaign} />
      <CampaignDetailStory campaign={campaign} />
      <CampaignDetailGallery campaign={campaign} />
      <CampaignDetailCredits campaign={campaign} />
    </>
  );
}
