# 📊 Find software startup opportunities in Reddit posts with Apify, Gemini and Sheets

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This scheduled workflow searches Reddit via Apify for problem-focused posts, filters and deduplicates them, analyzes the best candidates with Google Gemini to identify high-confidence software opportunities, and saves the results to Google Sheets.

## How it works
1. Runs daily at 09:00 on a schedule.
2. Uses Apify’s Reddit Scraper actor to search for new Reddit posts matching problem-oriented search terms from the last day.
3. Normalizes the scraped post fields, removes posts already seen in previous runs, and pre-filters out low-signal, promotional, or irrelevant content.
4. Sends the remaining posts as a batch to Google Gemini to extract and score only high-confidence monetizable software opportunities as JSON.
5. Parses Gemini’s JSON output into individual opportunity items and filters to opportunities with a score of 75+.
6. Appends or updates the qualifying opportunities in Google Sheets, using the Reddit post ID as the unique key.

## Setup
1. Add an Apify OAuth2 connection and ensure you have access to the Apify Reddit Scraper actor (harshmaur/reddit-scraper).
2. Add a Google Gemini (PaLM) API credential for the Google Gemini node.
3. Add a Google Sheets OAuth2 connection, set the target spreadsheet ID and sheet tab in the Google Sheets node, and create the required columns (id, title, community, url, isOpportunity, opportunityScore, problem, solutionIdea, whyPeoplePay, evidence, category).

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
