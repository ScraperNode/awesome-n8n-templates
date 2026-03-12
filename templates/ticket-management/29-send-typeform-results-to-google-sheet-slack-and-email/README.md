# 🎫 Send Typeform results to Google Sheet, Slack and email

> ⚡ **2,450 views** · 🎫 [Ticket Management & Triage](../)

## Description

![workflow-screenshot](fileId:19)

1. Trigger on new Typeform form submission
2. Write data to Google Sheet
3. Check severity of problem
4. If very severe post message to Slack
5. If not so severe just send an email

## Assumptions

### Google Sheet

Sheet in Spreadsheet called "Problems".

Columns Names:
 - Name
 - Email
 - Severity
 - Problem

Example Sheet: [https://docs.google.com/spreadsheets/d/17fzSFl1BZ1njldTfp5lvh8HtS0-pNXH66b7qGZIiGRU](https://docs.google.com/spreadsheets/d/17fzSFl1BZ1njldTfp5lvh8HtS0-pNXH66b7qGZIiGRU)

![googlesheettypeformerror.png](fileId:18)

### Typeform

Typeform formular with questions named exactly like the columns of the Google Sheet.

## 🔗 Nodes Used

Send Email, Google Sheets, Slack, Typeform Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
