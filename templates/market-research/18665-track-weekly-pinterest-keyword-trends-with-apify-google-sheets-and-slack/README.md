# 📊 Track weekly Pinterest keyword trends with Apify, Google Sheets, and Slack

> ⚡ **44 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every Monday morning to search Pinterest for a chosen keyword using Apify’s Pinterest Search Scraper, filters and ranks the results by engagement, and saves the top pins with their metadata (URL, board, creator, image, and stats) into Airtable.

## How it works
1. Runs every Monday at 07:00 on a schedule.
2. Sends the configured keyword and max item count to Apify (dami_studio/pinterest-search-scraper) to fetch Pinterest search results.
3. Keeps only valid, non-promoted pins that meet the minimum reaction threshold.
4. Sorts the remaining pins by reaction count in descending order.
5. Maps each pin’s fields (URL, title/description, board and creator info, media/link details, and engagement stats) into an Airtable-friendly record.
6. Creates a new record in Airtable for each pin.

## Setup
1. Add an Apify API token credential and ensure the workflow can run the actor dami_studio/pinterest-search-scraper.
2. Add an Airtable credential, then select the target Base and Table in the Airtable node.
3. Create matching Airtable fields (for example: Pin URL, Title, Description, Creator, Creator name, Board, Board URL, Reactions, Comments, Format, Image, Links out to, Posted, Found via).
4. Update the keyword, maxItems, and minReactions values to match what you want to research.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
