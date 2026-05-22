from playwright.sync_api import sync_playwright
import os

paths = [
    '/integrations',
    '/faq'
]

output_dir = 'C:/Users/milin/.gemini/antigravity-ide/brain/c419263a-5136-4608-be4d-060822fe78c8'

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()

    for path in paths:
        url = f'http://localhost:3000{path}'
        print(f"Navigating to {url}")
        try:
            page.goto(url)
            page.wait_for_load_state('networkidle')
            name = path.replace('/', '')
            
            # Full page screenshot
            full_path = os.path.join(output_dir, f'screenshot_{name}.png')
            page.screenshot(path=full_path, full_page=True)
            print(f"Saved {full_path}")
            
        except Exception as e:
            print(f"Failed to capture {url}: {e}")
            
    browser.close()
