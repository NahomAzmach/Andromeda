# Andromeda Interpreting & Translation Services – Modernization Rebuild

This repo contains the front end modernization and rebranding of Andromeda Interpreting & Translation Services. The primary goal of this project was a "Content-First Modernization." We preserved 100% of the agency's existing text, historical footprint, and established branding (including their primary color palette) while migrating architecture onto a high-performance modern web framework.

### Project Upgrades & Changes
- **Framework Migration:** Rebuilt from a legacy Weebly platform into a state-of-the-art **Next.js / React** application for lightning-fast page loads and scalable deployments.
- **High end Aesthetics:** Replaced generic boxing layouts with a cohesive, breathable design tailored specifically to the agency's black, gold, and off-white color schematics.
- **Micro-Animations:** Integrated smooth `framer-motion` dynamics across the site...including a continuous typewriter effect on the hero text, floating interactive logos, hover-scaling icons, and rotating elements to create a premium, "living" feel to the interface.
- **Editorial Layouts:** Removed the static informational "cards" on the homepage in favor of an alternating editorial bento-style design.
- **Interactive History:** The About page was completely reimagined from a simple static block into a dynamic, parallax-scrolling vertical timeline that highlights the agency's origins.
- **Serverless Communications:** Implemented a non-blocking contact form mapped directly to `iSchedule@AndromedaEnt.com` utilizing Ajax fetching so users never have to leave the page when booking an interpreter.

---

## Technical Details

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started

[Vercel Hosted website](https://andromeda-bice.vercel.app/)

Or run locally via cli

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

