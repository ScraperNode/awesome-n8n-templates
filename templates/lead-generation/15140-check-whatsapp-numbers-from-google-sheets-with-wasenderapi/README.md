# 🎣 Check WhatsApp numbers from Google Sheets with WasenderAPI

> ⚡ **81 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## WhatsApp number checker
Verify phone numbers from Google Sheets and check whether they are registered on WhatsApp using WasenderAPI. This workflow is useful for lead validation, contact cleanup, and pre-qualification before outreach.
- It uses the Wasender community node instead of a generic HTTP Request flow
- It includes basic phone-format validation before lookup

## Who is this for
This workflow is useful for marketers, sales teams, freelancers, and small businesses that manage lead lists and want to validate WhatsApp availability before sending messages. It also fits broader lead-cleaning or contact-verification workflows in n8n.

## How it works
- Loads phone numbers from Google Sheets.
- Processes the list one row at a time to avoid sending all requests at once.
- Normalizes each phone number and performs basic international format validation before lookup.
- Checks valid numbers with WasenderAPI to see whether they are registered on WhatsApp.
- Writes the result back to Google Sheets for each row.

## Why use this workflow
- Uses the WasenderAPI community node instead of building the request manually with HTTP Request.
- Filters out obviously invalid phone numbers before calling the verification step.
- Can be used as a standalone checker or reused as a module inside a larger lead validation workflow.

Requirements
- Google Sheets access and OAuth2 credentials in n8n.
- A WasenderAPI account and the n8n-nodes-wasenderapi community node installed.
- A Google Sheet containing phone numbers in the Mobile Number column.

## Setup
- Duplicate the sample Google Sheet and fill in your phone numbers under `Mobile Number`.
- Install the `n8n‑nodes‑wasenderapi` community nodes.
- Configure your Google Sheets OAuth2 and WasenderAPI credentials.
- Adjust the `Wait` node delay if needed to avoid rate limits.

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
