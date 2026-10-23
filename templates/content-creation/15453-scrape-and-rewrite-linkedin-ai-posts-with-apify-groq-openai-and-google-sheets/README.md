# 🎬 Scrape and rewrite LinkedIn AI posts with Apify, Groq, OpenAI and Google Sheets

> ⚡ **21 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works
1. User submits a form with a LinkedIn profile URL and number of posts to scrape
2. Apify's LinkedIn Post Scraper actor fetches posts (no cookies required, ~$1 per 1,000 posts)
3. Posts are looped one at a time for AI processing
4. Groq AI verifies each post's authenticity and quality
5. Authentic posts are rewritten by OpenAI in a fresh, engaging style
6. Results (author, original post, rewritten post) are logged to Google Sheets

## Set up steps
- Estimated time: ~10 minutes
- Connect Apify via OAuth2 (requires an Apify account)
- Add your Groq API key in the Groq Chat Model node
- Add your OpenAI API key in the OpenAI Chat Model node
- Connect Google Sheets via OAuth2 and select your posts tracker spreadsheet
- Use responsibly and in accordance with LinkedIn's Terms of Service

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
