# 🎣 Score local Google Maps leads with Scavio and Google Sheets

> ⚡ **12 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow runs weekly to read “niche in city” searches from Google Sheets, uses Scavio to pull up to three pages of Google Maps results per query, filters and scores the businesses, and appends ranked leads (with contact details and Maps links) back to Google Sheets.

## How it works
1. Runs weekly on a schedule.
2. Reads search queries from a Google Sheets tab and processes them one query at a time.
3. Uses Scavio’s Google Maps Search to fetch up to three result pages (offsets 0, 20, and 40) for each query with a short delay between requests.
4. Filters results to keep only businesses whose address matches the market terms after “in …” in the query and drops duplicates across pages.
5. Scores each business based on missing website, low rating, few reviews, and missing phone, and adds a list of score reasons.
6. Appends the scored leads (name, address, phone, website, rating, reviews, category, score, opportunities, and a Google Maps link) to a Google Sheets “Leads” tab.

## Setup
1. Install the Scavio community node (`n8n-nodes-scavio`) and add a Scavio API credential.
2. Add a Google Sheets OAuth2 credential.
3. Create a Google Sheet with a “Searches” tab containing a `query` column and a “Leads” tab with columns to match the appended fields.
4. Select your spreadsheet and the correct sheet/tab names in the “Read searches” and “Append leads” Google Sheets nodes.
5. Enter each search in the format `niche in city` (for example, `plumbers in Austin, TX`) to enable the market filtering.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
