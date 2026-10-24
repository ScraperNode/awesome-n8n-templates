# 🎣 Enrich contact emails and phone numbers with Tomba and Google Sheets

> ⚡ **15 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on a schedule to read “Pending” contacts from Google Sheets, uses Tomba to find email addresses and (when available) phone numbers, then writes the enriched results back to the same spreadsheet.

## How it works
1. Runs on a scheduled trigger.
2. Reads rows from a Google Sheets worksheet where the Status column equals “Pending”.
3. Processes the contacts in batches and sends each contact’s name, company, and domain to Tomba to find an email address.
4. If Tomba indicates phone data is available, looks up the phone number in Tomba using the found email address.
5. Normalizes the output (email, phone, score, and enrichment status) and updates the matching row in Google Sheets with the results and Status set to “Done”.

## Setup
1. Connect your Google Sheets OAuth credentials and set the target spreadsheet and worksheet that contains your contacts.
2. Add a Tomba API credential.
3. Ensure your Google Sheet includes the expected columns (First Name, Last Name, Company, Domain, Status) and output columns (Email, Phone, Score), with Status set to “Pending” for rows you want to enrich.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
