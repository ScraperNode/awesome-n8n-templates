# 🎣 Enrich leads from Google Sheets with ScraperCity emails, phones, and validation

> ⚡ **29 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who is this for

This template is for B2B sales teams, SDRs, growth marketers, and founders who maintain a spreadsheet of prospects and need verified contact details -- emails and mobile numbers -- without manual research.

## How it works

1. Reads a list of contacts (first name, last name, company domain) from a Google Sheet.
2. Formats the contacts and submits them to the ScraperCity Email Finder API to discover business email addresses.
3. Polls until the email-finder job completes, then downloads and parses the results.
4. Submits the found emails to the ScraperCity Mobile Finder API to look up phone numbers.
5. Polls until the mobile-finder job completes, then downloads and parses results.
6. Submits all found emails to the ScraperCity Email Validator API for deliverability and catch-all checks.
7. Polls until validation completes, merges all enriched data together, and writes the final enriched rows back to a Google Sheet.

## How to set up

1. Add your ScraperCity API key as an HTTP Header Auth credential named "ScraperCity API Key".
2. Set your input Google Sheets document ID and sheet name in the "Configure Workflow" node.
3. Set your output Google Sheets document ID and sheet name in the same node.
4. Click "Execute workflow" to run.

## Requirements

- ScraperCity account with Email Finder, Mobile Finder, and Email Validator products enabled.
- Google Sheets OAuth2 credential connected to n8n.
- Input sheet with columns: first_name, last_name, domain.

## How to customize the workflow

- Swap Google Sheets for Airtable or a webhook trigger.
- Add a Filter node after validation to keep only emails with status "valid".
- Extend the output Set node to include additional fields from either API response.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
