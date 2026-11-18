import { mkdirSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

// The rendered artwork is kept in the repository: no runtime dependencies or network.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(new URL('./assets/entry.png', import.meta.url), join(outputDir, 'entry.png'));
