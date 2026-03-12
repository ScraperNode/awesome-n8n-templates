# 📊 Influencer brand safety auditor with engagement analysis

> ⚡ **114 views** · 📊 [Market Research & Insights](../)

## Description

Here is the template specification based on the provided workflow and guidelines.


# Audit Instagram Influencer Safety and Engagement to Slack


## Description
Protect your brand reputation and optimize your marketing budget by automatically vetting potential influencer partners. Manually analyzing engagement rates and reading through hundreds of comments to detect brand safety risks is time-consuming and prone to error.


This workflow streamlines the due diligence process. By simply entering an Instagram username into a form, the system scrapes recent data, calculates engagement metrics to detect potential fake followers or bot activity, and uses AI to scan content for offensive language or competitor mentions. The final detailed audit report is delivered instantly to your Slack channel and logged in Google Sheets for record-keeping.


## Who is this for
- **Influencer Marketing Managers:** To quickly vet creators before sending collaboration offers.
- **Digital Agencies:** To perform scalable due diligence for client campaigns.
- **Brand Managers:** To ensure potential partners align with brand safety guidelines and do not promote direct competitors.


## How it works
1.  **Input:** The workflow starts with an **n8n Form** where you enter the influencer’s Instagram handle and optional competitor names.
2.  **Data Extraction:** It triggers **Apify** (using the Instagram Scraper) to fetch the profile’s statistics and their most recent 30 posts.
3.  **Engagement Analysis:** A **Code Node** calculates the average engagement rate. It logic flags the account as "Suspicious" if the rate is unnaturally low (indicating fake followers) or suspiciously high (indicating bot farms).
4.  **AI Safety Check:** Recent post captions are aggregated and sent to **OpenAI**. The AI analyzes the text for risk flags (controversy, profanity), competitor mentions, and assigns a safety score.
5.  **Reporting:** The workflow saves the raw request and results to **Google Sheets** and sends a formatted summary report to a specific **Slack** channel.


## Requirements
- **Apify Account:** You will need an API token and access to the [Instagram Scraper actor](https://apify.com/apify/instagram-scraper).
- **OpenAI Account:** An API key to perform the content safety analysis.
- **Google Cloud Platform:** Credential with access to the Google Sheets API.
- **Slack Workspace:** A configured Slack app/bot to post messages.


## How to set up
1.  **Configure Credentials:** Connect your Apify, Google Sheets, OpenAI, and Slack accounts in the respective nodes.
2.  **Setup Google Sheet:** Create a Google Sheet with two tabs:
    *   `Audit Requests` (Columns: `username`, `timestamp`)
    *   `Audit Results` (Columns: `username`, `followers`, `engagementRate`, `status`, `safetyScore`, `riskFlags`, `recommendation`)
3.  **Configure Variables:** Open the **Workflow Configuration** node (Set node) to input:
    *   Your `apifyApiToken`.
    *   `engagementThresholdLow` (default is 1%).
    *   `engagementThresholdHigh` (default is 10%).
4.  **Update IDs:**
    *   In the **Store Audit Request** and **Store Audit Results** nodes, select your created Google Sheet.
    *   In the **Send Audit Report to Slack** node, select the channel where you want reports to appear.


## How to customize the workflow
- **Adjust Thresholds:** Change the `engagementThresholdLow` or `engagementThresholdHigh` values in the **Workflow Configuration** node to fit your specific industry benchmarks.
- **Modify AI Criteria:** Edit the system prompt in the **AI Content Safety Audit** node to check for specific brand values, specific keywords, or tone of voice requirements.
- **Change Output:** Replace the Slack node with an **Email** node (Gmail/Outlook) or a **Notion** node if you prefer to store reports in a project management database.![スクリーンショット 20251215 114120.png](fileId:3656)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
