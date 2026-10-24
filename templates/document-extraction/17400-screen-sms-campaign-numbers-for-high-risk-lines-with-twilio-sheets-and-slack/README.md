# 🔬 Screen SMS campaign numbers for high-risk lines with Twilio, Sheets, and Slack

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow manually screens campaign phone numbers from Google Sheets using Twilio Lookup Line Type Intelligence, separates safe mobile numbers from risky or invalid ones into different tabs, and posts a run summary to Slack.

## How it works
1. Starts when you run the workflow manually.
2. Reads all rows from the “Pending Campaign” tab in Google Sheets and processes them one number at a time.
3. Calls Twilio Lookup v2 for each phone number to retrieve validity, country code, and Line Type Intelligence details.
4. Classifies each number as safe only if the lookup succeeds and the number is a valid mobile in an allowed country, otherwise marking it for quarantine with a reason.
5. Appends safe numbers to the “Safe To Send” Google Sheets tab and quarantined numbers to the “Quarantine” tab.
6. Builds a summary of totals and quarantine breakdowns and posts the results to a selected Slack channel.

## Setup
1. Add Twilio credentials (Account SID/Auth Token) and enable Line Type Intelligence for Twilio Lookup in your Twilio console.
2. Add a Google Sheets OAuth2 credential and select your spreadsheet, ensuring it contains the “Pending Campaign”, “Safe To Send”, and “Quarantine” tabs with matching columns.
3. Add a Slack credential and set the target channel for the screening summary message.
4. (Optional) Update the allowed country codes and line types in the classification code to match your campaign requirements.

## Requirements
- A Twilio account (Account SID and Auth Token) with Line Type Intelligence enabled on Lookup. This is a billable Lookup add-on, not the free basic lookup.
- A Google account with a spreadsheet that has the Pending Campaign, Safe To Send, and Quarantine tabs.
- A Slack workspace, a channel, and a Slack app credential.

## Customization
- Swap the manual trigger for a Schedule trigger to screen on a timer, or a Webhook to screen on demand from another workflow.
- Add more Lookup data packages, such as caller name or SIM-swap signals, for stricter screening (each adds cost).
- Replace the safe-or-quarantine split with a numeric risk score, or add a third bucket for borderline cases.
- Wire the Safe To Send tab straight into your sending workflow so it only ever reads numbers that passed.

## Additional info
The point is to gate a list before it reaches your sender, since landlines, VoIP, and premium-rate lines are what SMS pumping fraud is built on, and catching them up front saves both the send cost and the failure-rate hit. Safe and quarantined numbers go to separate tabs rather than one tab with a status column, so the downstream sender reads a clean list without filtering. Basic Lookup validation is free, but Line Type Intelligence bills per lookup at around $0.008 each, so screening a large list is a real cost to budget for. The allow rules live in a Code node you can read, with no AI involved.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
