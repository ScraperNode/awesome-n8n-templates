# 🎬 LinkedIn content automation: AI post creation & images with sheet approval workflow

> ⚡ **1,597 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who’s it for
This workflow is designed for marketers, content creators, agency owners, and solopreneurs who want to automate LinkedIn content creation using AI. It helps turn Google Sheets entries into complete LinkedIn posts, including text, image prompts, and AI-generated images.

## What it does / How it works
The workflow monitors a Google Sheet for new campaign entries. When a row is added, it automatically collects details about the campaign, searches LinkedIn via Tavily to identify relevant trends, and turns the information into an AI-generated LinkedIn post using a local Ollama model or an LLM of your choice.
A second approval step lets you refine the text directly inside the sheet. Once approved, the workflow generates an image prompt, creates a ready-to-post visual with OpenAI Images, and finally publishes the post to LinkedIn.

## How to set up
• Add your own Google Sheets Trigger credentials.
• Add Tavily, Ollama/OpenAI, and LinkedIn OAuth credentials.
• Replace the sample Sheet URL with your own.
• Set your LinkedIn account/person ID in the posting node.

## Requirements
• Google Sheets account
• LinkedIn OAuth app
• Tavily API key
• Ollama (local) or OpenAI image generation

##   How to customize
You can change:
• AI model
• Image generation provider
• Search query logic
• Content tone
• Approval step (manual or automatic)

## 🔗 Nodes Used

Google Sheets, Gmail, LinkedIn, Google Sheets Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
