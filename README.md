[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/leonidlouis/world-in-one-day-1117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/leonidlouis/world-in-one-day-1117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

Entry for the [make.fun bounty](https://make.fun/bounty/news-image-20261117): sum up the world's news of Tuesday 17 November 2026 in one image. Run: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`.

# The World in One Day — 17 November 2026

An original illustrated newspaper front page with **48 numbered news panels**:
four illustrated leads, ten medium panels and 34 concise briefs. Related developments
share panels to cover the supplied fact sheet across six continents. Every panel has
an illustration or pictogram and a corresponding map pin, grouped by region and
coloured by topic. Seven key figures sit below the date masthead.

All news copy comes from the provided verified `facts1117.md`. Disputed claims are
attributed; future plans and earlier outages are explicitly labelled and dated.

Run with Node 22, standard library only and no network:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program writes the committed `assets/entry.png` into the requested directory
(default `/output`). Copying the same asset produces identical bytes on every run.

To regenerate the artwork on this machine:

```sh
node src/render.mjs
```

`src/stories.mjs` holds the source-backed text. `src/build.mjs`, `src/art.mjs` and
`src/lead-art.mjs` draw original SVG shapes and real text. Rendering uses installed
Barlow Condensed, Fraunces and Source Sans 3 fonts and headless Chrome through a local
DevTools pipe (`src/chrome.mjs`), with no npm packages or network requests. Pillow
writes a lossless RGB PNG, preserving antialiased text; a 256-colour fallback is
available if the image ever exceeds 1 MiB. `main.ts` only needs Node's standard library.

Four visual review passes include full-size and 300-pixel inspection plus six crops
at 2× per pass, covering every region. To regenerate inspection artifacts:

```sh
python3 src/review.py 4
```

Generated HTML/SVG, the 48-item text index, browser geometry audit, previews and crops
are under ignored `build/`. The browser checks text containment, text collisions and
text/illustration collisions for all 48 panels. No downloaded assets are used.
