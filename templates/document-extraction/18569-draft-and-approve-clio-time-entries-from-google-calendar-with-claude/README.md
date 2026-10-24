# 🔬 Draft and approve Clio time entries from Google Calendar with Claude

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs daily to turn tagged Google Calendar events into draft Clio time entries by generating safe billing narratives with Anthropic Claude, then emails an approval digest and logs approved entries to Clio via a two-step webhook confirmation.

## How it works
1. Runs every morning at 7am to build yesterday’s UTC date range and fetch events from Google Calendar.
2. Filters to timed calendar events whose titles contain a bracketed matter reference (for example, “[2026-CH-042] …”) and calculates duration and metadata for each billable event.
3. Searches Clio for a matching matter and either flags the event for manual handling if no exact display number match is found or prepares an Anthropic Claude prompt from the event’s metadata.
4. Sends the prompt to Anthropic Claude to generate a short billing narrative, then validates the response with a safety self-check, keyword scanning, and a 200-character limit.
5. Builds a single digest email that groups ready-to-approve drafts (with approval links) and items needing attention, logs the digest via an external compliance sub-workflow, and sends it via SMTP.
6. When an attorney clicks an approval link, serves a review page via webhook and requires a POST confirmation before creating the time entry in Clio.
7. On valid confirmation, creates the Clio time entry, logs the approval via the compliance sub-workflow, and returns a success (or error) confirmation page.

## Setup
1. Add Google Calendar OAuth2 credentials and set the calendar ID variable (for example, `FIRM_ATTORNEY_CALENDAR_ID` or leave it as `primary`).
2. Add Clio OAuth2 credentials and set `CLIO_BASE_URL` and `FIRM_ATTORNEY_CLIO_USER_ID` for the user who should own the time entries.
3. Add an Anthropic API key using HTTP Header Auth (`x-api-key`) so the workflow can call the Messages API.
4. Add SMTP credentials and set `FIRM_ATTORNEY_EMAIL` and `FIRM_FROM_EMAIL` for the daily digest delivery.
5. Set `N8N_PUBLIC_URL` and ensure the two webhook endpoints (`/webhook/approve-time-entry` and `/webhook/confirm-time-entry`) are publicly reachable for approval and confirmation links.
6. Set `GUARDRAIL_WORKFLOW_ID` to the compliance logging sub-workflow you want to execute for digest and approval audit entries.

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Execute Sub-workflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
