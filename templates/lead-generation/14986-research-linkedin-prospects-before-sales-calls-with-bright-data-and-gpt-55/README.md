# 🎣 Research LinkedIn prospects before sales calls with Bright Data and GPT-5.5

> ⚡ **119 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Build AI-powered pre-call intelligence briefs from LinkedIn profiles

Automatically scrape LinkedIn profiles for upcoming sales calls, analyze the data with AI, score prospect readiness, and send structured pre-call briefs to your inbox.

This workflow reads upcoming call records from Google Sheets, scrapes each prospect's LinkedIn profile with Bright Data, extracts useful talking points and rapport hooks, and uses GPT-5.5 to generate a structured pre-call intelligence brief. It then applies confidence and readiness thresholds to decide whether to send a full brief, a shorter limited-data brief, or log the result for later review.

## How it works

1. A schedule trigger runs the workflow automatically.
2. The workflow reads upcoming prospect records from a Google Sheet tab called `upcoming_calls`.
3. Each LinkedIn profile URL is sent to the Bright Data dataset API for scraping.
4. The Bright Data response is validated to catch empty results, API errors, and async snapshot responses.
5. A code step extracts useful sales context such as:
   - career trajectory
   - role tenure
   - skills and tech affinity
   - education signals
   - recent activity themes
   - rapport hooks
6. GPT-5.5 analyzes the enriched profile data and returns a structured JSON brief with:
   - career trajectory summary
   - recent activity summary
   - 5 tailored talking points
   - likely pain points
   - readiness score
   - recommended approach
   - risk factors
   - self-evaluation metadata
7. The workflow parses the AI response and checks whether confidence is at least `0.7`.
8. If confidence is too low, the result is written to a `low_confidence_briefs` sheet for manual review.
9. If confidence is high enough, the workflow checks whether the readiness score is at least `70`.
10. High-readiness prospects receive a full email brief and are logged to the `call_briefs` sheet.
11. Lower-readiness prospects receive a shorter email brief and are also logged to the `call_briefs` sheet.

## Setup

Create a Google Sheet with these tabs:

- `upcoming_calls`
- `call_briefs`
- `low_confidence_briefs`

The `upcoming_calls` tab should include at least:

- `url`
- `meeting_date`
- `our_product`
- `alert_email` (optional)

Then configure the workflow:

1. Replace `YOUR_SPREADSHEET_ID` in the Google Sheets nodes with your sheet ID.
2. Connect Google Sheets via OAuth2.
3. Add your Bright Data credentials to the HTTP Header Auth used in the LinkedIn scraping node.
4. Connect your OpenAI account in the GPT-5.5 chat model node.
5. Connect Gmail via OAuth2 for sending the brief emails.
6. Optionally set a fallback alert email using the `ALERT_EMAIL` variable.

## Requirements

- Google Sheets OAuth2 credentials
- Gmail OAuth2 credentials
- Bright Data account 
- OpenAI API access for GPT-5.5

## Notes

- This is a demo workflow intended for template and educational use.
- The Bright Data response validator is built to handle empty results, API errors, and async responses gracefully.
- The AI node is instructed to return raw JSON only, making the output easier to parse and route.
- The confidence gate helps prevent unreliable AI output from being emailed.
- The readiness score gate helps prioritize prospects that are more likely to lead to productive calls.
- You can adjust the confidence threshold (`0.7`) and readiness threshold (`70`) to match your process.
- The Gmail steps currently send plain-text summaries, which makes the workflow easy to customize.

## Good fit for

- sales teams
- founders doing outbound
- agencies preparing for discovery calls
- account executives who want better call prep
- RevOps teams building lightweight pre-call research systems

Note: This demo uses the synchronous Bright Data request because it is easier to understand in a template. In real workflows, it is often better to use the async approach. Bright Data’s sync endpoint has a 1 minute timeout, and longer jobs return a snapshot_id instead of final data. A simple way to build the async HTTP node in n8n is to copy Bright Data’s cURL example from your account or docs and convert it into an n8n HTTP Request setup

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
