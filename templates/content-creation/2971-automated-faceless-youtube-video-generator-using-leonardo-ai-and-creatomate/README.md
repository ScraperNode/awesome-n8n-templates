# 🎬 Automated faceless YouTube video generator using Leonardo AI and Creatomate

> ⚡ **14,191 views** · 🎬 [Content Creation & Video](../)

## Description

# Automate Your Video Content Creation: AI-Powered Video Generation

This n8n template streamlines the creation of high-quality, faceless videos, automating the entire process from scriptwriting to final video production. Leveraging AI tools like Leonardo AI and Creatomate, this workflow empowers content creators to efficiently produce engaging videos without on-camera presence.

## Who is this for?

This template is ideal for:

* Content creators looking to scale their presence on YouTube, Instagram, and TikTok.
* Marketers seeking to automate video marketing campaigns.
* Anyone wanting to produce professional-looking videos quickly and easily.
* Individuals wishing to create faceless video content.

## What problem is this workflow solving?

Creating engaging videos can be time-consuming and resource-intensive. This workflow eliminates the manual effort involved in scripting, image sourcing, and video editing, allowing creators to focus on strategy and content ideation. It addresses the challenge of consistent video production by automating repetitive tasks.

## What this workflow does:

This workflow automates the following steps:

* **AI-Driven Scriptwriting:** Uses an LLM (default: DeepSeek V3) to generate a compelling video script based on your system prompt and desired number of scenarios.
* **AI Image Generation:** Integrates with Leonardo AI to create visually appealing images for each scenario in the script. You define the image style and resolution.
* **Automated Video Editing:** Connects to Creatomate to assemble the script and images into a polished video, ready for upload. You’ll use a pre-created “AI generated story template” within Creatomate.

## Setup:

* **Video Script Generation:** Provide a detailed system prompt describing your video’s topic, target audience, and key message. Specify the number of scenarios. Select your preferred LLM (DeepSeek V3 is the default).
* **Image Generation:** Connect your Leonardo AI account. Choose your preferred image generation model and set the video resolution. Craft a detailed prompt for Leonardo AI, defining the image style (e.g., “cinematic,” “cartoon,” “realistic”).
* **Video Editing:** Link your Creatomate account. Create an empty “AI generated story template” in Creatomate. Copy the cURL from the Creatomate template to the video generation node. Link your ElevenLabs account to Creatomate and choose the desired voice.

## How to customize this workflow:

* **Script Customization:** Refine the system prompt to guide the AI. Experiment with different LLMs.
* **Image Style:** Adjust the Leonardo AI prompt. Explore different image generation models.
* **Video Editing:** Modify the Creatomate template to customize transitions, text overlays, and other elements. Add voiceover using the ElevenLabs integration in Creatomate.

## Category:

Marketing, Social Media, Content Creation

## 🔗 Nodes Used

HTTP Request, Telegram, YouTube, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
