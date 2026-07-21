const Jimp = require('jimp');

async function removeBackground() {
  const img = await Jimp.read('public/images/polo_cuello_blanco.png');
  // the background is around rgb(248, 248, 248)
  img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    
    // If pixel is very light gray/white (background)
    if (r > 240 && g > 240 && b > 240) {
      // make transparent
      this.bitmap.data[idx + 3] = 0;
    }
  });
  await img.writeAsync('public/images/polo_cuello_blanco_transparent.png');
  console.log('Done!');
}

removeBackground();
