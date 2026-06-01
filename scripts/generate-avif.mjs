import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../public');

const images = [
  'profile-cutout.webp',
  'about-me.webp',
  'swift-logo.webp',
  'tri.webp',
];

async function generateAvif() {
  for (const img of images) {
    const inputPath = path.join(publicDir, img);
    const outputPath = path.join(publicDir, img.replace('.webp', '.avif'));

    try {
      await sharp(inputPath)
        .avif({ quality: 80 })
        .toFile(outputPath);

      const inputSize = (await import('fs')).statSync(inputPath).size;
      const outputSize = (await import('fs')).statSync(outputPath).size;
      const savings = Math.round((1 - outputSize / inputSize) * 100);

      console.log(`✓ ${img.padEnd(25)} → ${img.replace('.webp', '.avif').padEnd(25)} (${savings}% smaller)`);
    } catch (err) {
      console.error(`✗ Failed to generate AVIF for ${img}:`, err.message);
    }
  }
}

generateAvif();
