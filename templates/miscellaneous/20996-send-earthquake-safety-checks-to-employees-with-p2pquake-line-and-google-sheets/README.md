# 🔧 Send earthquake safety checks to employees with P2PQuake, LINE, and Google Sheets

> ⚡ **2 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow polls the P2PQuake earthquake API every 30 minutes, checks impacted employees stored in Google Sheets, and sends targeted safety check messages via the LINE Messaging API, while also recording employee registration and response status updates back to Google Sheets.

## How it works
1. Runs every 30 minutes and requests the latest earthquake data from the P2PQuake API (filtered to seismic intensity 4+).
2. Reads the last processed earthquake ID from a Google Sheets control sheet and compares it to the newest earthquake to avoid duplicate notifications.
3. If the earthquake is new, loads the employee directory from Google Sheets and checks whether each employee’s home or work prefecture matches any affected prefecture in the earthquake points.
4. Sends a LINE push message safety check to each affected employee’s LINE user ID.
5. Updates the Google Sheets control sheet with the latest earthquake ID and the last-checked timestamp.
6. Receives incoming LINE webhook events and routes replies of 1, 2, or 3 to update the employee’s safety status (Safe, Needs Help, or Other) and response time in Google Sheets, or treats other messages as registration data to append a new employee record.

## Setup
1. Create a Google Sheets OAuth2 credential in n8n and point the workflow to your spreadsheet IDs/sheet tabs for the control sheet (last earthquake ID) and the employee directory.
2. Create a LINE Messaging API channel, enable webhooks, add the n8n LINE webhook URL to LINE’s webhook settings, and add an HTTP Header Auth credential with your LINE channel access token for the push message request.
3. Ensure the employee sheet contains columns for LINE User ID, Home Prefecture, Work Prefecture, Safety Status, and Last Response At, and populate LINE User IDs (or have employees register by sending “Name,Home Prefecture,Work Prefecture”).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
