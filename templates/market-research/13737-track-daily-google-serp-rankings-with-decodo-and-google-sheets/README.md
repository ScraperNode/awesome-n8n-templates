# 📊 Track daily Google SERP rankings with Decodo and Google Sheets

> ⚡ **120 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

Automate your SEO competitive analysis with this daily SERP tracker. This workflow uses Decodo to scrape Google Search results for specific keywords and logs rankings directly into Google Sheets, saving SEO teams hours of manual reporting.

## Why Use This Workflow?

**Time Savings:** Reduces manual rank checking from 60 minutes daily to 0 minutes through full automation.  
**Cost Reduction:** Eliminates the need for expensive "per-keyword" SEO tracking software for basic monitoring needs.  
**Error Prevention:** Captures 100% of search data accurately, including meta descriptions and URLs, without human copy-paste errors.  
**Scalability:** Easily monitor dozens of keywords across different countries and devices by adjusting a single configuration node.

## Ideal For

- **SEO Specialists:** Track keyword movements and SERP feature changes for clients or internal projects daily.
- **Content Marketers:** Monitor how new content pieces are ranking against competitors for target high-intent keywords.
- **Digital Agencies:** Provide automated, transparent ranking reports to clients without manual data entry.

## How It Works

1. **Trigger:** The workflow starts every morning at 9:00 AM via the Schedule Trigger.
2. **Data Collection:** Parameters like keyword, country (e.g., "id"), language ("en"), and device type are defined.
3. **Processing:** The Decodo node executes a live Google search based on your specific localized parameters.
4. **Intelligence Layer:** The workflow filters the raw JSON response to extract organic results only and validates that each result has a valid URL.
5. **Output & Delivery:** Top-ranked results (e.g., Top 5) are appended to a "SERP_Results" Google Sheet.
6. **Storage & Logging:** Any errors (API timeouts or empty results) are automatically logged to a separate "SERP_Errors" sheet for troubleshooting.

## Setup Guide

### Prerequisites

| Requirement | Type | Purpose |
|-------------|------|---------|
| [n8n instance](https://n8n.partnerlinks.io/khmuhtadin) | Essential | Workflow execution platform |
| [Decodo API](https://decodo.io) | Essential | Scrapes live Google Search results |
| Google Sheets | Essential | Destination for ranking data and error logs |

### Installation Steps

1. Import the JSON file to your [n8n instance](https://n8n.partnerlinks.io/khmuhtadin)
2. **Configure credentials:**
   - **Decodo API:** Create an account at Decodo and paste your API key into the Decodo Search node.
   - **Google Sheets:** Connect your Google account via OAuth2 and ensure you have a spreadsheet ready with two tabs: `SERP_Results` and `SERP_Errors`.
3. **Update environment-specific values:**
   - In the **Write SERP Results** and **Write SERP Errors** nodes, select your specific Spreadsheet from the dropdown.
4. **Customize settings:**
   - Open the **Set Search Input** node to change the keyword, country code, and the "top_n" (number of ranks to track).
5. **Test execution:**
   - Click "Test Workflow" to verify data appears in your Google Sheet.

## Technical Details

### Core Nodes

| Node | Purpose | Key Configuration |
|------|---------|-------------------|
| Set Search Input | Configuration | Defines keyword, geo-location, and rank limit |
| Decodo Search | Data Acquisition | Performs localized Google Search via API |
| Split Out | Data Structuring | Converts the API array into individual rows for processing |
| IF Nodes | Validation | Filters for top-N ranks and ensures data integrity |
| Google Sheets | Storage | Appends successful data or logs failures |

### Workflow Logic

The workflow uses a **Split Out** and **Extract Organic** strategy. This ensures that even if Google returns various SERP features (ads, maps, snippets), the workflow specifically targets the organic blue links. The "Valid Row" logic ensures your spreadsheet stays clean by only recording results that meet your "Top N" criteria (e.g., only store the top 5 results).

## Customization Options

**Basic Adjustments:**
- **Search Frequency:** Change the Schedule Trigger to run weekly or hourly depending on your needs.
- **Rank Depth:** Change the `top_n` value in the input node to track the Top 10, 20, or 50 results.

**Advanced Enhancements:**
- **Slack Notifications:** Add a Slack node to alert your team if a specific keyword drops out of the Top 3.
- **Multi-Keyword Support:** Replace the "Set" node with a Google Sheet "Read" node to loop through a list of hundreds of keywords.

## Troubleshooting

**Common Issues:**

| Problem | Cause | Solution |
|---------|-------|----------|
| Empty Google Sheet | No results found for keyword | Check the `SERP_Errors` sheet for the raw API response. |
| Permission Error | Google Sheets node not authorized | Re-connect your Google Sheets OAuth2 credentials. |
| Decodo 401 Error | Invalid API Key | Verify your Decodo API key is active and has remaining credits. |

## Use Case Examples

### Scenario 1: E-commerce Competitor Tracking
**Challenge:** A retail brand needs to know who is winning the "best running shoes" keyword daily.  
**Solution:** This workflow tracks the Top 5 results every morning, allowing the brand to see when a competitor's blog post overtakes their product page.  
**Result:** The marketing team identifies a ranking drop within 24 hours and updates their content immediately.

### Scenario 2: Local SEO Monitoring
**Challenge:** A service business wants to monitor rankings specifically in Indonesia ("id") using English ("en") search settings.  
**Solution:** By configuring the `country` and `language` parameters in the Set node, the workflow captures localized SERP data accurately.  
**Result:** The business gets an accurate picture of their local visibility without using a VPN.

---

**Created by:** [Khairul Muhtadin](https://khmuhtadin.com)  
**Category:** Marketing | **Tags:** SEO, SERP, Google Sheets, Decodo  
**Need custom workflows?** [Contact us](https://khmuhtadin.com/contact)

**Connect with the creator:**  
[Portfolio](https://khmuhtadin.com) • [Store](https://khaisa.studio/products/) • [LinkedIn](https://www.linkedin.com/in/khmuhtadin/) • [Medium](https://medium.com/@khaisastudio) • [Threads](https://www.threads.com/@khmuhtadin)

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
