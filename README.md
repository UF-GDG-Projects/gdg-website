# UF GDG website

Website for the University of Florida Google Developer Group on Campus. The production site is [ufgdg.com](https://www.ufgdg.com/).

## Run locally

Install Node.js and npm, then run:

```sh
npm ci
npm run dev
```

Vite prints the local URL. Before committing, run `npm run build` and `npm run lint`.

## Update the officer roster

The names, roles, photos, and optional LinkedIn links for the "Meet the Team" section live in `src/components/Officers.tsx`. Put each headshot in `public/photos/officers/`, then set its `img` to the matching `/photos/officers/...` URL. The list order controls the display order. If an officer has no photo, use `/photos/officer-img-placeholder.png`; do not use another person's portrait.

The "Become a Member" card in `src/components/About.tsx` has a separate row of four officer portraits. Update those image paths when the roster changes. Remove portraits from `public/photos/officers/` once nothing references them.

## Update DevFest details

The DevFest section, registration deadline, and action links live in `src/components/DevFest.tsx`. The footer registration link is in `src/components/Footer.tsx`, and the sample chat in `src/components/micro-interactions/Discord.tsx` also mentions the deadline. Update those references together when the event details change.
