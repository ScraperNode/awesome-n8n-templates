# 🎬 Generate ad image variations using GPT-4, Dumpling AI & Google Drive

> ⚡ **5,013 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

## 🧾 What this workflow does

This workflow takes a reference ad image and brand website, then uses GPT-4, LangChain, and Dumpling AI to generate 10 high-quality image variations for ad testing. These image variations are visually consistent but subtly different in background, mood, lighting, and tone — perfect for performance testing on platforms like Meta Ads or TikTok.

---

## 👤 Who is this for

- DTC marketers and brand designers testing ad creatives  
- Creative teams automating visual experimentation  
- Content agencies using AI for fast ad mockups  
- Performance marketers running multivariate testing

---

## ⚙️ How to set up

### ✅ Requirements

You’ll need the following tools set up in n8n:
- Google Drive (OAuth2 credential)
- Google Sheets (OAuth2 credential)
- OpenAI API (for GPT-4 or GPT-4o)
- Dumpling AI API (via HTTP header authentication)

---

### 🛠️ Steps to configure

1. **Google Sheet Setup**  
   - Create a sheet with one column: `Image URL`  
   - Update the Sheet ID and tab name in the final Google Sheets node.

2. **Drive Setup**  
   - Create a folder in Google Drive for storing the reference image.  
   - Replace the `folderId` in the “Upload Ad Image to Google Drive” node.

3. **Dumpling AI API Key**  
   - Use n8n’s credential manager (HTTP Header Auth) — do **not** hardcode the key.

4. **OpenAI API Key**  
   - Required for both image description and LangChain agent prompt generation.

5. **Form Inputs Required**
   - `Brand Name`  
   - `Brand Website`  
   - `Ad Image` (upload field)

---

## 🧠 How it works

1. A user submits the brand name, website, and a reference ad image through a form.
2. The image is uploaded to Google Drive.
3. GPT-4o describes the image’s visual style (e.g., mood, lighting, composition).
4. GPT-4 analyzes the brand’s website to define its visual aesthetic.
5. A LangChain agent uses both analyses to create 10 tightly scoped variation prompts.
6. Dumpling AI generates a new image for each prompt using its “FLUX.1-pro” model.
7. Each new image’s link is logged into Google Sheets.

---

## 🛠️ How to customize

- 🧪 Change prompt logic to experiment with different variations (e.g., theme, season).
- 🎨 Switch image model in Dumpling AI to one that supports your desired style.
- 🔗 Log additional metadata (prompt, timestamp) to Google Sheets.
- 📤 Connect output images to Airtable, Notion, or a review tool like Figma.
- 🎯 Modify GPT system message to reflect a different tone or brand strategy.

---

This workflow gives creative teams and marketers an instant, AI-powered ad image testing system — built on real brand visuals, not generic stock content.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
