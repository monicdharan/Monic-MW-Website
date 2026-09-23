import os, glob
from PIL import Image

out_dir = r"c:\Users\Dell\OneDrive\Desktop\MW Website 4\figma_extracted"
imgs = glob.glob(os.path.join(out_dir, "images", "*"))

html = [
    "<!DOCTYPE html>",
    "<html><head><title>Moodboard Preview</title>",
    "<style>",
    "body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f172a; color: #f8fafc; padding: 30px; margin: 0; }",
    "h1, h2 { color: #38bdf8; }",
    ".grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 24px; margin-top: 20px; }",
    ".card { background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.3); }",
    ".card p { font-size: 13px; color: #94a3b8; word-break: break-all; margin: 0 0 10px 0; }",
    ".card img { width: 100%; height: auto; border-radius: 8px; background: #fff; }",
    ".thumb { max-width: 480px; border-radius: 12px; border: 2px solid #38bdf8; }",
    "</style></head><body>",
    "<h1>MedZen Writes — Blue Energy Mood Board Assets</h1>",
    "<h2>Moodboard Thumbnail</h2>",
    "<img class='thumb' src='thumbnail.png' alt='Thumbnail'>",
    f"<h2>All Extracted Assets ({len(imgs)})</h2>",
    "<div class='grid'>"
]

for p in sorted(imgs):
    fname = os.path.basename(p)
    html.append(f"<div class='card'><p><strong>{fname}</strong></p><img src='images/{fname}' alt='{fname}'></div>")

html.append("</div></body></html>")

with open(os.path.join(out_dir, "gallery.html"), "w", encoding="utf-8") as f:
    f.write("\n".join(html))

print("Created gallery.html successfully")
