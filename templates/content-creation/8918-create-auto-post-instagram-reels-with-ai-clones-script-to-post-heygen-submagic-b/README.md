# 🎬 Create & auto-post Instagram reels with AI clones: Script-to-post (Heygen + Submagic + Blotato)

> ⚡ **1,874 views** · 🎬 [Content Creation & Video](../)

## Description

# AI Clone Instagram Influencer Reel Builder + Auto-Post (Heygen + Submagic + Blotato)

## Description
Turn an idea into a finished Instagram Reel—end to end, on autopilot.
This template generates a compelling Reel script, sends it to Heygen to produce an AI avatar/clone video, applies dynamic on-video captions with Submagic, then uploads and auto-posts to Instagram via Blotato, complete with a tailored AI-written caption. Ideal for creators, agencies, and brands who want consistent short-form output without manual editing.

##### 👉 Watch step-by-step automation builds on YouTube: https://youtu.be/MmZxLuAkqig?si=DRfS89yQlSlbMbfZ

### What This Template Does

✍️ Generates a short-form Reel script from your topic/idea (optimized hook → body → close).

🧑‍🎤 Creates an AI avatar video using Heygen (character + voice) from that script.

🅰️ Adds stylized overlaid captions using Submagic (template selectable).

☁️ Uploads media to Blotato and auto-posts to Instagram Reels.

🧠 Writes an IG caption (with hashtags) using an AI Caption Agent tuned for engagement.

### How It Works (Node Flow)

Chat Trigger – Send a topic/idea to start the run.

Instagram Script Generator (Agent) – Creates a 25–30s script (hook → insights → soft CTA).

POST to Heygen – Generates an avatar video from the script (avatar_id, voice_id, size).

Wait & Poll – Checks Heygen status until the video is ready.

POST to Submagic – Creates a project and applies your caption style (e.g., “Hormozi 2”).

Wait & Poll – Retrieves the captioned video URL when completed.

Upload media (Blotato) – Uploads the final video to your Blotato account.

Instagram Caption Agent – Produces an on-brand IG caption + hashtag block from the original script.

Create Post (Blotato) – Publishes to Instagram as a Reel with the AI caption and uploaded media.

### Required Credentials

OpenAI (or compatible) – for script + caption agents.

Heygen API – HTTP Header Auth (API key).

Submagic API – HTTP Header Auth (API key).

Blotato API – Account + token.

(Optional) KodeKey/Base URL if you route OpenAI-compatible models through your gateway.

Best practice: store all secrets in n8n Credentials, not hard-coded in nodes.

### Quick Start

Import the template into n8n.

Create/assign credentials for OpenAI (or compatible), Heygen, Submagic, and Blotato.

In Heygen, set your avatar_id and voice_id (or swap with your own).

In Submagic, set templateName, language, and style preferences.

In Blotato, confirm the accountId and instagramMediaType: reel.

Run the workflow from the Chat Trigger with a topic (e.g., “3 money habits for 2025”).

Confirm the Reel shows up in your connected Instagram account.

Customization Tips

Script Persona: Adjust the agent system prompt (niche, tone, audience).

Caption Style: Tweak the Caption Agent for hook length, CTAs, and hashtag strategy.

Heygen Output: Change dimension to 1080×1920 for full-HD vertical.

Submagic Template: Swap templateName to match your brand.

Posting Targets: Extend Blotato to cross-post to TikTok/YouTube Shorts.

Error Handling & Reliability

Uses Wait + status polling for both Heygen and Submagic before downstream steps.

Includes IF checks to re-poll when processing is not complete.

Recommendation: add Slack/Email alerts and Retry options for production use.

### Ideal For

Solo creators and founders posting daily

Social media managers and agencies

Edu/Coach brands scaling short-form content

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Chat Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
