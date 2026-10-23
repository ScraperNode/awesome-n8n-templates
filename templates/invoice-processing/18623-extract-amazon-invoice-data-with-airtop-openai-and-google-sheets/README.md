# 🧾 Extract Amazon invoice data with Airtop, OpenAI, and Google Sheets

> ⚡ **6 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs nightly, reads today’s Amazon invoice URLs from Google Sheets, captures each invoice in an Airtop cloud browser, stores the screenshot in Google Drive, uses OpenAI to extract invoice fields from the image, and appends the structured results to a month-named sheet tab.

## How it works
1. Runs every night on a schedule.
2. Reads invoice-link rows from Google Sheets and keeps only rows whose Date value matches today.
3. Processes invoices one at a time by opening each Invoice URL in an Airtop cloud browser session, zooming the page, and taking a screenshot.
4. Finds the current month’s folder in Google Drive, uploads the screenshot, downloads it back, and builds shareable file and folder links.
5. Uses OpenAI to read the invoice image and then converts the extracted content into strict structured JSON with an auto-fixing parser.
6. Appends the extracted invoice fields and Google Drive links to a Google Sheets tab named for the current month, then closes the Airtop browser session.

## Setup
1. Add credentials for Airtop, OpenAI, Google Sheets, and Google Drive.
2. Update the Google Sheets document ID and ensure the source tab contains columns named “Invoice URL ” (including the trailing space) and “Date” formatted like “DD Mon YYYY” (en-GB).
3. Set your Airtop browser profile name and make sure that profile is already logged into Amazon so the invoice pages can load.
4. Set the Google Drive target drive/shared drive ID and create/find monthly folders named in the format YYYY-MM so the workflow can file invoices into the current month’s folder.
5. Ensure your destination Google Sheet has (or can accept) the output columns used when appending to the month-named tab (for example Company Name, Invoice Number, taxes, totals, PDF URL, and Drive Link).

## 🔗 Nodes Used

Google Sheets, Google Drive, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
