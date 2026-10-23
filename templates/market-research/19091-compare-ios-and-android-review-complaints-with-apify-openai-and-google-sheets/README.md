# 📊 Compare iOS and Android review complaints with Apify, OpenAI and Google Sheets

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every Monday morning to scrape recent reviews for your app from Google Play and the Apple App Store via Apify, uses OpenAI to label each negative review with a short complaint theme, and writes a weekly comparison table to Google Sheets highlighting platform-skewed issues.

## How it works
1. Runs on a weekly schedule every Monday at 08:00.
2. Scrapes up to the configured number of reviews from Google Play and the Apple App Store using Apify actors.
3. Merges both review streams, normalizes fields, and labels each review as Android or iPhone.
4. Keeps only longer, low-rated reviews (over 40 characters and 3 stars or below) and skips reviews already seen in previous executions.
5. Sends each remaining review to an OpenAI chat model to extract a 2–4 word complaint label (or "none" for non-complaints).
6. Counts complaint themes per platform, computes how lopsided each theme is between Android and iPhone, and appends the ranked results to a Google Sheets table.

## Setup
1. Add an Apify connection and ensure the Apify actors used (Google Play Reviews Scraper and App Store Scraper) can run within your desired usage limits.
2. Add an OpenAI API credential for the chat model used to label complaints.
3. Add Google Sheets OAuth credentials and select the target spreadsheet and sheet where the weekly table should be appended.
4. Update the app identifiers (Google Play package name and Apple App Store numeric ID), app name, and maxItems value in the configuration step to match your app.
5. (Optional) If you connect the Slack and Notion steps, add Slack and Notion credentials and set the target Slack channel and Notion database ID.

## 🔗 Nodes Used

Google Sheets, Slack, Notion, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
