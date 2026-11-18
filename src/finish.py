from PIL import Image
from pathlib import Path

# A fixed palette conversion keeps the image comfortably below the contest limit.
image = Image.open('build/raw.png').convert('RGB')
assert image.size == (1024, 1024)
image.quantize(colors=256, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save('assets/entry.png', optimize=True)
image.resize((300, 300), Image.Resampling.LANCZOS).save('build/preview-300.png')
size = Path('assets/entry.png').stat().st_size
assert size <= 1048576
print(f'assets/entry.png: 1024x1024, {size:,} bytes')
