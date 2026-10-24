# 🎬 Create Instagram carousel posts using GPT-4.1 Nano and Gemini 2.5 Flash

> ⚡ **666 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Tired of manually creating Instagram carousel content? This workflow takes a **single content idea** from a database, uses **GPT-4.1 Nano + Gemini 2.5 Flash** to generate unique images and captions, uploads them, and publishes a fully formatted **Instagram carousel** — all without touching your phone.

---

## 🧠 How It Works

Feed it a topic. It does the rest.

---

## 🔁 Workflow Breakdown

### 1. ▶️ Manual Trigger — `When clicking 'Execute workflow'`
Kicks off the workflow on demand. Swap this with a **Schedule Trigger** or **Webhook** to make it fully hands-free and time-based.

---

### 2. 📋 Get Row(s) — `Data Table (Get)`
Fetches the next unprocessed content idea from an **n8n Data Table**. It filters rows where the `status` column is **empty**, ensuring only fresh, unpublished ideas are picked up. Each row contains:
- `prompt` — the core content concept
- `number_of_images` — how many carousel slides to generate

---

### 3. 🧩 OpenAI Chat Model — `GPT-4.1 Nano`
Acts as the **language model backbone** for the prompt engineering agent. Connected to the `Generate-Prompt` agent as its AI brain, it powers all text reasoning and JSON output generation.

---

### 4. ✍️ Generate-Prompt — `LangChain AI Agent`
An expert **prompt engineering agent** powered by GPT-4.1 Nano. It takes the core idea and produces a structured JSON array containing:
- `image_prompt` — a richly detailed, unique visual prompt per slide (varied angles, styles, lighting)
- `caption` — a short Instagram caption per slide

It outputs **N distinct prompts** based on the `number_of_images` field.

---

### 5. 🔄 Parse_Array — `Code Node`
Parses the agent's raw JSON string output into proper **n8n items**, one per image prompt. This allows the loop below to process each prompt individually. Without this step, the array would remain a single unprocessed string.

---

### 6. 🔁 Loop For Each Prompt — `Split In Batches`
Iterates over each image prompt **one at a time**. On the final iteration, it routes to the **Collect Image URLs** node to assemble everything. On every other pass, it routes to **Generate an image** to keep generating.

---

### 7. 🎨 Generate an Image — `Google Gemini 2.5 Flash Image`
Uses **Gemini 2.5 Flash Image** (Nano Banana) to generate a high-quality image for each prompt. The detailed prompt from the agent is passed directly here, ensuring each carousel slide is visually distinct from the others.

---

### 8. ☁️ Upload a File — `Upload To URL`
Takes the generated binary image and uploads it to a **publicly accessible URL** via the 
`uploadtourl` service. Instagram requires all carousel images to be hosted at public URLs 
before publishing — this node handles that requirement.

🔑 **Get your free API key here:** [uploadtourl.com](https://uploadtourl.com/)


---

### 9. ⏱️ Rate Control — `Code Node`
Two critical jobs in one node:
1. **Accumulates** the uploaded image URL into **global workflow static data** so URLs persist across loop iterations.
2. **Waits 15 seconds** between iterations to respect Instagram and image generation API rate limits, preventing failures during bulk runs.

---

### 10. 📦 Collect Image URLs — `Code Node`
After the loop completes, this node **retrieves all accumulated image URLs** from global static data, resets the store for the next run, and bundles everything into a single object:
- `image_urls` — array of all carousel image URLs
- `caption` — pulled from the first generated item

This is the final assembly step before publishing.

---

### 11. 📸 Publish on Instagram — `Instagram Node`
Publishes the full **carousel post** to Instagram using the Facebook Graph API. It sends all image URLs in one request along with the AI-generated caption. Targets a specific Instagram Business Account by node ID.

---

### 12. ✅ Update Row(s) — `Data Table (Update)`
After successful publishing, marks the row in the Data Table as **Published**, writing in the returned post ID. This prevents the same idea from being posted twice and keeps your content queue clean and trackable.

---

## 🛠️ Tech Stack
- **n8n** — Workflow automation
- **OpenAI GPT-4.1 Nano** — Prompt generation
- **Google Gemini 2.5 Flash Image** — AI image generation
- **UploadToURL** — Image hosting
- **Instagram Graph API** — Carousel publishing
- **n8n Data Table** — Content queue & status tracking

---

## ⚙️ Setup Requirements
- OpenAI API key
- Google Gemini (PaLM) API key
- UploadToURL account
- Instagram Business Account connected via Facebook Graph API
- n8n Data Table with columns: `prompt`, `number_of_images`, `status`

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Google Gemini, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
