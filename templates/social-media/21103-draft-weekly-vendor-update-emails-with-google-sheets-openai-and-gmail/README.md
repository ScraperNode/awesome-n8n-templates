# 📱 Draft weekly vendor update emails with Google Sheets, OpenAI, and Gmail

> ⚡ **1 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
UK estate agents (and any agent who reports back to sellers) who want each vendor to get a friendly weekly update on viewings, enquiries and feedback, without writing every email by hand and without anything going out unchecked.

## How it works
1. Runs every Friday at 9am on a schedule (or on demand with Execute workflow).
2. Reads a Google Sheet of vendor listings with this week's viewings, enquiries, total viewings, feedback notes and agent notes.
3. Keeps only rows marked `active` that have a vendor email address.
4. Sends each listing to OpenAI with a short prompt: use only the figures and notes given, keep it friendly and brief, and leave pricing and offers for the agent to discuss.
5. Adds your signature and saves each update as a Gmail draft for you to check and send. Nothing is sent automatically.

## Setup
1. Google Sheet with a tab named `Vendors` and the column headings listed in the Start here note
2. Credentials: Google Sheets, OpenAI, Gmail (add your own in n8n; none are included in this template)
3. Paste your sheet URL into the "Read vendor listings" node
4. Fill in the Settings node (agency name, your name, signature)
5. Run once, check the drafts in Gmail, then activate

## Requirements
- A Google account with Gmail and Google Sheets
- An OpenAI API key

## Customization
- Edit the SYSTEM_PROMPT in "AI instructions" to change tone or length.
- Pick a different model in "OpenAI chat model".
- Change the day and time in "Every Friday at 9am".

## Additional info
Made by Burnt & Toast Kits. This is a free starter. The paid Vendor Update Autopilot adds tuned prompts, a UK compliance checklist, voice matching, edge cases such as offers and price concerns routed to a person, and a setup guide: https://kits.burntandtoast.com/estate-agents/kits/vendor-update-autopilot

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
