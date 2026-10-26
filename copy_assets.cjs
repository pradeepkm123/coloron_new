const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\7ad5d767-19b1-4991-a6d6-960652f2e0f6';
const targetDir = 'e:\\prd\\Coloron-Website,New\\client\\public\\images\\apartment';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const mapping = {
  'apartment_hero': 'apartment_hero.jpg',
  'apartment_3d_overview': 'apartment_3d_overview.jpg',
  'apartment_traffic_jam': 'apartment_traffic_jam.jpg',
  'apartment_manual_logbook': 'apartment_manual_logbook.jpg',
  'apartment_anpr_camera': 'apartment_anpr_camera.jpg',
  'apartment_case_study': 'apartment_case_study.jpg',
  'apartment_software_laptop': 'apartment_software_laptop.jpg'
};

const files = fs.readdirSync(brainDir);

for (const [prefix, destName] of Object.entries(mapping)) {
  const matches = files
    .filter(f => f.startsWith(prefix) && f.endsWith('.jpg'))
    .map(f => ({ name: f, time: fs.statSync(path.join(brainDir, f)).mtimeMs }))
    .sort((a, b) => b.time - a.time);

  if (matches.length > 0) {
    const src = path.join(brainDir, matches[0].name);
    const dest = path.join(targetDir, destName);
    fs.copyFileSync(src, dest);
    console.log(`Copied ${matches[0].name} -> ${destName}`);
  } else {
    console.warn(`No match found for ${prefix}`);
  }
}

console.log('Finished copying assets.');
