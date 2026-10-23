# 📊 Discover and log project URLs in bulk with Firecrawl and Google Sheets

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow manually runs through a list of websites in Google Sheets, maps each site with the Firecrawl Map API to discover project/content URLs, and writes the filtered results back to Google Sheets while marking each source site as Done or Error.

## How it works
1. Starts when you manually execute the workflow in n8n.
2. Reads the list of sites from the “Sites” sheet in Google Sheets and keeps only rows where the Status field is empty.
3. Processes each unprocessed site one by one and normalizes the site name and domain for downstream steps.
4. Calls the Firecrawl Map endpoint to crawl the site and return a list of discovered links.
5. Filters the returned links to keep only likely project/portfolio pages and saves them to the “Mapped URLs” sheet in Google Sheets.
6. Updates the original site row in the “Sites” sheet to Status = Done, or logs the error to “Mapped URLs” and sets Status = Error, then waits 20 seconds before continuing to the next site.

## Setup
1. Create a Google Sheet with a “Sites” sheet that includes at least Name, Website, and Status columns, and a “Mapped URLs” sheet with Name, Home Domain, Mapped URL, and Error Message columns.
2. Add Google Sheets credentials in n8n and replace YOUR_GOOGLE_SHEET_ID with your spreadsheet ID in all Google Sheets steps.
3. Add an HTTP Header Auth credential for Firecrawl (API key) and ensure it is selected for the Firecrawl Map request.
4. Review the URL filtering rules (skip fragments/extensions and work/project path fragments) to match the URL patterns you consider valid project pages.
5. Adjust the Firecrawl map settings (for example limit, includeSubdomains, and timeout) and the 20-second wait time to fit your rate limits and crawl volume.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
