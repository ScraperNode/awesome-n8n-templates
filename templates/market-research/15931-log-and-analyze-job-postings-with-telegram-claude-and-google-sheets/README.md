# 📊 Log and analyze job postings with Telegram, Claude, and Google Sheets

> ⚡ **69 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow logs job postings sent via Telegram into Google Sheets using Anthropic Claude to extract structured fields, and generates an on-demand Telegram report (/report) that analyzes trends across all saved postings.

## How it works
1. Triggers when a new Telegram message is received by the bot.
2. Checks the sender’s Telegram chat ID against an allowed user ID to block unauthorized access.
3. If the message is "/report", reads all logged job rows from Google Sheets and sends them to Anthropic Claude to generate a short, Telegram-friendly market trends report.
4. Sends the generated report back to the same Telegram chat.
5. If the message is not "/report", sends the raw job posting text to Anthropic Claude to extract structured job data as JSON.
6. Parses the JSON and appends a new row to Google Sheets with the extracted job details (company, role, seniority, requirements, tech stack, salary, location, domain, and key signal).
7. Replies in Telegram to confirm the job entry was logged.

## Setup
1. Create a Telegram bot with @BotFather and add a Telegram credential in n8n with the bot token.
2. Add an Anthropic credential (API key) and ensure the selected Claude model is available to your account.
3. Create a Google Sheet with the required header columns (Date, Company, Role, Seniority, Hard Requirements, Tech Stack, Salary, Location, Domain, Key Signal) and share it with your Google service account email.
4. Add Google Sheets service account credentials in n8n and set the target spreadsheet ID and sheet name in the configuration values.
5. Replace the allowed Telegram chat ID in the authorization check so only your user can run the workflow.

## Requirements
- Telegram Bot
- Anthropic API Key
- Google Service Account
- Google Sheet shared with Service Account and with headers: Date | Company | Role | Seniority | Hard Requirements | Tech Stack | Salary | Location | Domain | Key Signal

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
