import { ContactCta } from "@/components/contact/ContactCta";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactMethods } from "@/components/contact/ContactMethods";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMethods />
      <ContactFormSection />
      <ContactCta />
    </>
  );
}
