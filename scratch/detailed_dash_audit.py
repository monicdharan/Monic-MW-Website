import os, re

files = [
    'index.html',
    'about.html',
    'services.html',
    'publications.html',
    'testimonials.html',
    'contact.html',
    'blog.html',
    'terms-conditions.html',
    'privacy-policy.html',
    'refund-policy.html',
    'shipping-policy.html',
    'services/abstract-poster.html',
    'services/case-report.html',
    'services/original-research.html',
    'services/protocol.html',
    'services/review-article.html',
    'services/statistical-analysis.html',
    'services/systematic-review.html',
    'services/thesis-to-manuscript.html',
    'services/thesis.html',
]

print("=== DETAILED EM-DASH AND EN-DASH AUDIT ===")

for file in files:
    if not os.path.exists(file):
        continue
    with open(file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    print(f"\n>>> {file} <<<")
    for idx, line in enumerate(lines, 1):
        if line.strip().startswith('<!--') or line.strip().startswith('-->'):
            continue
        # Find all occurrences of —, –, -, --
        # Check if line has em-dash
        if '—' in line:
            # print snippet
            snippet = line.strip()
            print(f"  Line {idx} [EM-DASH]: {snippet}")
        if '–' in line:
            snippet = line.strip()
            print(f"  Line {idx} [EN-DASH]: {snippet}")
        if '--' in line and not line.strip().startswith('<!--'):
            snippet = line.strip()
            print(f"  Line {idx} [DOUBLE HYPHEN]: {snippet}")
