"""Save six overlapping-free regions at exactly 2× for a numbered review pass."""
from pathlib import Path
from PIL import Image
import sys

pass_id = sys.argv[1]
root = Path('build') / f'review-{pass_id}'
root.mkdir(parents=True, exist_ok=True)
image = Image.open('assets/entry.png').convert('RGB')
image.save(root / 'full-1024.png')
regions = {
 'top-left': (0, 0, 512, 440),
 'top-right': (512, 0, 1024, 440),
 'middle-left': (0, 440, 512, 780),
 'middle-right': (512, 440, 1024, 780),
 'bottom-left': (0, 780, 512, 1024),
 'bottom-right': (512, 780, 1024, 1024),
}
for name, box in regions.items():
 crop = image.crop(box)
 crop.resize((crop.width * 2, crop.height * 2), Image.Resampling.NEAREST).save(root / f'{name}-2x.png')
image.resize((300, 300), Image.Resampling.LANCZOS).save(root / 'preview-300.png')
(root / 'audit.json').write_text(Path('build/audit.json').read_text())
print(f'Review {pass_id}: 6 crops at 2x, 300px preview, browser geometry audit.')
