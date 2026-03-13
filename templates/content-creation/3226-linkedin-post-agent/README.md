# 🎬 LinkedIn post agent

> ⚡ **285 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# LinkedIn Post Generator - Automated Marketing Content Workflow

This workflow creates and publishes professional LinkedIn posts automatically on a schedule, complete with AI-generated images. Here's how it works:

## How It Works
1. Generates professional marketing posts focused on Generative AI and enterprise solutions (update prompt for your desired content)
2. Creates matching images that represent the post's themes visually
3. Publishes directly to LinkedIn on a scheduled basis
4. Incorporates RSS feeds for up-to-date content inspiration

## Setup Steps (Estimated time: 15-20 minutes)
1. **API Credentials**: Connect your OpenAI API key for text and image generation
2. **LinkedIn Authentication**: Add your LinkedIn credentials to enable posting
3. **RSS Configuration**: Add relevant industry RSS feed URLs for content inspiration
4. **Schedule**: Set your preferred posting frequency in the Schedule Trigger node

The workflow uses GPT-4o and GPT-4o Mini to create professionally-toned content that positions you as a thought leader in marketing and AI implementation. The generated content follows specific formatting guidelines to maximize engagement on LinkedIn.

Each post is carefully crafted to be 100-150 words with strategic paragraph breaks, ending with relevant hashtags. The matching images are designed to be clean, minimalistic, and aligned with the post's theme without any distracting text elements.

## 🔗 Nodes Used

HTTP Request, LinkedIn, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
