# andsang.github.io

Personal portfolio site for Andrés Sánchez. Built with Next.js (App Router, TypeScript, Tailwind CSS), deployed to GitHub Pages as a static export.

## Dev

```bash
npx next dev --port 3000 --webpack
```

> Use `--webpack` — Turbopack panics with `output: 'export'` mode in Next.js 16.

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Outputs to `out/` via static export.

## Stack

- Next.js 16 (App Router, static export)
- TypeScript
- Tailwind CSS
- Clean Architecture (entities → use cases → interface adapters → infrastructure)
