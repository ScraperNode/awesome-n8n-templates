# 🤝 Update sales CRM and tasks from Gmail with Google Gemini and Google Sheets

> ⚡ **38 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow monitors unread Gmail messages labeled “sales”, uses Google Gemini to extract structured deal updates and a suggested reply, writes the deal and next action to Google Sheets, drafts a follow-up email in the original thread, and posts Slack alerts for high-risk or closed-won deals.

## How it works
1. Triggers every minute when an unread email arrives in Gmail with the label “sales”.
2. Sends the email content to Google Gemini to extract a JSON CRM update (company, contact, stage, sentiment, objections, next action, due date, risk) and a short draft reply.
3. Normalizes the extracted fields and prepares a single deal record keyed by the sender’s email plus a task-style next action.
4. Appends or updates a “Deals” row in Google Sheets and then appends the next action to a “Tasks” sheet.
5. Creates a Gmail draft reply addressed to the client in the same email thread.
6. Posts a Slack message to the selected channel if the deal risk is high or if the stage is closed_won, then marks the original email as read.

## Setup
1. Connect credentials for Gmail, Google Gemini (PaLM) API, Google Sheets, and Slack.
2. Create (or choose) a Gmail label named “sales” and ensure sales emails are labeled so they match the trigger filter.
3. Select the target Google Sheets spreadsheet and set up “Deals” and “Tasks” tabs/worksheets with columns that match the fields you want to store.
4. Choose the Slack channel (for example, #sales) where high-risk alerts and closed-won announcements should post.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Gmail Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
