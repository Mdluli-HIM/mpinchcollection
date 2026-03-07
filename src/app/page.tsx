import { ArchivePreview } from "@/components/home/ArchivePreview";
import { Hero } from "@/components/home/Hero";
import { LooksStrip } from "@/components/home/LooksStrip";
import { Manifesto } from "@/components/home/Manifesto";
import { SectionBridge } from "@/components/home/SectionBridge";
import { SubscribeBand } from "@/components/home/SubscribeBand";

export default function HomePage() {
  return (
    <>
      <Hero />

      <SectionBridge
        index="Transition 01"
        label="Hero to campaigns"
        backgroundWord={["MPINCH", "COLLECTION"]}
        title="From the opening statement into the moving issue gallery."
        copy="The homepage should not feel like stacked sections. It should feel like one editorial sequence where the visual tone deepens, the motion tightens, and the work begins to take over."
        tone="boneToBlack"
      />

      <LooksStrip />

      <Manifesto />

      <SectionBridge
        index="Transition 02"
        label="Campaigns to archive"
        title="From selected issues into a living system of brand memory."
        copy="After the campaign gallery, the pace opens up again. The archive becomes the place where the brand feels organized, collectible, and ready to scale."
        tone="blackToBone"
      />

      <ArchivePreview />

      <SubscribeBand />
    </>
  );
}
