# 📊 Capture Reddit buyer-intent leads with Apify, Google Gemini, and Sheets

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs daily, scrapes recent Reddit posts via Apify, filters and deduplicates them, uses Google Gemini to score buyer intent and extract monetizable opportunities, and then appends or updates high-intent leads in Google Sheets.

## How it works
1. Runs every day at 09:00 on a schedule.
2. Uses Apify’s Reddit Scraper actor to search Reddit for new posts matching predefined “need/looking for/alternative” search terms and retrieves the dataset results.
3. Normalizes each post to key fields (id, title, body, subreddit, URL) and removes posts already seen in previous executions.
4. Filters out likely junk (promotional, hiring/threads, fiction, too-short posts) and keeps posts that contain strong problem or solution-seeking signals.
5. Sends the remaining posts to Google Gemini to return a JSON array of only opportunities with an intent score (75–100) plus structured fields like problem, evidence, and solution idea.
6. Parses Gemini’s JSON response, verifies the results meet the score and opportunity criteria, and appends or updates the matching rows in Google Sheets.

## Setup
1. Add an Apify OAuth2 connection and ensure you have access to the “Reddit Scraper - Posts, Comments, Search & Subreddits (harshmaur/reddit-scraper)” actor.
2. Add a Google Gemini (PaLM) API credential for the Google Gemini node.
3. Add a Google Sheets OAuth2 connection, set your target spreadsheet ID and sheet, and ensure it has columns for id, title, community, url, isOpportunity, opportunityScore, problem, solutionIdea, whyPeoplePay, evidence, and category.
4. Adjust the Apify search terms, maxPostsCount, and the minimum opportunityScore threshold (default 75) to fit your market and lead volume.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
