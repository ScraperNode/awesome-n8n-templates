# 🔬 Record Chatwork expense and sales notes to Google Sheets with Claude checks

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow polls selected Chatwork rooms every 5 minutes, logs new messages to Google Sheets, uses Anthropic Claude to extract expense and sales records from keyword-tagged notes, validates the results with custom code, writes structured rows to a records sheet, and optionally replies in Chatwork with a confirmation.

## How it works
1. Runs every 5 minutes (or manually) and loads configuration such as Chatwork room IDs, the note keyword, categories, and timezone.
2. Fetches the room list and then pulls the latest messages from each configured Chatwork room via the Chatwork API.
3. Cleans Chatwork message markup into plain text, filters out old/system/self-reply messages, and keeps only messages not seen in previous executions.
4. Appends or updates each new message into a Google Sheets “log” tab for traceability.
5. For messages containing the configured keyword, checks Google Sheets “records” to skip notes already recorded and sends the remaining notes to Anthropic Claude to extract one or more accounting records as JSON.
6. Validates Claude’s extracted records against the original note (amount/quote/date/category rules), converts relative date text into an actual date, and writes rows to the Google Sheets “records” tab with an OK or 要確認 status.
7. If enabled, posts a single reply back to Chatwork summarizing what was recorded (or why it needs review) and marks the reply so it is never processed as a note.

## Setup
1. Create a Google Sheets spreadsheet, run the “Run once: set up the sheet” branch with your Spreadsheet ID to create the log and records tabs with headers, and then select that spreadsheet in all Google Sheets nodes.
2. Add credentials for Chatwork API access via HTTP Header Auth (x-chatworktoken), Google Sheets OAuth2, and Anthropic (Claude).
3. Update the Config values for room IDs, the trigger keyword (default #記録), categories/category hints, max message age, and whether to reply in Chatwork.

## Requirements
- Chatwork account with an API token (the free plan was enough for the API in my test)
- Google account (Google Sheets OAuth2 credential)
- Anthropic API key
- A blank Google Sheet, created by you
- n8n running continuously (the workflow polls every 5 minutes)

## Customization
- Change the keyword, the room IDs and the reply text in Config
- Edit the category list and its examples in Config (the examples matter)
- Turn off the replies in Config
- Change the polling interval in the Schedule Trigger
- Replace the two Google Sheets nodes with Excel 365 or Convert to File (not tested)

## Additional info
Claude reads each note, but code checks the result against the note: the amount must be written in the message, the quote must be in it, the currency must be yen, the category must be in your list, and the date words (昨日, 10/3, 先週金曜) are turned into a date by code, not by the AI. Anything doubtful is saved as 要確認 with the reason in Japanese, and an amount with no record is flagged instead of being lost.

Test: 30 short notes I wrote myself (26 ordinary, 4 designed to fail), one run each with Claude Haiku 4.5. After adding category examples to the prompt, 25 of the 26 ordinary notes were right and the one miss was flagged by code; 3 of the 4 traps were stopped. The trap that was not stopped: "ホテル代 12,000円 x 2泊" is recorded as 12,000, because code checks what is written and does not do arithmetic. A wrong choice between two written amounts also passes. This is a small test: try your own notes first.

The workflow polls every 5 minutes (about 8,640 executions a month on n8n Cloud even when idle; a calculation, not a measurement). The replies are posted with your API token, so they appear as written by that account; use a dedicated account if you can. Notes are sent to Anthropic.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
