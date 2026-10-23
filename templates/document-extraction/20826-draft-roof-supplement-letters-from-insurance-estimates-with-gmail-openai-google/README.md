# 🔬 Draft roof supplement letters from insurance estimates with Gmail, OpenAI, Google Sheets and Docs

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Adjuster estimate PDFs arrive by Gmail or a form. OpenAI reads every line item and the roof facts, code checks them against your own scope rules, and the missing items become a supplement letter in Google Docs and a Gmail draft to the adjuster. Claims log, morning chase.

## How it works
1. Triggers when an estimate PDF arrives in Gmail, a user uploads a PDF via the n8n form, or a daily schedule runs to check for unresponded supplements.
2. Filters Gmail messages to only continue when a PDF is attached and the email content matches your configured estimate keywords.
3. Extracts text from the PDF and sends it to OpenAI to structure key claim facts, roof measurements, totals, and all priced line items.
4. Reads your “Scope rules” from Google Sheets and compares them to the estimate line items to identify missing items and under-applied waste rules.
5. When missing items are found, uses OpenAI to draft supplement wording, assembles a formatted letter, saves it to a Google Doc, and creates a Gmail draft addressed to the adjuster.
6. Appends a record to the “Claims” sheet and emails you a summary with the missing items and links to the Google Doc and Gmail draft (or notes that the estimate looks complete).
7. Each morning, scans the “Claims” sheet for supplements with no response after your chase window, emails you a chase list, and updates the sheet to mark those rows as chased.

## Setup
1. Connect credentials for Gmail, OpenAI, Google Sheets, and Google Docs.
2. Run the manual “Create my spreadsheet” path once to generate the Google Sheet, then paste the returned spreadsheet ID into the workflow settings and customize the “Scope rules” tab for your market.
3. Set your owner email, business name, optional Google Docs folder ID, signature, estimate keywords, timezone, and chase-after-days value in the workflow settings.
4. If using the upload form, copy the form URL (webhook path) and share it with your team for submitting estimate PDFs.

## Requirements
- An n8n instance with Gmail, OpenAI, Google Sheets and Google Docs credentials

## Customization
- Edit the Scope rules tab to add items, the roof types they apply to, how quantities are worked out and the reason quoted in the letter

## 🔗 Nodes Used

Google Sheets, Gmail, Google Docs, Gmail Trigger, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
