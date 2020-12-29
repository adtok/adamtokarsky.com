import fs from "fs";
import path from "path";

const postsDir = path.join(process.cwd(), "pages", "blog");

export function getPostSlugs() {
  const slugs = fs.readdirSync(postsDir).filter((slug) => !(slug.startsWith(".") || slug === "index.js"));
  return slugs;
}
