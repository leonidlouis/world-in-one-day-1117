[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/leonidlouis/world-in-one-day-1117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/leonidlouis/world-in-one-day-1117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

Entry for the [make.fun bounty](https://make.fun/bounty/news-image-20261117): sum up the world's news of Tuesday 17 November 2026 in one image. Run: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`.

# The World in One Day — 17 November 2026

An original illustrated newspaper front page: four lead stories, a world locator map,
regional reports, markets, health, technology and sport. All news copy comes from the
provided verified `facts1117.md`; disputed claims and future plans are attributed.

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

`src/build.mjs` draws all original SVG shapes and typesetting. Rendering uses installed
Barlow Condensed, Fraunces and Source Sans 3 fonts, the local librsvg/Cairo libraries
through Python ctypes, and Pillow for deterministic 256-colour PNG compression. Build files and a 300-pixel
inspection preview are written under `build/`. No network or downloaded assets are used.
