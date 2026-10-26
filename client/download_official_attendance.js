import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const outDir = 'public/images/student-attendance';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const downloads = [
  {
    url: 'https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solution-by-function/student-attendance/Student-attendance-banner-pc.jpg',
    dest: 'Student-attendance-banner-pc.jpg'
  },
  {
    url: 'https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solution-by-function/SBF-logo.png',
    dest: 'SBF-logo.png'
  },
  {
    url: 'https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solution-by-function/student-attendance/School-Bus.jpg',
    dest: 'School-Bus.jpg'
  },
  {
    url: 'https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solutions-by-scenario/Education-LandingPage_Student-Attendance-School-bus-attendance.jpg',
    dest: 'Education-LandingPage_Student-Attendance-School-bus-attendance.jpg'
  },
  {
    url: 'https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solution-by-function/student-attendance/School-Gate.jpg',
    dest: 'School-Gate.jpg'
  },
  {
    url: 'https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solution-by-function/student-attendance/Dormitory-Gate.jpg',
    dest: 'Dormitory-Gate.jpg'
  },
  {
    url: 'https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solutions-by-scenario/Education-LandingPage_Student-Attendance-School-gate-dormitory-attendance.jpg',
    dest: 'Education-LandingPage_Student-Attendance-School-gate-dormitory-attendance.jpg'
  },
  {
    url: 'https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solution-by-function/student-attendance/Entry-Point-of-Classroom.jpg',
    dest: 'Entry-Point-of-Classroom.jpg'
  },
  {
    url: 'https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solutions-by-industry/campus-security/SBI-Campus-Security-split-banner.jpg',
    dest: 'SBI-Campus-Security-split-banner.jpg'
  },
  {
    url: 'https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solutions-by-industry/smart-classroom/SBI-smart-classroom-_split-banner.jpg',
    dest: 'SBI-smart-classroom-_split-banner.jpg'
  },
  {
    url: 'https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solutions-by-scenario/classroom-hub/SBS-Classroom-hub_split-banner.jpg',
    dest: 'SBS-Classroom-hub_split-banner.jpg'
  }
];

for (const item of downloads) {
  const filePath = path.join(outDir, item.dest);
  console.log(`Downloading ${item.dest}...`);
  try {
    const cmd = `curl.exe -s -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36" -H "Referer: https://www.hikvision.com/en/solutions/solutions-by-function/student-attendance/" -H "Accept: image/avif,image/webp,image/apng,image/*,*/*;q=0.8" -o "${filePath}" "${item.url}"`;
    execSync(cmd);
    const sz = fs.statSync(filePath).size;
    console.log(`Saved ${item.dest}: ${sz} bytes`);
  } catch (err) {
    console.error(`Error downloading ${item.dest}:`, err.message);
  }
}
console.log('Finished downloading official student attendance assets!');
