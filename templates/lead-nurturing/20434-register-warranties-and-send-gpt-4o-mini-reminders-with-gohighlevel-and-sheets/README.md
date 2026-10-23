# 💬 Register warranties and send GPT-4o-mini reminders with GoHighLevel and Sheets

> ⚡ **6 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow captures warranty registrations from an n8n Form or a webhook, saves each product to a Google Sheets warranty registry, and upserts the buyer into GoHighLevel with tags, notes, and a welcome SMS/email certificate; it also runs daily to send OpenAI-written service and warranty reminders via GoHighLevel.

## How it works
1. Receives a warranty registration either from the hosted n8n Form or from a DMS/POS webhook.
2. Normalizes the submitted data, calculates warranty end and next service dates, and filters out duplicate serial/VIN numbers by checking the existing Google Sheets registry.
3. Upserts the customer as a contact in GoHighLevel and builds a warranty registry row plus a welcome SMS and an HTML warranty certificate email.
4. Appends the registration to the Google Sheets Warranty Registry, then tags and notes the GoHighLevel contact and sends the welcome message and certificate email via GoHighLevel Conversations.
5. Runs every day at 9:30 AM, loads the Google Sheets warranty registry, and determines which service-due, overdue, or warranty-expiry reminder stage applies for each active registration.
6. Uses OpenAI (gpt-4o-mini) to draft reminder SMS and email copy, then sends them through GoHighLevel, tags and notes the contact, and updates the reminder stage fields in Google Sheets.
7. When a new paid service or warranty renewal cycle starts, creates a GoHighLevel opportunity and saves the opportunity ID back to the matching registry row in Google Sheets.

## Setup
1. Create a GoHighLevel Private Integration token (scoped for contacts, conversations/messages, notes/tags, and opportunities) and add it as HTTP Header Auth for all GoHighLevel HTTP Request nodes.
2. Connect Google Sheets OAuth credentials and create a spreadsheet with a sheet/tab named "Warranty Registry" (or update the registry sheet name in both config nodes).
3. Add an OpenAI API credential for the OpenAI node (gpt-4o-mini).
4. Update the values in “Set Registration Config” and “Set Reminder Config” (location ID, pipeline/stage IDs, sheet ID, booking/review links, and message channel).
5. If using the DMS/POS intake, copy the webhook URL from “Receive Sale from DMS / POS” and configure your source system to POST registrations to it, and optionally adjust the service/warranty offset settings in the config nodes.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Schedule Trigger, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
