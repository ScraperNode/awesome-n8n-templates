# 📊 Meta ads to Google Sheets: daily & historical campaign performance report

> ⚡ **705 views** · 📊 [Market Research & Insights](../)

## Description

## Overview

This template automatically exports **Meta (Facebook) Ads campaign performance** into **Google Sheets** — both **daily** and for **historical backfills**. It’s ideal for performance marketers, agencies, and analytics teams who want a reliable data pipeline from Meta Ads into their reporting stack.

## What this workflow does

- Runs a **daily cron job** to pull *yesterday’s* campaign-level performance from the Meta Ads Insights API.
- Flattens the API response and calculates key KPIs like **CPL, CPA, ROAS, CTR, CPC, CPM, frequency** and more.
- Appends one row per **campaign per day** to a Google Sheet (for dashboards and further analysis).
- Provides a separate **Manual Backfill** section to import historical data using a `time_range` parameter (e.g. last 12–24 months).

## Use cases

- Build Looker Studio / Power BI dashboards on top of a clean, daily Meta Ads dataset.
- Track ROAS, CPL, CPA, CTR, and frequency trends over time.
- Combine campaign data with CRM or ecommerce data in the same spreadsheet.
- Quickly backfill past performance when onboarding a new Meta Ads account.

## How it works

1. **Daily Incremental Flow**
   - A `Schedule Trigger` runs every day at 05:00.
   - The `Set config` node defines ad account, date preset (`yesterday`), and Google Sheet details.
   - The `Meta Insights` node calls the Facebook Graph `insights` edge at `level=campaign`.
   - The `Code` node flattens the data and derives CPL, CPA, ROAS, and other KPIs.
   - The `Google Sheets` node appends the rows to your `Meta_Daily_Data` sheet.

2. **Manual Backfill Flow**
   - A `Manual Trigger` lets you run the flow on demand.
   - The `Set backfill config` node defines `backfillSince` and `backfillUntil`.
   - The `Meta Insights (time_range)` node fetches performance for that historical range.
   - The same transform logic is applied, and rows are appended to the same sheet.

## Prerequisites

- A Meta Business account with:
  - A **system user** and a **long-lived access token** with `ads_read` / `read_insights`.
- A **Google Sheet** with a header row that matches the mapped column names.
- n8n credentials for:
  - **Facebook Graph API**
  - **Google Sheets OAuth2**

## Setup steps

1. Import this template into your n8n instance.
2. Open the `Set config` and `Set backfill config` nodes:
   - Set your `adAccountId` (e.g. `act_123456789012345`).
   - Set your `sheetId` (Google Sheet ID) and sheet name (e.g. `Meta_Daily_Data`).
3. Configure your **Facebook Graph API** and **Google Sheets** credentials in n8n.
4. (Optional) Run the **Manual Backfill** section for your desired historical ranges (e.g. per quarter).
5. Enable the workflow so the **Daily Incremental** section runs automatically.

## Customization

- Change `level` from `campaign` to `adset` or `ad` if you need more granular reporting.
- Add **breakdowns** (e.g. `publisher_platform`, `platform_position`) to split by platform and placement.
- Extend the transform code with additional KPIs or dimensions that match your reporting needs.
- Use a separate sheet for raw data and build dashboards on top of a cleaned or pivoted view.

## Consulting & support

If you need help with:

- **E-Commerce Strategy & Development**
(Shopify, Shopware 6, Magento 2, SAP Commerce Cloud, etc.)
- **Growth & Performance Marketing**
(Google / Meta / Microsoft Ads, etc.)
- **Data & Analytics Setups**
(tracking, dashboards, attribution, gdpr, etc.)

please reach out to **Serendipity Technologies**:

👉 [https://www.serendipity.at](https://www.serendipity.at)

We can help you turn this workflow into a full analytics stack and reporting system tailored to your business.

## 🔗 Nodes Used

Google Sheets, Facebook Graph API, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
