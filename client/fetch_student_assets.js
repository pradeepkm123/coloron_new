import { execSync } from 'child_process';
import fs from 'fs';

const html = execSync('curl.exe -s -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" https://www.hikvision.com/en/solutions/solutions-by-function/student-attendance/').toString();

fs.writeFileSync('hikvision_attendance_raw.html', html);
console.log('Saved raw HTML, length:', html.length);

const regex = /(?:src|data-original)=["']([^"']+\.(?:jpg|png|webp|svg))["']/gi;
let m;
const set = new Set();
while ((m = regex.exec(html)) !== null) {
  set.add(m[1]);
}
console.log('All image assets on page:');
set.forEach(url => console.log(url));
