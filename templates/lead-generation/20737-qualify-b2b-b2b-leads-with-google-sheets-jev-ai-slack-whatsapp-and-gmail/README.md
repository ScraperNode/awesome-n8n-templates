# 🎣 Qualify B2B B2B leads with Google Sheets, Jev AI, Slack, WhatsApp and Gmail

> ⚡ **11 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/gkmJcqw7Yrg

This workflow pulls leads from Google Sheets, enriches and scores them using rules plus the Jev (beatapi) API, then routes qualified leads via WhatsApp, Gmail, and Slack while logging every decision back to Google Sheets.

## How it works
1. Runs manually to start a test execution.
2. Reads lead rows from a Google Sheets “Leads_Inbox” sheet and normalizes each lead into a consistent structure (name, email, title, company, domain, phone).
3. Looks up company enrichment data and ICP scoring rules from separate Google Sheets tabs, then calculates a deterministic rule-based fit score.
4. Sends the enriched lead profile to the Jev Judge (beatapi) HTTP API to get an AI score, tier classification, and confidence.
5. Combines the rule score and AI output to assign a final tier (Tier 1, Tier 2, Unqualified, or Needs Review) and determines the next action.
6. Routes Tier 1 leads to WhatsApp with a Calendly link and posts an AE alert to Slack, routes Tier 2 leads to a soft-touch Gmail email, and routes review cases to Slack for human follow-up.
7. Appends each processed lead and its scores, tier, and reasoning to a Google Sheets “Lead_Log” sheet and generates a run summary.

## Setup
1. Create a Google Sheets Service Account credential in n8n, share the spreadsheet with the service account email, and confirm the document ID and tab names (Leads_Inbox, Company_Enrichment, ICP_Rules, Lead_Log).
2. Add an HTTP Header Auth credential for beatapi and ensure the Jev endpoint URL and model settings match your account.
3. Add a WhatsApp Business Cloud credential and set your Phone Number ID, then ensure leads include E.164-formatted phone numbers to receive Tier 1 messages.
4. Add a Gmail OAuth2 credential for sending Tier 2 emails and update the email copy and Calendly links in the ICP rules sheet if needed.
5. Add a Slack credential and set the target channel(s) for Tier 1 and review alerts.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
