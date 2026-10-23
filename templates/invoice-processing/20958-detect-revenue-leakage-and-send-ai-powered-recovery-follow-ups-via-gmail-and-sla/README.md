# 🧾 Detect revenue leakage and send AI-powered recovery follow-ups via Gmail and Slack

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/d74YKhD0P24

This scheduled workflow audits invoices, delivered work, payments, and follow-ups stored in Google Sheets to detect revenue leakage, logs recovery tasks back to Sheets, uses Google Gemini to draft next-step messages, then emails customers via Gmail or posts internal alerts to Slack.

## How it works
1. Runs on a schedule and loads configuration values such as the Google Sheets spreadsheet ID and aging thresholds.
2. Reads the Invoices, Work Delivered, Payments, and Follow-ups tabs from Google Sheets.
3. Correlates work, invoices, payments, and follow-ups to detect issues like unbilled work, duplicate billing, billing variance, draft invoices not sent, balance mismatches, orphan payments, and overdue/due-soon invoices without adequate follow-up.
4. Generates prioritized recovery tasks with next-action dates and appends them to the Follow-ups sheet in Google Sheets (limited to the first two findings per run).
5. Builds a prompt per finding and sends it to Google Gemini to produce a JSON message draft (subject, body, and recommended action).
6. Emails the drafted message to the customer via Gmail when the finding is customer-facing and an email address exists, otherwise posts an internal Slack alert to the selected channel.
7. Produces an audit summary item with total findings processed and total amount at risk.

## Setup
1. Create a Google Sheets file with tabs named Invoices, Work Delivered, Payments, and Follow-ups, and ensure the columns referenced in the workflow (for example Invoice_ID, Work_ID, Client_Email, Invoice_Amount, Due_Date, Delivered_Date, Amount_Paid, and Followup_Date) exist.
2. Add a Google Sheets Service Account credential, share the spreadsheet with the service account email, and update the spreadsheet ID in the configuration if you are not using the default value.
3. Add a Google Gemini (Google PaLM) credential for the LangChain Google Gemini model used to draft messages.
4. Add a Gmail OAuth2 credential for sending customer emails and confirm the sender mailbox is allowed to send to your recipients.
5. Add a Slack credential and set the target channel (for example #general) where internal leakage alerts should be posted.
6. Review and adjust the aging thresholds (grace period, draft threshold, stale follow-up, and due-soon days) in the configuration to match your billing process.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
