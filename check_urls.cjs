const https = require('https');

const urls = [
  'https://www.hikvision.com/en/solutions/solutions-by-function/intelligent-inspection/',
  'https://www.hikvision.com/en/solutions/solutions-by-function/inspection/',
  'https://www.hikvision.com/en/solutions/solutions-by-function/security-inspection/',
  'https://www.hikvision.com/en/solutions/solutions-by-function/remote-inspection/',
  'https://www.hikvision.com/en/solutions/solutions-by-function/industrial-inspection/'
];

urls.forEach(u => {
  https.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
    console.log(`${res.statusCode} -> ${u} (location: ${res.headers.location || 'none'})`);
  }).on('error', err => console.error(err.message));
});
