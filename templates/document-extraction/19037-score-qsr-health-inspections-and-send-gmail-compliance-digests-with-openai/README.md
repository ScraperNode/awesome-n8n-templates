# 🔬 Score QSR health inspections and send Gmail compliance digests with OpenAI

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily to process multi-location QSR health inspection notes, uses OpenAI to extract violation severity and corrective actions, logs per-location and batch summaries to Google Sheets, and sends Gmail digest and conditional escalation emails based on a computed regional risk score.

## How it works
1. Runs every day at 07:00 on a schedule trigger.
2. Loads a batch of raw inspection notes for multiple locations and splits them into one record per location.
3. Uses OpenAI (via the Information Extractor) to classify each location’s note into a violation category, severity, code section, and a recommended corrective action.
4. Calculates a corrective deadline per location based on severity (critical=10 days, major=30 days, minor=90 days) and appends the detailed record to a Google Sheets “Compliance Log” tab.
5. Aggregates all processed locations into a regional risk score and escalation flag, then appends a daily rollup row to a Google Sheets “Compliance Summary” tab.
6. Sends a Gmail escalation alert if thresholds are exceeded, then sends a consolidated Gmail daily digest with per-location deadlines regardless of escalation.

## Setup
1. Connect OpenAI API credentials for the OpenAI chat model used by the Information Extractor.
2. Connect Google Sheets OAuth2 credentials and select your target spreadsheet and the “Compliance Log” and “Compliance Summary” sheet tabs in both append steps.
3. Connect Gmail OAuth2 credentials and set the recipient email addresses for both the escalation alert and the daily digest.
4. Create the two Google Sheets tabs with columns matching the logged fields (location details, violation fields, and corrective deadlines) and the summary metrics.
5. Replace the demo inspection batch with your real inspection intake source (database, API, or Google Sheets read) and adjust escalation thresholds in the risk-score code if needed.

## Requirements
- OpenAI API Key: An active OpenAI account with access to model endpoints for processing and classifying inspection notes into structured JSON.
- Google Sheets Credentials & Setup: A connected Google account with edit access to a target spreadsheet containing a dedicated tab/sheet (e.g., Inspection Log) for logging violation records and action items.
- Gmail Credentials: Authorized Gmail OAuth2 or App Password credentials to dispatch daily compliance digest reports and send real-time regional escalation alerts.
- Cron Trigger Configuration: Ensure the Trigger Daily Inspection Sweep node is scheduled to run at your team's preferred morning huddle time and set to your local timezone.

## Customization
- Swap Gmail for Slack: replace Send Compliance Digest / Send Regional Escalation Alert with Slack nodes posting to a #compliance channel.
- Add a second escalation tier: duplicate Check Escalation Threshold with a higher risk_score cutoff and route to a C-suite Gmail/SMS node for "code red" batches.
- Change scoring thresholds: edit CRITICAL_COUNT_THRESHOLD / RISK_SCORE_THRESHOLD and the weighting formula inside Compute Regional Risk Score.
- Add a second data sink: branch Compute Corrective Deadline output into an Airtable or Data Table node alongside Append Compliance Log Row for a queryable dashboard.
- Adapt to another retail-inspection vertical:repoint Fetch Inspection Batch at fire-marshal, OSHA, or retail-cleanliness inspection feeds and rewrite the system prompt in Extract Violation Severity for that code book.

## Additional info
Error handling: every Google Sheets and Gmail node uses onError=continueRegularOutput with retryOnFail (3 attempts, 2000ms apart) - a transient API hiccup on one location never blocks the rest of the batch or the digest email.API cost / rate limits: 1 OpenAI Information Extractor call per location per day (small text-in/JSON-out call, low cost); Google Sheets appends and Gmail sends stay well within default quotas at typical franchise scale (tens to low hundreds of locations/day).Data privacy: only the raw inspection note text (no PII) is sent to OpenAI for classification. Extracted violation data, location IDs and names are stored in your own Google Sheets - nothing leaves your Google/OpenAI/Gmail accounts.Known limitations: Fetch Inspection Batch ships with representative sample data; production requires wiring your real inspection system; violation severity judgement is AI-assisted and should be spot-checked for edge cases; deadlines and escalation are deterministic.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
