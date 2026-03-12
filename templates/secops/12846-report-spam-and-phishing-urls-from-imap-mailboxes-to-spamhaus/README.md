# 🔒 Report spam and phishing URLs from IMAP mailboxes to Spamhaus

> ⚡ **57 views** · 🔒 [SecOps & Security Automation](../)

## Description

This workflow automates URL reporting to Spamhaus based on incoming spam/phishing sample emails. It watches one or more IMAP folders, extracts URLs from each email body, removes duplicates and common noise, and submits the remaining URLs to the Spamhaus submission API with the appropriate threat context.

## What it does
- Monitors one or more IMAP mailboxes/folders containing abuse samples (spam/phish).
- Processes each email individually in a loop.
- Extracts and normalizes URLs from the email text.
- De-duplicates URLs (per run) and filters out common false positives (images, tracking pixels, privacy/imprint pages).
- Submits each URL to Spamhaus via POST /portal/api/v1/submissions/add/url.
- Optionally runs:
  - mail-specific jobs (per email) for enrichment, logging, ticketing, notifications, etc.
  - run-specific jobs (once per workflow execution) for summaries, metrics, cleanup, or follow-up workflows.

## How it works (high level)
1. IMAP triggers fetch new messages from configured folders.
2. An initial Set node attaches metadata such as:
  - threat_type (e.g., spam or phish)
  - reason.url (human-readable reason for the submission)
3. SplitInBatches loops over each email.
4. A Code node extracts all URLs from the email body, normalizes them, and removes obvious noise (e.g., trailing punctuation).
5. Remove Duplicates clears dedupe history and ensures only unique URLs are processed per run.
6. URLs are split into single items, filtered, and then packaged into the Spamhaus request body.
7. HTTP Request submits each URL to Spamhaus.
8. Aggregate collects results, enabling optional per-run actions at the end.

## Extending with more IMAP triggers
You can add as many additional IMAP triggers as needed.
To do so, connect each new IMAP trigger to the same initial Set node (or duplicate that Set node per trigger) to define the correct threat_type and reason.url. The downstream flow stays unchanged.

## Customization points
- Threat classification: Adjust threat_type and reason.url in the initial Set nodes.
- URL extraction rules: Update the regex and normalization logic in extract all URLs.
- Filtering: Extend the filter regex to exclude additional benign paths/domains.
- Per-email actions: Add nodes or call a sub-workflow from add mail specific job.
- Per-run actions: Add nodes after the loop to add run specific job (summaries/metrics/cleanup).

## Requirements
- An IMAP account with access to the folders containing sample emails.
- A Spamhaus API credential (configured as an HTTP Header Auth credential in n8n).
- n8n credentials set up for:
  - IMAP
  - HTTP Header Auth (Spamhaus)

## Notes
- Ensure run-specific logic is connected to the loop’s done / “No items left” output so it runs once after all emails are processed (not per email).
- This workflow only extracts URLs from the email text content. If you need URL extraction from HTML parts or attachments, extend the extraction step accordingly.

## 🔗 Nodes Used

Email Trigger (IMAP), HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
