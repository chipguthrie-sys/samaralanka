# Samara Resort website: project notes

Last updated: 2026-10-10. Use this file to pick up where we left off.

## Overview

- Single-page showcase site for **Samara Resort** (domain/repo name: `samaralanka`), a family-owned property in **Tissamaharama, Sri Lanka**, near Yala National Park.
- Stack: Astro + Tailwind (v4-style `@theme` in `src/styles/global.css`) + `lucide-astro` icons.
- Repo: https://github.com/chipguthrie-sys/samaralanka (branch `main`).
- Dev server: `astro dev --background` (see `AGENTS.md`). Checks: `npx astro check`, `npx astro build`.

## Where things live

- **All content:** `src/data/property.ts` is the single source of truth. Edit text, photo paths, amenities and guide items there.
- **Page order** (`src/pages/index.astro`): Header, Hero, Gallery, Overview, Rooms ("The Space"), Amenities, Welcome, Guide, Host, Footer, StickyBookBar.
- **Photos:** `public/images/` with subfolders `hero/`, `gallery/`, `rooms/`, `property/`, `main-gate/`.

## What has been done

1. **Git:** global git identity set to Chip Guthrie (chipguthrie@gmail.com). Initial scaffold committed and pushed. The latest work is pushed too (commit `ecfca32`).
2. **Real photos wired in** from `public/images/`:
   - Hero: `hero/hero.jpg`. It is 6 MB, so it should be compressed.
   - Gallery: 5 images, `gallery2` first as the large main tile.
   - Rooms: all 5 bedroom photos.
3. **"The Space" rebuilt** for the real layout: 2 bedrooms, each with a private bathroom and a walk-out patio. The data is in `property.space` and `property.rooms`. Stats now say 2 bedrooms, 2 bathrooms and 4 guests (the guest count is an assumption).
4. **Location changed to Tissamaharama.**
   - Coordinates are approximate, at the centre of town.
   - Tagline, subtitle, overview heading and airport text rewritten.
5. **Property name:** display name is now "Samara Resort". Social URLs and `package.json` still use `samaralanka`.
6. **Amenities:** removed Private Pool and Full Kitchen. "Private Chef" became "Home-Cooked Meals", cooked on request by the local host. The grid is 3 columns.
7. **Gallery and Rooms lightboxes:**
   - Native `<dialog>` viewer with Escape, arrow keys, arrow buttons, click-outside to close and swipe.
   - 1px `stone-200` borders, `rounded-2xl` corners and a slow 1.02 hover zoom.
   - The "View all N photos" buttons were added and then removed at the owner's request.
   - Each component has its own copy of the lightbox script. It could be extracted into one shared component.
8. **Local Guide redesigned** as "Curated Experiences":
   - 3 tabs: Beaches & Surf, Culture & Wildlife, Dining & Sundowners.
   - Accessible tabs with arrow, Home and End keys, and a slide-and-fade animation that respects reduced motion.
   - Each card has a distance, an insider tip and an optional "Ask host to arrange transport" WhatsApp link (`transportUrl()` in `property.ts`).
9. **Welcome section** (`Welcome.astro`): Samara's photo (`main-gate/samara.jpeg`) beside a rewritten welcome message.

## Placeholders and open items

- **Contact and links** (all in `property.ts`):
  - WhatsApp number `94771234567` is a placeholder.
  - Booking.com URL is a placeholder.
  - Instagram and Facebook URLs are placeholders.
  - The gate sign shows phone numbers 0776083144 / 0760083144. The first could become the WhatsApp number (`94776083144`) if the owner agrees.
- **Unverified claims:**
  - Amenities not yet checked against the real property: Air Conditioning, Fast Wi-Fi, Daily Housekeeping, Airport Transfers, Free Parking.
  - Missing amenities to ask about: fans, mosquito nets, hot water, breakfast, garden.
  - Rating 9.4 and 128 reviews in `stats` are template numbers. Replace them with real Booking.com figures or remove them.
- **Guide content:** drive times and insider tips are my approximations. Replace them with local knowledge, including real restaurant names, a preferred safari driver and the best sunset spot.
- **Map:** the pin is town-centre. Get exact coordinates or a Google Maps link for the property.
- **Rooms:** add real bed types. The names "Bedroom One" and "Bedroom Two" are placeholders.
- **Wording:** copy still says "villa" in places (tagline, overview, Wi-Fi text, WhatsApp message). Decide whether to use "resort" instead.
- **Alt text:** gallery alt text is generic. Write real descriptions once we know what each photo shows.
- **Photos:**
  - The 5 files in `public/images/property/` are unused.
  - `public/images/main-gate/roshan.jpeg` (the owner) is deliberately not used and not committed. Delete it or add it to `.gitignore`.
  - If the owner's name is supplied, the Welcome section could mention him.
- **Mobile gallery:** only 2 tiles show on phones. Others are reachable only through the lightbox.
- **Footer/Host copy:** not reviewed since the property details changed. The Host section says "We usually reply within a few hours", which is unverified.

## Ideas for later

- Compress and resize images (e.g. Astro `<Image>`) for performance.
- Add a Safari or "Rooms & Safari" offering section, since the gate sign advertises it.
- Extract the shared lightbox into one component.
- Add SEO and OpenGraph tuning, and a custom domain and deployment (not yet set up).
