# 🎬 Automate Instagram carousel creation with GPT-5, Nano Banana, and Blotato

> ⚡ **3,467 views** · 🎬 [Content Creation & Video](../)

## Description

## 🎨 Instagram Carousel & Caption Generator on Autopilot (GPT-5 + Nano Banana + Blotato + Google Sheets)

### Description

**Watch the full step-by-step tutorial on YouTube:**
**https://youtu.be/id22R7iBTjo**
![automateinstagramcarouselnanobananan8nbuildalong 1.jpg](fileId:2970)

Disclaimer (self-hosted requirement):
This template assumes you have valid API credentials for OpenAI, Wavespeed/Nano Banana, Blotato, and Google.
If using n8n Self-Hosted, ensure HTTPS access and credentials are set in your instance.

### How It Works

Chat Trigger – Receive a topic/idea (e.g. “5 best podcast tips”).

Image Prompt Generator (GPT-5) – Creates 5 prompts using the “Hook → Problem → Insight → Solution → CTA” framework.

Structured Output Parser – Formats output into a JSON array.

Generate Images (Nano Banana) – Converts prompts into high-quality visuals.

Wait for Render – Ensures image generation completes.

Fetch Rendered Image URLs – Retrieves image links.

Upload to Blotato – Hosts and prepares images for posting.

Collect Media URLs – Gathers all uploaded image URLs.

Log to Google Sheets – Stores image URLs + timestamps for tracking.

Caption Generator (GPT-5) – Writes an SEO-friendly caption.

Merge Caption + Images – Combines data.

Post Carousel (Blotato) – Publishes directly to Instagram.

### Step-by-Step Setup Instructions
1) Prerequisites

n8n (Cloud or Self-Hosted)

OpenAI API Key (GPT-5)

Wavespeed API Key (Nano Banana)

Blotato API credentials (connected to Instagram)

Google Sheets OAuth credentials

2) Add Credentials in n8n

OpenAI: Settings → Credentials → Add “OpenAI API”

Wavespeed: HTTP Header Auth (e.g. Authorization: Bearer &lt;API_KEY&gt;)

Blotato: Add “Blotato API”

Google Sheets: Add “Google Sheets OAuth2 API”

3) Configure & Test

Run with an idea like “Top 5 design hacks”.

Check generated images, caption, and logged sheet entry.

Confirm posting works via Blotato.

4) Optional

Add a Schedule Trigger for weekly automation.

Insert a Slack approval loop before posting.

### Customization Guide

✏️ Change design style: Modify adjectives in the Image Prompt Generator.

📑 Adjust number of slides: Change Split node loop count.

💬 Tone of captions: Edit Caption Generator’s system prompt.

⏱️ Adjust render wait time: If image generation takes longer, increase the Wait node duration from 30 seconds to 60 seconds or more.

🗂️ Log extra data: Add columns in Google Sheets for campaign or topic.

🔁 Swap posting tool: Replace Blotato with your scheduler or email node.

### Requirements

OpenAI API key (GPT-5 or compatible)

Wavespeed API key (Nano Banana)

Blotato API credentials

Google Sheets OAuth credentials

n8n account (Cloud or Self-Hosted)

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
