import { ArchiveCta } from "@/components/archive/ArchiveCta";
import { ArchiveHero } from "@/components/archive/ArchiveHero";
import { ArchiveIndex } from "@/components/archive/ArchiveIndex";
import { ArchiveSystem } from "@/components/archive/ArchiveSystem";

export default function ArchivePage() {
  return (
    <>
      <ArchiveHero />
      <ArchiveIndex />
      <ArchiveSystem />
      <ArchiveCta />
    </>
  );
}
