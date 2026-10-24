# 👥 Predict employee attrition risk with Google Sheets, OpenAI, Gmail, and Telegram

> ⚡ **36 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow runs weekly to pull HR datasets from Google Sheets, calculate rule-based attrition risk signals, and enrich them with an OpenAI (GPT-4o-mini) risk assessment. It logs results back to Google Sheets, sends high-risk alerts via Telegram, emails an HTML digest via Gmail .

## How it works
1. Runs every week on a schedule trigger.
2. Reads employee master data, attendance, engagement surveys, performance reviews, and 1:1 notes from Google Sheets and merges them into one profile per employee.
3. Calculates a rule-based flight-risk score and factors, and builds an anonymized payload for model analysis.
4. Sends the anonymized employee signals to OpenAI (GPT-4o-mini), parses the returned JSON risk assessment, and falls back to rule-only scoring while notifying an admin in Telegram if parsing fails.
5. Combines the rule-based and LLM scores into a composite risk score and assigns a risk level.
6. Sends a Telegram alert and appends a flagged record to the Google Sheets Risk_Dashboard for high-risk employees, while logging standard-risk outcomes to the same sheet.
7. Reads the day’s Risk_Dashboard entries, builds an HTML summary, and emails the weekly digest to the HR team via Gmail.
8. If any workflow node errors, posts an execution alert to a Slack channel.

## Setup
1. Add Google Sheets OAuth credentials, set your Google Sheet ID, and ensure the spreadsheet includes tabs named Employees_Master, Attendance, Engagement_Survey, Performance_Reviews, OneOnOne_Notes, and Risk_Dashboard.
2. Add an OpenAI credential and confirm the model selection (gpt-4o-mini) matches what’s available in your account.
3. Add Telegram Bot credentials and replace YOUR_TELEGRAM_CHAT_ID for both the high-risk alert and LLM-failure admin notification.
4. Add Gmail OAuth credentials and set the recipient address for the HR digest email.
5. Add Slack OAuth credentials and replace YOUR_SLACK_CHANNEL_ID for workflow error alerts.
6. Review and adjust the high-risk threshold value (default 70) and the weekly cron schedule as needed.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
