const fs = require('fs');

console.log('=== HIGHLIGHT DETAILS ===');
const hl = fs.readFileSync('info_sec_highlights.html', 'utf8');

// match rich text blocks or text wrappers
const blocks = [...hl.matchAll(/<div class="description-wrapper hiknow-rte">([\s\S]*?)<\/div>/g)].map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
blocks.forEach((b, i) => console.log(`[Block ${i+1}]`, b));

console.log('\n=== PRODUCT DETAILS ===');
const pr = fs.readFileSync('info_sec_products.html', 'utf8');
console.log(pr.replace(/<style[\s\S]*?<\/style>/g, '').replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
