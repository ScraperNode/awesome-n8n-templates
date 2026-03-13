# 🎣 Extract Business Emails from Google Maps Listings for Lead Generation

> ⚡ **911 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow scrapes Google Maps business listings (e.g., carpenters in Tarragona) to extract websites and email addresses — perfect for lead generation, local business prospecting, or agency outreach.

🔧 How it works

Manual Trigger – start manually using the “Test Workflow” button.

Scrape Google Maps – fetches the HTML from a Google Maps search URL.

Extract URLs – parses all business links from the page.

Filter Google URLs – removes unwanted Google/tracking links.

Remove Duplicates + Limit – keeps unique websites (default: 100).

Scrape Site – fetches each website’s HTML.

Extract Emails – detects valid email addresses.

Filter Out Empties & Split Out – isolates each valid email per site.

(Optional) Add to Google Sheet – appends results to your Sheet.

💼 Use cases

Local business leads: find emails of carpenters, dentists, gyms, etc., in your city.

Agency outreach: collect websites and contact emails to pitch marketing services.

B2B prospecting: identify businesses by niche and region for targeted campaigns.

🧩 Requirements

n8n instance with HTTP Request and Code nodes enabled.

(Optional) Google Sheets OAuth2 credentials.

Tip: Add a “Google Sheets → Append Row” node and connect it to your account.

🔒 Security

No personal or sensitive data included — only credential references.
If sharing this workflow, anonymize the “credentials” field before publishing.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
