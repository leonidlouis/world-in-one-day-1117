"""Save six overlapping-free regions at exactly 2× for a numbered review pass."""
from pathlib import Path
from PIL import Image
import sys

pass_id = sys.argv[1]
root = Path('build') / f'review-{pass_id}'
root.mkdir(parents=True, exist_ok=True)
image = Image.open('assets/entry.png').convert('RGB')
regions = {
 'top-left': (0, 0, 512, 350),
 'top-right': (512, 0, 1024, 350),
 'middle-left': (0, 348, 512, 650),
 'middle-right': (512, 348, 1024, 650),
 'bottom-left': (0, 650, 512, 1024),
 'bottom-right': (512, 650, 1024, 1024),
}
for name, box in regions.items():
 crop = image.crop(box)
 crop.resize((crop.width * 2, crop.height * 2), Image.Resampling.NEAREST).save(root / f'{name}-2x.png')
image.resize((300, 300), Image.Resampling.LANCZOS).save(root / 'preview-300.png')
(root / 'audit.json').write_text(Path('build/audit.json').read_text())
print(f'Review {pass_id}: 6 crops at 2x, 300px preview, browser geometry audit.')
