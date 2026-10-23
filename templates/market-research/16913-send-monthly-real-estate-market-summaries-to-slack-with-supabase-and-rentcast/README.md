# 📊 Send monthly real estate market summaries to Slack with Supabase and Rentcast

> ⚡ **30 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/zJlncb1T074?si=fnKE7SPh7I-JGdmx

This workflow runs monthly for a configured ZIP code, checks Supabase for recent market rental and sales records, and either reports the existing stats or pulls fresh data from the Rentcast API, upserts it into Supabase, and posts a formatted market update to Slack.

## How it works
1. Runs on a monthly schedule and sets the target ZIP code to analyze.
2. Queries Supabase tables for rental and sales market records for that ZIP code that are older than the start of the current month.
3. If existing data is found, calculates month-over-month changes from the stored history and posts a Slack update (or an admin error message if the history is insufficient).
4. If no current data exists, fetches the latest rental and sales market statistics from the Rentcast Markets API.
5. Upserts the fetched rental and sales statistics (including history and summary fields) into Supabase using the REST endpoint.
6. Calculates month-over-month changes from the newly fetched history and posts a Slack market summary, or posts an error message if the data is incomplete.

## Setup
1. Create a Supabase project with `market_rentals` and `market_sales` tables and columns that match the workflow’s upsert payload (including `zip_code`, `last_updated_date`, and the history fields).
2. Add Supabase credentials in n8n and update the Supabase REST URLs if your project URL differs.
3. Provide a Rentcast API key and set it in the HTTP request header (`X-Api-Key`) for the Rentcast call.
4. Connect your Slack account in n8n and select the channel where the workflow posts updates and error notifications.
5. Update the ZIP code value and adjust the monthly schedule day to match your reporting needs.

## 🔗 Nodes Used

HTTP Request, Slack, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
