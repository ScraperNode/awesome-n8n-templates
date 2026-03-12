# 🎬 Convert Google Drive PDFs into SEO blog HTML using OpenAI GPT-4.1

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Overview

This workflow automatically converts PDF files stored in Google Drive into structured, SEO-optimized blog articles in HTML format.

It eliminates repetitive manual rewriting and formatting by transforming raw PDF content into publish-ready blog files.

## What This Workflow Does

- Retrieves all PDFs from a specified Google Drive folder  
- Processes each file sequentially using Split In Batches  
- Downloads and extracts text from each PDF  
- Generates a long-form SEO blog article using OpenAI  
- Ensures the output is structured in HTML format  
- Saves the final blog back to Google Drive as a `.html` file  
- Automatically converts the original `.pdf` filename to `.html`  

## How It Works

The workflow begins with a manual trigger and fetches files from a configured Google Drive folder.

Using **Split In Batches**, each PDF is processed one at a time. This prevents API rate limits, reduces memory load, and ensures stable execution.

The extracted text is passed to OpenAI with a structured prompt that defines:

- Blog length  
- SEO formatting  
- Heading structure (H1, H2, H3)  
- Tone and writing style  
- HTML output format  

The generated content is then saved as an HTML file in a destination Google Drive folder.

## Requirements

- Google Drive credentials  
- OpenAI credentials  
- Source folder containing PDFs  
- Destination folder for generated HTML files  

## Output

For every PDF processed:

- A long-form SEO blog article is created  
- Output is saved in HTML format  
- The original filename is retained and converted from `.pdf` to `.html`  

## Customization

You can modify:

- The OpenAI prompt to change tone or niche  
- Blog length and SEO requirements  
- Destination folder  
- Output format if integrating with a CMS  

---

This template is suitable for content teams, product managers, and creators who want to automate repetitive content transformation workflows while maintaining consistent output quality.

## 🔗 Nodes Used

Google Drive, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
