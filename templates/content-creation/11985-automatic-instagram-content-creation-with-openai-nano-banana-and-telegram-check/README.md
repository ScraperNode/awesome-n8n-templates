# 🎬 Automatic Instagram content creation with OpenAI, Nano Banana and Telegram check

> ⚡ **120 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

|Overview |Sample|
|-|-|
|This template is the first of its kind: it **automatically generates both the caption and the image for your Instagram posts by analysing your existing feed**, with zero spreadsheets or manual steps. Once configured, the workflow runs on a schedule, fetches your past posts, and uses a custom AI agent to craft a new caption and image prompt. Then creates the image via OpenRouter (Nano Banana) and stores everything in Airtable. A Telegram message gives you one‑tap control to **confirm, regenerate or cancel**; if confirmed, the post is published directly to Instagram. **Perfect for creators and marketers** who want fresh, on‑brand content without daily manual effort. | ![Preview](https://i.imgur.com/xcNLCbf.gif)|

---
## Good to Know

- **Fully hands‑off:** No need to prepare datasets or manually upload assets. The workflow reads your Instagram history via the Graph API and generate new content.
- **AI‑powered creativity:** Uses OpenAI for caption generation and Nano Banana via OpenRouter for image synthesis.
- **Privacy‑friendly:** Your content stays within your Airtable and n8n instance; only the AI models receive anonymised prompts.
- **Nano Banana:** Currently the gemini-2.5-flash-image-preview model is used but you can use any available in Open Route.

---

## How It Works

1. **Scheduling:** A schedule trigger initiates the workflow at your chosen time.
2. **Feed Analysis:** The workflow uses your Instagram business account ID and access token to fetch past posts.
3. **AI Content Generation:** A custom AI agent analyses your captions, applies category tag, and writes a new caption and a detailed image prompt. If there is no content it will be based on the category to create something new.

4. **Image Creation:** The prompt is sent to the Nano Banana model on OpenRouter to generate a new image. The binary is converted to JPEG and stored in Airtable wih the caption and prompt.
5. **Approval via Telegram:** A Telegram bot sends you the generated image, caption and three inline buttons: **Confirm**, **Regenerate** and **Cancel**.
    - ✅ *Confirm*: Uploads the image to Instagram via a Graph API call.
    - ♻️ *Regenerate*: Re‑runs just the AI ​​creation steps, generating a different title and image.
    - ❌ *Cancel*: Updates the Telegram message to note the cancellation and removes the buttons.
6. **Publishing:** When confirmed, the workflow uses the image’s public URL (generated in Airtable and served via an n8n webhook) to create and publish the post on Instagram. 

---

## How to Use

1. **Prepare your accounts:**
    - Instagram Business Account connected to a Facebook Page (get your IG Business ID and a long‑lived Graph API access token).
    - Airtable base and table with fields: `id`, `img_prompt`, `caption`, `data_binary`, `action`, `mime_type`, `created_at`.
    - Personal access token for Airtable, Telegram bot token and chat ID, OpenAI and OpenRouter API keys.
2. **Create workflows:** Four workflows are included: schedule trigger, webhook to serve the image, main content‑generation workflow and Telegram response workflow.
3. **Replace placeholders:** Fill in your account IDs, token values, n8n instance URL and webhook paths.
4. **Define Category:** Adjust the `Define Category` node to steer the content theme (e.g. *natural landscapes*, *urban fashion*).
5. **Activate and test:**
    - Activate the workflows **"ebhook to serve the image** and **Telegram response workflow**.
    - Configure **Schedule Trigger** workflow to call the **Main Content-Generation Workflow**.
    - Run the **Main Content-Generation Workflow** once to create a sample post and test the Telegram buttons.
    - Activate the schedule for the generation of automatic posts.
---

## Requirements

- Instagram Business account & Facebook Graph API (tokens with `instagram_basic` and `instagram_content_publish` permissions)
- Airtable base & personal access token
- Telegram bot (token & chat ID)
- OpenAI API key
- OpenRouter API key 
---

## Customization

- **Caption tone:** Modify the AI Agent prompt to change tone (flirtatious, motivational, mysterious).
- **Schedule:** Set your preferred posting time via the schedule trigger.
- **Additional fields:** Expand the Airtable schema and 'Take Caption' node to include hashtags, analysis summaries or performance metrics.

---

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Telegram, Telegram Trigger, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
