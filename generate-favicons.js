import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const input = path.join(process.cwd(), 'public', 'favicon.svg');
const outputDir = path.join(process.cwd(), 'public');

function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const dirHeader = Buffer.alloc(6);
  dirHeader.writeUInt16LE(0, 0); // Reserved
  dirHeader.writeUInt16LE(1, 2); // Type (1 for icon)
  dirHeader.writeUInt16LE(count, 4); // Count

  const entries = [];
  let offset = 6 + count * 16;

  for (const png of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(png.width === 256 ? 0 : png.width, 0);
    entry.writeUInt8(png.height === 256 ? 0 : png.height, 1);
    entry.writeUInt8(0, 2); // Color count
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(png.buffer.length, 8); // Image size
    entry.writeUInt32LE(offset, 12); // Image offset
    entries.push(entry);
    offset += png.buffer.length;
  }

  const buffers = [dirHeader, ...entries, ...pngBuffers.map(p => p.buffer)];
  return Buffer.concat(buffers);
}

async function generateFavicons() {
  try {
    console.log('Generating favicons from SVG branding...');

    // 1. Generate PNG files
    const png16 = await sharp(input)
      .resize(16, 16)
      .png()
      .toBuffer();
    await fs.promises.writeFile(path.join(outputDir, 'favicon-16x16.png'), png16);
    console.log('Created favicon-16x16.png');

    const png32 = await sharp(input)
      .resize(32, 32)
      .png()
      .toBuffer();
    await fs.promises.writeFile(path.join(outputDir, 'favicon-32x32.png'), png32);
    console.log('Created favicon-32x32.png');

    const png48 = await sharp(input)
      .resize(48, 48)
      .png()
      .toBuffer();
    await fs.promises.writeFile(path.join(outputDir, 'favicon-48x48.png'), png48);
    console.log('Created favicon-48x48.png');

    const png96 = await sharp(input)
      .resize(96, 96)
      .png()
      .toBuffer();
    await fs.promises.writeFile(path.join(outputDir, 'favicon-96x96.png'), png96);
    console.log('Created favicon-96x96.png');

    const png192 = await sharp(input)
      .resize(192, 192)
      .png()
      .toBuffer();
    await fs.promises.writeFile(path.join(outputDir, 'favicon-192x192.png'), png192);
    console.log('Created favicon-192x192.png');

    const appleTouch = await sharp(input)
      .resize(180, 180)
      .png()
      .toBuffer();
    await fs.promises.writeFile(path.join(outputDir, 'apple-touch-icon.png'), appleTouch);
    console.log('Created apple-touch-icon.png');

    // 2. Generate multi-resolution ICO file
    const icoBuffer = createIco([
      { width: 16, height: 16, buffer: png16 },
      { width: 32, height: 32, buffer: png32 },
      { width: 48, height: 48, buffer: png48 }
    ]);
    await fs.promises.writeFile(path.join(outputDir, 'favicon.ico'), icoBuffer);
    console.log('Created favicon.ico (multi-resolution 16x16, 32x32, and 48x48)');

    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
