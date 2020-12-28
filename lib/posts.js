import fs from "fs";
import path from "path";

const postsDir = path.join(process.cwd(), "pages", "blog");

export function getPostSlugs() {
  console.log(fs.readdirSync(postsDir));
}
