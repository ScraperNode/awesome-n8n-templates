# 🎣 Qualify and log form leads with Google Sheets and Slack alerts

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow captures leads via an n8n Form, normalizes and validates the email, checks Google Sheets to prevent duplicates, scores and tiers new leads, then appends them to Google Sheets and posts an alert to a Slack channel.

## How it works
1. Triggers when a visitor submits the built-in n8n Form with name, email, company, budget, and message.
2. Cleans the submitted fields, validates the email address, and generates a normalized email key that ignores +tags and Gmail dots.
3. Stops processing submissions with invalid emails.
4. Looks up the email key in a Google Sheets “Leads” tab and flags the submission as a duplicate if it already exists (or appears twice in the same run).
5. Scores and tiers each new lead (hot/warm/cold) based on email domain, company name, budget selection, and message length.
6. Appends the scored lead to Google Sheets and sends a formatted notification to Slack.

## Setup
1. Create or choose a Google Sheets spreadsheet, add a tab named `Leads`, and add the header row `submittedAt, name, email, emailKey, emailDomain, company, budget, message, score, tier, scoreReasons`.
2. Add a Google Sheets credential in n8n and update the workflow’s spreadsheet URL value in “Set sheet and scoring rules”.
3. Add a Slack credential, select the target channel in the Slack node, and ensure the workflow has permission to post messages there.

## 🔗 Nodes Used

Google Sheets, Slack, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
