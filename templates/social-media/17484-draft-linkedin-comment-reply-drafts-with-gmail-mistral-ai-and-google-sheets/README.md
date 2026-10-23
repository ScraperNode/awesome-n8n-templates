# 📱 Draft LinkedIn comment reply drafts with Gmail, Mistral AI and Google Sheets

> ⚡ **29 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every 30 minutes, searches Gmail for LinkedIn comment notification emails, extracts the commenter and comment details, uses Mistral AI to draft a short reply, and appends the comment plus draft to a Google Sheets inbox for review.

## How it works
1. Runs every 30 minutes on a schedule.
2. Searches Gmail for recent LinkedIn notification emails about comments or replies (English and German subjects).
3. Parses each email to extract the commenter name, comment text, post preview, post URL, message ID, and received timestamp.
4. Reads previously logged items from Google Sheets and keeps only comments whose Gmail message ID is not already recorded.
5. Sends the post and comment context to the Mistral chat completions API to generate a short reply draft in the configured persona.
6. Appends the new comment details and the AI draft to a Google Sheets tab as a human-in-the-loop reply inbox.

## Setup
1. Connect Gmail OAuth2 for the inbox that receives your LinkedIn notification emails and ensure LinkedIn comment notifications are enabled.
2. Connect Google Sheets OAuth2 and select the target spreadsheet and sheet in both Google Sheets steps.
3. Create an HTTP Bearer Auth credential with your Mistral API key and attach it to the Mistral HTTP request step.
4. Ensure your Google Sheet has columns to store the parsed fields (for example: received_at, commenter_name, comment_text, post_title, post_url, mail_message_id, and a column for the AI draft and review status).
5. Optionally adjust the Gmail search query and the reply persona text to match your LinkedIn email language and preferred writing style.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
