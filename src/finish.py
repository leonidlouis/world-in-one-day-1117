from PIL import Image
from pathlib import Path

# Preserve every antialiased text pixel when the lossless RGB file fits the limit.
image = Image.open('build/raw.png').convert('RGB')
assert image.size == (1024, 1024)
image.save('assets/entry.png', optimize=True)
if Path('assets/entry.png').stat().st_size > 1048576:
 image.quantize(colors=256, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save('assets/entry.png', optimize=True)
image = Image.open('assets/entry.png').convert('RGB')
image.resize((300, 300), Image.Resampling.LANCZOS).save('build/preview-300.png')
size = Path('assets/entry.png').stat().st_size
assert size <= 1048576
print(f'assets/entry.png: 1024x1024, {size:,} bytes')
