import { chromium } from "playwright";
import { mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const SLIDES = [
  "cover",
  "contents",
  "vision",
  "geometry",
  "form",
  "areas",
  "program",
  "structure",
  "energy",
  "specs",
  "vendors",
  "performance",
  "standards",
  "constraints",
  "document",
  "close",
];

const OUT_DIR = "/tmp/hhyc-pdf-slides";
const PDF_STAGED = "/workspace/.grok/HHMYC-Design-Catalogue.pdf";
const PDF_PUBLIC = "/workspace/public/HHMYC-Design-Catalogue.pdf";
const BASE = "http://127.0.0.1:8080/?export=1";

mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 2,
});
await page.addInitScript(() => {
  document.documentElement.classList.add("pdf-export");
});
await page.emulateMedia({ reducedMotion: "reduce" });
await page.goto(`${BASE}#cover`, { waitUntil: "networkidle", timeout: 60000 });
await page.evaluate(() => {
  document.documentElement.classList.add("pdf-export");
  return document.fonts.ready;
});
await page.waitForTimeout(600);

for (let i = 0; i < SLIDES.length; i += 1) {
  const id = SLIDES[i];
  await page.evaluate((hash) => {
    window.location.hash = hash;
  }, id);
  await page.waitForSelector(`[data-slide-id="${id}"]`, { timeout: 10000 });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      [...document.images].map((img) => (img.complete ? Promise.resolve() : img.decode().catch(() => undefined))),
    );
  });
  await page.waitForTimeout(350);
  const file = join(OUT_DIR, `${String(i).padStart(2, "0")}-${id}.png`);
  await page.screenshot({ path: file, type: "png" });
  console.log("captured", id);
}

await browser.close();

const py = `
from PIL import Image
from pathlib import Path
src = Path(${JSON.stringify(OUT_DIR)})
files = sorted(src.glob("*.png"))
pages = []
for f in files:
    im = Image.open(f).convert("RGB")
    im = im.resize((1920, 1080), Image.Resampling.LANCZOS)
    pages.append(im)
out = ${JSON.stringify(PDF_STAGED)}
pages[0].save(
    out,
    save_all=True,
    append_images=pages[1:],
    resolution=144.0,
    quality=88,
    optimize=True,
)
print("pdf", out, "pages", len(pages))
`;
writeFileSync("/tmp/assemble-catalogue-pdf.py", py);
const r = spawnSync("python3", ["/tmp/assemble-catalogue-pdf.py"], { encoding: "utf8" });
if (r.status !== 0) {
  console.error(r.stdout, r.stderr);
  process.exit(1);
}
console.log(r.stdout.trim());

const atomic = spawnSync("node", ["/workspace/scripts/write-atomic.mjs", PDF_STAGED, PDF_PUBLIC], {
  encoding: "utf8",
});
console.log(atomic.stdout.trim());
if (atomic.status !== 0) {
  console.error(atomic.stderr);
  process.exit(1);
}
