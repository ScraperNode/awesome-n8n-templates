# ⚒️ Preventing Google Sheets quota errors during batch processing

> ⚡ **111 views** · ⚒️ [Engineering](../)

## Description

## Preventing Google Sheets Quota Errors during Batch Processing

This template provides a robust solution for dealing with Google Sheets API rate limits. It is designed for workflows that update a large number of rows in a Google Sheet and frequently fail with "too many requests" errors.

The template uses a `Wait` node connected to the error output of the Google Sheets node, creating a retry loop that delays execution for a set period before attempting the update again.

To use this template, simply replace the placeholder Google Sheets nodes with your own credentials and sheet. You can find an example Google Sheet for this template [here](https://docs.google.com/spreadsheets/d/1hKwP2_G6EaVSJlqWH1zYMVjarb9cuBx78D_U3HBrdhQ/edit?usp=sharing).

For a full explanation of this approach, check out the blog post [here](https://n8nplaybook.com/post/2025/07/handling-google-sheets-api-rate-limits-in-n8n/).

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
