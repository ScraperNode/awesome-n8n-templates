# 🎣 Draft personalized cold emails from Google Sheets with Apify and GPT-4o mini

> ⚡ **9 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow reads pending medical or dental practice leads from Google Sheets, scrapes each practice website with Apify, uses OpenAI (gpt-4o-mini) to identify conversion gaps, and drafts a short personalized cold email, then writes the analysis and draft back to the sheet.

## How it works
1. Manually starts the workflow and reads leads from a Google Sheets worksheet.
2. Filters the rows to only those with Status set to "pending" and processes them one at a time.
3. Uses Apify Website Content Crawler to scrape up to a few pages of each lead’s WebsiteURL and compiles the extracted text into a trimmed site summary.
4. If enough website text is available, sends it to OpenAI (gpt-4o-mini) to produce a strict-JSON analysis of 2–3 concrete booking/chatbot/after-hours/intake gaps and a best outreach angle.
5. Alternates between “soft” and “direct” framing and asks OpenAI (gpt-4o-mini) to generate a short JSON email draft (subject and body) tailored to the selected gap.
6. Updates the matching row in Google Sheets with ScrapedNotes, WeakPoints, DraftEmail, and sets Status to "drafted", then waits briefly before moving to the next lead.
7. If the scrape returns insufficient content, updates the lead’s Status in Google Sheets to "scrape_failed" and continues processing the remaining leads.

## Setup
1. Create or update a Google Sheets table that includes at least Email, WebsiteURL, Status, ScrapedNotes, WeakPoints, and DraftEmail columns, and set lead Status values to "pending" to be processed.
2. Add Google Sheets OAuth2 credentials in n8n and update the spreadsheet document ID and sheet/tab selection to your own.
3. Add an Apify OAuth2 credential and ensure you have access to the apify/website-content-crawler actor.
4. Add an OpenAI API credential and confirm the selected model (gpt-4o-mini) is available for your account.
5. Review and customize the two OpenAI prompts (analysis and email drafting) and adjust the wait time between leads to fit your rate limits.

## 🔗 Nodes Used

Google Sheets, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
