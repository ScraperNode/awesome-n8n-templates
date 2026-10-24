# 📊 Send monthly rent and sales market updates to Slack with Rentcast and Supabase

> ⚡ **39 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/zJlncb1T074

This workflow runs monthly, checks Supabase for up-to-date real estate market records for a configured ZIP code, and either reports existing month-over-month rent and sale trends or fetches fresh market stats from the Rentcast API, upserts them into Supabase, and posts to Slack.

## How it works
1. Runs on a monthly schedule and sets the target ZIP code to analyze.
2. Queries Supabase for rental and sales market records for that ZIP code that are older than the start of the current month.
3. If prior data exists, calculates the last 3 months of average rent and average sale price changes from Supabase history fields and posts a status summary to Slack (or alerts if comparisons are not possible).
4. If no up-to-date data exists, requests the latest market statistics from the Rentcast markets API for the same ZIP code.
5. Upserts the returned rental and sales metrics (including history) into Supabase tables for market_rentals and market_sales.
6. Computes month-over-month changes from the newly fetched history and posts the formatted market update to Slack (or sends an error alert if insufficient data is returned).

## Setup
1. Create/connect Supabase credentials and ensure the market_rentals and market_sales tables exist with columns that match the fields being written (for example zip_code, last_updated_date, and history_rentals/history_sales).
2. Add your Rentcast API key and update the HTTP request header (X-Api-Key) and any query parameters (ZIP code, historyRange) as needed.
3. Connect Slack OAuth credentials and set the target channel for all Slack messages.
4. Update the ZIP code value and adjust the monthly schedule timing to match your reporting cadence.

## 🔗 Nodes Used

HTTP Request, Slack, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
