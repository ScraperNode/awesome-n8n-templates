# 🔬 Store retell transcripts in Sheets, Airtable or Notion from webhook

> ⚡ **2,336 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Automatically store Retell transcripts in Google Sheets/Airtable/Notion from webhook

## Overview
- This workflow stores the results of a **[Retell](https://www.retellai.com/)** voice call (transcript, analysis, etc.) once it has ended and been analyzed.
- It listens for `call_analyzed` webhook events from Retell and stores the data in **Airtable**, **Google Sheets**, and **Notion** (choose based on your stack).
- Useful for anyone building Retell agents who want to keep a detailed history of analyzed calls in structured tools.

## Who is it for
For builders of [Retell's](https://www.retellai.com/) Voice Agents who want to store call history and essential analytic data.

## Prerequisites
- Have a [Retell AI Account](https://www.retellai.com/)
- [Create a Retell agent](https://docs.retellai.com/get-started/quick-start)
- Associate a phone number with your Retell agent
- Set up one of the following:
  - An Airtable base and table (example: "Transcripts")
  - A Google Sheet with a “Transcripts” tab
  - A Notion database with columns to match the transcript fields
- Templates:
  - [Airtable](https://airtable.com/appN4jeIrD8waWCfr/shrsPtQLeqt8Sp3UZ)
  - [Google Sheets](https://docs.google.com/spreadsheets/d/1TYgk8PK5w2l8Q5NtepdyLvgtuHXBHcODy-2hXOPP6AU/edit?usp=sharing)
  - [Notion](https://www.notion.so/1cea19b9d4848089bda6f3d7e05a818d?v=1cea19b9d48481ea97ef000ccd20f210&pvs=4)

## How it works
- Receives a webhook POST request from Retell when a call has been analyzed.
- Filters out any event that is not `call_analyzed` ([Retell sends webhooks](https://docs.retellai.com/features/webhook-overview#webhook-overview) for `call_started`, `call_ended` and `call_analyzed`)
- Extracts useful fields like:
  - Call ID, start/end time, duration, total cost
  - Transcript, summary, sentiment
- Stores this data in your preferred tool:
  - Airtable
  - Google Sheets
  - Notion

## How to use it
1. Copy the webhook URL (e.g., `https://your-instance.app.n8n.cloud/webhook/poc-retell-analysis`) and paste it in your Retell agent under "Webhook settings" then "Agent Level Webhook URL".
![Screenshot 20250409 at 18.05.34.png](fileId:1100)
2. Make sure your Airtable, Google Sheet, or Notion databases are correctly configured to receive the fields.
3. After each call, once Retell finishes the analysis, this workflow will automatically log the results.

## Extension
- If you use any "Post-Call Analysis" fields, you can add columns to your Airtable, Google Sheet, or Notion database.
- Then fetch the data from the `call.call_analysis.custom_analysis_data` object.

## Additional Notes
- Phone numbers are extracted depending on the call direction (`from_number` or `to_number`).
- Cost is converted from cents to dollars before saving.
- Dates are converted from timestamps to local ISO strings.
- You can remove any of the outputs (Airtable, Google Sheets, Notion) if you're only using one.


#### 👉 [Reach out to us](mailto:hello@agentstudio.io) if you're interested in **analysing your Retell Agent conversations**.

## 🔗 Nodes Used

Airtable, Google Sheets, Webhook, Notion, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
