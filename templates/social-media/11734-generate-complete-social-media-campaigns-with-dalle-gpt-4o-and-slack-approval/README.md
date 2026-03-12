# 📱 Generate complete social media campaigns with DALL·E, GPT-4o and Slack approval

> ⚡ **245 views** · 📱 [Social Media & Email Marketing](../)

## Description

## 📘 Description
This workflow turns raw product inputs into a complete, launch-ready AI-generated social media campaign package. It accepts product details via webhook, sanitizes messy fields, generates a strategic campaign blueprint, produces Instagram captions, creates discovery-optimized hashtags, generates photorealistic commercial images, computes optimal posting times, assembles all outputs into a unified JSON package, and finally delivers the entire campaign to Slack.
Multiple AI agents work in sequence to generate structured outputs — each parsed and validated using strict JSON schemas. Images produced by DALL·E 3 are uploaded to Cloudinary for hosting. A post-processing module then merges captions, images, hashtags, and schedules into a final payload. A robust error handler ensures every failure is captured and sent to Slack with diagnostic information.
This workflow replaces an entire marketing team’s creative production pipeline, producing consistent, multi-asset campaign kits in minutes.

## ⚙️ What This Workflow Does (Step-by-Step)

🟢 Receive Product Details via Webhook
 Captures incoming product data including name, description, benefits, audience, and brand voice.

🧹 Clean & Normalize Product Input Fields
 Sanitizes escaped characters, trims whitespace, and prepares stable fields for AI consumption.

🧠 Generate Campaign Blueprint Using AI
 Creates a full strategic blueprint in structured JSON:
 • Article summary
 • Insights
 • Tone and target audience mapping
 • Platform-specific post objects

🧠 LLM Engine + Structured Parser for Blueprint
 Ensures blueprint output is clean, validated JSON aligned with schema.

✍️ Generate Instagram Captions Using AI
 Produces five short, conversion-ready captions + CTAs, based on blueprint insights.

🧠 Caption LLM + Structured Parser
 Validates caption schema for downstream use.

#️⃣ Generate Hashtag Set Using AI
 Creates 12–18 optimized hashtags using discovery strategy (broad, mid, niche).

🧠 Hashtag LLM + Parser
 Validates and ensures hashtags follow correct JSON structure.

🎨 Split Campaign Posts for Image Generation
 Breaks out each post’s image prompt for independent asset creation.

🖼️ Generate Social Media Image Using AI
 Uses DALL·E 3 to create ultra-realistic, 8K-style commercial visuals tailored to the campaign.

☁️ Upload Generated Image to Cloudinary
 Uploads rendered images and retrieves secure public URLs.

🕒 Generate Optimal Posting Schedule Using AI
 Recommends best posting time per platform (Asia/Kolkata timezone) + reasoning.

🧠 Schedule LLM + Parser
 Ensures a structured schedule schema with platform, time, and rationale.

🔀 Combine All Campaign Assets
 Merges:
 • Cloudinary image URLs
 • Captions + CTAs
 • Hashtag set
 • Posting schedule
 into one final dataset.

🧩 Prepare Final Campaign Package JSON
 Constructs production-ready unified JSON: images, captions, hashtags, schedule.

💬 Send Final Campaign Package to Slack
 Delivers formatted campaign output with:
 • Image URLs
 • Captions + CTAs
 • Hashtags
 • Posting times
 for immediate creative review.

🚨 Error Handler Trigger → Slack Alert
 Captures workflow failures and sends structured debugging info to Slack.


## 🧩 Prerequisites
 • OpenAI API (GPT-4o + DALL·E 3)
 • Cloudinary account (image hosting)
 • Slack bot token
 • Valid webhook endpoint
 • Clean product input JSON

## 💡 Key Benefits
 ✔ Full AI-generated multi-asset campaign in minutes
 ✔ Eliminates manual copywriting, design, and planning
 ✔ Ensures structured, reliable JSON at every stage
 ✔ Creates polished commercial visuals instantly
 ✔ Produces posting strategy tailored to audience behavior
 ✔ Unified campaign delivery straight to Slack

## 👥 Perfect For
-  Consumer brands launching fast cycles
-  Agencies needing rapid campaign generation
-  Teams without in-house designers/copywriters
-  Influencers or D2C founders wanting automated content production

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, OpenAI, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
