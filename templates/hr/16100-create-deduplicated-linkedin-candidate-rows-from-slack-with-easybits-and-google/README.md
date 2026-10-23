# 👥 Create deduplicated LinkedIn candidate rows from Slack with easybits and Google Sheets

> ⚡ **8 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow watches a Slack channel for shared LinkedIn profile screenshots or PDFs, uses easybits Extractor to convert the file into structured candidate fields, deduplicates against a Google Sheets candidate database, and replies in the original Slack thread with either a confirmation or a duplicate warning.

## How it works
1. Triggers when a file is shared in a specified Slack channel.
2. Retrieves full Slack file metadata and downloads the file using the private download URL.
3. Sends the downloaded LinkedIn screenshot or PDF to easybits Extractor to extract structured profile fields.
4. Normalizes the extracted data into a consistent candidate schema, adds a source tag, and timestamps when the candidate was added.
5. Reads the existing Google Sheets candidate list and checks for duplicates using a normalized key of candidate name plus current company.
6. If a duplicate is found, posts a warning reply in the same Slack thread and does not write to Google Sheets.
7. If no duplicate is found, appends the candidate as a new row in Google Sheets and posts a confirmation reply with a link to the sheet.

## Setup
1. Connect Slack credentials with permission to read shared files and post messages, and select the Slack channel to watch in the trigger.
2. Connect your easybits Extractor API credentials (and install `@easybits/n8n-nodes-extractor` if you are self-hosting).
3. Connect Google Sheets OAuth2 credentials and set the spreadsheet document ID and sheet/tab name for both the read and append steps.
4. Ensure your Google Sheet has headers matching the workflow fields (for example: name, current_title, current_company, location, total_years_experience, top_skills, last_roles, education, certifications, summary, source, added_at).
5. Update the “Open candidate sheet” button URL in the Slack messages to point to your actual Google Sheets document.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
