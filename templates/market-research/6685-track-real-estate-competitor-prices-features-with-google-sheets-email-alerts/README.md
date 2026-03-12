# 📊 Track real estate competitor prices & features with Google Sheets & email alerts

> ⚡ **318 views** · 📊 [Market Research & Insights](../)

## Description

# Competitor Price & Feature Tracker for Real Estate Projects

## Overview
This solution monitors competitor pricing and features for real estate projects by fetching data from a competitor API, parsing it, logging it to Google Sheets, and sending email alerts for significant price changes. It runs on a scheduled basis to keep real-time track of market trends.

## Operational Process
- **Set Cron**: Triggers the workflow on a scheduled basis (e.g., hourly).
- **Fetch Competitor Data**: Performs GET requests to retrieve competitor pricing and feature data (e.g., https://api.competitor.com).
- **Wait For Data**: Introduces a delay to ensure data is fully retrieved.
- **Parse Data**: Processes and extracts relevant pricing and feature details.
- **Log to Google Sheets**: Appends the parsed data to a Google Sheet for tracking.
- **Check Price Change**: Evaluates if there’s a significant price change.
- **Send Alert Email**: Sends an email notification if a price change is detected.
- **No Action for Minor Changes**: Skips action if no significant price change is found.

## Implementation Guide
- Import the workflow JSON into n8n.
- Configure the Cron node for the desired schedule (e.g., every hour).
- Set up the HTTP node with the competitor API URL (e.g., https://api.competitor.com).
- Configure Google Sheets integration and specify the log sheet.
- Test with a sample API call and verify email alerts.
- Adjust price change thresholds in the `Check Price Change` node as needed.

## Requirements
- HTTP request capability for API data retrieval.
- Google Sheets API for data logging.
- Email service (e.g., SMTP) for alerts.
- n8n for workflow automation and scheduling.

## Customization Options
- Adjust the Cron schedule for different intervals (e.g., daily).
- Modify the HTTP node to fetch additional competitor data (e.g., features, availability).
- Customize email alert content in the `Send Alert Email` node.
- Enhance Google Sheets log with additional fields (e.g., timestamp, competitor name).
- Add Slack or WhatsApp notifications for additional alert channels.

## 🔗 Nodes Used

Cron, Send Email, Function, Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
