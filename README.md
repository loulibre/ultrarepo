# UltraRepo Archiver - A Desktop and Web App for Use with AI Agents with privacy and offline support for massive repositories and archives.

## Problem Overview
AI Agents and AI systems have a limited 'context window' of under 2M, which means that AI cannot easily ingest and learn large collections of documents, code or files. To provide accurate and relevant responses to collections of files or documents in a repository or archive, AI systems need a machine readable, lightweight  structure that can be shared instantly, so that the AI can provide accurate reasoning.  

# Solution Overview
Unlike long context window systems which force you to upload an entire collection of documents for training, UltraRepo uses a lightweight file that can be uploaded and used by AI Agents and AI systems for reasoning and accurate responses in seconds.  By providing a knowledge graph and links to the data and files, ultrarepo can support AI reasoning over terabytes of data, regardless of the context window size.  

The magic happens with the UltraRepo Archiver. Similar to how a zip compression program works, the UltraRepo Archiver works to capture key metadata and file info summary info from collections of documents that you specify on your private machine. After you select a collection of local documents or files, UltraRepo Archive parses, processes and saves all of the files as a repository archive metadata summary (RAMS) report, which is saved in JSON or XLSX formats for sharing with AI or with other humans, which can be used to train AI systems without the need to upload entire collections of private documents.  If you do decide to upload your documents, UltraRepo Archive can provide fast, private uploads to a secure UltraRepo server or to your own system or server for use with AI Agents and AI systems to provide accurate and relevant responses to collections of files or documents in a repository or archive.

 The UltraRepo archive app is designed as a portable desktop and web app with a plugin architecture that allows third party plugins to be added to the UltraRepo app through the UltraRepo marketplace (coming soon).  

## Project Structure

This is a **Next.js + Electron** application built with the Nextron project that has the following components: 
- **Tailwind CSS** + **ShadCN UI Components**
- **Embedded Python (FastAPI) executables for macOS and Linux**
- **Hugo Docs (Learn template) for offline documentation**
- **Centralized Tailwind & ShadCN Design System**

## Project Structure

The following is the latest project **file structure** for the **Nextron-Python-Electron** project, which supports **Electron, Next.js, Tailwind CSS, ShadCN UI components, FastAPI, Cython-based executable builds, and Hugo documentation**.  The project has a binary executable version of FastAPI, which enables the web service and API to run without a Python installation.  The project also includes a Hugo documentation engine, which is a great way to create offline documentation for your project.  The project also includes a centralized Tailwind CSS and ShadCN UI component design system, which is used by both the Next.js and Hugo documentation engines.  The project also includes a pre-built version of the FastAPI binary for macOS and Linux, which can be used to run the web service and API without a Python installation.  The project also includes a pre-built version of the Hugo documentation engine, which can be used to create, edit and view  documentation for your project, even if offline.   The project can be installed on a portable .zip drive, and can easily be distributed to other users via .zip or online with a standard macos .dmg or a windows .exe file.


# 📦 Installation Guide (Phased Approach)


## **1️⃣ Install Nextron with Tailwind CSS**  
First, install the Nextron app using the Tailwind CSS example:  
```bash
npx create-nextron-app my-app --example with-tailwindcss
cd my-app
npm install
```
### Run the app after install and verify it works:
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

```
# development mode
$ yarn dev (or `npm run dev` or `pnpm run dev`)

# production build
$ yarn build (or `npm run build` or `pnpm run build`)
```


## **2️⃣ Install ShadCN UI Components**  
Inside the Nextron project folder:  
```bash
npm install -g shadcn-ui
npx shadcn init
npx shadcn add button input card
```

## Install UltraDocs (Hugo Docs) and UltraDocs Theme

UltraDocs is a Hugo theme designed for documentation websites. It automatically ingests your repository content and generates a documentation website that is viewable offline by AI or by humans. UltraDocs also provides an enhanced knowledge graph-based content map in JSON schema, XLSX, and Markdown formats.

UltraDocs is built on the Hugo static site generator.

## Documentation

For detailed information, visit the UltraDocs documentation website which is built using this theme.

## Steps to Use UltraDocs as Your Hugo Docs Template in New Projects

### 1. Install Hugo

Ensure you have Hugo installed. If not, install it with:

```sh
brew install hugo  # macOS
choco install hugo # Windows
sudo apt install hugo # Linux
```

### 2. Clone the UltraDocs Repository

```sh
git clone https://github.com/loulibre/ultradocs.git
cd ultradocs
```

### 3. Initialize Git and Connect to Your Own Repository

```sh
git init
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 4. Start the Hugo Server Locally

```sh
hugo server -D
```

Then open your browser at: [http://localhost:1313](http://localhost:1313)

---

## Using UltraDocs in a New Hugo Project

### 5. Create a New Hugo Project with UltraDocs

```sh
hugo new site mydocs
cd mydocs
git init
git submodule add https://github.com/loulibre/ultradocs.git themes/ultradocs
```

Modify `config.toml` in your new project:

```toml
theme = "ultradocs"
```

### 6. Configure the UltraDocs Theme

Modify `config.toml` to include UltraDocs features:

```toml
baseURL = "http://localhost:1313/"
languageCode = "en-us"
title = "My Documentation Site"
theme = "ultradocs"
```

### 7. Regenerate Documentation with UltraDocs

Whenever you add content, generate the documentation:

```sh
hugo
```

This will create the static files in the `public/` directory.

---

## Deploying UltraDocs

### 8. Deploy UltraDocs to GitHub Pages (Optional)

```sh
git add .
git commit -m "Deploy UltraDocs site"
git push origin main
hugo -D -d docs  # Output files to /docs
```

Then configure **GitHub Pages** to serve from the `docs/` folder.

---

## Advanced Configuration

### 9. Enable Sitemap, TOC, and Tags

Modify `config.toml` to enable sitemap and TOC:

```toml
[outputs]
  home = ["HTML", "RSS", "JSON"]

[markup]
  [markup.tableOfContents]
    endLevel = 3
    startLevel = 1

[taxonomies]
  tag = "tags"
  category = "categories"
```

### 10. Verify and Test

Use the following command to check the setup:

```sh
hugo server -D --disableFastRender
```

---

## **3️⃣ Install Hugo Docs Engine**  
Hugo is used for offline documentation. First, ensure you have Go installed as it's required for Hugo modules:

### Install Go (Required)
#### macOS:
```bash
brew install go
```

#### Linux:
```bash
sudo apt-get install golang-go
```

### Install Hugo
#### macOS:
```bash
brew install hugo
```

#### Linux:
```bash
sudo apt-get install hugo
```

## **4️⃣ Configure Hugo Documentation**  

### Initialize Hugo Project
First, create and initialize the Hugo project with module support:
```bash
cd hugo_docs
hugo mod init github.com/yourusername/ultrarepo-docs
```

### Configure Hugo
Create or update `hugo.toml` with the following settings:
```toml
baseURL = "http://localhost:1313/"
languageCode = "en-us"
title = "UltraRepo Documentation"
theme = ["lotusdocs"]

[module]
  [[module.imports]]
    path = "github.com/colinwilson/lotusdocs"

[params]
  # Theme settings
  dark_mode = true
  navbar_style = "floating"
  navbar_blur = true
  
  # Repository settings
  github_repo = "https://github.com/yourusername/ultrarepo"
  github_branch = "main"
  
  # Search settings
  search_enabled = true
  search_type = "flexsearch"
```

### Install the Theme
Install the Lotus Docs theme using Hugo modules:
```bash
hugo mod get github.com/colinwilson/lotusdocs
hugo mod tidy
```

### Create Initial Content
Create your first documentation page:
```bash
hugo new content/docs/getting-started/_index.md
```

Add some basic content to the file:
```markdown
---
title: "Getting Started"
description: "Quick start guide for UltraRepo"
date: 2024-03-14
draft: false
---

# Getting Started with UltraRepo

Welcome to UltraRepo! This guide will help you get started...
```

### Start the Documentation Server
Initialize Hugo and test the documentation site:
```bash
hugo server -D
```

The documentation will be available at http://localhost:1313

## **5️⃣ Install and Configure FastAPI Service**  
FastAPI is used as the Python backend service. Follow these steps to set up the FastAPI environment:


## Install Python
Make sure you have python installed
```bash
python3 --version
```

If not installed, then create a new python virtual environment:
```bash
python3 -m venv venv
```

Activate the virtual environment:
```bash
source venv/bin/activate
```

### 1. Set up Python Virtual Environment
```bash
# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
.\venv\Scripts\activate
```

### 2. Install Required Packages
Install the necessary packages inside the `python/` directory:
```bash
cd python
pip install fastapi uvicorn
```

### 3. Test the FastAPI Service
Start the FastAPI development server:
```bash
uvicorn api:app --reload
```

You should see the FastAPI server running at **http://127.0.0.1:8000**.

### 4. Verify the Installation
- Open your browser and navigate to **http://127.0.0.1:8000/docs** to view the Swagger UI documentation
- The API endpoints will be available at **http://127.0.0.1:8000/api/**

---

# **6️⃣ Builds & Packaging**

## **6A) Build Script for FastAPI Service as an Executable**  
To compile FastAPI as a standalone executable for deployment in the Electron app, we use **Cython-based compilation** (https://github.com/difhel/cython-fastapi-example):

```bash
pip install cython
```

Then compile the FastAPI app:
```bash
cythonize -i -3 api.py
```

After compilation, move the executable to the `/python_executables/` directory:
```bash
mv api.so ../python_executables/mac/  # macOS
mv api.so ../python_executables/linux/  # Linux
```

## **6B) Build Scripts for Packaging Python as Executables**  

### **For macOS**
```bash
pyinstaller --onefile --name backend_mac api.py
mv dist/backend_mac ../python_executables/mac/
```

### **For Linux**
```bash
pyinstaller --onefile --name backend_linux api.py
mv dist/backend_linux ../python_executables/linux/
```

---

# 🚀 **Run the Electron App**  
After setting up everything, start the Electron app:
```bash
npm run dev
```

# 📦 **Package the Electron App for Distribution**  
To generate distributable executables for macOS and Linux:
```bash
npm run package-mac   # macOS
npm run package-linux # Linux
```

# 📜 License
MIT License - Free to use and modify.


---

# 📌 Compiling FastAPI as a Standalone Executable Using Cython

Using Cython-based compilation for FastAPI requires a C compiler to build the executable. This approach eliminates the need for a separate Python runtime.

## 📌 How to Create Cython-Based FastAPI Builds in Visual Studio Code (macOS & Windows)

### 1️⃣ Install Necessary Dependencies

Before compiling, ensure you have Python, Cython, and a C compiler installed.

#### 🖥️ For macOS

Install Xcode command line tools (which includes clang for C compilation):
```bash
xcode-select --install
```

Then install Cython and FastAPI:
```bash
pip install cython fastapi uvicorn
```

#### 🖥️ For Windows

Install Visual Studio Build Tools:
1. Download [Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
2. Select **C++ build tools** during installation.
3. Install Cython and FastAPI:
```bash
pip install cython fastapi uvicorn
```

### 2️⃣ Modify `api.py` for Cython Compilation

Convert the `api.py` script into a `.pyx` file:

#### Convert `api.py` to `api.pyx`
```python
from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get("/api/data")
async def get_data():
    return {"message": "Hello from Cython FastAPI Executable!"}

def run():
    uvicorn.run(app, host="127.0.0.1", port=5000)
```

### 3️⃣ Create a Cython `setup.py` for Compilation

Create `setup.py` in the same directory:
```python
from setuptools import setup
from Cython.Build import cythonize

setup(
    name="fastapi_server",
    ext_modules=cythonize("api.pyx", compiler_directives={"language_level": "3"}),
    zip_safe=False,
)
```

### 4️⃣ Compile the FastAPI Application

#### **On macOS**
```bash
python setup.py build_ext --inplace
```
This generates a compiled shared library **(`api.cpython-xx-darwin.so`)**.

#### **On Windows**
```bash
python setup.py build_ext --inplace
```
This generates a compiled DLL **(`api.cpXX-win_amd64.pyd`)**.

#### **Move the Compiled Binary to the Electron Project**
```bash
mv api.* ../python_executables/mac/
mv api.* ../python_executables/win/
```

## 📌 How to Start the Compiled FastAPI Executable with Electron App

To **automatically start the FastAPI binary** when the Electron app launches, modify the `main.ts` file.

### 🔹 Modify `src/main.ts` in Electron
```typescript
import { app, BrowserWindow } from "electron";
import { exec } from "child_process";
import * as os from "os";

let mainWindow: BrowserWindow | null;
let backendProcess: any;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { nodeIntegration: true },
    });

    // Launch the compiled FastAPI binary
    if (os.platform() === "darwin") {
        backendProcess = exec("./python_executables/mac/api.so");  // macOS binary
    } else {
        backendProcess = exec("python_executables\win\api.pyd");  // Windows binary
    }

    backendProcess.stdout.on("data", (data) => {
        console.log(`Backend: ${data}`);
    });

    mainWindow.loadURL("http://127.0.0.1:5000");

    mainWindow.on("closed", () => {
        mainWindow = null;
        backendProcess.kill();
    });
});
```

## 📌 Alternative: Use a Startup Shell Script on local machine 

Instead of modifying `main.ts`, you can create a **startup script** that Electron executes on launch.

### 🔹 Create `start_backend.sh` (macOS/Linux)
```bash
#!/bin/bash
./python_executables/mac/api.so &
npm start
```

### 🔹 Create `start_backend.bat` (Windows)
```bat
start python_executables\win\api.pyd
npm start
```

### Modify `package.json` to Use the Startup Script
```json
"scripts": {
  "start": "bash start_backend.sh",
  "start-win": "start start_backend.bat"
}
```

## 📌 Summary

✅ **FastAPI compiled to a standalone binary using Cython**  
✅ **Electron app starts the FastAPI backend automatically**  
✅ **Uses `main.ts` OR a startup script (`start_backend.sh` or `.bat`)**  
✅ **Works on macOS & Windows (requires correct compilers)**  





## 🔹 Key Updates:
✅ **Added `/preload.ts` and `/renderer.tsx` for better Electron security**  
✅ **Separated `/public/` for Next.js & Hugo shared assets**  
✅ **Added Cython-based FastAPI compilation support (`api.pyx` & `setup.py`)**  
✅ **Updated `/hugo_docs/` with Learn theme and markdown content folder**  
✅ **Added `/scripts/` for Electron startup scripts (`start_backend.sh` & `.bat`)**  
✅ **Ensured proper folder structure for building & running without Python**
