# 📊 Facebook ads reporting automation with Facebook Graph API and Google Sheets

> ⚡ **638 views** · 📊 [Market Research & Insights](../)

## Description

## Facebook Ads Reporting Automation — Automatically Fetch & Sync Campaign Statistics

This automation enables you to automatically fetch daily campaign data from Facebook Ads without manual exports. It requires connection to the Facebook Graph API and a Google Sheets account where all data is stored and updated in real time.

## How does it work?
The workflow connects to your Facebook Ads account via the Facebook Graph API to retrieve the latest campaign data, including campaign status, spend, results, reach, and other key performance metrics.

Retrieved data is automatically synced to a Google Sheets spreadsheet, making it easy to analyze, report, and share with your team or clients.

The automation runs daily at a scheduled time, ensuring your campaign stats are always up-to-date.

## What can you use it for?
Efficiently track Facebook Ads performance without manual data handling.

Generate real-time reports for marketing teams or clients.

Quickly identify trends and optimize ad spend based on fresh data.

Centralize data from multiple campaigns for better decision-making.

## Requirements:
Active Facebook Ads account with access to Facebook Graph API credentials.
Facebook App with ads_read permissions and a valid access token

Google account with permission to use Google Sheets.

Basic setup of API credentials and Google Sheets integration.

Create a new spreadsheet and name it (e.g., Facebook Campaign Stats). In the first row, create the following column headers (exact order required):

| Id Campaign | Campaign name | Campaign status | Statistic | Impressions | Clicks | CPC | CTR | Conversions | Cost per conversion | Spend money | From | To |

Make sure the sheet is editable by the automation and accessible via Google Sheets API (OAuth2 or service account).

contact: contact@streamlinemakers.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, Facebook Graph API, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
