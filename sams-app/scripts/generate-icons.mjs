import sharp from "sharp";
import { mkdirSync } from "node:fs";

const svg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="50%" stop-color="#22d3ee"/>
      <stop offset="100%" stop-color="#8b5cf6"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="#020617"/>
  <rect x="24" y="24" width="464" height="464" rx="96" fill="url(#g)"/>
  <text x="256" y="300" font-family="Arial, Helvetica, sans-serif" font-weight="800"
        font-size="188" fill="#020617" text-anchor="middle">OS</text>
</svg>`;

mkdirSync("public/icons", { recursive: true });

const targets = [
  { file: "public/favicon.png", size: 48 },
  { file: "public/icons/icon-192.png", size: 192 },
  { file: "public/icons/icon-512.png", size: 512 },
  { file: "public/apple-touch-icon.png", size: 180 },
];

for (const { file, size } of targets) {
  await sharp(Buffer.from(svg(size))).resize(size, size).png().toFile(file);
  console.log("wrote", file);
}
