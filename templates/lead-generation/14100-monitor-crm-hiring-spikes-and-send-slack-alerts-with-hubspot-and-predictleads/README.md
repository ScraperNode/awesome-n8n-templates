# 🎣 Monitor CRM hiring spikes and send Slack alerts with HubSpot and PredictLeads

> ⚡ **124 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Monitor CRM accounts for hiring spikes by enriching HubSpot companies with PredictLeads job data and alerting your team via Slack.

This workflow pulls all companies from your HubSpot CRM, checks each one against the PredictLeads Job Openings API for target roles (sales, engineering, marketing, product, data), compares the current count to historical data stored in Google Sheets, and flags any company where hiring jumped more than 50%. Flagged companies get updated in HubSpot with a hiring signal and trigger a Slack alert so your sales team can act fast.

How it works:
1. Schedule trigger runs the workflow daily at 9 AM.
2. Retrieves all companies from HubSpot CRM (domain, name, ID).
3. Loops through each company and fetches job openings from PredictLeads.
4. Filters jobs to target roles (sales, engineering, marketing, product, data).
5. Reads the previous job count for that company from Google Sheets.
6. Calculates percentage change between current and historical counts.
7. If hiring increased more than 50%, flags it as a spike.
8. Updates the HubSpot company record with a hiring signal property.
9. Sends a Slack alert with the company name, role count, and percentage change.
10. Updates Google Sheets with the latest count regardless of spike status.

Setup:
- Connect your HubSpot CRM (OAuth2) with company read/write access.
- Create a Google Sheet with a "HistoricalCounts" tab containing columns: domain, company_name, job_count, previous_count, percent_change, check_date.
- Connect a Slack bot to the channel where you want hiring alerts.
- Add your PredictLeads API credentials (X-Api-Key and X-Api-Token headers).

Requirements:
- HubSpot CRM account with OAuth2 credentials.
- Google Sheets OAuth2 credentials.
- Slack OAuth2 credentials (bot with chat:write permission).
- PredictLeads API account (https://docs.predictleads.com).

Notes:
- The 50% spike threshold can be adjusted in the IF node.
- Target roles are configured in the Filter Target Roles code node -- add or remove roles as needed.
- The workflow updates historical data on every run, so spike detection improves over time.
- PredictLeads Job Openings API docs: https://docs.predictleads.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, HubSpot, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
