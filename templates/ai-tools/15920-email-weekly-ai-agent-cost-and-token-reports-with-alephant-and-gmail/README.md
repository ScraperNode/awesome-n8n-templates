# 🎯 Email weekly AI agent cost and token reports with Alephant and Gmail

> ⚡ **10 views** · 🎯 [AI Summarization & Classification](../)

## Description

## Quick overview
This workflow runs every Monday at 9 AM to pull a 7‑day usage summary from Alephant AI Gateway, calculates key metrics for AI Agents like total cost and tokens, and emails a formatted cost and usage report to a recipient via Gmail.

## How it works
1. Runs on a weekly schedule (Monday at 9 AM).
2. Fetches the last 7 days of usage data from Alephant AI Gateway Analytics, including cost, request count, token totals, and period-over-period changes.
3. Applies a configured recipient email address for the report.
4. Formats the Alephant usage summary into a plain-text email with total cost (converted from cents), total requests, total tokens, and week-over-week trends.
5. Sends the report email through Gmail to the configured recipient.

## Setup
1. Install the Alephant Analytics community node (@alephantai/n8n-nodes-alephant-analytics) in your n8n instance.
2. Create and select an Alephant Virtual Key credential to allow the workflow to read usage summaries from your Alephant workspace.
3. Connect a Gmail OAuth2 credential and ensure the Gmail account is allowed to send email.
4. Update the recipient email value in the report configuration step and adjust the schedule if you want a different send time or cadence.

## Requirements
- Alephant account (free tier works) - https://alephant.io
- Gmail account

## Customization
- Change the schedule to daily or hourly by editing the Schedule Trigger interval
- Swap the Gmail node for Slack, Discord, or Send Email (SMTP) to deliver the report elsewhere
- Adjust the Usage Summary period (e.g. 24 Hours or 30 Days) to change the reporting window
- Add a second Alephant Analytics node with the Cost by Model operation to include a per-model spend breakdown

## Additional info
Who's it for: Teams running production AI agents - autonomous workflows that call AI models on their own and can quietly run up cost that only surfaces on the invoice. Also useful for solo AI developers and AI-first startups who want a regular, automatic read on their AI spend without logging into a dashboard.
Documentation: https://developers.alephant.io

## 🔗 Nodes Used

Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
