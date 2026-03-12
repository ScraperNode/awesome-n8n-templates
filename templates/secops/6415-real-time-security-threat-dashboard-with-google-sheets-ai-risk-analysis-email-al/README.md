# 🔒 Real-time security threat dashboard with Google Sheets, AI risk analysis & email alerts

> ⚡ **158 views** · 🔒 [SecOps & Security Automation](../)

## Description

👤 Who it’s for
Blue Team leads, CISOs, and SOC managers who want automated visibility into threat metrics, endpoint alerts, and response actions — without needing a full SIEM or BI platform.

Great for teams using Modules 1–5 and now ready to report, review, or share BlueOps data across stakeholders.

⚙️ How it works / What it does
Fetches threat + response data from up to 5 Google Sheets

Aggregates data into four key slices:

summary_metrics: Total threats, actions, endpoints

daily_trends: Time-based charting

top_assets: High-risk endpoints or systems

actions_taken: Logged IR activity

Generates a clean HTML report and sends via email

Logs report summary to a central reporting tracker sheet

Optionally converts and stores PDF versions or links

🛠️ How to set up
Google Sheets:
Connect your live sheets from previous BlueOps modules (M1–M5)

Email Setup:
Insert sender credentials and recipient(s)

Customize Your Charts:
Edit the “📈 Format Charts” and “📋 Structure Report Body” nodes

Trigger Options:
Run weekly, monthly, or on-demand via Webhook/Cron

Add PDF Generator (Optional):
Use Puppeteer, HTML → PDF services, or internal scripts

📋 Requirements
Google account with access to all BlueOps logs

SMTP or Gmail access for report delivery

Optional: PDF storage service or HTML → PDF logic

Previous modules (M1–M5) to populate threat/response data

🧩 How to customize the workflow
Swap out Google Sheets for Supabase or Notion

Modify visual output (color, layout, sections) using HTML nodes

Export to Airtable, Slack, or external BI tools

Add chart images using ChartJS, QuickChart API, or CloudConvert

📦 This module is modular, professional, and presentation-ready.
All sections are labeled, editable, and safe for team-wide sharing.

📈 This module is the final piece of the CYBERPULSEBlueOps automation suite.
Get the full reporting engine and link with live BlueOps modules at
👉 cyberpulsesolutions.com/blueops

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
