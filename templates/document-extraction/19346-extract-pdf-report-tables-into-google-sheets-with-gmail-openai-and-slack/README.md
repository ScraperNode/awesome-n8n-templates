# 🔬 Extract PDF report tables into Google Sheets with Gmail, OpenAI and Slack

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
I stopped trusting a model to add up its own numbers, so this one checks its work in plain code. It reads the table off a PDF, sums the line items in JavaScript, and only writes to your books when that sum matches the printed total.

## How it works
1. Triggers when a new Gmail message arrives under a specific label and includes an attachment, downloading the attachment for processing.
2. Filters to PDF attachments only and converts each PDF into plain text.
3. Uses OpenAI with a structured output schema to extract the report title, currency, stated total (as printed), and all line-item rows from the PDF text.
4. Calculates the sum of extracted line totals in JavaScript and compares it to the stated total using the configured absolute and percentage tolerances.
5. If the totals reconcile, splits the extracted rows into individual line items and appends them to the “Line Items” tab in Google Sheets.
6. If the totals do not reconcile (or no stated total is available), appends a summary row to the “Needs Review” tab in Google Sheets and posts a mismatch alert to a Slack channel.

## Setup
1. Add credentials for Gmail, OpenAI, Google Sheets, and Slack (OAuth2) in n8n.
2. Create or choose a Gmail label for incoming report emails and set its label ID/name in the Gmail trigger filter.
3. Update the Google Sheets document URL and ensure it contains the “Line Items” and “Needs Review” tabs (or rename the sheet targets in the Report Settings).
4. Set the Slack channel name for reconciliation alerts in the Slack message node.
5. Review and adjust the tolerance values and default currency in Report Settings to match your reconciliation rules.

## Additional info
Why I do not let the model check its own totals, and what actually breaks, are explained at https://fractionalhq.uk/use-cases/pdf-report-reconciliation

If you would rather not set it up yourself, I can set it up for you on your own n8n account for £49. Tell me what you use at https://fractionalhq.uk/brief and I will reply with what I need from you before any work starts.

All nine of my paid n8n templates also come together as one download for $15: https://buy.stripe.com/00w3co8NR6Mq8r0eaV4c80M

## 🔗 Nodes Used

Google Sheets, Slack, Gmail Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
