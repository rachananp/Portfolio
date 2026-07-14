# Rachana N P — Portfolio

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before you ship it, replace:

1. **Photo** — `src/components/PortraitFrame.tsx`. Drop your photo into `/public`
   (e.g. `/public/rachana.jpg`) and swap the placeholder `<div>` block for:
   ```tsx
   <img src="/rachana.jpg" alt="Rachana N P" className="w-full h-full object-cover" />
   ```
2. **Email & socials** — `src/components/Contact.tsx`, update the
   `mailto:hello@example.com` and the GitHub/LinkedIn/Twitter `href="#"` links.
3. **Resume** — `public/resume.pdf` is a real, generated, ATS-friendly resume
   (plain single-column layout, no tables/graphics/colored text, standard
   section headers) covering education, both internships, certifications, all
   five projects with status, and achievements. Open it, fill in your actual
   email and phone (marked `[add your ...]`), and re-export as
   `public/resume.pdf` — the download button in `Resume.tsx` already points
   at that path.
4. **Copy** — Project copy lives in `src/components/Projects.tsx` (each has a
   `status: "In Progress" | "Shipped"` field driving its badge). About/Log copy
   is in `About.tsx` and `Experience.tsx`.
5. **Metadata** — `src/app/layout.tsx` has the page `<title>` and description.
6. **Favicon** — replace `src/app/favicon.ico`.

## Adding a new blog post each month

Open `src/components/Blog.tsx` — everything is one `posts` array at the top.
Copy an existing entry and edit:

```ts
{
  issue: "FIELD NOTE 002",
  date: "August 2026",
  title: "Your title",
  excerpt: "One or two sentences shown in the collapsed row.",
  readTime: "5 min read",
  tags: ["Tag1", "Tag2"],
  content: [
    { type: "p", text: "First paragraph..." },
    { type: "heading", text: "A subheading" },
    { type: "p", text: "More text..." },
  ],
}
```

Add new posts to the **top** of the array so the newest shows first. Each row
expands into a full reader (`BlogModal.tsx`) when clicked, the same
click-to-expand interaction as the project cards.

## Design system

- Colors live in `src/app/globals.css` under `:root` — `--signal` (orange) and
  `--circuit` (blue) are the two accents used everywhere.
- Fonts: Bricolage Grotesque (display), Inter (body), JetBrains Mono (data/labels) —
  self-hosted via `@fontsource`, no external font requests.
- Custom cursor lives in `src/components/CustomCursor.tsx`. Add
  `data-cursor="link"` or `data-cursor="view"` (plus optional
  `data-cursor-label="..."`) to any element to control how the cursor reacts to it.

## Interactive features

- Boot sequence, circuit-node background, scrambled headline text
- 3D tilt project cards with click-to-expand detail modals + status badges
- **Blog / Field Notes** — expandable article rows, same interaction pattern as project cards
- **Certifications** — badge-style cards, edit the `certifications` array at the top of `Certifications.tsx`
- **Resume** — document-style preview card that downloads a real, generated `resume.pdf`
- Magnetic buttons, animated counters, cursor click ripples
