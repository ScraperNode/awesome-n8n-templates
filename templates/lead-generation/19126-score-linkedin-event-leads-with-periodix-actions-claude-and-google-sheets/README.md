# 🎣 Score LinkedIn event leads with Periodix Actions, Claude, and Google Sheets

> ⚡ **4 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Automate LinkedIn event outreach with Periodix Actions and AI

A meetup agent for events your team attends. Periodix Actions finds LinkedIn posts showing real intent to attend, not just mentions, scores ICP fit in one call, then drafts a note from their reason.

Save 80%+ on API and token cost.

## How it works
1. Runs daily and loads your event keyword, ICP criteria, score threshold, and post limit from one config step.
2. Periodix Actions searches LinkedIn for posts matching your event keyword and returns the authors.
3. Deduplicates authors and pre-filters by ICP keywords in their headline or company, before any AI call.
4. Sends each remaining author's headline, company, and post text to AI in one call to judge both real personal intent to attend and ICP fit. Anyone without real intent scores low regardless of ICP.
5. Appends anyone below threshold to the Cold tab with their score and reason, at no further cost.
6. For everyone above threshold, AI drafts a personalized connection note straight from that same post, and the enriched record is appended to the Hot tab.

## Setup
1. Create a Periodix Actions account at actions.periodix.net (free trial available), install the verified Periodix Actions node (works on n8n Cloud and self-hosted), and select your connected LinkedIn profile.
2. Add your AI provider credential (Claude by default; OpenAI or Gemini also work) and confirm both AI request nodes are authorized.
3. Connect your Google Sheets account via OAuth2, point it at your spreadsheet, and make sure it has "Hot" and "Cold" tabs.
4. Update Event Config: event keywords, ICP keywords and description, your offer, score threshold, and posts limit.

## Requirements
- A Periodix Actions account with a connected LinkedIn profile (free trial available)
- An AI provider API key (Claude, OpenAI, or Gemini)
- A Google account with Sheets access
- n8n Cloud or self-hosted

## Customization
- Adjust the score threshold to control how selective the intent+ICP filter is
- Swap event keywords to run the same flow against multiple events
- Change the AI provider for either the scoring or drafting step independently
- Point Event Config at a recurring series (e.g. monthly meetups) and just update the keyword each run

## Additional info
Periodix Actions connects through LinkedIn's own infrastructure, not a browser scraper: no cookies, no CAPTCHA, no scraper fingerprint. Built on the infrastructure behind Periodix: 0 LinkedIn accounts lost across 25,000 connected profiles in the last 24 months.
Pricing starts at $10/month per profile with 1,000 results included and $10 per additional 2,000, or $49/month unlimited, 5 to 18 times lower than a comparable Clay or Apollo setup for the same volume.
Periodix is rated 4.9/5 on G2.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
