# UltraRepo Starter App - Documentation Home

# UltraRepo Archiver - A Desktop and Web App for Use with AI Agents with privacy and offline support for massive repositories and archives.

## Problem Overview
AI Agents and AI systems have a limited 'context window' of under 2M, which means that AI cannot easily ingest and learn large collections of documents, code or files. To provide accurate and relevant responses to collections of files or documents in a repository or archive, AI systems need a machine readable, lightweight  structure that can be shared instantly, so that the AI can provide accurate reasoning.  

# Solution Overview
Unlike long context window systems which force you to upload an entire collection of documents for training, UltraRepo uses a lightweight file that can be uploaded and used by AI Agents and AI systems for reasoning and accurate responses in seconds.  By providing a knowledge graph and links to the data and files, ultrarepo can support AI reasoning over terabytes of data, regardless of the context window size.  

The magic happens with the UltraRepo Archiver. Similar to how a zip compression program works, the UltraRepo Archiver works to capture key metadata and file info summary info from collections of documents that you specify on your private machine. After you select a collection of local documents or files, UltraRepo Archive parses, processes and saves all of the files as a repository archive metadata summary (RAMS) report, which is saved in JSON or XLSX formats for sharing with AI or with other humans, which can be used to train AI systems without the need to upload entire collections of private documents.  If you do decide to upload your documents, UltraRepo Archive can provide fast, private uploads to a secure UltraRepo server or to your own system or server for use with AI Agents and AI systems to provide accurate and relevant responses to collections of files or documents in a repository or archive.

 The UltraRepo archive app is designed as a portable desktop and web app with a plugin architecture that allows third party plugins to be added to the UltraRepo app through the UltraRepo marketplace (coming soon).  

## Project Overview

This is a **Next.js + Electron** application built with the Nextron project that has the following components: 
- **Tailwind CSS** + **ShadCN UI Components**
- **Embedded Python (FastAPI) executables for macOS and Linux**
- **Centralized Tailwind & ShadCN Design System**
- **MkDocs Docs (MkDocs Material template) for offline documentation**

## Project Structure

The following is the latest project **file structure** for the **Nextron-Python-Electron** project, which supports **Electron, Next.js, Tailwind CSS, ShadCN UI components, FastAPI,and MkDocs documentation**.  The project can support a binary executable version of FastAPI, which enables the web service and API to run without a Python installation.  The project also includes an MkDocs documentation engine, which is a great way to create offline documentation for your project.  The project also includes a centralized Tailwind CSS and ShadCN UI component design system.  The project also includes a pre-built version of the MkDocs documentation engine, which can be used to create, edit and view  documentation for your project, even if offline.   The project can be installed on a portable .zip drive, and if you build the electron version of the app, it can easily be distributed to other users via .zip or online with a standard macos .dmg or a windows .exe file.


# 📦 Installation Guide (Phased Approach)


## **1️⃣ Install Nextron with Tailwind CSS**  
First, install the Nextron app using the Tailwind CSS example:  
```bash
npx create-nextron-app /frontend/electron/ --example with-tailwindcss
cd /frontend/electron/
npm install
```
### Run the app after install and verify it works:
cd /frontend/electron/
npm run dev

### Install Dependencies

```
$ cd my-app

# using yarn or npm
$ yarn (or `npm install`)

# using pnpm
$ pnpm install --shamefully-hoist
```

### Use it
# 🚀 How to Use It

Run any of these from the **project root**:

### ✅ Start Electron App
```
npm run dev:electron
```

### ✅ Start Web App (Next.js)
```
npm run dev:web
```

### ✅ Start Backend (FastAPI)
```
npm run dev:backend
```

### ✅ Start Hugo Docs
```
npm run dev:docs
```

### 🛠 Build Electron App
```
npm run build:electron
```

### 🛠 Build Web App
```
npm run build:web
```

### 🛠 Build Docs
```
npm run build:docs
```

## **2️⃣ Install ShadCN UI Components**  
Inside the Nextron project folder:  
```bash
npm install -g shadcn-ui
npx shadcn init
npx shadcn add button input card
```

## Install UltraRepo Docs (MkDocs) and UltraRepo Docs Theme

UltraRepo Docs is the container for the UltraRepo docs.  Based on MkDocs, UltraRepo docs is a starter docs area for documentation websites.  MkDocs can utilize AI agents to create markdown pages automatically.  When you are ready to deploy, use 'mkdocs build' which will generate a static HTML website for your docs.

## UltraRepo Archive Ingestor and Schema Generator 
    Instead of uploading your entire repository to AI, which is often impossible due to context window and upload limitations, UltraRepo provides an app to ingest your repo archive and to create a content map and schema that is viewable by AI or humans.  The knowledge graph based content map is viewable in JSON-schema by AI, or as a markdown file with a tree hierarchy for visualization by humans.

## Running UltraRepo Schema Generator
    To run the UltraRepo Schema Generator on your project for an AI readable knowledge graph, first make sure you have python installed and go to your project root (as described in this doc).  Second, the app uses a .GITIGNORE file to exclude files and directories from scanning and parsing.  You should verify that you have updated your gitinore file with files like binaries, libraries and caches that are not part of your active project files.  

    Starting UltraRepo Schema Generator:
    ```
    cd [your project root]
    python3 repo-schema.py
     ```
    Output from UltraRepo Schema Generator
     ```
Welcome to Repo Schema, a tool to chart details of your repository.
Repo Schema will scan and parse all files in your repo.
To exclude a directory, add it to the .GITIGNORE file at the root of your repo.
Proceed to scan and parse all files? [Y/N]:  Y

Task completed:
  [101] Files Scanned | [65] Files Parsed
View output files at:
  - repo-schema.json
  - repo-schema.md
  
   ```
The output of the Repo-Schema.MD file looks something like this:
 ```
 # UltraRepo Documentation v1.0

## Project Structure with Details

    📁 backend
        📁 api
            └── 📄 next.config.js
                Type: .js
                Modified: 2025-03-06T15:46:40.838471
                Description: Next.js framework configuration
                Content: /** @type {import('next').NextConfig} */
    📁 docs
        └── 📄 mkdocs.yml
            Type: .yml
            Modified: 2025-03-10T18:11:32.661764
            Description: YAML configuration file
            Content: site_name: UltraRepo Documentation Home
        📁 docs
            └── 📄 index.md
                Type: .md
                Modified: 2025-03-10T18:12:26.261759
                Description: Markdown documentation file
                Content: # UltraRepo Documentation Home
    📁 frontend
        📁 electron
            ├── 📄 electron-builder.yml
                Type: .yml
                Modified: 2025-03-06T22:26:59.479515
                Description: YAML configuration file
                Content: appId: com.electron.ultrarepo

 ```

 The 'repo-schema.json' matches the markdown file in structure, but it is designed to be machine readable.  If you want to you can submit the repo-schema.json file to AI as an additional context and project information to train the AI on your project.  Optionally, you can have AI help you to edit the repo-schema.md file by adding additional project context information to the markdown on your project such as tech stack, languages used, etc. as in a readme.md. When you need to train (or refresh) the memory of a new AI chat agent, you can get better results if you submit a schema file and markdown to the AI with your query.  The repo schema files act as a catalog and a map for AI to better understand and to locate key files in your repo.


# Documentation

This project is a work in progress, so there are limited docs available at this time.


## 📚 MkDocs Material Theme Setup

### 1. Install MkDocs Material

First, create and activate a Python virtual environment:

```bash
python -m venv .venv
source .venv/bin/activate  # On Windows, use `.venv\Scripts\activate`
```

Install MkDocs Material and required plugins:

```bash
pip install mkdocs-material
pip install mkdocs-git-revision-date-localized-plugin
pip install mkdocs-minify-plugin
```
### 2. Configure MkDocs Material

Create or update your `mkdocs.yml` configuration file:

```yaml
site_name: UltraRepo Documentation
site_description: Documentation for UltraRepo - AI-Powered Repository Management
site_author: UltraRepo Team

theme:
  name: material
  features:
    - navigation.tabs
    - navigation.sections
    - navigation.top
    - search.suggest
    - search.highlight
    - content.tabs.link
    - content.code.annotation
    - content.code.copy
  language: en
  palette:
    - scheme: default
      toggle:
        icon: material/toggle-switch-off-outline 
        name: Switch to dark mode
      primary: teal
      accent: purple 
    - scheme: slate 
      toggle:
        icon: material/toggle-switch
        name: Switch to light mode    
      primary: teal
      accent: lime

plugins:
  - search
  - git-revision-date-localized:
      enable_creation_date: true
  - minify:
      minify_html: true

extra:
  social:
    - icon: fontawesome/brands/github
      link: https://github.com/yourusername/ultrarepo
    - icon: fontawesome/brands/twitter
      link: https://twitter.com/ultrarepo

markdown_extensions:
  - pymdownx.highlight:
      anchor_linenums: true
  - pymdownx.inlinehilite
  - pymdownx.snippets
  - admonition
  - pymdownx.arithmatex:
      generic: true
  - footnotes
  - pymdownx.details
  - pymdownx.superfences
  - pymdownx.mark
  - attr_list
  - pymdownx.emoji:
      emoji_index: !!python/name:materialx.emoji.twemoji
      emoji_generator: !!python/name:materialx.emoji.to_svg

copyright: |
  &copy; 2024 <a href="https://github.com/yourusername/ultrarepo"  target="_blank" rel="noopener">UltraRepo Team</a>
```

### 3. Project Structure

Organize your documentation in the `docs` directory:

```
docs/
├── assets/
│   └── images/
├── stylesheets/
│   └── extra.css
├── index.md
├── getting-started.md
├── features/
│   ├── repo-schema.md
│   ├── ai-integration.md
│   └── offline-support.md
└── api/
    └── reference.md
```

### 4. Development Server

Start the development server:

```bash
mkdocs serve
```

Access your documentation at `http://127.0.0.1:8000`

### 5. Build Static Site

Generate the static site:

```bash
mkdocs build
```

The site will be built in the `site` directory.

### 6. Deploy to GitHub Pages (Optional)

Deploy your documentation to GitHub Pages:

```bash
mkdocs gh-deploy --force
```

### 7. Additional Features

The Material theme includes many advanced features:

- 🎨 Dark/Light mode switching
- 🔍 Full-text search
- 📱 Responsive design
- 🖼️ Instant page loading
- 💻 Code copy button
- 📊 Diagrams support
- 📝 Built-in blog plugin

For more information, visit the [MkDocs Material documentation](https://squidfunk.github.io/mkdocs-material/).

