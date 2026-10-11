// One-time batch optimizer: resizes and recompresses everything in public/images in place.
import sharp from 'sharp';
import { readdir, stat, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = 'public/images';
const maxWidth = { hero: 1920 };
const defaultWidth = 1200;
const maxBytes = 300 * 1024;

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (/\.(jpe?g)$/i.test(e.name)) yield p;
  }
}

for await (const file of walk(root)) {
  const folder = path.basename(path.dirname(file));
  const width = maxWidth[folder] ?? defaultWidth;
  const before = (await stat(file)).size;
  const input = await readFile(file);
  let out;
  for (const quality of [82, 78, 74, 70]) {
    out = await sharp(input).rotate().resize({ width, withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true }).toBuffer();
    if (out.length <= maxBytes || folder === 'hero') break;
  }
  if (out.length < before) await writeFile(file, out);
  console.log(`${file}: ${(before / 1024).toFixed(0)}KB -> ${(Math.min(out.length, before) / 1024).toFixed(0)}KB`);
}
