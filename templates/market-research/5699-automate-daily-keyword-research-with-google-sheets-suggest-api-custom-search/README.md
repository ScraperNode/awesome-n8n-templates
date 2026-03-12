# 📊 Automate daily keyword research with Google Sheets, Suggest API & Custom Search

> ⚡ **1,040 views** · 📊 [Market Research & Insights](../)

## Description

## Who's it for

This workflow is perfect for SEO specialists, marketers, bloggers, and content creators who want to automate keyword research using Google Sheets, Google Suggest, and Google Custom Search. Ideal for those building content pipelines, researching trends, or powering AI content generation with fresh search data.


## What it does

This workflow automates the process of discovering a new keyword daily. It:

- Rotates through a keyword list in Google Sheets

- Selects one keyword per day

- Fetches autocomplete suggestions from Google Suggest

- Queries the Google Custom Search API for top results

- Returns structured JSON containing titles, links, and snippets


## How it works

1. Manual Trigger – Initiates workflow manually

2. Google Sheets – Reads keywords from a sheet (column: Title or Keyword)

3. Code Node – Selects a daily keyword based on the number of days since July 4, 2025

4. Set Node – Saves the selected keyword as seed_keyword

5. HTTP Request – Fetches autocomplete suggestions from Google Suggest API

6. Function Node – Parses suggestions into usable items

7. HTTP Request – Calls Google Custom Search API for each suggestion

8. Code Node – Formats the search results into JSON


## How to set up

- Connect your Google Sheets OAuth2 credentials in n8n

- Use credential variables for Google Custom Search (⚠️ do not hardcode your key and cx)

- Replace the sample sheet ID with your own

- Run the workflow manually or schedule it daily


## Requirements

- Google account

- Enabled Custom Search JSON API on Google Cloud

- Google Sheet with a column labeled Title or Keyword

- n8n instance (cloud or self-hosted)


## How to customize

- Change the start date to control the keyword rotation cycle

- Randomize keyword selection instead of rotating

- Enrich results using tools like Ahrefs or SEMrush

- Push final output to Telegram, Notion, Slack, or Airtable

- Add filtering logic based on CPC, volume, or duplicates


## Example Sheet

📄 [Click Here](https://docs.google.com/spreadsheets/d/12GNwRDjdfyDvGbC3Vqiy7lIVdQJcPz3D42xpUOUVpbc/edit?usp=sharing) to access the example Google Sheet

Sheet must contain a column Title or Keyword in the first row:

Title

 - teknologi AI

 - berita viral

 - tren startup

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
