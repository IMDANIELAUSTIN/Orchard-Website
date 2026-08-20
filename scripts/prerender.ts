import { writeFileSync, mkdirSync } from "fs";
import { dirname } from "path";

const routes = [
  "/",
  "/pricing",
  "/faq",
  "/blog",
  "/blog/offline-first-human-knowledge",
  "/blog/mesh-networking-lora-bluetooth",
  "/blog/unifying-fediverse-mastodon-bluesky",
  "/blog/local-resilience-exchanges-mutual-aid",
  "/rss.xml",
  "/sitemap.xml",
  "/auth",
];

async function prerender() {
  console.log("Starting temporary SSR server for static HTML generation...");
  const serverProcess = Bun.spawn(["bun", ".output/server/index.mjs"], {
    env: { ...process.env, PORT: "3000", HOST: "127.0.0.1" },
    stdout: "inherit",
    stderr: "inherit",
  });

  // Poll until server is ready
  let ready = false;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch("http://127.0.0.1:3000/");
      if (res.ok) {
        ready = true;
        break;
      }
    } catch {
      await new Promise((r) => setTimeout(r, 400));
    }
  }

  if (!ready) {
    console.error("SSR server failed to start on http://127.0.0.1:3000 in time.");
    serverProcess.kill();
    process.exit(1);
  }

  console.log("SSR server is up! Generating static HTML files for GitHub Pages...");

  for (const route of routes) {
    try {
      const res = await fetch(`http://127.0.0.1:3000${route}`);
      const text = await res.text();

      let filePath: string;
      if (route.endsWith(".xml")) {
        filePath = `.output/public${route}`;
      } else if (route === "/") {
        filePath = ".output/public/index.html";
      } else {
        filePath = `.output/public${route}/index.html`;
      }

      mkdirSync(dirname(filePath), { recursive: true });
      writeFileSync(filePath, text);
      console.log(`✓ Generated ${route} -> ${filePath}`);

      if (route === "/") {
        writeFileSync(".output/public/404.html", text);
        console.log(`✓ Generated SPA fallback -> .output/public/404.html`);
      }
    } catch (err) {
      console.error(`Error rendering route ${route}:`, err);
    }
  }

  // Ensure .nojekyll exists
  writeFileSync(".output/public/.nojekyll", "");
  console.log("✓ Created .output/public/.nojekyll");

  serverProcess.kill();
  console.log("Static prerendering completed successfully!");
}

prerender();
