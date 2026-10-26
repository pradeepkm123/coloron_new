const fs = require('fs');
const html = fs.readFileSync('parking_raw.html', 'utf8');

const slice = html.substring(785000, 800000);
fs.writeFileSync('slice_785k.html', slice);
console.log('Saved slice_785k.html');
