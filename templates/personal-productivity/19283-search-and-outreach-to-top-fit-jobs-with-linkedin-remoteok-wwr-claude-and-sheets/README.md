# ⚡ Search and outreach to top-fit jobs with LinkedIn, RemoteOK, WWR, Claude and Sheets

> ⚡ **13 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Job search agent that closes the loop: it does not just find and score openings, it applies and reaches out. A daily agent searches LinkedIn, RemoteOK, and We Work Remotely, scores every job with AI, drafts an application note, then connects with the right person at the company.

## How it works
1. Runs daily and loads your job keywords, geo, freshness window, candidate profile, preferences, and who you want to reach at each company from one config step.
2. Periodix Actions runs a LinkedIn Jobs search; RemoteOK and We Work Remotely are queried in parallel from their own feeds.
3. Deduplicates the merged jobs and resolves a LinkedIn company ID via Periodix Actions company search when the source job does not already include one.
4. For jobs without a known LinkedIn company (mainly RemoteOK and We Work Remotely), Periodix Actions searches LinkedIn company pages by name and verifies the match by normalized name similarity, not just the first result.
5. AI scores each job 1 to 10 for fit against your profile and classifies work mode; only jobs scoring 5 or higher and not hybrid-too-far move forward.
6. AI drafts a short, specific application note for each surviving job.
7. For any job with a resolved company, Periodix Actions searches for people matching your chosen titles and picks the one whose headline actually matches your request, not just whoever ranked first.
8. AI drafts a personalized connection request note referencing the specific role, and Periodix Actions sends it under your profile.
9. Every job - sent or not - is appended to Google Sheets with its score, application note, outreach status, and match-confidence columns.

## Setup
1. Create a Periodix Actions account at actions.periodix.net (free trial available), install the verified Periodix Actions node - works on n8n Cloud and self-hosted - and select your connected LinkedIn profile.
2. Add your AI provider credential (Claude by default; OpenAI or Gemini also work) to the AI nodes.
3. Connect your Google Sheets account via OAuth2 and point it at a spreadsheet with a "Leads" tab.
4. Update Search Config: job keywords, LinkedIn geo ID, freshness window, candidate profile and preferences, the RemoteOK/We Work Remotely keyword filter, and recipient_titles - who you want to reach (Recruiter, CEO, CTO, or anything, single or combined).

## Requirements
- A Periodix Actions account with a connected LinkedIn profile (free trial available)
- An AI provider API key (Claude, OpenAI, or Gemini)
- A Google account with Sheets access
- n8n Cloud or self-hosted - this template works on both

## Customization
- Set recipient_titles to "Recruiter" for a warm intro path, "CEO" or "CTO" to go straight to the top, or list several
- Company and recipient matches are never silently guessed - filter Sheets to unverified_fallback rows if you only want confirmed outreach
- Swap the AI provider without touching the rest of the flow
- Add more job boards by copying the RemoteOK/We Work Remotely pattern

## Additional info
Periodix Actions connects through LinkedIn's own infrastructure, not a browser scraper: no cookies, no CAPTCHA, no scraper fingerprint. It replaces what typically takes 4 to 6 separate Apify actors, so there's no scraper-marketplace subscription or per-actor fee on top of your AI costs. 
Pricing starts at $10 per 1,000 results, or $49/month unlimited - 5 to 18 times lower than the same volume through Clay or Apollo. 
Periodix is rated 4.9/5 on G2. The same node also powers our Sales Navigator prospecting, event outreach, and hiring-signal templates.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
