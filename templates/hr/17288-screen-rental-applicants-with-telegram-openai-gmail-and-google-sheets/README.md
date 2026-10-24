# 👥 Screen rental applicants with Telegram, OpenAI, Gmail and Google Sheets

> ⚡ **342 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow captures rental applications from Telegram, uses OpenAI to extract applicant details and score risk after a credit/background API check, logs everything in Google Sheets, notifies the landlord via Telegram, and optionally emails a reference check via Gmail while sending Slack alerts on failures.

## How it works
1. Triggers when a new Telegram message is received from an applicant.
2. Uses OpenAI (GPT-4o-mini) to extract structured application fields (identity, income, rent, employer, and previous landlord details) from the message.
3. Appends the parsed application to a Google Sheets tracker and calls an external credit/background check API with the applicant’s basic details.
4. Uses OpenAI (GPT-4o-mini) to generate a 0–100 score, red flags, a landlord-facing summary, and a recommendation based on the application and credit check result.
5. Updates the applicant’s row in Google Sheets with the screening results, sends a confirmation message to the applicant on Telegram, and notifies the landlord on Telegram.
6. If a previous landlord email is present, sends a Gmail reference request and waits for the reply, then uses OpenAI to extract key reference answers and updates Google Sheets with the reference response.
7. If any step fails, posts an error alert to a Slack channel with execution details.

## Setup
1. Connect credentials for Telegram Bot, OpenAI, Google Sheets (OAuth2), Gmail (OAuth2), and Slack (OAuth2).
2. Create or adapt a Google Sheet with the required columns and set YOUR_GOOGLE_SHEET_ID in both Google Sheets nodes.
3. Replace the placeholder credit/background check HTTP endpoint with your provider’s API URL and add the required authentication.
4. Set YOUR_LANDLORD_CHAT_ID for Telegram landlord notifications and YOUR_SLACK_CHANNEL_ID for Slack error alerts.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, Telegram Trigger, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
