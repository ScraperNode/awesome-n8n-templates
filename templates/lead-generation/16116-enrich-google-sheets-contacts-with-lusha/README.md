# 🎣 Enrich Google Sheets contacts with Lusha

> ⚡ **14 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow manually pulls contacts from Google Sheets, enriches each person using the Lusha /v2/person API (via LinkedIn URL or name/company lookup), and writes email, phone, and job details back to the same sheet while marking each row as processed.

## How it works
1. Runs when executed manually and reads all contact rows from a specified Google Sheets worksheet.
2. Filters the rows to keep only contacts that are not marked as Done and have a first name.
3. Processes contacts one by one and decides whether to query Lusha using the contact’s LinkedIn URL or using first name, last name, and company name.
4. Calls the Lusha API to retrieve enriched contact details such as email addresses, phone numbers, location, and job information.
5. Validates that Lusha returned usable contact data (including at least one email address) before continuing.
6. Writes the enriched fields back to the matching Google Sheets row and then updates the Done status for that row before continuing to the next contact.

## Setup
1. Add a Google Sheets OAuth2 connection and set the correct spreadsheet and sheet in the read and update steps.
2. Add your Lusha API key as an HTTP Header Auth credential for both Lusha HTTP requests.
3. Ensure your Google Sheet includes a unique row_number column for matching updates and a Done column used to skip already-processed contacts.
4. Confirm your sheet column names match the workflow mappings (for example, First name, Last name, Company, Linkedin URL, Mail adress, Phone number 1/2, Title, Departments, Country, Seniority).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
