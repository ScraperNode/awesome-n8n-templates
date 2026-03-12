# 🎬 Turn an image into a cinematic video with NanoBanana Ultra, Kling, Blotato

> ⚡ **1,562 views** · 🎬 [Content Creation & Video](../)

## Description

### 💥 AI Image → Professional Video Workflow (NanoBanana Ultra + Kling AI + Blotato)

---
📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Turn-Any-Image-into-a-Cinematic-Video-with-NanoBanana-Ultra-Kling-AI-2ea3d6550fd9809c9321e897b9763a28?source=copy_link)

![Workflow Overview](https://www.dr-firas.com/nanobanana-ultra.png)

### 👤 Who is this for?
This workflow is designed for **content creators, marketers, fashion brands, AI creators, and automation builders** who want to turn a single image into a **cinematic, multi-shot professional video**, then automatically publish it on platforms like **YouTube**—without manual editing.

It’s especially useful if you already work with **Google Sheets**, **n8n**, and **AI image/video generation APIs**.

---

### 🎯 What problem does this workflow solve? (Use case)
Creating high-quality video content from images usually requires:
- Manual image editing
- Multiple AI tools
- Video stitching
- Uploading and publishing steps

This workflow **fully automates** that pipeline:
- From a single image URL
- To a cinematic multi-shot video
- To automatic publishing

All driven from a spreadsheet.

---

### ⚙️ What this workflow does
This workflow runs in **two main phases**:

#### **Step 1 – Contact Sheet Generation (NanoBanana Ultra)**
- Reads an image URL from Google Sheets
- Downloads the image from Google Drive
- Uploads it to a public host (tmpfiles)
- Uses **NanoBanana Ultra (edit-ultra)** to generate a **2×3 cinematic contact sheet**
- Ensures:
  - Identity preservation
  - Fashion & texture fidelity
  - Consistent lighting and style
- Saves the generated contact sheet back to Google Drive
- Updates the spreadsheet status

#### **Step 2 – Video Creation & Publishing (**[Blotato](https://blotato.com/?ref=firas)**)**
- Splits the contact sheet into 6 keyframes
- Uploads each frame publicly
- Uses **Kling AI (start–end frame i2v)** to generate multiple cinematic video segments
- Merges the generated clips into a single final video (FFmpeg API)
- Uploads the final video to Google Drive
- Publishes automatically to **YouTube via **[Blotato](https://blotato.com/?ref=firas)****
- Updates the spreadsheet with the final video URL and status

---

### 🛠️ Setup
To use this workflow, you need:

1. **n8n (Cloud or Self-Hosted)**
2. **Google Sheets**
   - Copy the provided template  
   - Each row controls one image → one video
3. **API Keys**
   - **[AtlasCloud](https://www.atlascloud.ai?ref=8QKPJE)** (NanoBanana + Kling)
   - tmpfiles.org (public hosting)
   - Blotato (publishing)
4. **Connected Accounts**
   - Google Drive
   - Google Sheets
   - **[Blotato](https://blotato.com/?ref=firas)**

---

### 🎛️ How to customize this workflow
You can easily adapt it to your needs:

- **Change video style**
  - Edit the Kling prompt (camera movement, mood, pacing)
- **Adjust video duration**
  - Modify the `duration` parameter in Kling nodes
- **Use fewer or more shots**
  - Add/remove crop + Kling generation branches
- **Publish to other platforms**
  - Blotato supports multiple social networks
- **Trigger automatically**
  - Use the Schedule Trigger instead of manual execution
- **Different aspect ratios**
  - Adjust NanoBanana `aspect_ratio` and crop math

---

### 🚀 Expected outcome
From **one image**, you get:
- A high-end **editorial contact sheet**
- Multiple cinematic AI-generated video clips
- One **merged professional video**
- Automatically uploaded and published

No manual editing. No timeline work. Fully automated.

---
### 👋 Need help or want to customize this?
📩 Contact: [LinkedIn](https://www.linkedin.com/in/dr-firas/)  
📺 YouTube: [@DRFIRASS](https://www.youtube.com/@DRFIRASS)  
🚀 Workshops: [Mes Ateliers n8n](https://hotm.art/formation-n8n)


### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https://www.youtube.com/channel/UCriIQI8uaoEro5FEnOpeidQ) / [🚀 Mes Ateliers n8n  ](https://hotm.art/formation-n8n)

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
