[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/leonidlouis/world-in-one-day-1117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/leonidlouis/world-in-one-day-1117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

Entry for the [make.fun bounty](https://make.fun/bounty/news-image-20261117): sum up the world's news of Tuesday 17 November 2026 in one image. Run: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`.

# The World in One Day — Tuesday 17 November 2026

A newspaper front page with **43 stories**: three large illustrated leads, ten medium
illustrated stories, and thirty one-line briefs. The serif date masthead is the largest
element; six key figures, a world map and region colours provide orientation.

Only news sources: the supplied verified `facts1117.md` and `facts1117b.md`. The addendum
supersedes the earlier Kerch and Nvidia reports. Claims are attributed; Thursday’s
Shenzhen summit is labelled as upcoming. Wall Street’s fall is distinguished from
Nvidia’s later after-hours results.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only, no network. Copies `assets/entry.png` to the requested
output directory (default `/output`).

To rebuild and produce review crops:

```sh
node src/render.mjs
python3 src/review.py r3-5
```

Original SVG art and real text are written by `src/build.mjs`, `src/scenes.mjs`, and
`src/art.mjs`; copy is in `src/stories.mjs`. Local headless Chrome renders installed
DejaVu Serif and Source Sans 3 fonts through a DevTools pipe, with no npm packages.
Pillow writes a lossless PNG, with a palette fallback if needed to stay below 1 MiB.

Visual review passes inspect full size, 300 px and six 2× crops covering the whole page.
The browser audits text bounds, overlaps and illustration bounds. Generated previews,
geometry audits and the 43-item source index are under ignored `build/`.
