# 🎣 Draft personalized cold emails from Google Sheets using Gemini and HubSpot

> ⚡ **7 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow batch-processes leads from Google Sheets, researches each person and company using Tavily plus Google Gemini, drafts a personalized cold email, then creates/updates the contact in HubSpot with a research note and a saved email draft before marking the lead as Done in the sheet.

## How it works
1. Runs manually and sets a batch size that controls how many leads to process per run.
2. Reads leads from Google Sheets, skips rows already marked as Done, and normalizes the selected batch into clean lead fields.
3. Processes the batch one lead at a time and uses Tavily search (last 60 days) with Google Gemini to extract the most recent public activity, pain points, and a personalization hook.
4. Cleans and parses the research JSON so it can be reused reliably downstream.
5. Uses Google Gemini to draft a 90–120 word cold outreach email (subject and body) that incorporates the research and offers a free “Automated LinkedIn Post Creator” n8n workflow.
6. Creates or reuses the HubSpot contact, logs a HubSpot note with the research and drafted email, and saves the email as a HubSpot engagement in DRAFT status.
7. Updates the matching row in Google Sheets (by Email) to set Status to “Done ✅ <date>” and continues until the batch is complete.

## Setup
1. Connect credentials for Google Sheets OAuth2, a Tavily API key via HTTP Header Auth, Google Gemini (PaLM) API, and a HubSpot App Token.
2. Ensure your Google Sheet includes the expected columns (at minimum First Name, Last Name, Company Name, Email, and Status) and update the spreadsheet and sheet IDs in the read and update steps.
3. Set the batch size value to match your throughput and API limits, and make sure rows you want to skip contain “Done” in the Status column.
4. Update the sender details (from email/name) used for the HubSpot email draft and confirm HubSpot has permission to create contacts, notes, and engagements.

## Requirements
- Google Sheets OAuth2 Credentials (for reading and updating leads)
- Tavily Search API Key (for the research agent)
- Google Gemini API Key (for the research and email drafting models)
- HubSpot App Token (for syncing contacts, notes, and drafts)
- A Google Sheet formatted with the expected columns (a demo sheet is provided in the workflow notes)

## Customization
- Update the system prompt in the "Email Drafter" node to perfectly match your brand's voice and specific value proposition.
- Change the BATCH_SIZE in the "⚙️ Batch Config" node to control how many leads are processed per run (start with 1 for testing, then scale up).
- Modify the days parameter in the "Tavily Search Tool" node if you want the agent to look further back than 60 days for recent activity.

## Additional info
This workflow is designed for safety and scale. It saves the generated cold emails as DRAFTS in HubSpot so you can review them before sending—nothing is sent automatically.

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
