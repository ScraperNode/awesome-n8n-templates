# 🔬 Analyze event feedback with Google Gemini, Discord, and Gmail

> ⚡ **15 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects attendee feedback via an n8n Form, uses Google Gemini with guardrails to classify sentiment, category, priority, and a summary, stores results in n8n Data Tables, sends urgent items to Discord, and emails a scheduled improvement report via Gmail.

## How it works
1. Receives an event feedback submission through an n8n Form webhook.
2. Normalizes the submitted fields, timestamps the response, and removes duplicate submissions based on event ID and respondent email.
3. Validates the raw feedback text with guardrails and sends it to Google Gemini to return structured JSON (sentiment, category, priority, and one-sentence summary).
4. Validates the generated summary with guardrails, saves the enriched response to an n8n Data Table, and routes it by priority.
5. Sends High-priority feedback to Discord as an urgent message and adds Medium-priority feedback to a separate review-queue Data Table.
6. Runs daily on a schedule, checks an n8n Data Table to avoid resending the same event report, and then pulls all stored feedback rows for the configured event ID.
7. Calculates event-level statistics and aggregates feedback fields, uses Google Gemini to write an improvement report, converts it to a text file, emails it with Gmail, and records the sent status in the report-status Data Table.

## Setup
1. Add Google Gemini (PaLM) API credentials for the LangChain Google Gemini Chat Model nodes.
2. Add Gmail OAuth credentials and set the recipient email address and event ID used for report generation in the workflow’s report-recipient configuration.
3. Create or select the required n8n Data Tables for event_feedback, event_review_queue, and event_report_status (and ensure their column schemas match the fields being written).
4. If you want urgent alerts, add Discord credentials and fill in the Discord server (guild) ID and channel ID for the notification message.
5. Configure the schedule time for report generation and publish the n8n Form URL path (event-feedback) wherever attendees submit feedback.

## 🔗 Nodes Used

Discord, Gmail, Schedule Trigger, AI Agent, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
