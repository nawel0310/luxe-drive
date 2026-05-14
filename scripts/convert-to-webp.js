const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const imagesDir = path.join(__dirname, '..', 'public', 'images');
const publicDir = path.join(__dirname, '..', 'public');

const tasks = [
  { input: path.join(imagesDir, 'car_001.jpg'), output: path.join(imagesDir, 'car_001.webp') },
  { input: path.join(imagesDir, 'car_003.jpg'), output: path.join(imagesDir, 'car_003.webp') },
  { input: path.join(imagesDir, 'luxe-drive-logo.png'), output: path.join(imagesDir, 'luxe-drive-logo.webp') },
];

const faviconTask = {
  input: path.join(imagesDir, 'luxe-drive-logo.png'),
  output: path.join(publicDir, 'favicon.ico'),
};

async function run() {
  for (const task of tasks) {
    if (!fs.existsSync(task.input)) {
      console.warn(`SKIP (not found): ${task.input}`);
      continue;
    }
    await sharp(task.input).webp({ quality: 85 }).toFile(task.output);
    const sizeBefore = fs.statSync(task.input).size;
    const sizeAfter = fs.statSync(task.output).size;
    const saved = (((sizeBefore - sizeAfter) / sizeBefore) * 100).toFixed(1);
    console.log(`OK  ${path.basename(task.input)} → ${path.basename(task.output)}  (${(sizeBefore/1024).toFixed(0)}KB → ${(sizeAfter/1024).toFixed(0)}KB, -${saved}%)`);
  }

  // Favicon: resize PNG to 32x32 ICO-compatible PNG, sharp outputs PNG; rename .ico
  await sharp(faviconTask.input).resize(32, 32).png().toFile(faviconTask.output);
  console.log(`OK  favicon.ico generated at public/favicon.ico`);
}

run().catch(err => { console.error(err); process.exit(1); });
