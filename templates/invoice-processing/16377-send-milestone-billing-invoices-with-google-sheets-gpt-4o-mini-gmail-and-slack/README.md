# 🧾 Send milestone billing invoices with Google Sheets, GPT-4o mini, Gmail and Slack

> ⚡ **95 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow polls a Google Sheets milestone tracker every 15 minutes, calculates milestone-based invoice amounts, uses OpenAI (gpt-4o-mini) to draft invoice messaging, emails the invoice via Gmail with an approval link, then records approval in Google Sheets and notifies an accounts Slack channel.

## How it works
1. Runs every 15 minutes and reads milestone rows from a Google Sheets “Milestones” tab.
2. Filters for milestones where % Complete is at or above the Invoice Trigger % and the Invoice Status is Pending.
3. Calculates the billable amount, generates an invoice ID, and asks OpenAI (gpt-4o-mini) to return a JSON invoice narrative, payment terms, email subject, and HTML email body.
4. Builds an approval URL token, generates a styled HTML invoice document, and sends the invoice email to the client via Gmail with an Approve Invoice button.
5. After the email step returns an approval result, updates the milestone status to Sent, appends a record to the Google Sheets “Invoice Log” tab, and stamps the approval timestamp in the Milestones tab.
6. Posts a Slack message to the accounts team with the milestone ID and approval timestamp, and sends a Slack alert if the workflow errors.

## Setup
1. Add Google Sheets OAuth2 credentials and replace the spreadsheet document ID and sheet tabs for both the “Milestones” and “Invoice Log” operations.
2. Add an OpenAI credential (used with the gpt-4o-mini model) and adjust the prompt/model if you want different invoice wording.
3. Add a Gmail OAuth2 credential and update the recipient address in the Gmail node (CLIENT_EMAIL@example.com) to your client email field or target address.
4. Add Slack OAuth2 credentials and replace both Slack channel IDs (error alerts and accounts notifications) with your workspace channels.
5. Replace YOUR_N8N_WEBHOOK_BASE_URL in the approval URL builder with your live n8n base URL and ensure your Milestones sheet includes the required columns (Milestone ID, Contract ID, Client Name, % Complete, Invoice Trigger %, Contract Value ($), Invoice Status, Currency).

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
