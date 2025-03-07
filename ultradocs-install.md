# Installing Hugo Docs with UltraDocs Theme in UltraRepo

This guide provides step-by-step instructions to install Hugo and integrate the UltraDocs theme inside the /docs/ folder of the UltraRepo project.

## 🚀 1. Install Hugo

### MacOS (Homebrew)
```bash
brew install hugo
```

### Linux (Debian/Ubuntu)
```bash
sudo apt-get install hugo
```

### Windows (Chocolatey)
```bash
choco install hugo -confirm
```

## 📂 2. Set Up Hugo in /docs/

```bash
cd ultrarepo
mkdir docs
cd docs
hugo new site .
```

## 🎨 3. Install the UltraDocs Theme

```bash
git submodule add https://github.com/loulibre/ultradocs.git themes/ultradocs
git submodule update --init --recursive
```

## 🛠 4. Configure Hugo (config.toml)

Replace the contents of docs/config.toml with:

```toml
baseURL = "/"
languageCode = "en-us"
title = "UltraRepo Documentation"
theme = "ultradocs"

[params]
  description = "UltraRepo Developer Documentation"
  author = "UltraRepo Team"
  github = "https://github.com/ultrarepo"
  showAuthor = true
  showReadingTime = false
```

## 📝 5. Add Docs Content

Create a new markdown file for the documentation:

```bash
hugo new content/docs/getting-started.md
```

Then, edit docs/content/docs/getting-started.md:

```markdown
---
title: "Getting Started"
date: 2025-03-06
---

# 🚀 Welcome to UltraRepo Docs

This guide helps you get started with UltraRepo.
```

## 🎨 6. Add Custom Styles (Optional)

To keep Hugo lightweight, add a custom stylesheet under docs/assets/css/ultradocs.css:

```css
/* docs/assets/css/ultradocs.css */
body {
  font-family: 'Inter', sans-serif;
  max-width: 900px;
  margin: auto;
  color: #333;
}
h1, h2, h3 {
  font-weight: bold;
}
```

Then, reference it in docs/layouts/partials/head.html:

```html
<link rel="stylesheet" href="{{ "assets/css/ultradocs.css" | absURL }}">
```

## 🏃‍♂️ 7. Run Hugo Docs Locally

```bash
cd docs
hugo server -D
```

Visit: http://localhost:1313/

## 🔄 8. Update and Commit to Git

```bash
git add docs
git commit -m "Added Hugo Docs with UltraDocs theme"
git push origin main
```

## 🎉 UltraRepo Docs Are Now Live!

Your Hugo-powered documentation is now part of your project.

To deploy it, you can use GitHub Pages, Netlify, or Vercel.