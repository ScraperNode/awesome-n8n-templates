# 💬 Re-engage dormant real estate leads with Google Sheets, Gemini and Gmail

> ⚡ **52 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow runs daily to find dormant real estate leads in Google Sheets, uses Google Gemini to draft personalized winback emails, sends them via Gmail, updates the lead records, and then posts a run summary digest to Gmail and optionally to Slack.

## How it works
1. Runs every day at 8am on a schedule.
2. Pulls all lead records from a Google Sheets spreadsheet.
3. Filters to leads that have an email address, are not marked “Do Not Contact,” and have not been contacted in at least 30 days.
4. Processes each dormant lead in turn by prompting Google Gemini to generate a short re-engagement email subject and body based on the lead’s name, property interest, and days since last contact.
5. Sends the generated message to the lead via Gmail and updates the corresponding row in Google Sheets (for example, tracking status and re-engagement attempt count).
6. Aggregates the run results and sends a summary digest to a specified Gmail address and to a Slack channel.

## Setup
1. Connect credentials for Google Sheets, Gmail, and Google Gemini (PaLM) API.
2. Select the Google Sheets document and sheet name for both the lead fetch and lead update steps, and ensure your sheet includes fields like Email, Status, Last Contact Date, and Re-Engagement Attempt Count.
3. Set the internal summary recipient address in the digest email step and (optionally) connect Slack and choose the target channel (for example, #lead-updates).
4. Adjust the dormancy window by changing the DORMANT_THRESHOLD_DAYS value (default: 30) in the filtering step if needed.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
