# 📊 Monitor competitor website changes with Google Sheets, Gemini and Telegram

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Runs on weekdays, monitors competitor pages from a Google Sheets watchlist, detects meaningful content changes, compares before-and-after evidence with Gemini, adds recent news context, validates AI claims against captured text, scores impact and confidence, records verified moves, emails the strategy brief, and sends high-impact alerts to Telegram.

## How it works
1. Runs every weekday morning and loads the active competitor watchlist and historical page snapshots from Google Sheets.
2. Fetches the current page for each active competitor, normalizes its content, generates a lightweight fingerprint, and compares it with the latest stored snapshot.
3. Calculates a content-change ratio and continues only when the page differs from its previous snapshot beyond the configured threshold. The current snapshot is stored for future comparisons.
4. Retrieves recent Google News results for the changed competitor to provide additional context. News is treated as context only and is never accepted as proof of the website change.
5. Sends the before-and-after page content to Gemini, which classifies the change, estimates impact and confidence, and returns short evidence excerpts, business implications, recommended action, and what to monitor next.
6. Validates the Gemini response by parsing the JSON, checking score ranges, validating the change type, and verifying that the returned evidence excerpts actually exist in the captured before-and-after page text.
7. If the first AI response fails validation, a single repair pass reconstructs the JSON from the same source evidence and runs the validation again. Verified changes are logged, turned into an executive strategy brief, emailed, and sent to Telegram when impact reaches the configured cutoff.

## Setup
1. Create a Google Sheet with three tabs named Watchlist, Snapshots, and Change Log. The Watchlist controls which competitor pages are monitored.
2. In Watchlist, add the columns Active, Competitor, URL, NewsQuery, and AlertThreshold. Set Active to Yes or No and use a decimal threshold such as 0.12 for the page-change ratio.
3. In Snapshots, add Timestamp, Competitor, URL, Hash, Title, and Text. The workflow writes one normalized snapshot per scanned page so later runs can compare against the previous state.
4. In Change Log, add Timestamp, Verified At, Competitor, URL, Event Key, Change Type, Impact Score, Confidence, Evidence Before, Evidence After, Why It Matters, Recommended Action, Watch Next, and Status.
5. Connect Google Sheets and Google Gemini credentials and replace YOUR_GOOGLE_SHEET_ID. Configure Telegram and email credentials and review the schedule, monitored URLs, news queries, and impact cutoff before activating the workflow.

## Requirements
- Google Sheets, a Google Gemini API credential, Telegram bot credentials for high-impact alerts, and email sending credentials. Monitored competitor pages must be publicly accessible through standard HTTP requests.

## Customization
- Adjust the schedule, competitor watchlist, page-change threshold, Gemini prompts, impact cutoff, news query, email recipient, Telegram destination, and Google Sheets schema to fit your market and reporting needs.

## Additional info
The workflow separates source evidence from external context. Gemini is required to support change claims with excerpts from captured before-and-after page content, and the validation gate rejects unsupported evidence before notifications are sent.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
