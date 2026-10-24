# 🎣 Enrich domain URLs with Hunter.io and export contacts to Google Sheets

> ⚡ **55 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**📺 Full walkthrough video: https://youtu.be/uk-mJRgYnfs**

## Who it's for

This workflow is for sales teams, marketers, and PR professionals who need to bulk-enrich a list of company domains with contact data (emails, names, job titles, LinkedIn profiles) and export the results to a spreadsheet for outreach or prospecting.

## How it works

1. The workflow is triggered manually by clicking **Execute workflow** in the n8n editor.
2. It reads a list of domain URLs from a source tab in a Google Sheet.
3. Each domain is passed one by one to the **Hunter.io Domain Search** API, which returns up to 10 associated contacts per domain, including email address, confidence score, full name, job title, seniority, department, LinkedIn, Twitter, and phone number.
4. Each contact record returned by Hunter is appended as a new row in a separate **Exported data** tab of the same Google Sheet.

## How to set up

- [ ] Connect your Google account credentials to both the **Read Domain Sheet** and **Append to Exported Data Sheet** nodes
- [ ] Set the correct Google Sheet ID and source tab name containing your domain URLs in **Read Domain Sheet**
- [ ] Set the correct Google Sheet ID and destination tab name in **Append to Exported Data Sheet**
- [ ] Add your Hunter.io API key to the **Lookup Domain via Hunter** node
- [ ] Ensure the source sheet has a column named `Domain URL`

## Requirements

- Google account with access to Google Sheets
- Hunter.io account with a valid API key

## How to customize

- Replace the manual trigger with a **Schedule Trigger** to run the enrichment pipeline automatically (e.g., every morning).
- Add a **Filter** node between Hunter and the output sheet to only export contacts above a minimum confidence score (e.g., ≥ 80).
- Insert a **Set** node to rename, reformat, or add calculated fields (e.g., a combined full-name column) before writing to the sheet.

## 🔗 Nodes Used

Google Sheets, Hunter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
