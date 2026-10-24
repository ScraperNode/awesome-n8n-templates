# 🔧 Discover monetizable Reddit problems with Apify, Gemini and Google Sheets

> ⚡ **20 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This scheduled workflow uses Apify to search Reddit for problem-focused posts, filters and deduplicates them, asks Google Gemini to identify high-confidence monetizable software opportunities, and then saves the resulting opportunities and scores to Google Sheets.

## How it works
1. Runs daily at 9:00 on a schedule.
2. Uses Apify’s Reddit Scraper actor to search recent Reddit posts (last day, sorted by new) for predefined problem-oriented search terms.
3. Cleans the scraped results into a consistent shape (id, title, body, subreddit, and URL) and removes posts already seen in previous executions.
4. Pre-filters posts by rejecting obvious promotions, hiring/megathreads, low-text posts, and keeping only items that contain strong “problem/pain” signals.
5. Sends the remaining posts to Google Gemini to select only opportunities scoring 75+ and return them as a strict JSON array with evidence, problem, and solution hypotheses.
6. Parses Gemini’s JSON response, filters to keep only valid opportunities with opportunityScore >= 75, and appends or updates the results in Google Sheets keyed by the Reddit post ID.

## Setup
1. Connect an Apify account credential and ensure the Apify Reddit Scraper actor is accessible in your Apify workspace.
2. Add a Google Gemini (PaLM) API credential for the Google Gemini node.
3. Connect Google Sheets OAuth2 credentials and replace YOUR_GOOGLE_SHEET_ID in the Google Sheets node with your target spreadsheet ID.
4. Create a sheet tab (for example “Sheet1”) with headers matching the output fields (id, title, community, url, isOpportunity, opportunityScore, problem, solutionIdea, whyPeoplePay, evidence, category).

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
