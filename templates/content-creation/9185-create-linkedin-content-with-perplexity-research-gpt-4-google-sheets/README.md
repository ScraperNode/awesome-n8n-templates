# 🎬 Create LinkedIn content with Perplexity research, GPT-4 & Google Sheets

> ⚡ **872 views** · 🎬 [Content Creation & Video](../)

## Description

This n8n workflow automates the process of creating high-quality, scroll-stopping LinkedIn posts based on live research, AI insight generation, and Google Sheets storage.

Instead of relying on recycled AI tips or boring summaries, this system combines real-time trend discovery via Perplexity, structured idea shaping with GPT-4, and content generation tailored to a bold, human LinkedIn voice. The workflow saves each post idea (with image prompt, tone, and summary) to a Google Sheet, sends you a Telegram alert, and even formats your content for direct publishing.

Perfect for solopreneurs, startup marketers, or anyone who posts regularly on LinkedIn and wants to sound original, not robotic.

## Who’s it for
- Content creators and solopreneurs building an audience on LinkedIn
- Startup teams, PMs, and tech marketers looking to scale thought leadership
- Anyone tired of generic AI-generated posts and craving structured, edgy output

## How it works
- Daily trigger at 6 AM starts the workflow.
- Pulls recent post history from Google Sheets to avoid repeated ideas.
- Perplexity AI scans the web
- Generates 3 structured post ideas (including tone, hook, visual prompt, and summary).
- GPT-4 refines each into a bold, human-style LinkedIn post, following detailed brand voice rules.
- Saves everything to Google Sheets (idea, content, image prompt, post status).
- Sends a Telegram notification to alert you new ideas are ready.

## How to set up
- Connect your Perplexity, OpenAI, Google Sheets, and Telegram credentials.
- Point to your preferred Google Sheet and sheet tab for storing post data.
- Adjust the schedule trigger if you want more or fewer ideas per week.
- (Optional) Tweak the content style prompt to match your personal tone or niche.

## Requirements
- Perplexity API account
- OpenAI API access (GPT-4 or GPT-4-mini)
- Telegram bot connected to your account
- Google Sheets document with appropriate column headers

## How to customize the workflow

- Change the research sources or prompt tone (e.g., more tactical, more spicy, more philosophical)
- Add an image generation tool to turn prompts into visuals for each post
- Filter or tag ideas based on type (trend, tip, story, etc.)
- Post automatically via LinkedIn API or Buffer integration

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
