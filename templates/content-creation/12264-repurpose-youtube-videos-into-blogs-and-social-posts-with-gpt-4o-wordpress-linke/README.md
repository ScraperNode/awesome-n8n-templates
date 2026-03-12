# 🎬 Repurpose YouTube videos into blogs and social posts with GPT-4o, WordPress, LinkedIn, X and Instagram

> ⚡ **488 views** · 🎬 [Content Creation & Video](../)

## Description

## Overview

This workflow turns a single YouTube video into multiple content formats and publishes them across different platforms with an optional human approval step.

It helps content creators, marketers, and agencies repurpose long-form video content into blog posts and social media updates automatically.

## How it works

1. Fetches the transcript from a YouTube video  
2. Uses AI to generate blog and social media content  
3. Optionally waits for manual approval  
4. Publishes content to selected platforms  
5. Logs the result for tracking

## Setup steps

1. Add your API credentials (AI, transcript, and social platforms)
2. Paste a YouTube video URL
3. Choose auto-publish or approval mode
4. Run the workflow

## Use cases

- Content repurposing for YouTube creators  
- Automated blog and social media publishing  
- Marketing automation for agencies  
- AI-assisted content production pipelines

---

### 🧑‍💻 Creator Information
Developed by: Adem Tasin
🌐 Website: ademtasin.com
💼 LinkedIn: Adem Tasin

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Wordpress, X (Formerly Twitter), LinkedIn

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
