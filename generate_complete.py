
import os
import base64
import re

def get_base64_image(path):
    if not os.path.exists(path):
        print(f"Warning: Image not found {path}")
        return None
    with open(path, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
        # Determine mime type
        ext = os.path.splitext(path)[1].lower()
        mime_type = "image/jpeg"
        if ext == ".png":
            mime_type = "image/png"
        elif ext == ".svg":
            mime_type = "image/svg+xml"
        elif ext == ".gif":
            mime_type = "image/gif"
        
        return f"data:{mime_type};base64,{encoded_string}"

def generate_complete_html():
    base_dir = "/Users/pali/Desktop/limoni"
    index_path = os.path.join(base_dir, "index.html")
    output_path = os.path.join(base_dir, "limoni-completo.html")
    
    with open(index_path, "r", encoding="utf-8") as f:
        html_content = f.read()

    # Inline CSS
    css_path = os.path.join(base_dir, "style.css")
    if os.path.exists(css_path):
        with open(css_path, "r", encoding="utf-8") as f:
            css_content = f.read()
        html_content = html_content.replace('<link rel="stylesheet" href="style.css">', f'<style>\n{css_content}\n</style>')

    # Inline JS (Find script src="script.js")
    # Note: script tag might be at end of body
    # Standard replacement for <script src="script.js"></script>
    js_path = os.path.join(base_dir, "script.js")
    if os.path.exists(js_path):
        with open(js_path, "r", encoding="utf-8") as f:
            js_content = f.read()
        # Regex to find script tag with src="script.js"
        html_content = re.sub(r'<script src="script.js".*?></script>', f'<script>\n{js_content}\n</script>', html_content)
        # Also simple string replace as fallback
        html_content = html_content.replace('<script src="script.js"></script>', f'<script>\n{js_content}\n</script>')

    # Inline Images
    # Find all img tags with src
    # And specifically CSS background images if any? (Not handling CSS images here unless requested, usually img tags are enough for content)
    
    # Regex for img tags
    # <img ... src="images/..." ...>
    
    def replacer(match):
        img_tag = match.group(0)
        src_match = re.search(r'src="([^"]+)"', img_tag)
        if src_match:
            src = src_match.group(1)
            if not src.startswith("http") and not src.startswith("data:"):
                # Local file
                full_path = os.path.join(base_dir, src)
                base64_data = get_base64_image(full_path)
                if base64_data:
                    return img_tag.replace(src, base64_data)
        return img_tag

    html_content = re.sub(r'<img[^>]+>', replacer, html_content)

    # Inline CSS Background Images (e.g. parallax-bg if any)
    # style="background-image: url('...')"
    # This is trickier regex. I'll stick to img tags for now as major assets are img tags.
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    
    print(f"Successfully generated {output_path}")

if __name__ == "__main__":
    generate_complete_html()
