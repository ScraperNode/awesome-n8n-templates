# 🔬 Validate wholesale order emails against a Google Sheets price list with Gmail and GPT-4o

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow monitors Gmail for unread wholesale order emails, uses OpenAI to extract order line items, validates them against a Google Sheets price list, and then sends either a confirmation or a revision request by email while logging the order and alerting the order desk via Telegram, plus a weekly digest.

## How it works
1. Triggers every minute when an unread Gmail message arrives matching the search filter `is:unread subject:(wholesale order)`.
2. Normalizes key fields from the email (sender, subject, received time, and body text) and routes very short emails to an error log.
3. Uses OpenAI (gpt-4o-mini) to extract structured order data (customer details, PO number, delivery date, notes, and line items) from the email text.
4. Loads the PriceList tab from Google Sheets and checks each extracted line for valid SKUs, active status, case-pack multiples, and any quoted price mismatches.
5. If issues are found, emails the customer a revision request listing the problems, logs the order to the Orders tab in Google Sheets, and alerts the order desk in Telegram.
6. If no issues are found, emails an order confirmation with priced lines, logs the order to Google Sheets, and alerts the order desk in Telegram.
7. Marks the original Gmail message as read after the order is logged.
8. Every Monday at 08:00, reads the past week’s Orders from Google Sheets, uses OpenAI to write a short digest email, then sends the digest via Gmail and posts a Telegram summary.

## Setup
1. Connect Gmail OAuth2 credentials and adjust the Gmail trigger search query and mailbox/label settings to match how your wholesale orders arrive.
2. Connect an OpenAI API credential and confirm the selected model (gpt-4o-mini) is available in your account.
3. Connect Google Sheets OAuth2 credentials and update the spreadsheet ID and sheet names, ensuring you have PriceList, Orders, and Errors tabs.
4. Populate the PriceList sheet with the expected columns (at least `sku`, `product`, `unit_price`, `case_pack`, and `status`) so matching and validation work correctly.
5. Connect a Telegram bot credential and set the target chat ID for order desk alerts.
6. Update the weekly digest recipient email address in the digest email step (currently set to `test@atlr.dev`).

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Gmail Trigger, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
