# 🔬 Track contract utilization and send risk alerts with Groq and Google Sheets

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs every 6 hours to combine contract and spend data from Google Sheets, calculate utilization per contract, and then update the contracts sheet while sending low- and high-utilization alerts via Gmail and Slack, using Groq to generate insights for underutilized contracts.

## How it works
1. Runs every 6 hours on a schedule.
2. Reads contract records from Google Sheets and keeps only active rows with a non-empty contract ID.
3. Reads spend records from Google Sheets, normalizes key fields, and merges spend with contracts by contract ID.
4. Aggregates spend per contract and calculates utilization as total spend divided by total contract value.
5. For contracts below 0.4 utilization, Groq generates a short insight and recommended action, the workflow writes utilization/risk/action back to Google Sheets, and it sends alerts via Gmail and Slack.
6. For contracts above 0.9 utilization, the workflow updates the contract in Google Sheets as inactive and sends completion notifications via Gmail and Slack; otherwise it updates the contract with the latest utilization and a “No action required” note.

## Setup
1. Add Google Sheets credentials and set the correct spreadsheet ID and sheet names for the Contracts and spend tabs.
2. Ensure the Contracts sheet includes columns used for matching and updates (at least contract_id, total_value, status, utilization , risk,  action , and  last_updated) and the spend sheet includes spend_id, contract_id, amount, date, vendor, and category.
3. Add a Groq API credential for the Groq chat model used to generate low-utilization insights.
4. Add Gmail credentials and set the recipient(s) for the low-utilization and completion emails.
5. Add Slack credentials and select the target channel for low-utilization and completion notifications.

## Additional info
## How To Customize Nodes

- Modify utilization thresholds
- Edit AI prompt
- Adjust Google Sheets mapping
- Customize email/Slack messages


## Add-Ons

- Dashboard integration
- SMS alerts
- Weekly reports
- Vendor scoring
- Contract expiry alerts


## Use Case Examples

- Detect underutilized contracts
- Track contract completion
- Automate procurement monitoring
- Optimize contract usage
- Enable real-time alerts


## Troubleshooting Guide

| Issue             | Possible Cause        | Solution              |
| ----------------- | --------------------- | --------------------- |
| No data processed | Contracts not active  | Check status field    |
| Utilization = 0   | Invalid number format | Ensure numeric values |
| Merge not working | Contract ID mismatch  | Verify field mapping  |
| No alerts         | Credential issues     | Reconnect apps        |


## Need Help?

[Contact WeblineIndia](https://www.weblineindia.com/contact-us.html), if you need help setting up, customizing or [building advanced automation solutions](https://www.weblineindia.com/process-automation-solutions.html).

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
