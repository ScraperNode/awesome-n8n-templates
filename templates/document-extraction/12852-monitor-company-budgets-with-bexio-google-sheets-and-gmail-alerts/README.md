# 🔬 Monitor company budgets with Bexio, Google Sheets and Gmail alerts

> ⚡ **42 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

**This n8n template allows you to automatically monitor your company's budget by comparing live Bexio accounting data against targets defined in Google Sheets, sending automated weekly email reports. It also exports your financial data from Bexio into a flexible spreadsheet environment.**

Financial overspending often goes unnoticed until it's too late. This workflow transforms reactive accounting into **proactive management** by automatically calculating monthly actuals and flagging budget overages in real-time, eliminating the need for manual spreadsheet updates.


## Who’s it for
This workflow is built for Founders and CFOs who want to replace reactive accounting with proactive financial management. It is the ideal solution for leadership teams needing to eliminate manual data entry, synchronize live Bexio actuals against Google Sheet targets, and receive automated weekly email reports that proactively flag budget overages before they become critical issues.

## How it works
The workflow automates the extraction and analysis of your Bexio accounting journal through several stages:

**Data Extraction:** It uses a recursive pagination loop to fetch journal entries from the Bexio API in batches of 1,000 records.

**Data Synchronization:** It utilizes the "Append or Update" operation in Google Sheets to ensure records stay current without creating duplicates.

**Financial Analysis:** The system reads target thresholds from a "Budgets" sheet and aggregates costs per account by calculating the delta between Debits and Credits.

**Automated Reporting:** A logic engine compares monthly actuals against budgets and generates a summary report sent via Gmail if thresholds are exceeded.

## How to set up
**Credentials:** Connect your Bexio (Bearer Token), Google Sheets (OAuth2), and Gmail accounts in their respective nodes.

**Target Sheet:** In the "Update Records" node, select your specific Google Spreadsheet and target tab for the journal entries. Use this template to create your database - [Google Sheet Template](https://docs.google.com/spreadsheets/d/1ZnaXFqOhcrgMptM2K8k-W0VZTxgyL99_D569GiwTZZk/edit?usp=sharing)

**Budget Configuration:** Clone the template spreadsheet and define your specific metrics and monthly budget limits in the "Budgets" sheet.

**Date Filtering:** Open the "Get Records" node and adjust the from and to query parameters (currently set for the 2025 fiscal year) to match your reporting period.

**Gmail:** Enter the recipient email address in the "To" field of the Gmail node.

## Requirements

**Bexio Account:** Must have API access enabled.

**Google Workspace:** Access to Google Sheets for data storage and Gmail for sending reports.

## How to customize the workflow
**Budget:** You can set budgets for as many metrics as you want for every accounting period.

**Sync Frequency:** The "Schedule Trigger" can be adjusted from its weekly default to daily or hourly for more frequent updates.

**Notification Channels:** Swap the Gmail node for Slack or Microsoft Teams to receive report via different channels.

**Rate Limiting:** If processing a very large journal, increase the "Delay" node duration to remain within Bexio’s API rate limits.

**Pagination Reuse:** The pagination logic can be adapted to retrieve any other Bexio data limited by API batch sizes.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
