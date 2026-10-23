# 📊 Run synthetic campaign focus groups with Claude and Google Sheets and SendGrid

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow receives marketing campaign copy via webhook, simulates reactions from weighted ICP-based AI personas using Anthropic Claude, calculates an explainable 0–100 appeal score, writes a launch recommendation, logs results to Google Sheets, and notifies the appropriate team by SendGrid email.

## How it works
1. Receives a webhook POST containing campaign details (copy, channel, CTA, offer, brand voice, budget) and a JSON list of ICP segments with weights.
2. Builds a normalized persona panel from the ICP segments so persona weights sum to 1.
3. Uses Anthropic Claude to role-play each persona’s reaction to the campaign and returns structured scores plus a confidence rating that the copy is usable.
4. If the confidence is too low, responds to the webhook with an “input insufficient” message instead of scoring the campaign.
5. Aggregates persona reactions into weighted metrics and a composite 0–100 appeal score with a readiness tier using a deterministic formula.
6. Uses Anthropic Claude again to synthesize the panel results into an overall recommendation, risks, strengths, and suggested copy changes.
7. Appends a summary row for every run to a Google Sheets tracker, sends a SendGrid email to the growth or creative team based on the recommendation, and responds to the webhook with the full report JSON.

## Setup
1. Add Anthropic credentials and select them for both Claude chat model steps.
2. Add Google OAuth2 credentials for the Google Sheets API request and replace `YOUR_SHEET_ID` with your spreadsheet ID.
3. Create a `FocusGroupReports` sheet/tab with headers matching the workflow’s appended row format (campaign metadata, scores, recommendation, risks, decided timestamp).
4. Add a SendGrid API key and replace `YOUR_SENDGRID_API_KEY`, then update the growth and creative recipient email addresses used in the SendGrid requests.
5. Copy the production webhook URL from n8n and configure your campaign submission tool to POST to `/synthetic-focus-group-inbound` with the expected fields (or rely on the built-in defaults for testing).

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
