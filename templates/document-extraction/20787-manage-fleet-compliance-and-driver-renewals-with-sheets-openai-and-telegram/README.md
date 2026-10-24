# 🔬 Manage fleet compliance and driver renewals with Sheets, OpenAI and Telegram

> ⚡ **9 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs a daily compliance scan from Google Sheets, checks each vehicle’s document expiries and pending e-challans via an HTTP API, then uses OpenAI to message drivers on Telegram, create renewal tasks in ClickUp, notify ops in Slack, and email Gmail digests to fleet managers.

## How it works
1. Runs every day at 7 AM on a schedule trigger.
2. Reads the Fleet_Register and Alert_Log tabs in Google Sheets to evaluate RC/insurance/PUC/fitness/permit expiries and dedupe alert stages per vehicle.
3. Calls your e-challan provider over HTTP to fetch pending challans, calculates a 0–100 risk score, and sets the vehicle dispatch status to BLOCKED if any document is expired.
4. When dispatch status changes, updates the vehicle’s status in Google Sheets and posts a dispatch gate alert to an ops Slack channel.
5. For vehicles needing action, uses OpenAI (gpt-4o-mini) to generate a driver Telegram message plus manager summary, creates a ClickUp renewal task when needed, sends the driver alert on Telegram, and appends the alert keys/task keys to the Alert_Log sheet.
6. Groups all vehicles needing action by manager email, builds an HTML digest, and sends each fleet manager a daily summary email via Gmail.
7. When a driver sends a document photo to the Telegram bot, the workflow downloads the image, uses OpenAI (gpt-4o) to extract document type/vehicle number/valid-until, validates it against the register, updates Google Sheets if valid, notifies ops in Slack to spot-check, and confirms (or rejects) the upload to the driver on Telegram.

## Setup
1. Create a Google Sheet with Fleet_Register (vehicle_no, document expiry columns, dispatch_status, blocked_reason, driver_telegram_chat_id, manager_email, chassis_last5) and Alert_Log (logged_at, alert_keys, task_keys, etc.) tabs, and put its ID into all Google Sheets nodes.
2. Add credentials for Google Sheets, OpenAI, Telegram Bot, Slack, ClickUp, and Gmail.
3. Configure the e-challan provider HTTP request with your API URL and HTTP Header Auth credential, and ensure chassis_last5/vehicle_no values match what the provider expects.
4. Set your Slack channel ID, and your ClickUp team/space/list IDs used for renewal task creation.
5. Enable the Telegram trigger by setting the bot webhook (copy the n8n Telegram trigger URL into BotFather/webhook setup as required) and ensure each driver’s Telegram chat ID is present in Fleet_Register so unknown senders are ignored.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, Telegram Trigger, ClickUp

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
