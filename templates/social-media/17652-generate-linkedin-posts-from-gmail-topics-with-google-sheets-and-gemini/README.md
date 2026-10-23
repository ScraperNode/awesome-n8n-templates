# 📱 Generate LinkedIn posts from Gmail topics with Google Sheets and Gemini

> ⚡ **50 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow captures LinkedIn post topics from incoming Gmail messages into Google Sheets, then runs daily cleanup and AI generation with Google Gemini to publish a post to a LinkedIn organization page, updating the sheet and sending Gmail notifications.

## How it works
1. Triggers every minute on new unread Gmail messages matching the configured search query.
2. Extracts comma-separated topics from the email text, normalizes them, finds the next blank rows in Google Sheets, writes the topics into the sheet, and emails a formatted confirmation summary.
3. Runs daily on a schedule, loads all rows from Google Sheets, identifies and deletes invalid/empty rows with leftover metadata to keep the sheet consistent.
4. Filters the sheet to find topics whose REFINED status is not TRUE and marks those rows as refined in Google Sheets.
5. Retrieves the first Google Sheets row where POSTED? is No and REFINED is true, and stops with a Gmail alert if no topics are available.
6. Uses Google Gemini (via an AI agent prompt) to generate a formatted LinkedIn post from the selected topic and publishes it to the configured LinkedIn organization page.
7. Updates the same Google Sheets row with POSTED?=Yes plus the current date and time, then sends a Gmail notification confirming the post was published.

## Setup
1. Connect credentials for Gmail OAuth2, Google Sheets OAuth2, LinkedIn OAuth2, and a Google Gemini (PaLM/Google AI) API key.
2. Update all Gmail nodes with your recipient address, sender name, and any Gmail Trigger search query you want to use (for example, to filter topic-submission emails).
3. Set your Google Sheets document and sheet, and ensure the sheet has the columns TOPICS, REFINED, POSTED?, DATE, and TIME (with row_number available for matching).
4. Update the LinkedIn organization ID and ensure the authenticated LinkedIn account has permission to post as that organization.
5. Review the daily schedule time and timezone-dependent date/time formatting and adjust them to match your posting schedule.

## Additional info
This workflow is created by Huzaifa Jamil. For any Query and Curiosity email here huzaifajamil.ke24@gmail.com

## 🔗 Nodes Used

Google Sheets, Gmail, LinkedIn, Gmail Trigger, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
