# 🔒 Audit security questionnaire answers with Google Sheets and Google Drive evidence

> ⚡ **4 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow runs manually or on a schedule to audit the freshness of security-questionnaire answers stored in Google Sheets by checking linked Google Drive evidence metadata, updating answer and evidence status fields, maintaining a review queue, and optionally sending a Slack digest of new or changed review items.

## How it works
1. Runs either on a manual trigger or on a daily schedule.
2. Loads configuration values, then validates that required settings are present before proceeding.
3. Reads the Answers, Evidence, Dependencies, and Review Queue tabs from Google Sheets and validates required columns, IDs, and allowed status values.
4. Deduplicates active, referenced evidence and fetches each linked file’s metadata from the Google Drive API in batches to detect missing, expired, or uncertain evidence.
5. Evaluates each active answer’s freshness based on review intervals, ownership/review flags, and evidence change policies to assign a deterministic state and reason codes.
6. Updates Google Sheets by writing evidence snapshots, refreshing or resolving existing review-queue items, appending new review items, and updating answer control fields.
7. If enabled and there are new or changed items (or configured recoveries), formats and sends a summary digest to a Slack channel.

## Setup
1. Create a Google Sheets workbook with the required tabs (Answers, Evidence, Dependencies, Review Queue) and exact header columns expected by the workflow.
2. In Set Template Configuration, paste your Google Sheets spreadsheet ID and confirm the tab names and review/notification settings match your workbook.
3. Add Google Sheets OAuth credentials with read/write access to the workbook.
4. Add Google Drive OAuth credentials with access to the evidence files and populate the Evidence tab with each file’s Drive file ID.
5. (Optional) Add Slack OAuth credentials, set your Slack channel ID, and enable SLACK_ALERTS_ENABLED to receive digest messages.

## Requirements
- Google Sheets and Google Drive OAuth credentials
- A Google Sheets workbook with Answers, Evidence, Dependencies, and Review Queue tabs using the required columns documented in the workflow
- Google Drive file IDs for registered evidence and answer-to-evidence mappings
- Slack OAuth credential and channel ID only if Slack alerts are enabled

## Customization
- Adjust the audit schedule and DEFAULT_REVIEW_INTERVAL_DAYS to match your review policy
- Adjust EVIDENCE_BATCH_SIZE and MAX_DIGEST_ITEMS for your workload
- Use SLACK_ALERTS_ENABLED, NOTIFY_ON_RECOVERY, and NOTIFY_ONLY_ON_NEW_OR_CHANGED to control notifications
- Use per-answer review intervals and dependency change policies to control when evidence changes require review

## Additional info
This workflow identifies freshness risk but does not automatically approve or rewrite security claims. A human must review material evidence changes and reapprove an answer before updating last_approved_at.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Stop and Error, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
