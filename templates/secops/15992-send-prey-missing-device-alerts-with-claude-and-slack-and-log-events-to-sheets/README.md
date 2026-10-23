# 🔒 Send Prey missing-device alerts with Claude and Slack and log events to Sheets

> ⚡ **37 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow receives Prey device webhook events, sends device_missing incidents to Anthropic Claude to generate an urgent Slack alert, and appends both missing and non-missing device lifecycle events to a Google Sheets audit log.

## How it works
1. Receives a basic-authenticated POST webhook from Prey containing a device event payload.
2. Checks the event type and routes device_missing events down an alert path while sending all other event types directly to logging.
3. For device_missing events, extracts key device/owner details and the last-known GPS location to build a Google Maps link.
4. Sends the missing-device context to Anthropic Claude to generate a concise three-sentence security alert for IT.
5. Posts the AI-generated alert and Maps link to a specified Slack channel.
6. Normalizes both missing and non-missing events into a flat schema and appends each event as a new row in Google Sheets.

## Setup
1. Create and select HTTP Basic Auth credentials in the webhook and use the same username/password when configuring the Prey webhook in the Prey Control Panel.
2. Add an Anthropic API credential for the Claude model used to generate the missing-device alert.
3. Add a Slack credential with permission to post messages and set the target channel ID in the Slack message step.
4. Add a Google Sheets OAuth2 credential and replace the spreadsheet URL/ID and sheet name used for the append operation.
5. Activate the workflow, copy the live webhook URL, and paste it into the Prey Control Panel webhook configuration.

## Requirements
-  Prey account / Slack API KEY / Claude API KEY / Google Sheets API

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
