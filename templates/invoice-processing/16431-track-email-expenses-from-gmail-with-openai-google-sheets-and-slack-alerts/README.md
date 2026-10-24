# 🧾 Track email expenses from Gmail with OpenAI, Google Sheets, and Slack alerts

> ⚡ **40 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow monitors Gmail for invoice or receipt emails, uses OpenAI to extract an expense amount and category, logs the result to Google Sheets, and sends a Slack alert when an expense exceeds a defined threshold.

## How it works
1. Triggers every minute when a new email arrives in Gmail.
2. Filters emails to only those with “Invoice” or “Receipt” in the subject and extracts the sender, subject, received date, and snippet text.
3. Validates that the email content is long enough, then sends the email snippet to OpenAI to return a JSON expense amount and category.
4. Parses and merges the AI-extracted fields with the original email metadata and formats a single expense record with a normalized date.
5. Looks up the expense in Google Sheets by subject and date to avoid logging duplicates.
6. Appends the expense to the Google Sheets spreadsheet and posts a Slack message if the logged amount is greater than 5000.

## Setup
1. Connect your Gmail OAuth2 credentials and ensure the Gmail Trigger has access to the mailbox you want to monitor.
2. Add an OpenAI credential and confirm the model in the OpenAI node matches what you want to use.
3. Connect Google Sheets using a service account, update the spreadsheet/document and sheet tab, and ensure the sheet has columns matching Date, Amount, Sender, Category, and Subject.
4. Connect Slack OAuth2 credentials, select the target channel for alerts, and invite the Slack app/bot to that channel.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
