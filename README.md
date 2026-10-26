# Rahul Bajpai: Design Portfolio

A cinematic, scroll-led product-design portfolio. Built with React 19, Vite, Tailwind CSS v4, GSAP (ScrollTrigger, SplitText), Lenis smooth scrolling, a ThreeUI Community canvas, Lucide icons, and a self-hosted Mona Sans variable font.

## Run

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Check And Export

```sh
npm run check
npm run build
```

`check` type-checks the React app, syntax-checks the legacy scripts, and runs the route and journey tests. The build produces a self-contained [dist/index.html](dist/index.html) that embeds its JavaScript, CSS, fonts, and images and opens directly from disk. The resume PDF ships beside it as `dist/Rahul_Bajpai_Resume.pdf`.

The PDF's source is [scripts/resume.html](scripts/resume.html). After editing it, run `npm run resume` to print it to `public/Rahul_Bajpai_Resume.pdf` with headless Chrome or Edge, and check it still fits on one page. Keep its wording in step with the resume in `src/surfaces.js`.

## Password-Protected Case Study

A case study can ship encrypted. Its readable source is `src/protected/<id>/` (`case-study.json` plus its screens). That folder and `.env.local` are git-ignored and stay on this machine.

1. Add the password to `.env.local`: `CASE_STUDY_PASSWORD=your-long-passphrase`. Use 12+ characters; a few random words work well.
2. Run `npm run seal`. It encrypts the case studies with AES-256-GCM, using a key derived from the password with PBKDF2-SHA256 (600,000 iterations), into `src/app/lib/sealed-case-studies.json`.
3. Commit that sealed file. Run `npm run seal` again after editing `src/protected/` or changing the password. The production build stops if the seal is missing.

## Deploy To GitHub Pages

`npm run build:pages` is the hosted build. It keeps JavaScript, CSS, fonts and images as separate hashed files, so images load as they near the viewport. Routes use the hash and asset URLs are relative, so the site works at `https://bajpairahul03.github.io/Design-Portfolio/`.

1. In Settings > Pages, set Source to GitHub Actions.
2. Push to `main`. [The workflow](.github/workflows/deploy-pages.yml) runs `npm run build:pages` and publishes `dist`. To redeploy without a new commit, use Actions > Deploy to GitHub Pages > Run workflow.

Before going live, remove `noindex, nofollow` from `index.html` if the site should appear in search.

## Edit

- [index.html](index.html) and [src/app/main.tsx](src/app/main.tsx): entry point, theme bootstrap, fonts, and styles.
- [src/app/App.tsx](src/app/App.tsx): hash routes, history and scroll restoration, Lenis, curtain transitions, focus, and Escape handling.
- [src/app/sections](src/app/sections): homepage sections (hero, approach, selected work, experience, interests).
- [src/app/pages](src/app/pages): Work, project, About, and Resume pages.
- [src/app/components](src/app/components): header, contact footer, curtain, magnetic control, and page title.
- [src/app/lib/content.ts](src/app/lib/content.ts): contact details, photos, and the shared project, resume, and story data.
- [src/app/lib/projects.ts](src/app/lib/projects.ts): case studies.
- [src/app/lib/routes.js](src/app/lib/routes.js) and [routes.test.js](src/app/lib/routes.test.js): allowlisted route parsing.
- [src/app/styles.css](src/app/styles.css): Tailwind v4 theme tokens, light and dark palettes, and section CSS.
- [src/stories.js](src/stories.js) and [src/surfaces.js](src/surfaces.js): resume and story content.
