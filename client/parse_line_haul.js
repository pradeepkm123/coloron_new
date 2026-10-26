const fs = require('fs');
const html = fs.readFileSync('temp_line_haul.html', 'utf8');

const regex = /<img[^>]+src=["']([^"']+)["']/gi;
let m;
const imgs = [];
while ((m = regex.exec(html)) !== null) {
  imgs.push(m[1]);
}
console.log('Images found:', imgs);

const hRegex = /<h[1-5][^>]*>([\s\S]*?)<\/h[1-5]>/gi;
const headings = [];
while ((m = hRegex.exec(html)) !== null) {
  headings.push(m[1].replace(/<[^>]+>/g, '').trim());
}
console.log('Headings found:', headings);
