# 🔬 Recover unclaimed credits from Gmail using OpenRouter and Google Sheets

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow scans selected Gmail messages for potential credits, gift cards, refunds, and expiring rewards, redacts sensitive strings, uses OpenRouter (OpenAI-compatible chat completions) to extract structured value signals, and upserts a source-linked register in Google Sheets with daily discovery plus a weekly Gmail digest.

## How it works
1. Runs on a daily schedule (or manually) to search Gmail with a configurable query for messages that may contain gift cards, credits, refunds, vouchers, cashback, rebates, travel credits, or reward points.
2. Fetches each matching Gmail message, redacts code- and token-like strings from the email text, and builds a structured prompt for OpenRouter.
3. Sends the redacted content to OpenRouter chat completions to classify whether the email contains potential value and to extract merchant, value type, possible amount/points, expiry, confidence, and an evidence summary.
4. Labels the assessed Gmail messages with a configured Gmail label to avoid reprocessing and filters to records that contain potential value.
5. Upserts a minimal, source-linked row into a Google Sheets “Value Register” tab keyed by message/thread, preserving any human-set status, desired action, and redeemed fields if the item already exists.
6. Emails a review notice via Gmail when an extracted record is low-confidence or incomplete and is marked “Needs review.”
7. Runs weekly to read the Google Sheets register, prioritize expiring-soon and still-unverified items, and sends a concise digest email via Gmail that also reports total redeemed value recorded in the sheet.

## Setup
1. Connect Gmail credentials in n8n (used for searching, fetching, labeling messages, and sending digest/review emails) and create the Gmail label referenced by the workflow (default: n8n-bounty-assessed).
2. Connect Google Sheets credentials and create a spreadsheet tab named “Value Register,” then add the headers expected by the workflow and paste your spreadsheet ID into the template fields.
3. Create an HTTP Header Auth credential for OpenRouter and set it on the HTTP request node (for example, an Authorization: Bearer <API_KEY> header).
4. In “Set Template Fields,” set your Sheet ID, digest/review recipient emails, time zone, confidence threshold, urgency window, and message limits, and keep gmailSearchMode set to test before switching to discovery.
5. Adjust the Gmail discovery/test queries to match your mailbox and run a small test first to confirm the Google Sheet stores only redacted summaries and source links.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
