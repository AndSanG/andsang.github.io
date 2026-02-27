# Updating the CV

The CV source lives in the private repo [`AndSanG/CV_MD`](https://github.com/AndSanG/CV_MD).

The published files are hosted as release assets in [`AndSanG/andsang.github.io`](https://github.com/AndSanG/andsang.github.io) (public), so they are always accessible without authentication.

| Asset | URL |
|-------|-----|
| Dialog (rendered markdown) | `.../releases/latest/download/cv.md` |
| Download button (PDF) | `.../releases/latest/download/cv.pdf` |

## Workflow

1. Edit `CV_MD` and export/generate the updated `cv.md` and `cv.pdf`
2. Publish a new release to `andsang.github.io`:

```bash
gh release create v1.0.1 cv.md cv.pdf \
  --title "CV" \
  --notes "Updated CV" \
  --repo AndSanG/andsang.github.io
```

Bump the tag (`v1.0.1`, `v1.0.2`, …) with each update. The `/latest/` URL resolves automatically — no redeployment needed.

> Run the command from the directory where your updated files are located.
> Asset names must stay `cv.md` and `cv.pdf`.
