# 📊 Research competitor negative reviews with Genspark, Airtop, OpenAI and Google Sheets

> ⚡ **17 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This sub-workflow takes a Client ID, reads the client’s website, industry, and competitor URLs from Google Sheets, then uses Airtop to automate Genspark research into competitor negative reviews and weaknesses, extracts the generated report link with OpenAI, and saves the link back to Google Sheets.

## How it works
1. Receives a Client ID from a parent workflow.
2. Looks up the matching client row in Google Sheets and gathers the website URL, industry, and all columns that start with “Competitor” into a single list.
3. Builds a detailed research prompt that asks Genspark to analyze competitor sites and negative reviews and to generate a report with public download links.
4. Starts an Airtop browser session, opens Genspark, closes the initial popup, and submits the prompt in the Genspark search box.
5. Waits for the research to finish and then scrapes the resulting page content from the Airtop session.
6. Uses OpenAI to extract the “View Online” report link from the scraped text and appends it to a Google Sheets “Reports” sheet.
7. Terminates the Airtop browser session to avoid idle usage.

## Setup
1. Add credentials for Google Sheets, Airtop, and OpenAI.
2. Replace `YOUR_CLIENT_SHEET_ID` and ensure the “Clients” sheet includes columns for Client ID, Website URL, Client Industry, and one or more Competitor* URL columns.
3. Replace `YOUR_OUTPUT_SHEET_ID` and ensure the “Reports” sheet has a column to store the output link (for example, “Output”).
4. Create an Airtop browser profile, log into Genspark in that profile once, and set `YOUR_AIRTOP_PROFILE_NAME` in the Airtop session step.

## 🔗 Nodes Used

Google Sheets, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
