# Backstage Installation Guide

This guide provides step-by-step instructions to install and set up Backstage in a Visual Studio Code project, including all necessary dependencies.

## 1. Prerequisites

Before installing Backstage, ensure your system meets the following requirements:

### 1.1 Install Node.js and Yarn

Backstage requires Node.js (version 16 or later) and Yarn.

Check Node.js version:
```bash
node -v
```

If not installed, download and install Node.js from: https://nodejs.org/

Install Yarn globally:
```bash
npm install -g yarn
```

Verify Yarn installation:
```bash
yarn -v
```

### 1.2 Install Python (For MkDocs Support)

Backstage uses MkDocs to generate documentation. Ensure Python 3 is installed:

Check Python version:
```bash
python3 --version
```

If Python is missing, install it via:
```bash
brew install python  # (For macOS users)
sudo apt install python3  # (For Ubuntu/Linux users)
```

Install MkDocs and Material Theme:
```bash
pip install mkdocs mkdocs-material
```

### 1.3 Install Git

Backstage requires Git for cloning repositories.

Check Git installation:
```bash
git --version
```

If Git is not installed, download it from: https://git-scm.com/

## 2. Setting Up Backstage in Visual Studio Code

### 2.1 Clone the Backstage Repository
```bash
git clone https://github.com/backstage/backstage.git
cd backstage
```

### 2.2 Install Dependencies
```bash
yarn install
```

### 2.3 Start Backstage Locally
```bash
yarn dev
```

After running the command, Backstage will be available at:

http://localhost:3000/

## 3. Configuring MkDocs for Backstage TechDocs

Backstage uses MkDocs for documentation generation.

### 3.1 Create a Documentation Folder
```bash
mkdir docs
cd docs
echo "# Welcome to Backstage Docs" > index.md
```

### 3.2 Configure mkdocs.yml

Inside the docs/ folder, create a mkdocs.yml file:

```yaml
site_name: "Backstage Docs"
theme:
  name: material
plugins:
  - techdocs-core
```

### 3.3 Serve MkDocs Locally

To preview the documentation:
```bash
mkdocs serve
```

Access the preview at:

http://127.0.0.1:8000/

## 4. Integrating MkDocs into Backstage

To integrate documentation with Backstage, add a catalog-info.yaml file in the root directory:

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: backstage-docs
  description: Backstage technical documentation
  annotations:
    backstage.io/techdocs-ref: dir:.
spec:
  type: documentation
  lifecycle: production
  owner: team-docs
```

Commit the file to your repository and restart Backstage.

## 5. Automate Documentation JSON Schema Generation

To generate a JSON schema of all documentation files, create generate_docs_schema.py:

```python
import os
import json

DOCS_DIR = "docs"
OUTPUT_FILE = "docs/docs-schema.json"

def generate_schema():
    schema = {
        "project": "Backstage Docs",
        "version": "1.0",
        "docs_files": []
    }
    
    for root, _, files in os.walk(DOCS_DIR):
        for file in files:
            if file.endswith(".md"):
                schema["docs_files"].append(os.path.relpath(os.path.join(root, file), DOCS_DIR))

    with open(OUTPUT_FILE, "w") as f:
        json.dump(schema, f, indent=2)
    print(f"✅ Generated {OUTPUT_FILE}")

generate_schema()
```

Run the script:
```bash
python generate_docs_schema.py
```

This will create docs/docs-schema.json with links to all documentation files.

## 6. Deploying Backstage Docs

Once everything is set up, you can build and deploy the documentation.

```bash
mkdocs build
```

For GitHub Pages:
```bash
mkdocs gh-deploy
```

## 7. Summary of Commands

| Step | Command |
|------|---------||
| Install dependencies | `yarn install` |
| Start Backstage | `yarn dev` |
| Create docs folder | `mkdir docs && cd docs` |
| Start MkDocs server | `mkdocs serve` |
| Generate docs schema | `python generate_docs_schema.py` |
| Build documentation | `mkdocs build` |

🎉 Now, Backstage with MkDocs is fully installed and configured in Visual Studio Code