# Todo

## Render-blocking CSS

Next.js App Router injects CSS via `<link rel="stylesheet" data-precedence="next">`. Because of the `data-precedence` attribute (React's internal hydration ordering), `beasties` inlines critical CSS but leaves the blocking `<link>` intact — Lighthouse still flags it. Work was reverted.

- [ ] Find a strategy compatible with `data-precedence`:
  - Option A: run beasties, then patch remaining `<link rel="stylesheet" data-precedence="next">` tags to `media="print" onload="this.media='all'"` + `<noscript>` fallback
  - Option B: wait for a beasties release that handles `data-precedence`
  - Option C: accept it — the render-blocking CSS is small and GitHub Pages cache TTL is the bigger bottleneck

## i18n — Spanish support

Add a language toggle (EN / ES) so the site can be read in Spanish.
Uses `next-intl` with static-export-compatible `[locale]` routing.

### 1. Setup
- [ ] Install `next-intl`
- [ ] Create `messages/en.json` and `messages/es.json` with all UI strings
- [ ] Create `i18n/routing.ts` — define `locales: ['en', 'es']` and `defaultLocale: 'en'`
- [ ] Create `i18n/request.ts` — `getRequestConfig` for static export
- [ ] Update `next.config.ts` to use `createNextIntlPlugin`

### 2. App directory restructure
- [ ] Move `app/layout.tsx` → `app/[locale]/layout.tsx`
- [ ] Move `app/page.tsx` → `app/[locale]/page.tsx`
- [ ] Add `generateStaticParams` to `[locale]/layout.tsx` returning `['en', 'es']`
- [ ] Add a root `app/page.tsx` that redirects to `/en`

### 3. UI strings — extract & translate
Hardcoded strings to move into `messages/`:

| Component | Strings |
|---|---|
| `sections/hero.tsx` | "Developing", "High-Availability", "Mobile Apps", "View Work", "Contact Me" |
| `sections/about.tsx` | "About Me" |
| `sections/experience.tsx` | "Professional Journey" |
| `sections/projects.tsx` | "Selected Projects" |
| `sections/more-about.tsx` | "More About Me", "When I'm not coding, I like:" |
| `sections/contact.tsx` | "Get in Touch" |
| `components/ui/navbar.tsx` | nav link labels (About, Projects, More, Contact), "Skip to content", aria labels |
| `components/ui/cv-dialog.tsx` | dialog labels |

- [ ] Add all English strings to `messages/en.json`
- [ ] Translate all strings to `messages/es.json`
- [ ] Replace hardcoded strings in each component with `useTranslations` / `getTranslations`

### 4. Content data — localized copies
Data lives in `src/infrastructure/repositories/`. Fields that need ES variants:

- [ ] `in-memory-about-repository.ts` — `heroDescription`, `bio`, `personalBio`, `hobbies`, `stats` labels
- [ ] `in-memory-experience-repository.ts` — job titles, company descriptions, bullet points
- [ ] `in-memory-project-repository.ts` — project descriptions, tags

Strategy: add a `locale` parameter to each repository method and return the matching copy.

### 5. Locale switcher
- [ ] Add `EN / ES` toggle to `Navbar` (desktop + mobile menu)
- [ ] Wire toggle to `next-intl`'s locale routing (navigate to `/<locale>` equivalent of current path)

### 6. Cleanup & validation
- [ ] Update `<html lang="...">` in `[locale]/layout.tsx` to use the active locale
- [ ] Smoke-test both locales — check all sections render correctly
- [ ] Verify `output: 'export'` still builds successfully (`npm run build`)
