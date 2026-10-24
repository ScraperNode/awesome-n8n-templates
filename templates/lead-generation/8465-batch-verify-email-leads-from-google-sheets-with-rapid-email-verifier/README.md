# 🎣 Batch verify email leads from Google Sheets with Rapid Email Verifier

> ⚡ **24 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who’s it for
Teams and solo founders who keep lead lists in Google Sheets and want a fast, free and repeatable way to validate email deliverability before outreach. Ideal for sales, growth, recruiting, and ops teams who want to reduce bounces and protect sender reputation.

## How it works / What it does
1. Reads emails from an input Google Sheet (one email per row).  
2. Splits the list into configurable batches.  
3. Builds a JSON payload for each batch (use a Set node named **Build Payload** to create `{ "emails": [...] }`), then waits briefly to avoid rate limits.  
4. Sends each batch to the Rapid Email Verifier batch endpoint.  
5. Optionally filters results by score (default `&gt;75`) and appends verified addresses plus metadata (score, disposable, domain/mailbox checks) to an output sheet.

## How to set up
- Create a Google Sheets OAuth credential in n8n and point the Get / Append nodes to your Document ID and Sheet/GID (use placeholders in the template — do not ship real IDs).  
- No API key is required for the Rapid Email Verifier demo endpoint; simply POST `{ "emails": [...] }`.  
- Configure batch size (default 20), Wait delay (e.g., 5s), and Filter score threshold, then test with a small sample.

## Requirements
- n8n (cloud or self-hosted)  
- Google Sheets OAuth credential

## How to customize
- Adjust batch size (up to 100) or score threshold; change which columns are written to the output sheet; add error-handling or notifications for failed requests.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
