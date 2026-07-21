const Jimp = require('jimp');

async function removeBackground(inputFile, outputFile) {
  const img = await Jimp.read(inputFile);
  const w = img.bitmap.width;
  const h = img.bitmap.height;
  
  // Create visited map
  const visited = new Uint8Array(w * h);
  const queue = [{x: 0, y: 0}];
  visited[0] = 1;
  
  // The background color is approximately rgb(248, 248, 248)
  // Let's sample (0,0) just in case
  const idx0 = (0 * w + 0) * 4;
  const r0 = img.bitmap.data[idx0];
  const g0 = img.bitmap.data[idx0+1];
  const b0 = img.bitmap.data[idx0+2];
  
  const tolerance = 15;
  
  function match(x, y) {
    const idx = (y * w + x) * 4;
    const r = img.bitmap.data[idx];
    const g = img.bitmap.data[idx+1];
    const b = img.bitmap.data[idx+2];
    
    return Math.abs(r - r0) < tolerance && 
           Math.abs(g - g0) < tolerance && 
           Math.abs(b - b0) < tolerance;
  }
  
  let head = 0;
  while(head < queue.length) {
    const p = queue[head++];
    const {x, y} = p;
    
    // Set pixel to transparent
    const idx = (y * w + x) * 4;
    img.bitmap.data[idx+3] = 0; // alpha = 0
    
    // Check neighbors
    const neighbors = [
      {x: x+1, y: y}, {x: x-1, y: y},
      {x: x, y: y+1}, {x: x, y: y-1}
    ];
    
    for (const n of neighbors) {
      if (n.x >= 0 && n.x < w && n.y >= 0 && n.y < h) {
        if (visited[n.y * w + n.x] === 0) {
          visited[n.y * w + n.x] = 1;
          if (match(n.x, n.y)) {
            queue.push(n);
          }
        }
      }
    }
  }
  
  await img.writeAsync(outputFile);
  console.log('Saved', outputFile);
}

removeBackground('public/images/polo_cuello_blanco.png', 'public/images/polo_cuello_blanco_transparent.png');
