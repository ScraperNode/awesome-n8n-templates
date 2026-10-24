# 📊 Roast and optimize landing page conversion copy with OpenAI

> ⚡ **31 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow automatically collects a landing page URL through a form, fetches the website content, analyzes it with an OpenAI-powered AI Agent, and returns personalized conversion rate optimization recommendations.

## How it works
1. Receives a landing page URL from a user via an n8n Form trigger.
2. Requests the provided URL with an HTTP call to retrieve the landing page content.
3. Sends the scraped page content to an AI Agent powered by an OpenAI chat model to analyze the page, produce a detailed roast, and generate 10 specific CRO recommendations.

## Setup
1. Add an OpenAI API credential for the OpenAI chat model used by the AI Agent.
2. Ensure the target landing page URL is publicly accessible so the HTTP request can fetch its content successfully.
3. Use the Form trigger’s public URL to share the “Conversion Rate Optimizer” form with users who will submit landing page URLs.

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
