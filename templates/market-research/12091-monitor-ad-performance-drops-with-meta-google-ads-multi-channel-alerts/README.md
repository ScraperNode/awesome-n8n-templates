# 📊 Monitor ad performance drops with Meta & Google Ads + multi-channel alerts

> ⚡ **1,250 views** · 📊 [Market Research & Insights](../)

## Description

## How it works
This workflow monitors Meta Ads and Google Ads campaigns on a daily schedule to detect performance drops. It fetches yesterday’s campaign data, standardizes metrics, and calculates CTR and ROAS against fixed benchmarks. Campaigns that fall below thresholds are flagged automatically. Alerts are then sent across multiple channels and all results are logged in Google Sheets for tracking.

## Step-by-step
- **Step 1: Fetch ad performance data**
  - **Schedule Trigger (Daily Ad Check2)** – Runs the Meta Ads performance check at the scheduled time.
  - **HTTP Request (Fetch Meta Ads Data)** – Retrieves campaign metrics from the Meta Ads API.
  - **Set (Set Benchmarks)** – Normalizes Meta Ads data and assigns platform details.
  - **Schedule Trigger (Daily Ad Check3)** – Runs the Google Ads performance check at a separate scheduled time.
  - **Google Ads (Get many campaigns)** – Fetches campaign performance data from Google Ads.
  - **Set (Set Benchmarks4)** – Normalizes Google Ads data and assigns platform details.

- **Step 2: Detect performance drops**
  - **Code (Detect Performance Drop)** – Calculates CTR and ROAS, compares them with predefined benchmarks, and flags drops.
  - **If** – Filters only campaigns where a performance drop is detected.
  - **Split In Batches (Loop Over Items)** – Processes each affected campaign individually.

- **Step 3: Alert and log results**
  - **WhatsApp (Send message1)** – Sends instant WhatsApp alerts for critical visibility.
  - **Slack (Send a message)** – Posts detailed alerts to a Slack channel.
  - **Gmail (Send a message4)** – Sends email notifications with full campaign metrics.
  - **Code (Code in JavaScript)** – Recombines campaign data after notifications.
  - **Wait (Wait1)** – Ensures alert delivery before logging.
  - **Google Sheets (your-google-sheets-name)** – Appends or updates campaign records for reporting and audit history.

## Why use this?
- Catch CTR and ROAS drops before ad spend is wasted.
- Monitor Meta Ads and Google Ads in a single automated flow.
- Notify teams instantly via WhatsApp, Slack, and Email.
- Keep a centralized performance log for analysis and reporting.
- Reduce manual checks with consistent daily monitoring.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Google Ads, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
