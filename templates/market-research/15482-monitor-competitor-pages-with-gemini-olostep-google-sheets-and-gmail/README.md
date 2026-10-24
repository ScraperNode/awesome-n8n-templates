# 📊 Monitor competitor pages with Gemini, Olostep, Google Sheets and Gmail

> ⚡ **46 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Competitor Feature Monitoring & Strategy Alerting

Never get blindsided by a competitor's "stealth" update again. The **Competitor Feature Monitoring & Strategy Alerting** workflow acts as an automated 24/7 surveillance system for your industry. It monitors specific competitor URLs, detects substantive changes in features, pricing, or messaging, and instantly alerts you with an actionable strategic memo.

Using **Gemini 2.5 Flash** and **Olostep**, the workflow filters out "noise" (like minor UI tweaks or follower count changes) to focus exclusively on updates that impact your competitive standing.

---

### Who’s it for?
*   **Product Marketing Managers (PMMs):** Stay informed on shifts in competitor value propositions and messaging.
*   **Product Managers:** Get immediate alerts on major competitor feature launches or pricing pivots.
*   **Sales Enablement Teams:** Quickly update "battle cards" with the latest intelligence on competitor offerings.
*   **Executive Leadership:** Receive high-level internal memos detailing the threat level of market changes.

### How it works / What it does
1.  **Trigger:** Execute the workflow manually or set it on a cron schedule.
2.  **Data Retrieval:** The workflow pulls target competitor URLs from a **Google Sheet**.
3.  **Smart Scraping:** **Olostep** scrapes the current live content of each URL.
4.  **Change Identification:** Gemini compares the "New Scrape" against the "Old Baseline" stored in your sheet, isolating only substantive text changes.
5.  **Strategic Classification:** If a change is detected, Gemini categorizes it (e.g., `MAJOR_FEATURE_LAUNCH`, `PRICE_CHANGE`, `MARKETING_MESSAGING`).
6.  **Internal Alerting:** A "Memo Editor" node drafts a professional, 100-word executive summary explaining the impact and a recommended action plan.
7.  **Delivery:** The memo is sent instantly to your inbox via **Gmail**.

### How to set up
1.  **Credentials:** Connect your **Google Gemini (PaLM)**, **Olostep**, **Google Sheets**, and **Gmail** accounts.
2.  **Google Sheet Setup:** Create a sheet named "competitor monitoring" with columns for `url`, `previousContent`, and `newcontent`. Add the URLs you want to track.
3.  **Alert Recipient:** Update the **Gmail** node with your email address to receive the strategy alerts.

### Requirements
*   **Google Gemini API:** For intelligent "diffing" and strategic memo drafting.
*   **Olostep API:** To bypass anti-scraping measures on competitor landing pages.
*   **Google Sheets (OAuth2):** To maintain the historical baseline for comparison.
*   **Gmail (OAuth2):** For automated alert delivery.

### How to customize the workflow
*   **Threshold Settings:** Adjust the **Changes identifier** prompt to be more or less sensitive to minor wording changes.
*   **Multi-Channel Alerts:** Connect **Slack** or **Microsoft Teams** nodes to send alerts directly to a `#competitive-intel` channel.
*   **Frequency:** Set a **Schedule Trigger** to run this every morning or once a week, depending on the volatility of your industry.

## 🔗 Nodes Used

Google Sheets, Gmail, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
