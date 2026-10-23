# ⚒️ Inspect product quality from Telegram photos with Google Sheets and Gemini

> ⚡ **32 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow accepts product inspection photos from Telegram, looks up product-specific quality standards in Google Sheets, and uses Google Gemini to return a structured pass/fail defect verdict that is logged to Sheets and routed to operators and supervisors via Telegram, Gmail, and Slack error alerts.

## How it works
1. Triggers when a Telegram bot receives a new message with a downloaded image.
2. Verifies a photo is attached, then extracts the product code (from the caption) and image metadata from the Telegram message.
3. Looks up the product’s reference standard and tolerance notes in Google Sheets based on the product code.
4. Sends the image plus the reference standard to Google Gemini 2.5 Flash and parses the model’s response into a normalized JSON verdict (PASS/FAIL, defect details, confidence, and recommended action).
5. Appends every inspection result to the Google Sheets `Inspection_Log` tab.
6. If the result is FAIL, logs the item to the `Rejected_Items` tab, sends a Telegram failure alert, and emails a detailed report to the supervisor via Gmail.
7. If the result is PASS, sends a Telegram confirmation back to the originating chat.
8. Posts Slack alerts for workflow-level errors and for Google Gemini analysis errors so failed inspections are visible.

## Setup
1. Create and connect a Telegram bot credential, then start a chat with the bot and use the workflow’s Telegram trigger.
2. Connect Google Sheets OAuth2, create a spreadsheet with `Reference_Standards`, `Inspection_Log`, and `Rejected_Items` tabs, and replace `YOUR_GOOGLE_SHEET_ID` in all Google Sheets nodes.
3. Connect a Google Gemini (PaLM) API credential with access to `models/gemini-2.5-flash`.
4. Connect Gmail OAuth2 and replace `supervisor@yourcompany.com` with your supervisor email address.
5. Connect Slack OAuth2 and replace `YOUR_SLACK_CHANNEL_ID` with the channel where you want error alerts.
6. Replace `YOUR_OPERATOR_TELEGRAM_CHAT_ID` if you want FAIL alerts routed to a fixed operator chat instead of the message’s originating chat.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Telegram Trigger, Gmail, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
