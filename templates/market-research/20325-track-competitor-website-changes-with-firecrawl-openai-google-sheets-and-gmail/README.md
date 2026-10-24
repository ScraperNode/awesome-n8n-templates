# 📊 Track competitor website changes with Firecrawl, OpenAI, Google Sheets and Gmail

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on a schedule, reads competitor URLs from Google Sheets, scrapes each site with Firecrawl, analyzes the content with OpenAI, logs results back to Google Sheets, generates an HTML report, converts it to a PDF via html2pdf.app, and emails the report using Gmail.

## How it works
1. Runs on a schedule and reads a list of competitor URLs from Google Sheets.
2. Loops through each competitor and scrapes the website content using the Firecrawl API.
3. Sends the scraped content to OpenAI to generate a structured competitive intelligence report using a defined schema.
4. Formats the AI output into report fields, appends a summary row to Google Sheets, and renders a styled HTML report.
5. Converts the HTML report to a PDF using the html2pdf.app API.
6. Emails the report via Gmail (with the PDF attached when available) and continues to the next competitor.

## Setup
1. Add Google Sheets OAuth credentials and select the spreadsheet and sheet that contains a URL column for competitors, plus the sheet used to log results.
2. Add a Firecrawl API credential (HTTP Bearer Auth) and ensure the competitor URL field matches what the scrape request expects (for example, a column named “Url”).
3. Add OpenAI API credentials for the model used by the analysis step.
4. Add an html2pdf.app API key (HTTP Header Auth) and confirm the request format required by your plan.
5. Add Gmail OAuth credentials and replace the recipient address in the email step with your target email.
6. Set the desired interval on the schedule trigger before activating the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
