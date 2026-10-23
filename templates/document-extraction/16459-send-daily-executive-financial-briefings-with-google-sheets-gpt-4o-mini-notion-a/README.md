# 🔬 Send daily executive financial briefings with Google Sheets, GPT-4o-mini, Notion and Telegram

> ⚡ **97 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs every weekday at 7 AM to pull financial data from Google Sheets, calculate KPIs, generate an executive briefing with OpenAI (GPT-4o-mini), save the report to Notion, and send it to Telegram, with a Slack alert on any workflow error.

## How it works
1. Runs on a weekday schedule trigger at 7 AM.
2. Fetches the latest rows from five Google Sheets tabs: CashFlow, Revenue, Payroll, Subscriptions, and Expenses.
3. Combines the sheet data and calculates key KPIs (totals, percentage changes, cash runway, and status labels).
4. Sends the KPI summary to OpenAI (GPT-4o-mini) to generate a Telegram-formatted executive financial briefing.
5. Saves the AI-generated briefing to a Notion database page and sends the same briefing to a Telegram chat.
6. Checks whether revenue is down more than 10% and, if so, sends a separate critical alert message to Telegram.
7. If any node fails during execution, posts an error alert to a Slack channel.

## Setup
1. Add Google Sheets OAuth2 credentials and replace the placeholder spreadsheet ID and sheet selections in all five Google Sheets nodes.
2. Add an OpenAI API credential for the GPT-4o-mini model used by the AI agent.
3. Add Notion credentials and set your Notion database ID where the CFO report pages are created.
4. Add Telegram bot credentials and set the target chat ID for both Telegram messages.
5. Add Slack OAuth2 credentials and choose the channel that should receive workflow error alerts.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Notion, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
