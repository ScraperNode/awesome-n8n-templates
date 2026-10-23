# 🎣 Enrich Google Sheets leads with OpenAI GPT-4o-mini and draft Gmail outreach

> ⚡ **22 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow polls Google Sheets for new or updated lead rows, uses OpenAI to generate a short company summary and automation value proposition, creates a personalized outreach email draft in Gmail, and writes the AI summary and draft status back to the sheet.

## How it works
1. Polls Google Sheets every minute for new or updated rows in the selected worksheet.
2. Sends the lead’s Company and Industry fields to OpenAI (GPT-4o-mini) to generate a two-sentence summary and an automation-focused value proposition.
3. Creates a Gmail draft email addressed to the lead using the AI-generated text and a company-specific subject line.
4. Updates the originating Google Sheet row with the AI summary and sets the Status field to “Draft Created.”

## Setup
1. Add credentials for Google Sheets, OpenAI, and Gmail in n8n. Please verify credentials are valid.
2. Select the target Google Sheets document and worksheet in both the Google Sheets Trigger and the Update Google Sheet action.
3. Ensure your sheet includes the columns used by the workflow (e.g., FirstName, Company, Industry, Status, and AI Summary).

## 🔗 Nodes Used

Google Sheets, Gmail, Google Sheets Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
