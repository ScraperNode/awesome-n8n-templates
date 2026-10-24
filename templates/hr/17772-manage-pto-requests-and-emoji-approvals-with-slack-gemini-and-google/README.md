# 👥 Manage PTO requests and emoji approvals with Slack, Gemini, and Google

> ⚡ **3 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow captures Slack PTO requests and approval reactions, uses Google Gemini to extract date ranges and reasons, checks Google Calendar for conflicts, logs requests in Google Sheets, and on ✅ approval blocks the time in Google Calendar and notifies the requester.

## How it works
1. Triggers when the Slack app is mentioned (for new PTO requests) or when a reaction is added (for approvals).
2. For PTO requests, sends the mention text to Google Gemini (Generative Language API) to extract a start date, end date, and reason.
3. Checks the shared team Google Calendar for busy events during the requested date range and warns the requester in Slack if conflicts exist.
4. If no conflicts are found, posts the request to an HR Slack channel with instructions to react with ✅ and logs the pending request in Google Sheets.
5. For reaction events, validates that the ✅ reaction occurs in the HR channel and was added by the configured HR admin user.
6. Looks up the matching request in Google Sheets by the Slack message timestamp, creates an all-day PTO event in Google Calendar, updates the request status to Approved in Google Sheets, and sends an approval confirmation to the employee in Slack.

## Setup
1. Create and connect Slack credentials with event subscriptions for app mentions and reaction_added, then set the HR channel ID and HR admin user ID in the workflow’s configuration fields.
2. Add Google Gemini (Google PaLM / Generative Language API) credentials and confirm the model name used in the request matches an available Gemini model.
3. Add Google Calendar OAuth2 credentials and set the shared team calendar ID used for conflict checks (and the calendar ID used for creating the approved PTO event).
4. Add Google Sheets service account credentials and update the target spreadsheet and sheet, ensuring it includes columns for Message_ID, User, Start, End, reason, Status, and Approved_By.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Calendar, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
