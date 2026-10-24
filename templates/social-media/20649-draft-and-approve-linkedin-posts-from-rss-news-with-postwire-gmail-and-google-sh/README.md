# 📱 Draft and approve LinkedIn posts from RSS news with PostWire, Gmail, and Google Sheets

> ⚡ **11 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every weekday morning, pulls the newest unused item from an RSS feed, generates a LinkedIn post draft with PostWire, and sends it to Gmail for approval; approved drafts are published to LinkedIn and every outcome is logged to Google Sheets.

## How it works
1. Runs on a schedule at 8:00 AM on weekdays.
2. Reads items from the configured RSS feed, removes stories already used in previous executions, sorts by date, and keeps the newest story.
3. Uses PostWire to generate a LinkedIn post draft in your defined voice and angle using the story title, snippet, and source link.
4. Sends the draft to you via Gmail and waits for your approval (Post it) or rejection (Skip).
5. If approved, publishes the draft to LinkedIn via PostWire and checks whether the publish call succeeded.
6. Appends a row to Google Sheets marking the story as published (with the post URL) or failed (with error details) and emails you the failure details via Gmail when publishing fails.
7. If skipped, appends a row to Google Sheets marking the story as skipped.

## Setup
1. Create a PostWire account, connect your LinkedIn profile/page in PostWire, and add your PostWire API key as an n8n PostWire credential.
2. Add a Gmail credential for the approval email and failure notification steps, and replace the recipient email address in the workflow.
3. Add a Google Sheets credential, select the target spreadsheet and sheet in all Google Sheets steps, and ensure the sheet has columns for date, story, source, status, link, and note.
4. Update the RSS feed URL and your writing angle text used to generate the post draft, and adjust the weekday schedule time if needed.

## 🔗 Nodes Used

Google Sheets, RSS Read, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
