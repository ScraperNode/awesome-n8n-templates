# 📋 Send new production orders from Google Sheets to a Telegram shop floor chat

> ⚡ **26 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow runs every 15 minutes to read a Google Sheets production order tracker, posts each unannounced order as a plain-text alert to a Telegram shop-floor chat, and then updates the sheet to mark those orders as announced so they are not sent twice.

## How it works
1. Runs on a 15-minute schedule (or manually) to check for new production orders.
2. Reads all rows from the selected Google Sheets worksheet.
3. Filters for rows with an order ID that are not yet marked as announced, formats one message per order, and highlights urgent orders based on the due date.
4. Sends each formatted order message to a Telegram chat for the shop floor.
5. Updates the corresponding rows in Google Sheets to write the configured “Announced” value so the same orders are not re-sent.

## Setup
1. Connect a Google Sheets account and select the target spreadsheet and worksheet in both the read and update steps.
2. Connect a Telegram account, set the target chat ID, and ensure the bot is allowed to post to that chat.
3. Confirm your sheet has columns for Order, Product, Quantity, Due date, Station, Priority, and Announced (or update the column names, urgentDays, and maxPerRun in the Settings step).

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
