# 🧾 Read Gmail receipt PDFs with Claude and reconcile card statements in Google Sheets

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors Gmail for PDF receipts, uses Anthropic Claude to extract structured receipt data, stores validated results in Google Sheets, then matches receipts to a pasted card statement and posts a reconciliation summary to Slack.

## How it works
1. Triggers every 15 minutes when an unread Gmail message with the label `receipts` arrives with a PDF attachment (or runs the reconciliation flow manually).
2. Splits each email into one item per PDF attachment and extracts text from the PDF for verification.
3. Sends each PDF to Anthropic Claude to extract receipt fields (vendor, date, currency, line items, tax, totals, and payment method) as JSON.
4. Validates Claude’s output against the PDF text and basic arithmetic checks, flags issues as “Needs review,” and appends/updates the receipt record in the Google Sheets `Receipts` tab.
5. On manual reconciliation, reads the `Receipts` and `Card` tabs from Google Sheets, matches card lines to eligible receipts by amount and a configurable date window, and rebuilds the `Matches` tab.
6. Builds a short status summary of items needing attention and posts it to a selected Slack channel.

## Setup
1. Add credentials for Gmail, Google Sheets (OAuth2), Anthropic, and Slack, and select the Slack channel where the app is a member.
2. Create a Google Sheet, paste its ID into the Spreadsheet ID step, run the one-time setup branch to create the `Receipts`, `Card`, and `Matches` tabs with headers, and then select this spreadsheet in the Google Sheets steps.
3. In Gmail, create and apply the `receipts` label to receipt emails you want processed, ensuring the messages remain unread until picked up.
4. Paste or import your card statement into the Google Sheets `Card` tab using the configured column names (default: `Date`, `Merchant`, `Amount`).
5. Adjust the configuration values (base currency, date window, and matching tolerances) to fit your statement format and reconciliation rules.

## Requirements
- Gmail account (OAuth2) with a label named "receipts" on the mails that carry receipts (a Gmail filter can apply it)
- Google account (Google Sheets OAuth2) and a blank Google Sheet
- Anthropic API key (Claude Haiku 4.5 by default; one call per PDF)
- Slack app that is a member of the channel you choose
- Receipts and invoices as PDF attachments (JPG/PNG attachments and receipts in the mail body are not handled)
- A card statement with a date, a merchant and an amount per line, pasted into the Card tab
- Receipts are sent to Anthropic: do not use it for documents you cannot send there

## Customization
- Config: currency (default JPY), the three card column names, the date window, the amount tolerance, the near-match percentage
- Change the model in the "AI: Read receipt" node
- Replace Gmail with Google Drive or a webhook, as long as the PDF arrives in a binary field called "data"
- Replace Slack with email or Teams
- Change the Gmail search in the Gmail Trigger (default: label:receipts has:attachment filename:pdf, every 15 minutes)

## Additional info
What the checks do and do not prove:
- The checks prove that the numbers read are the numbers printed in the PDF text, and that lines + tax add up to the total. They do not prove the receipt is genuine or the expense is allowed.
- A PDF with no text layer (a scan) is read but flagged "Needs review", because nothing can be checked against text.
- Matching uses only amount and date window. Two receipts of the same amount in the window give "Ambiguous": a person chooses. Card statements show names like SAMPLE CAFE AOBA while receipts say サンプル・カフェ青葉, so the name is only a tie-breaker.
- Not handled: foreign-currency receipts (they are listed, not converted), tips and fees that change the amount ("Near match" only), instalments, one payment for several receipts, refunds.
- With several tax rates on one document, only the sum of lines is checked, not each rate. Rounding of 1 yen is accepted.

What I tested: 12 synthetic PDFs (11 with text, 1 image-only; Japanese and English; receipts and invoices; with traps) and 11 card lines, one run each, Claude Haiku 4.5. Result: 10 receipts OK, 2 "Needs review" as designed; the matching gave exactly the 16 rows I expected. The real Gmail Trigger was run once with one made-up invoice. I also ran 54 unit checks with deliberately wrong input. My first run flagged 2 things wrongly (look-alike characters in PDF text; an amount returned as text with a currency mark) and I fixed the checks. This is not a measure of accuracy on your documents: test with your own receipts first.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail Trigger, Extract from File, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
