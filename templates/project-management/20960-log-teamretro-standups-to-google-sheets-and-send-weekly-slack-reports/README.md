# 📋 Log TeamRetro standups to Google Sheets and send weekly Slack reports

> ⚡ **0 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow logs completed TeamRetro standup updates into Google Sheets and, every Monday, summarizes the past week’s participation and blockers per team, posting the report to Slack and appending weekly metrics to a separate Google Sheets tab.

## How it works
1. Triggers when a TeamRetro standup is completed via the TeamRetro webhook trigger.
2. Skips duplicate webhook deliveries by deduplicating on the TeamRetro delivery ID.
3. Converts each participant’s topic updates into one plain-text row per update (optionally excluding carried-over items) and flags blocker-topic entries.
4. Upserts the rows into a Google Sheets “Log” sheet, matching on Update ID to avoid writing duplicates.
5. Runs every Monday at 9 AM and reads the standup log from Google Sheets.
6. Builds a per-team weekly summary for the last N days, including standups held, who posted how often, new blockers, and the longest-running blocker.
7. Posts the formatted weekly report to a Slack channel and appends the week’s metrics to a Google Sheets “Weekly” sheet.

## Setup
1. In TeamRetro, create a webhook integration for the “Standup Completed” event, paste in the n8n production webhook URL, and add the TeamRetro signing secret to the trigger node.
2. Add Google Sheets credentials, select the target spreadsheet, and set the “Log” and “Weekly” sheet names in the two Google Sheets nodes.
3. Create the Google Sheets tabs/columns expected by the workflow (Log: Date, Team, Standup, Person, Question, Blocker, Update, Carried over, Update ID; Weekly: Week ending, Team, Standups, People posting, Updates, New blockers, Longest blocker (standups)).
4. Add Slack credentials and set the target channel name in the report settings (or replace the default #scrum-masters).
5. Optionally adjust the reporting window (`days`), the blocker topic keyword (`blockerTopic`), and whether carried-over items are logged (`includeCarriedOver`).

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
