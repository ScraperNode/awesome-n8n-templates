# 🎬 Auto-generate AI videos with Gemini, KIE AI Sora-2 & Blotato (Multi-Platform)

> ⚡ **1,300 views** · 🎬 [Content Creation & Video](../)

## Description

## **Overview**

This n8n template automates the entire process of generating short-form AI videos and publishing them across multiple social media platforms. It combines Google Gemini for structured prompt creation, KIE AI for video generation, and Blotato for centralized publishing. The result is a fully automated content pipeline ideal for creators, marketers, agencies, or anyone who wants consistent, hands-free content generation.

This workflow is especially useful for short-video creators, meme pages, educational creators, UGC teams, auto-posting accounts, and brands who want to maintain high-frequency posting without manual effort.

---

## **Good to Know**

* **API costs:**
  KIE AI generates videos using paid tokens/credits. Prices vary based on model, duration, and resolution (check KIE AI pricing).
* **Google Gemini model restrictions:**
  Certain Gemini models are geo-limited. If you receive “model not found,” the model may not be available in your region.
* **Blotato publishing:**
  Blotato supports many platforms: YouTube, Instagram, Facebook, LinkedIn, TikTok, X, Bluesky, and more.
  Platform availability depends on your Blotato setup.
* **Runtime considerations:**
  Video generation can take time (10–60 seconds+, depending on the complexity).
* **Self-hosted requirement:**
  This workflow uses a **community node (Blotato)**. Community nodes do **not** run on n8n Cloud. A self-hosted instance is required.

---

## **How It Works**

1. **Scheduler Trigger**
   Defines how frequently new videos should be created (e.g., every 12 hours).

2. **Random Template Selector**
   A JavaScript node generates a random number to choose from multiple creative prompt templates.

3. **AI Agent (Google Gemini)**
   Gemini generates a JSON object containing:

   * A short title
   * A human-readable video description
   * A detailed text-to-video prompt

   The Structured Output Parser ensures strict JSON shape.

4. **Video Generation with KIE AI**
   The prompt is sent to KIE AI’s video generation API.
   KIE AI creates a synthetic AI video based on the description and your chosen parameters (aspect ratio, frames, watermark removal, etc.).

5. **Polling & Retrieval**
   The workflow waits until the video is fully rendered, then fetches the final video URL.

6. **Media Upload to Blotato**
   The generated video is uploaded into Blotato’s media storage for publishing.

7. **Automatic Posting to Social Platforms**
   Blotato distributes the video to all connected platforms.
   Examples include:

   * YouTube
   * Instagram
   * Facebook
   * LinkedIn
   * Bluesky
   * TikTok
   * X
   * Any platform supported by your Blotato account

This results in a fully automated “idea → video → upload → publish” pipeline.

---

## **How to Use**

* Start by testing the workflow manually to verify video generation and posting.
* Adjust the Scheduler Trigger to fit your posting frequency.
* Add your API credentials for:

  * Google Gemini
  * KIE AI
  * Blotato
* Ensure your Blotato account has social channels connected.
* Edit or expand the prompt templates for your content niche:

  * Comedy clips
  * Educational videos
  * Product demos
  * Storytelling
  * Pet videos
  * Motivational content

The more template prompts you add, the more diverse your automated videos will be.

---

## **Requirements**

* **Google Gemini** API Key
  Used for generating structured titles, descriptions, and video prompts.
* **KIE AI API key**
  Required for creating the actual AI-generated video.
* **Blotato account**
  Required for uploading media and automatically posting to platforms.
* **Self-hosted n8n instance**
  Needed because Blotato uses a community node, which n8n Cloud does not support.

---

## **Limitations**

* KIE AI models may output inconsistent results if prompts are vague.
* High-frequency scheduling may consume API credits quickly.
* Some platforms (e.g., TikTok or Facebook Pages) may require additional permissions or account linking steps in Blotato.
* Video rendering time varies depending on prompt complexity.

---

## **Customization Ideas**

* Add more prompt templates to increase variety.
* Swap Gemini for an LLM of your choice (OpenAI, Claude, etc.).
* Add a Telegram, Discord, or Slack notification once posting is complete.
* Store all generated titles, descriptions, and video URLs in:

  * Google Sheets
  * Notion
  * Airtable
  * Supabase
* Add multi-language support using a translation node.
* Add an approval step where videos go to your team before publishing.
* Add analytics logging (impressions, views, etc.) using Blotato or another service.

---

## **Troubleshooting**

* **Video not generating?**
  Check if your KIE AI model accepts your chosen parameters.
* **Model not found?**
  Switch to a supported Gemini model for your region.
* **Publishing fails?**
  Ensure Blotato platform accounts are authenticated.
* **Workflow stops early?**
  Increase the wait timeout before polling KIE AI.

---
This template is designed for easy setup and high flexibility. All technical details, configuration steps, and workflow logic are already included in sticky notes inside the workflow.
Once configured, this pipeline becomes a hands-free AI-powered content engine capable of generating and publishing content at scale.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
