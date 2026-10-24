# 🔬 Detect SaaS subscription leaks with Google Drive, Gmail, OpenAI, and Slack

> ⚡ **15 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs weekly (or manually) to audit SaaS spend by combining corporate card CSVs from Google Drive, invoice/receipt emails from Gmail parsed with OpenAI, and a SaaS inventory in Google Sheets, then flags potential waste and sends a savings report to Google Sheets, email, and Slack.

## How it works
1. Runs on a manual trigger or every Monday at 9 AM and loads configuration values like folder IDs, Google Sheet ID, thresholds, report email, and Slack channel.
2. Pulls corporate card statement CSV files from Google Drive, downloads them, parses the rows, and normalizes transactions into a consistent charge format.
3. Fetches recent invoice and receipt emails from Gmail, batches them, and uses OpenAI (gpt-4o-mini) to extract structured SaaS invoice line items.
4. Reads the “SaaS Inventory” tab from Google Sheets and merges it with the card charges and extracted invoice data.
5. Cross-references all sources to detect issues such as zombie charges, duplicate charges, unused tools, seat waste, price increases, overlapping tools, and shadow subscriptions, and calculates potential monthly and annual savings.
6. If leaks are found, OpenAI (gpt-4o-mini) generates a prioritized cancellation/optimization plan and the workflow logs findings to Google Sheets, emails an HTML report via Gmail, and posts a summary to Slack.
7. If no leaks are found, the workflow ends without sending any reports.

## Setup
1. Add Google Drive OAuth2 credentials and set the statements folder ID in the configuration so the workflow can find and download your card-statement CSVs.
2. Add Gmail OAuth2 credentials and confirm the Gmail search query plus the finance report recipient address used for fetching invoices and sending the report.
3. Add an OpenAI API credential to enable invoice extraction and the cancellation/optimization plan generation.
4. Add Google Sheets OAuth2 credentials and set the Google Sheet ID, ensuring it contains a “SaaS Inventory” tab for input and a “Leak Report” tab for appended findings.
5. Add Slack OAuth2 credentials and set the target Slack channel name in the configuration for posting the alert.
6. Review and adjust configuration thresholds (for example, unusedDays, minSeatUtilization, currency, dateFormat, and debitsAreNegative) to match your data and reporting needs.

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Gmail, Schedule Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
