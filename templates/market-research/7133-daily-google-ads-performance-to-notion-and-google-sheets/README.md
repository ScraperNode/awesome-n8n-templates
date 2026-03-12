# 📊 Daily Google Ads performance to Notion and Google Sheets

> ⚡ **1,456 views** · 📊 [Market Research & Insights](../)

## Description

## Description

This workflow automates the daily reporting of Google Ads campaign performance. It pulls click and conversion data from the Google Ads API, merges both datasets, and stores the results into Notion databases and Google Sheets.

It includes a campaign-level log and a daily performance summary. The workflow is triggered automatically every day at **08:00 AM**, helping marketing teams maintain a consistent and centralized reporting system without manual effort.

---

## How It Works

1. **Scheduled Trigger at 08:00 AM**  
   The workflow begins with a `Schedule Trigger` node that runs once per day at 08:00.

2. **Set Yesterday’s Date**  
   The `Set` node defines a variable for the target date (yesterday), which is used in the API queries.

3. **Query Google Ads API – Clicks & Cost**  
   The first HTTP request pulls campaign-level metrics:
   - `campaign.id`, `campaign.name`  
   - `metrics.clicks`, `metrics.impressions`, `metrics.cost_micros`

4. **Query Google Ads API – Conversions**  
   The second HTTP request pulls conversion-related data:
   - `metrics.conversions`, `segments.conversion_action_name`

5. **Split and Merge**  
   Both responses are split into individual campaign rows and merged using:
   - `campaign.id`  
   - `segments.date`  

6. **Store Campaign-Level Data**  
   - Stored in Notion database: **"Google Ads Campaign Tracker"**  
   - Appended to Google Sheets tab: **"Campaign Daily Report"**

7. **Generate Daily Summary**  
   A code node calculates daily totals across all campaigns:
   - Total impressions, clicks, conversions, cost
   - Unique conversion types  
   The summary is stored in:
   - Notion database: **"Google Ads Daily Summary"**  
   - Google Sheets tab: **"Summary Report"**

---

## Setup Steps

### 1. Schedule the Workflow
- The workflow is triggered using a `Schedule Trigger` node
- Set the schedule to run **every day at 08:00 AM**
- Connect it to the `Set Yesterday Date` node

### 2. Google Ads API Access
- Create a Google Ads developer account and obtain a **developer token**
- Set up OAuth2 credentials with Google Ads scope
- In n8n, configure the **Google Ads OAuth2 API** credential
- Ensure HTTP request headers include:
  - `developer-token`
  - `login-customer-id`
  - `Content-Type: application/json`

### 3. Notion Database Setup
Create two databases in Notion:
- **Google Ads Campaign Tracker**
  - Fields: `Campaign Name`, `Campaign ID`, `Impressions`, `Clicks`, `Cost`, `Conversion Type`, `Conversions`, `Date`
- **Google Ads Daily Summary**
  - Fields: `Date`, `Total Impressions`, `Total Clicks`, `Total Conversions`, `Total Cost`, `Conversion Types`
- Share both databases with your Notion integration

### 4. Google Sheets Setup
- Create a spreadsheet with two tabs:
  - `Campaign Daily Report` → for campaign-level rows
  - `Summary Report` → for daily aggregated metrics
- Match all column headers to the workflow fields
- Connect your Google account to n8n using **Google Sheets OAuth2**

---

## Output Summary

**Notion Databases:**
- `Google Ads Campaign Tracker`: stores individual campaign metrics
- `Google Ads Daily Summary`: stores daily totals and conversion types

**Google Sheets Tabs:**
- `Campaign Daily Report`: per-campaign data
- `Summary Report`: aggregated daily performance

## 🔗 Nodes Used

Google Sheets, HTTP Request, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
