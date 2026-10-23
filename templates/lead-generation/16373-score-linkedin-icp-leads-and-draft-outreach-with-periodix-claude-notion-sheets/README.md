# 🎣 Score LinkedIn ICP leads and draft outreach with Periodix, Claude, Notion, Sheets

> ⚡ **179 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Automate LinkedIn lead generation from Sales Navigator search to personalized outreach. The Periodix Actions node finds prospects, Claude AI scores each one against your ICP, writes personalized connection requests and follow-up messages for qualified leads, and logs results to Google Sheets. Rejected leads get reasoning for ICP refinement.

## How it works
1. Runs on a schedule and retrieves pending Sales Navigator search URLs from a Notion database.
2. For each URL, the Periodix Actions node runs the search and returns matching profiles with automatic rate limiting.
3. Cleans, normalizes, and dedupes profile data: name, headline, role, company, location, industry, summary, and public profile URL.
4. Sends each profile to Claude AI for ICP scoring (1-10) with a brief reason.
5. Profiles scoring 5 or higher go to Claude again for a personalized connection note and first follow-up message, then get appended to the Validated tab in Google Sheets.
6. Profiles scoring below 5 get appended to the Rejected tab with score and reason for ICP refinement.
7. When every lead from a search is processed, the Notion row is marked Done.
8. What you get:
9. - A daily pipeline of scored, qualified LinkedIn leads with ready-to-send personalized outreach
10. - Clear rejection reasons to continuously improve your ICP definition
11. - LinkedIn Classic and Sales Navigator people search from saved URLs
12. - Zero manual LinkedIn prospecting after initial setup

## Setup
1. Install the verified Periodix Actions node (works on n8n Cloud and self-hosted). Sign up at actions.periodix.net, connect a LinkedIn profile, and pick it in the Search by URL node.
2. Add Notion credentials and set your database ID. Your database needs these properties: Status (select: Pending/Done), Sales Nav URL (URL), Campaign (text), Processed At (date).
3. Add your Anthropic credential to both Claude nodes. Replace the product and ICP placeholders in both prompts with your product context, ICP criteria, tone, and value proposition.
4. Add Google Sheets OAuth credentials, set your Sheet ID, and create two tabs, Validated and Rejected, with these column headers: First Name, Last Name, Title, Company, Location, Industry, LinkedIn URL, Score, Reason, Connection Note, M1 Message, Campaign, Date, Notion Page ID.

## Requirements
- A Periodix Actions account with a connected LinkedIn profile (free trial available). Standard LinkedIn search URLs work with any LinkedIn account. Sales Navigator search URLs require an active Sales Navigator subscription on the connected profile.
- An Anthropic API key
- A Notion account and a Google account with Sheets access

## Customization
- Raise the score threshold in "Score 5 or Higher?" for fewer, better leads
- Adjust the Search by URL limit to control how many leads each search returns
- Swap Claude for OpenAI or Gemini by changing the URL and body in both AI nodes
- Add a Periodix Actions Send Request node after the Validated tab to send connection requests automatically

## Additional info
Periodix Actions connects through LinkedIn's own infrastructure, not a browser scraper: no cookies, no CAPTCHA, no scraper fingerprint. Built on the infrastructure behind Periodix: 0 LinkedIn accounts lost across 25,000 connected profiles in the last 24 months.
Pricing starts at $10/month per profile with 1,000 results included and $10 per additional 2,000, or $49/month unlim

## 🔗 Nodes Used

Google Sheets, HTTP Request, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
