import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../public');

const images = [
  { file: 'profile-cutout.webp', width: 600, height: 695 },
  { file: 'about-me.webp', width: 650, height: 888 },
];

async function resizeImages() {
  for (const img of images) {
    const inputPath = path.join(publicDir, img.file);
    const outputPath = path.join(publicDir, img.file);

    try {
      const result = await sharp(inputPath)
        .resize(img.width, img.height, { fit: 'cover' })
        .toFile(outputPath + '.tmp');

      await sharp(outputPath + '.tmp').toFile(outputPath);
      console.log(`✓ Resized ${img.file} to ${img.width}x${img.height}`);
    } catch (err) {
      console.error(`✗ Failed to resize ${img.file}:`, err.message);
    }
  }
}

resizeImages();
