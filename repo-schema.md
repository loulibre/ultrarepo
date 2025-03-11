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
            ├── 📄 package-lock.json
                Type: .json
                Modified: 2025-03-06T22:29:00.102946
                Description: JSON configuration or data file
                Content: (Binary file)
            ├── 📄 package.json
                Type: .json
                Modified: 2025-03-06T21:59:27.300205
                Description: Node.js package configuration and dependencies
                Content: (Binary file)
            ├── 📄 postcss.config.js
                Type: .js
                Modified: 2025-03-06T18:17:57.750286
                Description: JavaScript source code file
                Content: module.exports = {
            ├── 📄 README.md
                Type: .md
                Modified: 2025-01-16T02:58:49
                Description: Project documentation and overview
                Content: <p align="center"><img src="https://i.imgur.com/a9QWW0v.png"></p>
            ├── 📄 tailwind.config.js
                Type: .js
                Modified: 2025-03-06T18:17:57.750090
                Description: JavaScript source code file
                Content: /** @type {import('tailwindcss').Config} */
            └── 📄 tsconfig.json
                Type: .json
                Modified: 2025-01-16T02:58:49
                Description: TypeScript compiler configuration
                Content: (Binary file)
            📁 app
                ├── 📄 404.html
                    Type: .html
                    Modified: 2025-03-06T22:29:34.403561
                    Description: HTML web page file
                    Content: <!DOCTYPE html><html><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width"
                ├── 📄 background.js
                    Type: .js
                    Modified: 2025-03-10T13:18:37.763475
                    Description: JavaScript source code file
                    Content: (function webpackUniversalModuleDefinition(root, factory) {
                ├── 📄 background.js.map
                    Type: .map
                    Modified: 2025-03-06T22:29:35.551885
                    Description: File with .map extension
                    Content: {"version":3,"file":"background.js","mappings":"CAAA,SAA2CA,EAAMC,GAChD,GAAsB,iBAAZC,SAA0C,iBAAXC,OA
                ├── 📄 preload.js
                    Type: .js
                    Modified: 2025-03-10T13:18:37.763402
                    Description: JavaScript source code file
                    Content: (function webpackUniversalModuleDefinition(root, factory) {
                └── 📄 preload.js.map
                    Type: .map
                    Modified: 2025-03-06T22:29:35.551830
                    Description: File with .map extension
                    Content: {"version":3,"file":"preload.js","mappings":"CAAA,SAA2CA,EAAMC,GAChD,GAAsB,iBAAZC,SAA0C,iBAAXC,OACxC
                📁 404
                    └── 📄 index.html
                        Type: .html
                        Modified: 2025-03-06T22:29:34.404205
                        Description: HTML web page file
                        Content: <!DOCTYPE html><html><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width"
                📁 home
                    └── 📄 index.html
                        Type: .html
                        Modified: 2025-03-06T22:29:34.405165
                        Description: HTML web page file
                        Content: <!DOCTYPE html><html><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width"
                📁 images
                    ├── 📄 logo-wh-blue.png
                        Type: .png
                        Modified: 2025-03-06T22:29:34.328820
                        Description: File with .png extension
                        Content: (Binary file)
                    ├── 📄 logo-white.png
                        Type: .png
                        Modified: 2025-03-06T22:29:34.328854
                        Description: File with .png extension
                        Content: (Binary file)
                    └── 📄 logo.svg
                        Type: .svg
                        Modified: 2025-03-06T22:29:34.329079
                        Description: File with .svg extension
                        Content: (Binary file)
                📁 next
                    └── 📄 index.html
                        Type: .html
                        Modified: 2025-03-06T22:29:34.405021
                        Description: HTML web page file
                        Content: <!DOCTYPE html><html><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width"
            📁 main
                ├── 📄 background.ts
                    Type: .ts
                    Modified: 2025-01-16T02:58:49
                    Description: TypeScript source code file
                    Content: (Binary file)
                └── 📄 preload.ts
                    Type: .ts
                    Modified: 2025-01-16T02:58:49
                    Description: TypeScript source code file
                    Content: (Binary file)
                📁 helpers
                    ├── 📄 create-window.ts
                        Type: .ts
                        Modified: 2025-01-16T02:58:49
                        Description: TypeScript source code file
                        Content: (Binary file)
                    └── 📄 index.ts
                        Type: .ts
                        Modified: 2025-01-16T02:58:49
                        Description: TypeScript source code file
                        Content: (Binary file)
            📁 renderer
                ├── 📄 next-env.d.ts
                    Type: .ts
                    Modified: 2025-03-06T16:03:17.474415
                    Description: TypeScript source code file
                    Content: (Binary file)
                ├── 📄 next.config.js
                    Type: .js
                    Modified: 2025-01-16T02:58:49
                    Description: Next.js framework configuration
                    Content: /** @type {import('next').NextConfig} */
                ├── 📄 postcss.config.js
                    Type: .js
                    Modified: 2025-01-16T02:58:49
                    Description: JavaScript source code file
                    Content: module.exports = {
                ├── 📄 preload.d.ts
                    Type: .ts
                    Modified: 2025-01-16T02:58:49
                    Description: TypeScript source code file
                    Content: (Binary file)
                ├── 📄 tailwind.config.js
                    Type: .js
                    Modified: 2025-03-06T18:20:07.068037
                    Description: JavaScript source code file
                    Content: const colors = require('tailwindcss/colors');
                └── 📄 tsconfig.json
                    Type: .json
                    Modified: 2025-01-16T02:58:49
                    Description: TypeScript compiler configuration
                    Content: (Binary file)
                📁 pages
                    ├── 📄 _app.tsx
                        Type: .tsx
                        Modified: 2025-01-16T02:58:49
                        Description: React TypeScript component file
                        Content: import React from 'react'
                    ├── 📄 home.tsx
                        Type: .tsx
                        Modified: 2025-03-06T21:39:35.540693
                        Description: React TypeScript component file
                        Content: "use client";
                    └── 📄 next.tsx
                        Type: .tsx
                        Modified: 2025-03-06T17:47:15.886491
                        Description: React TypeScript component file
                        Content: import React from 'react'
                📁 public
                    📁 images
                        ├── 📄 logo-wh-blue.png
                            Type: .png
                            Modified: 2025-03-06T17:52:47.199434
                            Description: File with .png extension
                            Content: (Binary file)
                        ├── 📄 logo-white.png
                            Type: .png
                            Modified: 2025-03-06T11:44:12.498472
                            Description: File with .png extension
                            Content: (Binary file)
                        └── 📄 logo.svg
                            Type: .svg
                            Modified: 2025-03-06T21:38:13.325557
                            Description: File with .svg extension
                            Content: (Binary file)
                📁 styles
                    └── 📄 globals.css
                        Type: .css
                        Modified: 2025-01-16T02:58:49
                        Description: CSS stylesheet file
                        Content: @tailwind base;
            📁 resources
                ├── 📄 icon.icns
                    Type: .icns
                    Modified: 2025-03-06T17:24:28.471864
                    Description: File with .icns extension
                    Content: (Binary file)
                └── 📄 icon.ico
                    Type: .ico
                    Modified: 2025-03-06T21:30:39.058305
                    Description: File with .ico extension
                    Content: (Binary file)
                📁 mac
                    📁 icon
                        └── 📄 icon.icns
                            Type: .icns
                            Modified: 2025-03-06T17:39:53.268390
                            Description: File with .icns extension
                            Content: (Binary file)
        📁 web
            ├── 📄 eslint.config.mjs
                Type: .mjs
                Modified: 2025-03-06T16:15:53.088562
                Description: File with .mjs extension
                Content: import { dirname } from "path";
            ├── 📄 next-env.d.ts
                Type: .ts
                Modified: 2025-03-06T16:15:53.088257
                Description: TypeScript source code file
                Content: (Binary file)
            ├── 📄 next.config.ts
                Type: .ts
                Modified: 2025-03-06T16:15:53.087940
                Description: TypeScript source code file
                Content: (Binary file)
            ├── 📄 package-lock.json
                Type: .json
                Modified: 2025-03-06T16:58:16.708494
                Description: JSON configuration or data file
                Content: (Binary file)
            ├── 📄 package.json
                Type: .json
                Modified: 2025-03-06T16:15:53.090423
                Description: Node.js package configuration and dependencies
                Content: (Binary file)
            ├── 📄 postcss.config.mjs
                Type: .mjs
                Modified: 2025-03-06T16:15:53.088423
                Description: File with .mjs extension
                Content: const config = {
            ├── 📄 README.md
                Type: .md
                Modified: 2025-03-06T16:15:53.087978
                Description: Project documentation and overview
                Content: This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs
            └── 📄 tsconfig.json
                Type: .json
                Modified: 2025-03-06T16:15:53.089852
                Description: TypeScript compiler configuration
                Content: (Binary file)
            📁 public
                ├── 📄 file.svg
                    Type: .svg
                    Modified: 2025-03-06T16:15:53.087881
                    Description: File with .svg extension
                    Content: (Binary file)
                ├── 📄 globe.svg
                    Type: .svg
                    Modified: 2025-03-06T16:15:53.088905
                    Description: File with .svg extension
                    Content: (Binary file)
                ├── 📄 next.svg
                    Type: .svg
                    Modified: 2025-03-06T16:15:53.089142
                    Description: File with .svg extension
                    Content: (Binary file)
                ├── 📄 vercel.svg
                    Type: .svg
                    Modified: 2025-03-06T16:15:53.089256
                    Description: File with .svg extension
                    Content: (Binary file)
                └── 📄 window.svg
                    Type: .svg
                    Modified: 2025-03-06T16:15:53.089256
                    Description: File with .svg extension
                    Content: (Binary file)
            📁 src
                📁 app
                    ├── 📄 favicon.ico
                        Type: .ico
                        Modified: 2025-03-06T16:15:53.088160
                        Description: File with .ico extension
                        Content: (Binary file)
                    ├── 📄 globals.css
                        Type: .css
                        Modified: 2025-03-06T16:15:53.088770
                        Description: CSS stylesheet file
                        Content: @import "tailwindcss";
                    ├── 📄 layout.tsx
                        Type: .tsx
                        Modified: 2025-03-06T16:15:53.088951
                        Description: React TypeScript component file
                        Content: import type { Metadata } from "next";
                    └── 📄 page.tsx
                        Type: .tsx
                        Modified: 2025-03-06T16:24:06.233571
                        Description: React TypeScript component file
                        Content: import Image from "next/image";

    📁 ./
        ├── 📄 package-lock.json
            Type: .json
            Modified: 2025-03-07T03:14:27.296774
            Description: JSON configuration or data file
            Content: (Binary file)
        ├── 📄 package.json
            Type: .json
            Modified: 2025-03-06T16:46:16.957268
            Description: Node.js package configuration and dependencies
            Content: (Binary file)
        ├── 📄 README.md
            Type: .md
            Modified: 2025-03-09T22:07:16.463392
            Description: Project documentation and overview
            Content: # UltraRepo Archiver - A Desktop and Web App for Use with AI Agents with privacy and offline support
        ├── 📄 repo-schema.json
            Type: .json
            Modified: 2025-03-10T17:44:53.426219
            Description: JSON configuration or data file
            Content: (Binary file)
        ├── 📄 repo-schema.md
            Type: .md
            Modified: 2025-03-10T17:44:53.434045
            Description: Markdown documentation file
            Content: # UltraRepo Documentation v1.0
        ├── 📄 repo-schema.py
            Type: .py
            Modified: 2025-03-10T17:43:57.350692
            Description: Python source code file
            Content: import os
        └── 📄 ultradocs-install.md
            Type: .md
            Modified: 2025-03-06T23:14:32.795965
            Description: Markdown documentation file
            Content: # Installing Hugo Docs with UltraDocs Theme in UltraRepo
