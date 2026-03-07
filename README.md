# Mpinch Clothing — starter scaffold

This is the first clean foundation for the Mpinch Clothing portfolio site:

- Next.js App Router
- TypeScript
- ESLint flat config
- GSAP-ready client animation setup
- Lenis smooth scroll provider
- Home page sections already split into reusable components
- Placeholder pages for About, Campaigns, Archive, and Contact

## 1) Install

```bash
npm install
npm run dev
```

## 2) Project shape

```text
src/
  app/
    page.tsx
    about/page.tsx
    campaigns/page.tsx
    archive/page.tsx
    contact/page.tsx
    globals.css
    layout.tsx
  components/
    home/
      Hero.tsx
      Hero.module.css
      Manifesto.tsx
      Manifesto.module.css
      LooksStrip.tsx
      LooksStrip.module.css
      ArchivePreview.tsx
      ArchivePreview.module.css
      SubscribeBand.tsx
    providers/
      SmoothScrollProvider.tsx
    site/
      SiteHeader.tsx
      SiteFooter.tsx
  lib/
    gsap.ts
    site.ts
```

## 3) Current build goal

Phase 1 is about structure and motion language, not final content.

What is already set up:

- strong editorial homepage skeleton
- dark manifesto section
- asymmetrical look cards
- archive teaser section
- premium footer CTA band

## 4) Recommended next step

Replace placeholder visual panels with real art direction assets, then build:

1. cinematic hero with real model photography
2. archive grid interactions
3. Sanity content model and CMS wiring
4. page transitions
5. selective Three.js moments only where they elevate the work
