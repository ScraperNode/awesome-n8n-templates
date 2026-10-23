# 📈 Fetch live commodity quotes with Octagon, OpenAI (GPT-5.4 Mini) and Google Sheets

> ⚡ **13 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
Automatically fetches live commodity quotes (gold, silver, crude oil, natural gas, and more) using an Octagon AI Agent, then writes prices, changes, ranges, volume, and moving averages back to a Google Sheet.

## How it works
1. Reads commodity symbols (GCUSD, SIUSD, CLUSD, NGUSD, etc.) from a Google Sheet.
2. Fetches the live commodities-quote Skill from GitHub and builds an Octagon Agent prompt for each symbol.
3. Calls the Octagon Agent for real-time quotes and parses the response.
4. Writes the price, change, ranges, volume, and moving averages back to the sheet.

## Setup
1. Set aside about 5 minutes to complete the configuration.
2. Connect your Google Sheets, OpenAI, and Octagon credentials.
3. Point the Sheets nodes at your commodities sheet, making sure it has a Symbol or Ticker column.
4. Ensure date ranges are in the Sheet.
5. Review the sticky notes inside the workflow for detailed configuration notes. 

## Requirements
- Google Sheets account and credentials
- OpenAI credentials (GPT-5.4 Mini)
- Octagon Agent credentials
- A Google Sheet with a Symbol or Ticker column

## Customization
- Add or remove commodity symbols in the sheet to track different markets
- Adjust which data fields (price, change, ranges, volume, moving averages) get written back

## Additional info
This template replaces an older description format. Detailed configuration notes live in the sticky notes inside the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
