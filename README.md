# MUSPIRATION

**MUSIC. PEOPLE. STORIES.**

The official website of MUSPIRATION, a music-first creative media brand.
Social handle: @muspirationhq · Email: muspirationmedia@gmail.com

Live site: https://emmanuel-chidiadi.github.io/muspiration/

## What this is

A single-page static website built with plain HTML, CSS and JavaScript.
There is no framework, no build step, no database and no backend. It runs on GitHub Pages as it is.

## Files

```
muspiration/
  index.html          The page content and structure
  style.css           All styling (colours, layout, responsive rules)
  script.js           Mobile menu, active nav link, scroll reveal, footer year
  README.md           This file
  assets/
    logo.png            Official MUSPIRATION logo (do not edit or replace with a redesign)
    founder-photo.jpg   Founder photograph
    favicon.png         Browser tab icon (cropped from the logo artwork)
    apple-touch-icon.png  Home-screen icon (cropped from the logo artwork)
```

All file paths are relative, so the site works from the GitHub Pages project address.

## Brand colours

| Name | Hex |
| --- | --- |
| Midnight Navy | `#0B1E3F` |
| Cobalt Blue | `#2563EB` |
| White | `#FFFFFF` |
| Soft Blue (supporting) | `#9DB8F5` |

Fonts: Playfair Display (headings) and Inter (body), loaded from Google Fonts. If they fail to load, the site falls back to Georgia and the system sans-serif font.

## Common edits

- **Change text:** open `index.html` and edit the words between the tags.
- **Change colours:** edit the values at the top of `style.css` under `:root`.
- **Replace the founder photo:** upload a new image named `founder-photo.jpg` into `assets/`.
- **Logo:** keep `assets/logo.png` as the official file. The logo's background is the exact navy of the site, so it only sits cleanly on Midnight Navy.
- **Social links:** search `index.html` for `muspirationhq` to find them.

## Publishing on GitHub Pages

In the repository, open **Settings → Pages**, set the source to **Deploy from a branch**, choose the `main` branch and the `/ (root)` folder, then save. The site appears at the address above after a minute or two.

## Accessibility

Semantic HTML, a skip link, keyboard-friendly navigation, visible focus outlines, descriptive alt text, and support for the reduced-motion setting.

&copy; MUSPIRATION. All rights reserved.
