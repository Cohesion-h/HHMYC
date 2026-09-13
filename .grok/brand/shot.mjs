import { chromium } from "playwright";
import { createServer } from "node:http";
import { existsSync, readFileSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const root = "/workspace/.grok";
const mime = {
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".css": "text/css",
};

const server = createServer((req, res) => {
  const url = decodeURIComponent((req.url || "/").split("?")[0]);
  const rel = url === "/" ? "/brand/og.html" : url;
  const fp = normalize(join(root, rel));
  if (!fp.startsWith(root) || !existsSync(fp)) {
    res.writeHead(404);
    res.end("not found");
    return;
  }
  res.writeHead(200, { "content-type": mime[extname(fp)] || "application/octet-stream" });
  res.end(readFileSync(fp));
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();
const browser = await chromium.launch({ args: ["--disable-web-security"] });

try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 2,
  });
  await page.goto(`http://127.0.0.1:${port}/brand/og.html`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(250);
  await page.screenshot({ path: "/workspace/.grok/og-raw.png", type: "png" });

  const fav = await browser.newPage({
    viewport: { width: 520, height: 260 },
    deviceScaleFactor: 2,
  });
  await fav.goto(`http://127.0.0.1:${port}/brand/favicon-preview.html`, { waitUntil: "networkidle" });
  await fav.screenshot({ path: "/workspace/.grok/brand/favicon-preview.png", type: "png" });
} finally {
  await browser.close();
  server.close();
}
