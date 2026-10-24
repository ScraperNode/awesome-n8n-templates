# 📊 Analyze competitor Instagram Reels with Apify, DeepSeek, and Google Sheets

> ⚡ **35 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to fetch competitors’ latest Instagram Reels via Apify, transcribe each Reel, generate structured content-strategy insights with an OpenAI-compatible model (DeepSeek), and save the results to Google Sheets while deduplicating and retrying failures using an n8n Data Table.

## How it works
1. Runs every day at 09:00 on a schedule.
2. Loads the competitor list from Google Sheets and keeps only rows marked as active.
3. For each competitor, uses Apify to fetch a limited set of their most recent Instagram Reels and normalizes them into a consistent Reel URL/key format.
4. Checks an n8n Data Table registry to skip Reels that were already processed successfully and to allow retrying previously failed Reels up to three attempts.
5. For each Reel to process, runs an Apify transcript actor to extract the Reel’s text transcript and validates whether the transcript is usable.
6. Sends the Reel metadata, caption, and transcript to a DeepSeek (OpenAI-compatible) chat model to generate a structured JSON analysis, then validates required fields.
7. Appends or updates the Reel’s analysis in a Google Sheets “Reel Intelligence” tab and records success or failure back to the registry (optionally compiling a Telegram digest).

## Setup
1. Create and connect Google Sheets OAuth credentials, then select your spreadsheet in the Google Sheets nodes and ensure you have “Competitors” and “Reel Intelligence” tabs with a “reel_key” column in the output tab.
2. Add Apify credentials and ensure the `@apify/n8n-nodes-apify` community node is installed, then verify the two Apify Actor IDs used for Reels discovery and transcript extraction.
3. Add an OpenAI API credential configured with DeepSeek’s base URL (or another OpenAI-compatible provider) and keep the model set to `deepseek-flash`.
4. Populate the “Competitors” sheet with `instagram_username`, an `active` flag, and optionally `max_reels_per_check` to control how many recent Reels are analyzed per run.
5. (Optional) Enable Telegram by adding Telegram credentials, setting the chat ID, and updating the workflow condition to turn the digest on.

## Requirements
- An Apify account — the two Actors used here are paid per event (a typical run of 10 short Reels costs roughly $0.05, or about $0.005 per Reel).
- A Google account with Google Sheets access
- An OpenAI-compatible API key for the analysis step (DeepSeek is used by default)

## Customization
- Point the model node at any OpenAI-compatible endpoint. If you switch away from DeepSeek, also delete the extraBody option in the model node — it turns off DeepSeek's reasoning mode, which other providers may reject.
- Swap the Actor IDs in the two Apify nodes to run any other Apify Actor
- Enable the Telegram digest node (disabled by default) for a morning summary

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
