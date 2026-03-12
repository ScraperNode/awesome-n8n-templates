# 📱 Generate Instagram news carousels from RSS feeds using GPT-4o

> ⚡ **138 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Overview
This workflow deploys a fully autonomous **"Viral News Agency"** inside your n8n instance.

Unlike simple auto-posters, this is a comprehensive content production pipeline. It acts as a 24/7 news monitor that scrapes viral stories, rewrites them into educational scripts using **GPT-4o**, designs professional 10-slide carousels, and publishes them directly to **Instagram Business**—completely on autopilot.

## Key Features
* **Dual-Engine Architecture:** The unique "Hybrid Core" lets you choose between **Free (Gotenberg/Docker)** or **Paid (APITemplate)** image generation. Switch engines instantly via the Setup Form.
* **Smart RSS Scraping:** Cleans incoming feeds and extracts high-quality "OG" (Open Graph) images to use as dynamic backgrounds.
* **Viral Content Writer:** Uses a specialized AI Agent prompt to write "Hot Takes" and educational hooks, ensuring content is engaging, not just a summary.
* **Auto-Publisher:** Handles the complex Meta API flow (Container &gt; Media Bundle &gt; Publish) to upload multi-slide carousels automatically.

## How it works
1.  **Monitor:** The **News Source** node watches your chosen RSS feeds (Tech, Sports, Politics, etc.) for breaking stories.
2.  **Analyze:** The **AI Analyst** (GPT-4o) reads the article, extracts the viral angle, and writes a full 10-slide script with captions and hashtags.
3.  **Design:** The workflow routes data to your chosen engine. It loops through the script 10 times to generate individual slides (Title, Content, Quotes).
4.  **Publish:** The agent uploads the images to Facebook's servers, bundles them into a Carousel Container, and publishes it live to your Instagram feed.

## Set up steps
*Estimated time: 10 minutes*

1.  **Credentials:** Add your keys for OpenAI (Intelligence), Google Drive (Storage), and Facebook Graph API (Publishing).
2.  **Instagram ID:** Open the 3 Facebook nodes ("Create Container", "Carousel Bundle", "Publish Carousel") and replace the placeholder ID with your **Instagram Business User ID**.
3.  **Image Engine:**
    * **Option A (Free):** Ensure you have a local Gotenberg instance running via Docker (`docker run --rm -p 3000:3000 gotenberg/gotenberg:8`).
    * **Option B (Paid):** In the "Generate Image" node, add your APITemplate API Key and Template ID.
4.  **Run:** Use the **"SETUP FORM"** node to enter your RSS URL and Brand Name, then toggle to "Active"!

## About the Creator
Built by **Pixril**. We specialize in building advanced, production-ready AI agents for n8n.
Visit our website: **https://www.pixril.com/**
Find more professional workflows in our shop: **https://pixril.etsy.com**

## 🔗 Nodes Used

HTTP Request, RSS Read, Google Drive, Facebook Graph API, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
