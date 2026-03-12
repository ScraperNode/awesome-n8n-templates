# 📊 Monitor SEO keyword rankings with SERP API & send drop alerts via Slack

> ⚡ **459 views** · 📊 [Market Research & Insights](../)

## Description

This automated workflow monitors your website's keyword rankings daily and sends instant alerts to your team when significant ranking drops occur. It fetches current ranking positions, compares them with historical data, and triggers notifications through Slack and email when keywords drop beyond your defined threshold.

## Good to know
* The workflow uses SERP API for accurate ranking data; API costs apply based on your usage volume
* Ranking checks are performed daily to avoid overwhelming search engines with requests
* The system tracks ranking changes over time and maintains historical data for trend analysis
* Slack integration requires workspace permissions and proper bot configuration
* False positives may occur due to personalized search results or data center variations

## How it works
* **Daily SEO Check Trigger** initiates the workflow on a scheduled basis
* **Get Keywords Database** retrieves your keyword list and current ranking data
* **Filter Active Keywords Only** processes only keywords marked as active for monitoring
* **Fetch Google Rankings via SERP API** gets current ranking positions for each keyword
* **Wait For Response** Wait for gets current ranking positions
* **Parse Rankings & Detect Changes** compares new rankings with historical data and identifies significant drops
* **Filter Significant Ranking Drops** isolates keywords that dropped beyond your threshold (e.g., 5+ positions)
* **Send Slack Ranking Alert** notifies your team channel about ranking drops
* **Send Email Ranking Alert** sends detailed email reports to stakeholders
* **Update Rankings in Google Sheet** saves new ranking data for historical tracking
* **Generate SEO Monitoring Summary** creates a comprehensive report of all ranking changes

## How to use
* Import the workflow into n8n and configure your SERP API credentials
* Set up your Google Sheet with the required keyword database structure
* Configure Slack webhook URL and email SMTP settings
* Define your ranking drop threshold (recommended: 5+ position drops)
* Test the workflow with a small keyword set before full deployment
* Schedule the workflow to run daily during off-peak hours

## Requirements
* **SERP API account** with sufficient credits for daily keyword checks
* **Google Sheets access** for keyword database and ranking storage
* **Slack workspace** with webhook permissions for team notifications
* **Email service** (SMTP or API) for stakeholder alerts
* **Keywords database** properly formatted in Google Sheets

## Database/Sheet Columns Required

### Google Sheet: "Keywords Database"
Create a Google Sheet with the following columns:

| Column Name | Description | Example |
|-------------|-------------|---------|
| `keyword` | Target keyword to monitor | "best seo tools" |
| `domain` | Your website domain | "yourwebsite.com" |
| `current_rank` | Latest ranking position | 5 |
| `previous_rank` | Previous day's ranking | 3 |
| `status` | Monitoring status | "active" |
| `target_url` | Expected ranking URL | "/best-seo-tools-guide" |
| `search_volume` | Monthly search volume | 1200 |
| `difficulty` | Keyword difficulty score | 65 |
| `date_added` | When keyword was added | "2025-01-15" |
| `last_checked` | Last monitoring date | "2025-07-30" |
| `drop_threshold` | Custom drop alert threshold | 5 |
| `category` | Keyword grouping | "Product Pages" |

## Customising this workflow
* **Modify ranking thresholds** in the "Filter Significant Ranking Drops" node to adjust sensitivity (e.g., 3+ positions vs 10+ positions)
* **Add competitor monitoring** by duplicating the SERP API node and tracking competitor rankings for the same keywords
* **Customize alert messages** in Slack and email nodes to include your brand voice and specific stakeholder information
* **Extend to multiple search engines** by adding Bing or Yahoo ranking checks alongside Google
* **Implement ranking improvement alerts** to celebrate when keywords move up significantly
* **Add mobile vs desktop tracking** by configuring separate SERP API calls for different device types

## 🔗 Nodes Used

Cron, Send Email, Google Sheets, HTTP Request, Slack, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
