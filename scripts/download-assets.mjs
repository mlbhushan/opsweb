// Downloads all assets used by the renvo oil-and-gas demo into public/.
// Run from project root: node scripts/download-assets.mjs
import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";

const ROOT = "public";
const CONCURRENCY = 4;

const ASSETS = [
  // Logos
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/10/logo.svg", out: "images/brand/logo.svg" },
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/09/logo-white.svg", out: "images/brand/logo-white.svg" },

  // Hero / general icon images
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/11/icon01.webp", out: "images/icons/icon01.webp" },
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/11/icon03.webp", out: "images/icons/icon03.webp" },
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/12/oil-gas_17067194.png", out: "images/icons/oil-gas.png" },
  { url: "https://renvo.themeht.com/wp-content/themes/renvo/assets/images/down-arrow.svg", out: "images/icons/down-arrow.svg" },

  // Favicon
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/12/favicon-300x300.png", out: "seo/favicon-192.png" },
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/12/favicon-100x100.png", out: "seo/favicon-32.png" },

  // Hero / about / appointment refinery photos
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/11/46.jpg", out: "images/hero/refinery-tower.jpg" },
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/12/154.jpg", out: "images/about/equipment.jpg" },
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/12/147.jpg", out: "images/appointment/flame.jpg" },

  // Service card photos (5 visible in services swiper)
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/12/145-600x500.jpg", out: "images/services/refining.jpg" },
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/12/152-600x500.jpg", out: "images/services/oilfield.jpg" },
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/12/149-600x500.jpg", out: "images/services/pipelines.jpg" },
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/12/150-600x500.jpg", out: "images/services/petrochemicals.jpg" },
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/12/153-600x500.jpg", out: "images/services/offshore.jpg" },

  // Team photos (5)
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/11/team01.jpg", out: "images/team/team01.jpg" },
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/11/team02.jpg", out: "images/team/team02.jpg" },
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/11/team3.jpg", out: "images/team/team03.jpg" },
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/11/team04.jpg", out: "images/team/team04.jpg" },
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/11/team05.jpg", out: "images/team/team05.jpg" },

  // Blog post images (3)
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/12/133-700x600.jpg", out: "images/blog/post-01.jpg" },
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/11/66-700x600.jpg", out: "images/blog/post-02.jpg" },
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/12/143-700x600.jpg", out: "images/blog/post-03.jpg" },

  // Testimonial slider background photos
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/12/148.jpg", out: "images/testimonials/bg-01.jpg" },
  { url: "https://renvo.themeht.com/wp-content/uploads/2025/11/39.jpg", out: "images/testimonials/bg-02.jpg" },

  // Hero video
  { url: "https://themeht.com/video/renvo-video8.webm", out: "video/hero.webm" },
];

async function fileExists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function downloadOne({ url, out }) {
  const dest = join(ROOT, out);
  if (await fileExists(dest)) return { url, out, status: "skip" };
  await mkdir(dirname(dest), { recursive: true });
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 OpsFlo-Asset-Fetcher" } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return { url, out, status: "ok", bytes: buf.length };
}

async function run() {
  const queue = [...ASSETS];
  const results = [];
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const item = queue.shift();
      try {
        const r = await downloadOne(item);
        results.push(r);
        console.log(`${r.status === "ok" ? "✓" : "·"} ${r.out}${r.bytes ? ` (${(r.bytes / 1024).toFixed(0)} KB)` : ""}`);
      } catch (e) {
        results.push({ ...item, status: "fail", error: String(e) });
        console.error(`✗ ${item.out}: ${e.message}`);
      }
    }
  });
  await Promise.all(workers);
  const ok = results.filter((r) => r.status === "ok").length;
  const skip = results.filter((r) => r.status === "skip").length;
  const fail = results.filter((r) => r.status === "fail").length;
  console.log(`\nDone. ${ok} downloaded, ${skip} skipped, ${fail} failed.`);
  if (fail) process.exitCode = 1;
}

run();
