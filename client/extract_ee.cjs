const fs = require('fs');
const html = fs.readFileSync('parking_raw.html', 'utf8');

// Find the section between "Entrance & exit management" and "Indoor parking guidance"
const start = html.indexOf('Entrance & exit management');
const end = html.indexOf('Indoor parking guidance');

console.log('Start:', start, 'End:', end);
if (start !== -1 && end !== -1) {
  const slice = html.substring(start, end);
  fs.writeFileSync('ee_full_section.html', slice);
  console.log('Saved ee_full_section.html, size:', slice.length);
}
