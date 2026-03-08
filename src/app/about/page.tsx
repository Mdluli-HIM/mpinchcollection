import { AboutCta } from "@/components/about/AboutCta";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutPrinciples } from "@/components/about/AboutPrinciples";
import { AboutStatement } from "@/components/about/AboutStatement";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutPrinciples />
      <AboutStatement />
      <AboutCta />
    </>
  );
}
