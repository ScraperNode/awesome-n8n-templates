# 📱 Lightroom cloud to Instagram auto poster (AI captions)

> ⚡ **284 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

**Automatically publish Lightroom photos to Instagram** with short, human-sounding AI captions. This workflow pulls the next item from your Data Table queue, generates an on-brand caption from alt text + metadata, uploads via Instagram Graph API, and marks it posted. 
Use it together with “Lightroom Cloud → Photos Queue (AI Alt Text)” and “Lightroom Image Webhook (Direct JPEG for Instagram).”

## What it’s for

Hands-free Lightroom-to-Instagram posting: schedule, caption with AI, and publish consistently using the Instagram Graph API.

## Parameters to set

- Instagram Graph API access token and Instagram Business/Creator account ID
- Posting schedule (cron/interval) + max posts per run
- Data Table name & status fields (posted timestamp, IG media ID)
- Caption rules: tone, max length, hashtags policy, CTA style
- Image source URL: public endpoint of Workflow 2 (Lightroom Image Webhook)

## Works best with

Workflow 1: **[Lightroom Cloud → Photos Queue (AI Alt Text)](https://n8n.io/workflows/9692-automate-lightroom-to-instagram-with-claude-ai-alt-text-generator/)**

Workflow 2: **Lightroom Image Webhook (Direct JPEG for Instagram)**

## Learn more & stay in the loop

Want the full story (decisions, trade-offs, and tips) behind this **Lightroom Cloud → Instagram automation**?  
👉 **Read the write-up on my blog: [camilleroux.com](https://www.camilleroux.com/automatiser-la-publication-de-photos-lightroom-sur-instagram-avec-n8n/)**

If you enjoy **street & urban photography** or you’re curious how I use these n8n workflows day-to-day:  
👉 **Follow my photo account on Instagram:** **[@camillerouxphoto](https://www.instagram.com/camillerouxphoto/)**  
👉 **Follow me on other networks:** links available on [my site](https://www.camilleroux.com) (X, Bluesky, Mastodon, Threads)

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Anthropic, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
