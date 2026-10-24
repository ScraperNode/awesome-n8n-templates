# 🔬 Send weekly narrative client reports with Google Sheets, Claude, and Gmail

> ⚡ **23 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs every Friday at 9:00 AM, pulls active client status data from Google Sheets, uses Anthropic Claude to generate a narrative weekly report with structured HTML and plain text output, and sends the finished report to each client via Gmail.

## How it works
1. Runs every Friday at 9:00 AM on a schedule trigger.
2. Reads all client rows from a specified Google Sheets document.
3. Filters out paused/inactive or incomplete rows, extracts any “Metric:” columns, and builds a reporting week label for each client.
4. Sends each client’s normalized data to Anthropic Claude to write a 3–4 paragraph narrative report and return JSON containing an email subject plus HTML and plain-text bodies.
5. Emails the generated HTML report to each client’s email address using Gmail.

## Setup
1. Create a Google Sheet with the required columns (at minimum “Client Name” and “Client Email”) and optional “Status” plus any “Metric:” columns you want included.
2. Add Google Sheets OAuth2 credentials in n8n and replace the placeholder Sheet ID in the Google Sheets read step.
3. Add an Anthropic credential for the Claude chat model used to generate the structured report.
4. Add Gmail OAuth2 credentials and confirm the “send to” field maps to your sheet’s “Client Email” values (and optionally adjust the prompt tone/system message).

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
