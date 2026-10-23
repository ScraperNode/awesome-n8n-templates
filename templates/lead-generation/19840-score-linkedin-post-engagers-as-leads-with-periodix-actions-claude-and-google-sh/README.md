# 🎣 Score LinkedIn post engagers as leads with Periodix Actions, Claude, and Google Sheets

> ⚡ **11 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
The people who like and comment on posts in your niche are already raising their hand. This workflow finds those posts by topic, pulls every reactor and commenter, scores each one against your ICP with AI, and drafts a personalized connection note from the post they engaged with.

## How it works
1. Runs daily and loads your topic keywords, ICP keywords and description, offer, score threshold, and result limits from one config step.
2. Periodix Actions searches LinkedIn for posts matching your topic, no post URL needed.
3. For each matched post, fetches the list of people who reacted and commented on it using Periodix Actions.
4. Engagers are normalized, merged across all posts, deduplicated, and pre-filtered by ICP keywords before any AI call, so you never pay for scoring someone who was never going to qualify.
5. AI scores each remaining engager 1 to 10 against your ICP and, for anyone at or above your threshold, drafts a personalized connection note that references the exact post they engaged with.
6. Every engager is logged to Google Sheets: qualified leads with score, reason, and a ready connection note in the Hot tab, everyone else with score and reason in the Cold tab for later ICP refinement.

## Setup
1. Create a Periodix Actions account at actions.periodix.net (free trial available), install the verified Periodix Actions node, works on n8n Cloud and self-hosted, and select your connected LinkedIn profile.
2. Add your AI provider credential (Claude by default, OpenAI or Gemini also work) to the scoring node.
3. Connect your Google Sheets account via OAuth2 and point it at a spreadsheet with Hot and Cold tabs.
4. Update Campaign Config: topic keywords, ICP keywords and description, your offer, score threshold, and posts, reactions, and comments limits.

## Requirements
- A Periodix Actions account with a connected LinkedIn profile (free trial available)
- An AI provider API key (Claude, OpenAI, or Gemini)
- A Google account with Sheets access
- n8n Cloud or self-hosted, this template works on both

## Customization
- Adjust the score threshold to control how selective the ICP filter is
- Swap topic keywords to run the same flow against multiple niches or campaigns
- Raise or lower posts_limit, reactions_limit, and comments_limit to trade coverage against run time and cost
- Change the AI provider for the scoring and drafting step without touching the rest of the flow
- Point Campaign Config at a recurring theme (e.g. a monthly industry discussion) and just refresh the keywords each run

## Additional info
We run this signal ourselves: a 4-month campaign to post engagers sent 2,499 connection requests, with 81% accepted, 38% replied, and 15% interested.
Periodix Actions connects through LinkedIn's own infrastructure, not a browser scraper: no cookies, no CAPTCHA, no scraper fingerprint. One search finds every relevant post on a topic, then a single node pulls all of its engagers, so there is no manual post-hunting and no separate scraper subscription for reactions and comments. Pricing starts at $10 per 1,000 results, each next 2000 results just for $10 or $49/month unlimited, 5 to 18 times lower than a comparable Clay or Apify setup for the same volume. Periodix is rated 4.9/5 on G2. The same node also powers our Sales Navigator prospecting, event outreach, and hiring-signal templates.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
