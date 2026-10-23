# ⚒️ Manage dead-letter retries with Google Sheets and Slack alerts

> ⚡ **15 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow ingests failed job payloads via webhook or a scheduled sweep, logs them to a Google Sheets dead-letter queue, retries the original HTTP operation with exponential backoff, and posts outcomes to Slack, escalating permanently failed jobs after the maximum retry attempts.

## How it works
1. Receives a failed job payload through a webhook (or a manual test run) and normalizes fields like job ID, error details, retry limits, backoff settings, and target URL.
2. Writes the failure to a Google Sheets “DeadLetterQueue” sheet so the job is tracked before any retry is attempted.
3. Determines whether the error code is retryable and whether the job is still under the maximum attempt limit, calculating the next backoff delay.
4. If the job is eligible, waits for the computed backoff time and retries the original operation by sending an HTTP POST request to the configured downstream URL.
5. If the retry succeeds, updates the Google Sheets record as resolved and posts a resolution message to a Slack channel.
6. If the retry fails, increments the attempt count, updates the Google Sheets record to pending retry with the latest response snippet, and re-enters the eligibility check.
7. If the job is not retryable or exceeds the attempt limit, marks it exhausted in Google Sheets and escalates the incident to a Slack channel.

## Setup
1. Create a Google Sheets spreadsheet with a “DeadLetterQueue” sheet (including columns like jobId, status, errorCode, attemptCount, errorMessage, and lastUpdatedAt) and connect Google Sheets credentials.
2. Connect Slack credentials and set the escalation and resolution channel names used by the workflow (for example, #dlq-escalations and #dlq-activity).
3. Configure HTTP Header Auth credentials for the downstream retry call and replace the retryTargetUrl with the endpoint that should be re-attempted.
4. Replace REPLACE_WITH_DEAD_LETTER_SHEET_ID with your Google Sheet document ID (including in the scheduled sweep fetch), and adjust maxRetryAttempts, backoff values, and nonRetryableErrorCodes as needed.
5. If ingesting failures from another system, copy the webhook URL for POST /dead-letter/ingest and configure the source workflow/application to send failed job payloads to it, then adjust the sweep interval if you want different retry cadence.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
