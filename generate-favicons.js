import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const input = path.join(process.cwd(), 'public', 'santu1.png');
const outputDir = path.join(process.cwd(), 'public');

async function generateFavicons() {
  try {
    console.log('Generating favicons from profile image...');
    
    // 16x16
    await sharp(input)
      .resize(16, 16)
      .toFile(path.join(outputDir, 'favicon-16x16.png'));
      
    // 32x32
    await sharp(input)
      .resize(32, 32)
      .toFile(path.join(outputDir, 'favicon-32x32.png'));
      
    // 180x180 (Apple Touch Icon)
    await sharp(input)
      .resize(180, 180)
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));

    // favicon.ico (using 32x32 png as fallback)
    await sharp(input)
      .resize(32, 32)
      .toFile(path.join(outputDir, 'favicon.ico'));

    console.log('Favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
