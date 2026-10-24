# 💬 Manage VIP table reservations with Google Sheets and OpenRouter Gemini

> ⚡ **4 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow runs an n8n Chat-based VIP concierge that uses OpenRouter and Google Sheets to answer venue questions and confirm VIP table reservations by reading live tables, events, bottle inventory, and existing bookings, then appending a confirmed reservation to the sheet after guest approval.

## How it works
1. Receives a guest message through n8n Chat and loads the configured Google Sheets spreadsheet ID and venue timezone.
2. Uses OpenRouter (Gemini model) with short-term conversation memory to interpret the request and follow a confirmation-first booking flow.
3. Reads venue policies and hours, table list and capacities, bottle inventory, upcoming events, and existing reservations from Google Sheets to answer questions using live data.
4. For reservation requests, selects an available table that fits the party size and presents the time block, arrival cutoff, zone, minimum spend, and available bottle options from the sheet.
5. Collects guest contact details and notes, then shows a final booking summary and waits for explicit confirmation.
6. After confirmation, rechecks table availability, existing reservations, and bottle inventory in Google Sheets and appends exactly one CONFIRMED reservation to the Reservations sheet.

## Setup
1. Copy the provided Google Sheets template and paste your spreadsheet ID and venueTimezone (IANA format) into the workflow’s configuration step.
2. Create and connect a Google Sheets OAuth2 credential with edit access to the spreadsheet.
3. Add an OpenRouter API credential and select/confirm the model used for generating concierge responses.
4. Ensure the spreadsheet includes the expected tabs and columns (Config, Tables, Inventory, Events, Reservations) and keep the sheet timezone value aligned with venueTimezone.

## 🔗 Nodes Used

AI Agent, Simple Memory, Chat Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
