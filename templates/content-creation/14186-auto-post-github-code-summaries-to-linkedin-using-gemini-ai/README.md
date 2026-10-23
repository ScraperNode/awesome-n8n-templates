# 🎬 Auto-post GitHub code summaries to LinkedIn using Gemini AI

> ⚡ **42 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works
- Listens for a GitHub push event via Webhook
- Lists and fetches all files from the pushed repository
- Decodes base64 file content and merges it into a single text block
- AI Agent (Gemini 2.5 Flash) analyzes the code and generates a article
- A second AI Agent converts the article into a LinkedIn-ready post (max 2500 chars)
- Automatically publishes the post to your LinkedIn profile

## Set up steps
- Connect your GitHub account and configure the Webhook in your repo's settings
- Add your Google Gemini API key under credentials
- Connect your LinkedIn OAuth2 account
- Activate the workflow — posts will publish automatically on every push

## 🔗 Nodes Used

GitHub, Webhook, LinkedIn, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
