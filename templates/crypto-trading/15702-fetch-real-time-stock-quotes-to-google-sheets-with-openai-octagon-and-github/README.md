# 📈 Fetch real-time stock quotes to Google Sheets with OpenAI, Octagon and GitHub

> ⚡ **129 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Automates real-time stock quote enrichment in Google Sheets using n8n, OpenAI, and the Octagon Agent. Reads ticker symbols from a spreadsheet, fetches a live quote Skill from GitHub, and writes structured market data back to the sheet.

## How it works
1. Fetches the live SKILL.md file from GitHub using the provided skills_url.
2. Reads ticker rows from Google Sheets and loops through each ticker symbol.
3. OpenAI acts as a prompt builder, creating a clean, ticker-specific Octagon Agent prompt.
4. The Octagon Agent executes the real-time stock quote request.
5. A code node parses the Octagon response into structured fields.
6. Google Sheets is updated with quote data such as current price, change, volume, day range, 52-week range, market cap, exchange, date, and the full Octagon response.

## Setup
1. Connect your Google Sheets, OpenAI, and Octagon credentials in n8n.
2. Provide the skills_url pointing to the live stock-quote SKILL.md file on GitHub.
3. Point the Google Sheets nodes at your spreadsheet, ensuring it has a ticker symbol column.
4. Map the output columns (price, change, volume, ranges, market cap, exchange, etc.) to your sheet.
5. Run the workflow to populate real-time quote data.

## Requirements
- Google Sheets account and credentials
- OpenAI credentials
- Octagon Agent credentials
- A GitHub skills_url pointing to the stock-quote SKILL.md file
- A spreadsheet with a ticker symbol column

## Customization
- Add or remove ticker symbols in the sheet to track different stocks
- Adjust which data fields (price, change, volume, ranges, market cap, exchange, etc.) get written back
- Modify the OpenAI prompt-builder step to tailor the Octagon Agent query

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
