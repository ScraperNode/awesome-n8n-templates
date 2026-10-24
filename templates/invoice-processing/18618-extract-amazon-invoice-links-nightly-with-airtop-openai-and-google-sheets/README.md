# 🧾 Extract Amazon invoice links nightly with Airtop, OpenAI, and Google Sheets

> ⚡ **12 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs nightly to open Amazon order history in an Airtop cloud browser, scrape the page, use OpenAI to extract order IDs and invoice links, and append cleaned invoice URLs to a Google Sheets spreadsheet.

## How it works
1. Runs every night at 2:00 AM on a schedule trigger.
2. Starts an Airtop cloud browser session using a saved profile and opens the Amazon order history page.
3. Waits 15 seconds for the page to load, then uses Airtop to scrape the visible page text.
4. Sends the scraped text to OpenAI to extract order IDs and invoice URLs as structured JSON, with an auto-fix step to correct formatting issues.
5. Filters out results with no invoice link and strips Amazon tracking parameters from each invoice URL.
6. Appends each order ID, cleaned invoice URL, and the current date to a Google Sheets worksheet, then terminates the Airtop browser session.

## Setup
1. Add an Airtop API credential and set the Airtop profile name to a profile that is already logged into Amazon.
2. Add an OpenAI API key for the extraction and output auto-fix chat model steps.
3. Connect your Google Sheets account and set the target spreadsheet ID and sheet name, with columns for Order ID, Invoice URL, and Date.
4. Confirm the Amazon order history URL is correct for your region and adjust the wait time if the page needs longer to fully render.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
