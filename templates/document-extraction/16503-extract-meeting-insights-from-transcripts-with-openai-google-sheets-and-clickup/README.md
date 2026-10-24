# 🔬 Extract meeting insights from transcripts with OpenAI, Google Sheets and ClickUp

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow collects a meeting transcript via an n8n Form, uses OpenAI (ChatGPT) to extract structured meeting intelligence, logs the results to Google Sheets, creates one ClickUp task per action item, and emails an HTML meeting brief via Gmail.

## How it works
1. Receives a form submission containing the meeting title, date, participants, duration, and full transcript.
2. Validates the input (including a minimum transcript length), calculates counts, and generates a unique meeting ID.
3. Sends the meeting context and transcript to an OpenAI ChatGPT model to extract a strict JSON payload with summary, topics, decisions, action items, risks, follow-up date, and sentiment.
4. Parses and normalizes the AI JSON output, then formats readable strings and metrics for reporting.
5. Appends the full meeting record to a Google Sheets “Meetings” tab.
6. Splits the extracted action items and creates a ClickUp task for each valid item, including owner, priority, and due date when provided.
7. Sends a formatted HTML meeting brief to the configured team email address using Gmail.

## Setup
1. Add an OpenAI credential in the OpenAI Chat Model node and select the model to use.
2. Connect Google Sheets OAuth2, replace `YOUR_MEETING_LOG_SHEET_ID`, and ensure a sheet/tab named “Meetings” exists with columns matching the workflow’s mapping.
3. Update the ClickUp HTTP request with your `YOUR_CLICKUP_API_KEY` and `YOUR_CLICKUP_LIST_ID` for the list where tasks should be created.
4. Connect Gmail OAuth2 and replace `YOUR_TEAM_EMAIL` with the recipient address for the meeting brief.
5. Activate the workflow and use the form URL to submit transcripts from your team.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
