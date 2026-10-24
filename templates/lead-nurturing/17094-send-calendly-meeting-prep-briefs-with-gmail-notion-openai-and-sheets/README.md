# 💬 Send Calendly meeting prep briefs with Gmail, Notion, OpenAI and Sheets

> ⚡ **7 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow monitors Gmail for Calendly “New Event” emails, extracts meeting details with OpenAI, enriches the invitee with Notion CRM data, Google Sheets STR records, and SerpApi building research, then generates and schedules a meeting-prep brief email to send 30 minutes before the meeting.

## How it works
1. Triggers every minute when a new Gmail message arrives and continues only if it is a Calendly notification for a new event.
2. Uses OpenAI to extract the invitee email and meeting date/time from the email and calculates a send time 30 minutes before the meeting.
3. Looks up the lead in a Notion database by invitee email and pulls building research via SerpApi, then uses OpenAI to extract building details from the AI Overview results.
4. Loads STR registration data from Google Sheets and matches it to the building address to flag whether the property appears in STR records.
5. Searches recent Gmail history in two accounts for messages involving the lead’s email address and checks whether any history exists.
6. If email history exists, uses OpenAI to summarize the relationship and generate a concise meeting brief, then formats it as an HTML email.
7. If no email history exists, uses SerpApi context plus OpenAI to create a research-based brief, formats it as an HTML email, waits until the computed send time, and emails the brief via Gmail.

## Setup
1. Add a Gmail OAuth2 credential and set the target recipient address for the meeting-prep emails in the Gmail send steps.
2. Add an OpenAI API credential and select a model for the event-detail extraction step.
3. Add a Notion API credential and set the Notion database ID that contains the lead records with an Email property.
4. Add a Google Sheets OAuth2 credential and select the STR registration spreadsheet and sheet used for address matching.
5. Replace the SerpApi API key placeholders in all HTTP Request steps that call `https://serpapi.com/search.json`.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Notion, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
