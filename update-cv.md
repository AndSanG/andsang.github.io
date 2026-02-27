# Updating the CV

The CV source lives in the private repo [`AndSanG/CV_MD`](https://github.com/AndSanG/CV_MD).

The published files are hosted as release assets in [`AndSanG/andsang.github.io`](https://github.com/AndSanG/andsang.github.io) (public).

| Asset | Used for |
|-------|----------|
| `cv.md` | Rendered inline in the CV dialog |
| `cv.pdf` | Download button |

## Workflow

1. Edit `CV_MD` and export/generate the updated `cv.md` and `cv.pdf`
2. Publish a new release to `andsang.github.io`:

```bash
gh release create v1.0.1 cv.md cv.pdf \
  --title "CV" \
  --notes "Updated CV" \
  --repo AndSanG/andsang.github.io
```

Bump the tag (`v1.0.1`, `v1.0.2`, …) with each update.

> Run the command from the directory where your updated files are located.
> Asset names must stay `cv.md` and `cv.pdf`.

## How it works

GitHub's release asset URLs block browser requests (CORS) when fetching via JavaScript. To bypass this, the Next.js build workflow (`deploy.yml`) is configured to:
1. Trigger a redeploy automatically whenever a new release is published.
2. Download `cv.md` from the latest release into the `public/` directory right before running `next build`.

This ensures the generated static site contains the latest `cv.md` at its root, so the site serves the content from its own origin (`/cv.md`) with no CORS issues.

The `cv.pdf` download link points directly to the release asset, which works fine as a normal browser download (CORS only affects `fetch()`, not `<a href>` downloads).
