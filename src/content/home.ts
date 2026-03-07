export type ManagedImage = {
  src: string;
  alt: string;
};

export type HeroLook = {
  title: string;
  note: string;
  image: ManagedImage;
};

export type CampaignItem = {
  id: string;
  season: string;
  title: string;
  location: string;
  note: string;
  accent: string;
  image: ManagedImage;
};

export const homeHero = {
  eyebrowLeft: "Mpinch clothing / urban vogue archive",
  eyebrowRight: "Cape Town — Johannesburg — Everywhere",
  kicker: "Black, bone, charcoal, and one precise hit of red.",
  title: "Street form for a quieter kind of power.",
  copy: "Mpinch Clothing is presented as an editorial portfolio — cinematic stills, premium restraint, oversized typography, and motion that feels expensive instead of noisy.",
  backgroundWord: "MPINCH",
  bottomLabel: "Campaign portfolio",
  bottomStatement: "Minimal luxury. Urban attitude. Cinematic restraint.",

  mainImage: {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80",
    alt: "Editorial fashion portrait for Mpinch Clothing hero",
  },

  looks: [
    {
      title: "Look 01",
      note: "Tailored volume / soft structure / city calm",
      image: {
        src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
        alt: "Editorial street fashion look one",
      },
    },
    {
      title: "Look 02",
      note: "Monochrome layering / winter street study",
      image: {
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
        alt: "Editorial street fashion look two",
      },
    },
    {
      title: "Look 03",
      note: "Quiet statement / editorial utility / movement",
      image: {
        src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
        alt: "Editorial street fashion look three",
      },
    },
  ] satisfies HeroLook[],
};

export const homeCampaignStrip = {
  eyebrow: "Selected campaigns",
  title: "Built like printed issues, staged like moving editorials.",
  copy: "This section should feel like an editorial runway in motion — restrained, cinematic, and strong enough to carry the brand without relying on e-commerce patterns.",

  items: [
    {
      id: "01",
      season: "Issue 01 / AW26",
      title: "Silent Uniform",
      location: "Cape Town",
      note: "Monochrome tailoring, soft shadows, urban stillness, and clean posture.",
      accent: "Bone / charcoal / precise red",
      image: {
        src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
        alt: "Editorial fashion campaign one",
      },
    },
    {
      id: "02",
      season: "Issue 02 / Core",
      title: "Street Study",
      location: "Johannesburg",
      note: "Layered silhouettes, restrained attitude, and photographic structure.",
      accent: "Volume / tailoring / shadow",
      image: {
        src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
        alt: "Editorial fashion campaign two",
      },
    },
    {
      id: "03",
      season: "Issue 03 / Motion",
      title: "Night Archive",
      location: "Inner City",
      note: "A darker study of movement, contrast, and elevated street language.",
      accent: "Noir / movement / texture",
      image: {
        src: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1200&q=80",
        alt: "Editorial fashion campaign three",
      },
    },
    {
      id: "04",
      season: "Issue 04 / Studio",
      title: "Soft Authority",
      location: "Studio Series",
      note: "Quiet luxury translated into a sharper urban fashion vocabulary.",
      accent: "Form / restraint / elegance",
      image: {
        src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
        alt: "Editorial fashion campaign four",
      },
    },
  ] satisfies CampaignItem[],
};
