# 📈 Capture and log email trade instructions with Gmail, OpenAI, and Google Sheets

> ⚡ **11 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow polls Gmail for emails with the subject “Trade Instruction”, uses OpenAI Chat Completions to extract trade fields from the email body, logs valid and failed extractions to separate tabs in Google Sheets, and sends confirmation and ops alert emails via Gmail.

## How it works
1. Triggers every minute by polling Gmail for new messages matching the query `subject:"Trade Instruction"`.
2. Extracts the email body, sender address, subject, and message/thread IDs and generates a trade reference and timestamps.
3. Sends the email body to OpenAI (Chat Completions) to return a JSON object containing asset, ticker, action, quantity, price, client, and notes.
4. Parses the returned JSON, validates that asset is present and quantity is greater than zero, and marks the result as valid or failed with a reason.
5. Appends valid trade instructions to the “Valid Trades” tab in Google Sheets, or appends failures (including a snippet and error reason) to the “Failed Trades” tab.
6. For valid trades, replies to the original email in Gmail with a receipt confirmation and emails the ops team a capture notification, and for failed trades, emails the ops team a manual-review alert with the original email content.

## Setup
1. Connect Gmail OAuth2 credentials for the Gmail trigger, client reply, and ops alert email steps.
2. Connect an OpenAI API credential for the HTTP request to `https://api.openai.com/v1/chat/completions`.
3. Connect Google Sheets OAuth2 credentials and replace `YOUR_TRADE_LEDGER_SHEET_ID` with your spreadsheet ID.
4. Create two tabs in the target spreadsheet named “Valid Trades” and “Failed Trades” with columns that match the fields being appended.
5. Replace `YOUR_OPS_TEAM_EMAIL` with the ops notification address in both ops alert email steps.

## Requirements
- A Gmail account connected via OAuth2 — the mailbox that actually receives the trade-instruction emails
- An OpenAI API key with access to a ChatGPT model (used for field extraction)
- A Google Sheets account (OAuth2) with one spreadsheet containing two tabs: "Valid Trades" and "Failed Trades"
- An internal ops team email address to receive the success and manual-review alerts

## Customization
- Change the Gmail trigger subject filter from "Trade Instruction" to whatever phrase your senders actually use
- Adjust the trigger poll interval (default: every minute) to a slower cadence if real-time capture isn't needed
- Edit the AI extraction prompt to pull extra fields such as order type, currency, or settlement date
- Tighten the validation rules in the Parse node — for example, make ticker mandatory or set a min/max quantity
- Reword the client confirmation and ops alert emails to match your team's tone and branding

## Additional info
This workflow only captures, logs, and acknowledges instructions. It does not connect to any brokerage and does not place, execute, or settle any trade — the client reply confirms the instruction was captured, not executed.
The two-tab setup keeps clean trades and review-needed trades fully separate, so no email is ever silently dropped.
The AI temperature is intentionally kept low for consistent, repeatable extraction — keep it that way unless you need looser parsing.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
