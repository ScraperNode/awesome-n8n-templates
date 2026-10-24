# ⚙️ Send nightly staging vs production drift digest from Google Sheets with Snapshot Site and Slack

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs nightly, reads a list of site paths from Google Sheets, compares each staging URL to its production counterpart using Snapshot Site, and posts a worst-first drift digest (or an all-clear message) to a Slack channel.

## How it works
1. Runs every night at 2AM on a schedule.
2. Reads a list of routes (path and label) from a Google Sheets tab and iterates through them one by one.
3. Builds full production and staging URLs for each route by joining the path to the configured base URLs and normalizing slashes.
4. Uses Snapshot Site Compare to capture and compare the production page (before) against the staging page (after) with identical render options.
5. Categorizes each result into drift bands (identical, minor, significant, severe) or records the route as failed when the compare cannot be completed.
6. Aggregates all results into a single Slack-formatted digest sorted by highest mismatch first and counts paths per drift band.
7. Posts the full digest to Slack when there is significant/severe drift or failures, otherwise posts a short “quiet night” summary.

## Setup
1. Install the n8n community node `n8n-nodes-snapshot-site` and add Snapshot Site API credentials.
2. Add Google Sheets OAuth credentials, set the spreadsheet URL/ID, and ensure the sheet has a tab named “Paths” with headers `path` and `label` in the first row.
3. Edit the production and staging base URLs in the code step that builds URL pairs (both must include `https://`).
4. Add Slack credentials and set the target channel (for example `#staging-drift`) in the Slack message steps.
5. Review Snapshot Site compare options (hide selectors, width, delay, cookies) and keep before/after options identical to avoid false drift.
6. Adjust the schedule time and drift thresholds in the code step that assigns drift bands if needed.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
