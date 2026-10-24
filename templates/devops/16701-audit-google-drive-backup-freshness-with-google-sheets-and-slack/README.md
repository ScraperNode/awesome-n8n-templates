# ⚙️ Audit Google Drive backup freshness with Google Sheets and Slack

> ⚡ **80 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs nightly to audit a Google Drive backup folder against an SLA table in Google Sheets, logging a per-source scorecard and sending a Slack alert only when backups are missing, stale, or unexpectedly small.

## How it works
1. Runs on a nightly schedule.
2. Reads an SLA table from Google Sheets that defines expected backup sources, filename patterns, cadence, and freshness/size thresholds.
3. Searches a specified Google Drive folder and retrieves metadata for all non-trashed files.
4. Compares each SLA row to matching Drive files to classify the newest backup as OK, MISSING, STALE, or SHRUNK and builds an alert summary for any failures.
5. Appends one scorecard row per source to a Google Sheets audit tab with the run time, verdict, newest file details, and size comparisons.
6. Posts a single Slack message listing all failing sources when at least one source is not OK.

## Setup
1. Add Google Sheets OAuth2 credentials, select the spreadsheet and the SLA and scorecard sheet tabs in the Google Sheets nodes.
2. Add Google Drive OAuth2 credentials and replace the placeholder folder ID in the Drive search query to point at your backup folder.
3. Add Slack credentials and choose the channel to receive alerts in the Slack message node.
4. Ensure your scorecard sheet has matching headers for the fields being appended (for example: Run At, Source, Status, Detail, Cadence, Pattern, and size/age columns).

## Requirements
- n8n with Google Drive, Google Sheets, and Slack nodes (no community node)
- A Google Drive credential (OAuth2) with read access to the backup folder
- A Google Sheets credential (OAuth2), which can be the same Google account
- A Slack credential (OAuth2 or bot token) with chat:write on the alert channel
- An existing backup job already writing files into the watched folder (this workflow audits, it never creates backups)

## Customization
- Tune every source from the SLA sheet alone (pattern, cadence, max age, size floors), with no workflow edits
- Change the run time in Nightly Schedule, or run more than once a day
- Add a real off-hours destination: an HTTP Request node on the failing branch to a PagerDuty or Opsgenie free-tier event, or a Twilio SMS
- Add a plain-English digest of the failing list with a cheap model (Groq free, gpt-4o-mini, etc. Claude Haiku)

## Additional info
It audits, it never backs up. It reads file metadata only and assigns one verdict per source: OK, STALE, MISSING, or SHRUNK. The SHRUNK check is the differentiator: it compares the newest file against the trailing median size of recent files, so a truncated or half-written dump is caught even when it is fresh and present. It is fail-loud by design, so if the Drive listing itself fails, every source reads MISSING and the outage surfaces rather than hides. The scorecard logs every source on every run, but Slack only fires when at least one source fails. All sample data is fictional and credentials, the folder ID, and the sheet selectors ship as empty or placeholder values.

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
