# 🎬 Human-in-the-loop post designer with Mistral AI, ImageKit, and LinkedIn publishing

> ⚡ **782 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## 📋 Description
This n8n workflow streamlines AI-powered post creation with image banners, includes manual approval steps, and publishes to LinkedIn — all dynamically.

It uses ImageKit.io to edit images, stores them on S3, and generates and revises posts through a Mistral AI Agent with human review.

## 🧠 How it Works (High-Level)
🔄 Triggered via incoming chat message

🧠 AI drafts a post and adds image instructions

🖼️ ImageKit API adds text overlay to image

☁️ Image is uploaded to S3 for public use

🧑‍⚖️ Human approval step via email

🔁 Optional revision loop

📢 Publishes approved content to LinkedIn

## 🛠️ Setup Requirements

🔑 API key for ImageKit.io

🧠 AI model via Mistral (or substitute like OpenAI)

📩 Email setup for Approval node

☁️ AWS S3 Bucket access

🔗 LinkedIn credentials for posting

## 🔗 Nodes Used

HTTP Request, Gmail, S3, LinkedIn, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
