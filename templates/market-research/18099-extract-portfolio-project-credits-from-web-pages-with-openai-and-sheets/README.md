# 📊 Extract portfolio project credits from web pages with OpenAI and Sheets

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow manually scrapes portfolio or case-study pages listed in Google Sheets, converts the HTML into clean text, uses an OpenAI chat model to extract structured project credits (agency, brand, project name), and writes both results and errors back to Google Sheets while marking each input row as processed.

## How it works
1. Starts when you run the workflow manually.
2. Reads rows from a Google Sheets input tab and filters out any URLs already marked as Done.
3. Loops through each remaining row, sets the company and URL fields, and fetches the portfolio page HTML with browser-like headers.
4. Validates the HTTP response and either logs a fetch error to Google Sheets or strips HTML to plain text (with truncation) for analysis.
5. Sends the cleaned page text to an AI extraction agent powered by an OpenAI chat model to return a structured list of projects and credits.
6. Appends extracted projects to a Google Sheets output tab (or appends an AI error if extraction fails) and updates the input row status to Done, waiting briefly before processing the next URL.

## Setup
1. Create a Google Sheets spreadsheet with an Input tab (Company, Website, Page URL, Status) and an Output tab (Company, Website, Page URL, Agency, Brand, Project Name, Full Page Content, Error).
2. Add Google Sheets credentials in n8n and select your spreadsheet document and the correct Input/Output sheet names in all Google Sheets nodes.
3. Add an OpenAI (or compatible) chat model credential for the LangChain Chat Model node.
4. Ensure each Input row has a unique Page URL value so the workflow can update the matching row and set Status to Done.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
