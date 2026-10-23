# 🧾 Flag possible duplicate supplier invoices in Google Sheets before payment with Slack alerts

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
Each weekday before the payment run, I flag invoice pairs in your sheet that look like one bill: same number and amount, same number with a different amount, or the same amount under a new number within 45 days. New pairs go to a review tab and Slack.

## How it works
1. A schedule runs at 08:00 on weekdays.
2. I read your invoice tab once.
3. I tidy supplier names (Ltd, Limited and punctuation stop mattering) and invoice numbers (INV-000123 matches 123), then compare every pair from the same supplier. Credit notes are left out of the same-amount check.
4. I drop any pair already in your Possible duplicates tab, so a pair you have looked at is not raised again tomorrow.
5. I write each new pair to that tab and send Slack one message listing them.

## Setup
1. Connect Google Sheets and Slack.
2. In the same spreadsheet, add a `Possible duplicates` tab with the 11 headers listed in the main sticky.
3. In Settings, paste the sheet URL and set the four column names to match your invoice tab. The defaults match the sheet my free invoice extractor fills.
4. Run it once by hand and read the tab. If it flags too much, lower dateWindowDays.

## Requirements
- A Google Sheet of supplier invoices and a Slack workspace.

## Customization
- Read from your accounting system's bills export instead of a sheet, keeping the four column names. Post to email instead of Slack if the person who pays is not in Slack.

## Additional info
Built by Fractional HQ. If your invoices arrive as PDFs in Gmail, my free template reads them into this sheet first: https://n8n.io/workflows/18603. If you want the whole accounts payable flow built, send me a brief at https://fractionalhq.uk/brief

If the figures you check arrive as PDF reports with tables, my paid template pulls those tables into Google Sheets and checks the totals in code first: https://n8n.io/workflows/19346

If you would rather not set it up yourself, I can set it up for you on your own n8n account for £49. Tell me what you use at https://fractionalhq.uk/brief and I will reply with what I need from you before any work starts.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
