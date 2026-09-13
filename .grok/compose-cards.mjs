import { chromium } from "playwright";
import { writeFileSync } from "node:fs";

const jobs = [
  {
    html: "file:///workspace/.grok/og-card.html",
    png: "/workspace/.grok/og-raw.png",
    w: 1200,
    h: 630,
  },
  {
    html: "file:///workspace/.grok/x-banner.html",
    png: "/workspace/.grok/x-banner-raw.png",
    w: 1200,
    h: 264,
  },
];

const browser = await chromium.launch({ args: ["--allow-file-access-from-files"] });
for (const job of jobs) {
  const page = await browser.newPage({
    viewport: { width: job.w, height: job.h },
    deviceScaleFactor: 1,
  });
  await page.goto(job.html, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  await page.waitForTimeout(200);
  const buf = await page.screenshot({ type: "png", clip: { x: 0, y: 0, width: job.w, height: job.h } });
  writeFileSync(job.png, buf);
  await page.close();
}
await browser.close();
console.log("composed");
