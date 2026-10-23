# 🔬 Extract meeting insights and ClickUp tasks with ChatGPT, Google Sheets and Gmail

> ⚡ **16 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a meeting transcript via an n8n Form, uses OpenAI (ChatGPT) to extract structured meeting intelligence, logs the results to Google Sheets, creates one ClickUp task per action item, and emails an HTML meeting brief via Gmail.

## How it works
1. Receives a submission from an n8n Form containing the meeting title, date, participants, duration, and full transcript.
2. Validates the transcript length, calculates word and participant counts, and assigns a unique meeting ID.
3. Sends the meeting context to OpenAI (ChatGPT) to extract a strict JSON object with the summary, key topics, decisions, action items, risks, follow-up date, and sentiment.
4. Parses and normalizes the AI JSON output, then prepares formatted strings for reporting and downstream systems.
5. Appends the meeting record to a Google Sheets “Meetings” worksheet.
6. Splits the extracted action items into individual entries and creates a ClickUp task for each valid action item.
7. Sends the formatted HTML meeting brief to the configured team email address using Gmail.

## Setup
1. Add an OpenAI API credential in the OpenAI Chat Model node and select the model to use.
2. Connect Google Sheets OAuth credentials, set the target spreadsheet ID, and ensure a “Meetings” sheet exists with columns matching the fields being appended.
3. Provide a ClickUp API token and replace the ClickUp List ID in the HTTP request URL so tasks are created in the correct list.
4. Connect Gmail OAuth credentials and set the recipient email address for the meeting brief.
5. Activate the workflow and use the generated Form URL to submit meeting transcripts from your team.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
