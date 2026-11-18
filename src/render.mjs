import { spawnSync } from 'node:child_process';
import { mkdirSync, rmSync, existsSync } from 'node:fs';

function run(program, args) {
 const result = spawnSync(program, args, { encoding: 'utf8', timeout: 30000 });
 if (result.error || result.status !== 0)
  throw new Error(`${program}: ${result.error || result.stderr || result.stdout}`);
 if (result.stdout) process.stdout.write(result.stdout);
}

run(process.execPath, ['src/build.mjs']);
mkdirSync('assets', { recursive: true });
rmSync('build/raw.png', { force: true });
run(process.execPath, ['src/chrome.mjs']);
if (!existsSync('build/raw.png')) throw new Error('No fresh raster image');
run('python3', ['src/finish.py']);
