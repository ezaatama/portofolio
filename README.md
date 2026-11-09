# Reza Putra Pratama, portfolio

Next.js 16 (App Router) rebuild of [new-porto-reactJs](https://github.com/ezaatama/new-porto-reactJs), aimed at companies hiring a mobile developer.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things live

- `lib/data.ts`: profile, contact links, the five projects and work history. Edit here; pages read from it.
- `app/page.tsx`: home (hero, work index, Phinter case, skills, experience, contact).
- `app/work/[slug]/page.tsx`: one page per project, statically generated.
- `app/globals.css`: page styles. Colours, fonts and spacing come from `app/tokens.css`.
- `public/images/work/`: app screenshots. `public/file/resume_reza.pdf`: the CV the buttons download.

Adding a project: drop its screenshots into `public/images/work/`, add an entry to `projects` in `lib/data.ts`.

## Deploy

Push to GitHub and import the repo in Vercel (framework preset: Next.js). No environment variables needed.
