# 🎬 Generate LinkedIn carousel images from text with Mistral AI & S3 Storage

> ⚡ **291 views** · 🎬 [Content Creation & Video](../)

## Description

# AI Carousel Caption & Template Editor Workflow

## Overview
This workflow is a caption-only carousel text generator built in n8n. It turns any raw LinkedIn post or text input into 3 short, slide-ready title + subtext captions and renders those captions onto image templates. Output is a single aggregated response with markdown image embeds and download links.

---

## Workflow Structure
- **Input:** Chat UI trigger accepts text and optional template selection.  
- **Core AI:** Agent cleans input and returns structured JSON with 3 caption pairs.  
- **Template Rendering:** Edit Image nodes render title and subtext on chosen templates.  
- **Storage:** Rendered images uploaded to S3.  
- **Aggregate Output:** Aggregate node builds final markdown response with embeds and download links.

---

## Chat Trigger (Frontend)
- **Trigger:** `When chat message received`  
  - UI accepts plain text post.  
  - `allowFileUploads` optional for template images.  
  - SessionId preserved for context.

## AI Agent (Core)
- **Node name:** `AI Agent`  
- **Model:** `Mistral Cloud Chat Model` (mistral-small-latest)  
- **Behavior:**  
  - Clean input (remove stray formatting like `\n` and `**` but keep emojis).  
  - Produce exactly one JSON object with fields: `postclean`, `title1`, `subtext1`, `title2`, `subtext2`, `title3`, `subtext3`.  
  - Titles must be short (max 5 words). Subtext 1 or 2 short sentences, max 7 words per line if possible.  
  - Agent must return valid JSON to be parsed by the Structured Output Parser.

## Structured Output Parser
- **Node name:** `Structured Output Parser`  
- Validates agent JSON and prevents downstream errors. If parsing fails, stop and surface error.

## Normalize Title Nodes
- **Nodes:** `normalize title,name 1`, `normalize title,name 2`, `normalize title,name 3` (and optional 4)  
- Map parsed output into node fields: `title`, `subtext`, `safeName` (safe filename for exports).

## Template Images
- **Source:** Google Drive template PNGs (download via `Google Drive` nodes) or provided upload.  
- Keep templates high resolution and consistent aspect ratio.

## Edit Image Nodes (Render Captions)
- **Nodes:** `Edit Image 1`, `Edit Image2`, `Edit Image3`, `Edit Image3` (or `Edit Image3`/`Edit Image4` as available)  
- MultiStep operations render:
  - Title text (font, size, position)  
  - Subtext (font, size, position)  
- This is where caption text is added to the template.

## Upload to S3
- **Nodes:** `S3`  
- Upload rendered images to `bucketname` using `safeName` filenames. Confirm public access or use signed URLs.

## Get S3 URLs and Aggregate
- **Nodes:** `get s3 url image 1`, `get s3 url image 2`, `get s3 url image 3`, `get s3 url image 4`  
- **Merge + Aggregate:** `Merge1` and `Aggregate` collect image items.  
- **Output Format:** `output format` builds a single markdown message:
  - Inline image embeds `![image](&lt;s3-url&gt;)`  
  - Download links per image.

---

## Integrations Used
| Service | Purpose | Credential |
|---------|---------|-----------|
| Mistral Cloud | AI agent model | `Mistral account` |
| Google Drive | Template image storage | `Google Drive account ` |
| S3 | Store rendered images and serve links | `Supabase account ` |
| n8n Core | Flow control, parsing, image editing | Native |

---

## Agent System Prompt Summary
&gt; You are a data formatter and banner caption creator. Clean the user input (remove stray newlines and markup but keep emojis). Return a single JSON object with `postclean`, `title1/subtext1`, `title2/subtext2`, `title3/subtext3`. Titles must be short (max 5 words). Subtext should be 1 to 2 short sentences, useful and value adding. Respond only with JSON.

---

## Key Features
-  Caption only output: 3 short slide-ready caption pairs.  
-  Structured JSON output enforced by a parser for reliability.  
-  Renders captions onto image templates using Edit Image nodes.  
-  Uploads images to S3 and returns markdown embeds plus download links.  
-  Template editable: swap Google Drive background templates or upload your own.  
-  Zero guess formatting: agent must produce parseable JSON to avoid downstream failures.

---

## Summary
A compact n8n workflow that converts raw LinkedIn text into a caption-only carousel with rendered images. It enforces tight caption rules, validates AI JSON, places captions on templates, uploads images, and returns a single ready-to-post markdown payload.

---

### Need Help or More Workflows?
We can wire this into your account, replace templates, or customize fonts, positions, and export options.  
 We can help you set it up for free — from connecting credentials to deploying it live.

Contact: [rajeet.nair@digitalbiz.tech](mailto:rajeet.nair@digitalbiz.tech)    
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)  
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)   
You can also DM us on LinkedIn for any help.

## 🔗 Nodes Used

Edit Image, Google Drive, S3, AI Agent, Structured Output Parser, Mistral Cloud Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
