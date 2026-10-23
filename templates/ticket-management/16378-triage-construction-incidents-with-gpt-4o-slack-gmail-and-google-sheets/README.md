# 🎫 Triage construction incidents with GPT-4o, Slack, Gmail and Google Sheets

> ⚡ **71 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow ingests construction incident webhooks, normalizes the payload, and uses OpenAI GPT-4o-mini to classify each incident by type and urgency, then routes alerts to Slack and Gmail and logs incidents to Google Sheets, with a daily Slack digest generated from the sheet.

## How it works
1. Receives an incoming incident via a POST webhook.
2. Normalizes the incoming Procore/Fieldwire-style payload into a consistent incident object (ID, title, description, location, reporter, assignee, and timestamps).
3. Sends the incident details to OpenAI (GPT-4o-mini) to classify issue type and urgency and generate a short summary, recommended action, and tags.
4. Routes incidents by urgency, sending Critical incidents to Slack with an @channel mention and emailing details to a project manager via Gmail.
5. Sends High-urgency incidents to Slack as a formatted notice.
6. Appends every incident to a Google Sheets log with status set to open.
7. Runs daily at 18:00 server time, reads the incident log from Google Sheets, builds an urgency-grouped digest, and posts it to a Slack channel.

## Setup
1. Add credentials for OpenAI, Slack (OAuth2), Gmail (OAuth2), and Google Sheets (OAuth2).
2. Copy the webhook URL from the Webhook trigger and register it in your source system (for example, Procore or Fieldwire) as the incident-created endpoint.
3. Replace the placeholder Slack channel IDs for Critical, High, Digest, and Error alerts.
4. Update the Gmail recipient address (pm@example.com) to your real project manager email.
5. Set the Google Sheets spreadsheet (document ID) and ensure the target sheet exists with columns that match the incident log fields used by the workflow.
6. Confirm the schedule trigger time (cron: 0 18 * * *) matches your desired timezone/server time for the daily digest.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
