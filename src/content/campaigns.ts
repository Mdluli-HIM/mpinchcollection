export type CampaignImage = {
    src: string;
    alt: string;
  };
  
  export type CampaignDetail = {
    slug: string;
    id: string;
    season: string;
    title: string;
    location: string;
    note: string;
    accent: string;
    heroImage: CampaignImage;
    gallery: CampaignImage[];
    intro: string;
    statement: string;
    body: string[];
    credits: {
      label: string;
      value: string;
    }[];
  };
  
  export const campaignDetails: CampaignDetail[] = [
    {
      slug: "silent-uniform",
      id: "01",
      season: "Issue 01 / AW26",
      title: "Silent Uniform",
      location: "Cape Town",
      note: "Monochrome tailoring, soft shadows, urban stillness, and clean posture.",
      accent: "Bone / charcoal / precise red",
      heroImage: {
        src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=80",
        alt: "Silent Uniform campaign hero image",
      },
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=80",
          alt: "Silent Uniform gallery image one",
        },
        {
          src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=80",
          alt: "Silent Uniform gallery image two",
        },
        {
          src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80",
          alt: "Silent Uniform gallery image three",
        },
        {
          src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80",
          alt: "Silent Uniform gallery image four",
        },
      ],
      intro:
        "Silent Uniform explores premium restraint through monochrome tailoring and a quieter urban silhouette language.",
      statement:
        "The issue is built around stillness, posture, and a visual rhythm that makes the clothing feel architectural rather than loud.",
      body: [
        "This campaign frames Mpinch through a harder editorial lens. The clothes are treated as form, weight, and proportion before they are treated as trend.",
        "The visual pacing is deliberate: less clutter, stronger shape, and a cleaner contrast between the body, fabric, and city environment.",
        "As an issue template, this page is designed to hold photography, narrative text, credits, and gallery sequences in a way that can scale across future campaign releases.",
      ],
      credits: [
        { label: "Direction", value: "Mpinch Studio" },
        { label: "Category", value: "Campaign Issue" },
        { label: "Palette", value: "Bone / Charcoal / Red" },
        { label: "Focus", value: "Tailoring / Stillness / Form" },
      ],
    },
    {
      slug: "street-study",
      id: "02",
      season: "Issue 02 / Core",
      title: "Street Study",
      location: "Johannesburg",
      note: "Layered silhouettes, restrained attitude, and photographic structure.",
      accent: "Volume / tailoring / shadow",
      heroImage: {
        src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
        alt: "Street Study campaign hero image",
      },
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80",
          alt: "Street Study gallery image one",
        },
        {
          src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=80",
          alt: "Street Study gallery image two",
        },
        {
          src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1400&q=80",
          alt: "Street Study gallery image three",
        },
        {
          src: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1400&q=80",
          alt: "Street Study gallery image four",
        },
      ],
      intro:
        "Street Study looks at city dressing as a set of visual decisions: shape, layering, restraint, and pace.",
      statement:
        "The issue is less about spectacle and more about building a stronger relationship between streetwear language and editorial image control.",
      body: [
        "The styling focuses on form and proportion rather than excess. Each look is treated like a frame in a longer visual study.",
        "The images are intended to feel collected and considered, as though they belong to a fashion publication rather than a product list.",
        "As the archive grows, pages like this become part of a broader issue system where each campaign holds its own atmosphere while still belonging to the same brand world.",
      ],
      credits: [
        { label: "Direction", value: "Mpinch Studio" },
        { label: "Category", value: "Urban Study" },
        { label: "Palette", value: "Shadow / Bone / Black" },
        { label: "Focus", value: "Layering / Motion / City Form" },
      ],
    },
    {
      slug: "night-archive",
      id: "03",
      season: "Issue 03 / Motion",
      title: "Night Archive",
      location: "Inner City",
      note: "A darker study of movement, contrast, and elevated street language.",
      accent: "Noir / movement / texture",
      heroImage: {
        src: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1600&q=80",
        alt: "Night Archive campaign hero image",
      },
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1400&q=80",
          alt: "Night Archive gallery image one",
        },
        {
          src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=80",
          alt: "Night Archive gallery image two",
        },
        {
          src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80",
          alt: "Night Archive gallery image three",
        },
        {
          src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=80",
          alt: "Night Archive gallery image four",
        },
      ],
      intro:
        "Night Archive moves deeper into contrast, urban darkness, and a more cinematic reading of the silhouette.",
      statement:
        "This issue is shaped by motion and shadow, using texture and negative space to make the clothing feel sharper and more atmospheric.",
      body: [
        "The darker treatment does not abandon clarity. Instead, it heightens focus by removing distraction and making shape do more of the work.",
        "The image system on this page is intended to feel immersive while staying structured. Large stills, measured spacing, and clean text blocks keep the atmosphere premium.",
        "Later, this template can hold richer media like film loops, deeper story notes, or alternative gallery sequences without losing the core page system.",
      ],
      credits: [
        { label: "Direction", value: "Mpinch Studio" },
        { label: "Category", value: "Noir Editorial" },
        { label: "Palette", value: "Black / Smoke / Stone" },
        { label: "Focus", value: "Contrast / Texture / Motion" },
      ],
    },
    {
      slug: "soft-authority",
      id: "04",
      season: "Issue 04 / Studio",
      title: "Soft Authority",
      location: "Studio Series",
      note: "Quiet luxury translated into a sharper urban fashion vocabulary.",
      accent: "Form / restraint / elegance",
      heroImage: {
        src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80",
        alt: "Soft Authority campaign hero image",
      },
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80",
          alt: "Soft Authority gallery image one",
        },
        {
          src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=80",
          alt: "Soft Authority gallery image two",
        },
        {
          src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80",
          alt: "Soft Authority gallery image three",
        },
        {
          src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1400&q=80",
          alt: "Soft Authority gallery image four",
        },
      ],
      intro:
        "Soft Authority balances quiet luxury and urban edge through cleaner framing and more restrained visual weight.",
      statement:
        "The issue aims to make the brand feel refined without losing its harder street-facing identity.",
      body: [
        "The clothing is framed with more openness here. Negative space, cleaner studio lighting, and controlled posture allow the looks to feel collected and premium.",
        "This issue shows how the visual system can stretch across different atmospheres while staying recognizably Mpinch.",
        "As more campaigns are added, this page type becomes the core storytelling unit: one issue, one world, one controlled visual narrative.",
      ],
      credits: [
        { label: "Direction", value: "Mpinch Studio" },
        { label: "Category", value: "Studio Series" },
        { label: "Palette", value: "Stone / Bone / Black" },
        { label: "Focus", value: "Elegance / Restraint / Form" },
      ],
    },
  ];
  
  export function getCampaignBySlug(slug: string) {
    return campaignDetails.find((item) => item.slug === slug);
  }