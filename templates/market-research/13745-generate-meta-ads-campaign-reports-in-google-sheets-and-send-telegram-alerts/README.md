# 📊 Generate Meta Ads campaign reports in Google Sheets and send Telegram alerts

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## Hi, I’m Amina

I built this workflow to remove the daily pain of Meta Ads reporting. If you manage multiple ad accounts, you know how time-consuming it is to open Ads Manager, export campaign data, clean spreadsheets, and send updates to clients.

This automation pulls campaign performance directly from the Meta Ads API, writes structured data into Google Sheets (per client), generates a performance summary, and sends a Telegram alert when the report is updated.

It transforms manual reporting into a fully automated monitoring system.

---

## What it does

- Reads a list of clients/ad accounts from a Google Sheets “client register”
- Fetches campaign-level performance data from the Meta Ads API
- Splits the campaign results into clean, row-ready records
- Appends each campaign as a new row in the client’s Google Sheets report
- Calculates aggregated performance metrics
- Applies campaign diagnostics logic
- Sends a Telegram notification with summary + alerts
- Runs automatically on a schedule (daily/weekly)

---

## How it works

1. **Schedule Trigger** starts the workflow on a defined schedule.

2. **Google Sheets (Get rows)** loads your client register (one row per client).  
   Use this template structure for the client register:  
   👉 [Client Register Template](https://docs.google.com/spreadsheets/d/11repzs1T85xH0waYFkngj8nNzqisWZ27K4gjNKVNlZU/edit?gid=0#gid=0)

   The register should include:
   - `ad_account_id`
   - `access_token`
   - `report_sheet_url`

3. **Loop Over Items** processes each client individually.

4. **Code (ctx)** prepares the current client context (account ID, token, report sheet URL).

5. **HTTP Request** calls the Meta Ads Insights endpoint and retrieves campaign-level metrics.

6. **IF** checks the response (skip if no data).

7. **Merge** combines client context + API response.

8. **Code (Split campaigns)** converts the campaigns array into individual items (one per campaign) and formats metrics for reporting.

9. **Code (Extract spreadsheetId)** extracts the spreadsheet ID from the report URL.

10. **Google Sheets (Append row)** writes each campaign row into the client’s report sheet.  
    Example report structure:  
    👉 [Campaign Report Template](https://docs.google.com/spreadsheets/d/1FJfNoZK6M1z0zsZVK41MnPmZ2Sy0HQEARCf7gojVXVY/edit?gid=660983368#gid=660983368)

11. **Code (Summary & Status Logic)** aggregates totals and applies campaign diagnostics.

12. **Telegram** sends a structured performance summary including:
    - Total metrics
    - Campaign-level highlights
    - Status alerts
    - Direct link to the report
---

## Data captured (campaign level)

- Ad account ID  
- Report date (date_start)  
- Campaign name  
- Spend  
- Impressions  
- Clicks  
- CTR  
- CPM  
- CPC  
- Date start / Date stop  

---

## Summary Generation Logic

After writing campaign rows to Google Sheets, the workflow generates a performance overview using a JavaScript node.

### Aggregated calculations:

- **Total Spend** = sum of all campaign spend values  
- **Total Impressions** = sum of impressions  
- **Total Clicks** = sum of clicks  
- **CTR** = (Total Clicks / Total Impressions) × 100  
- **CPC** = Total Spend / Total Clicks  

The workflow then:

- Formats the totals into a readable performance summary  
- Lists campaign highlights  
- Applies status diagnostics  
- Appends the Google Sheets report link  
- Sends everything via Telegram  

This provides both structured spreadsheet reporting and a quick executive snapshot.

---

## Status Logic (Campaign Diagnostics)

Each campaign is automatically evaluated based on CTR and CPC thresholds.

### Status Rules

**Weak Creative (❌)**  
If `CTR &lt; 1.5%`  
→ Indicates low engagement. The ad creative may need improvement.

**Expensive Click (⚠)**  
If `CPC &gt; 0.5`  
→ Indicates high cost per click. Audience targeting or bidding strategy may need optimization.

**Good Candidate to Scale (🔥)**  
If `CTR ≥ 2%` AND `CPC ≤ 0.5`  
→ Strong performance. The campaign may be suitable for scaling.

**OK (✅)**  
If none of the above conditions are met  
→ Campaign performance is within an acceptable range.

The status appears directly in the Telegram notification, allowing marketers to quickly identify which campaigns need attention without logging into Ads Manager.

---

## How to set up

Estimated setup time: 10–20 minutes.

1. Create a **Google Sheets client register** with:
   - `ad_account_id`
   - `access_token`
   - `report_sheet_url`
2. Connect **Google Sheets** credentials in n8n.
3. Add your **Meta Ads API access token** (do not hardcode API keys in nodes).
4. Connect your **Telegram bot** and set the destination chat ID.
5. Adjust the schedule (daily/weekly) and run a test execution.

---

## Requirements

- Meta Ads API access token (Facebook Graph API)
- Google Sheets credentials
- Telegram bot token + chat ID

---

## How to customize

- Add additional metrics (e.g., conversions, purchases, ROAS) by extending Meta API fields.
- Modify CTR/CPC thresholds in the Status Logic section.
- Change the report structure in the “Split campaigns” step.
- Switch notifications from Telegram to Slack or Email.
- Add filters (e.g., only active campaigns, only spend &gt; X).

---

## Benefits

- Fully automated reporting
- Multi-client support
- Dynamic spreadsheet handling
- Built-in KPI calculations
- Automated campaign diagnostics
- Instant performance alerts
- Scalable agency-ready structure

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
