# 🎬 Create daily workout-of-the-day videos from Google Sheets with Zvid

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
For gyms and coaches: turn today’s workout from Google Sheets into a branded vertical video using Zvid. Validate the design, render the MP4, then download completed media for review and sharing.

## How it works
1. Triggers every day at 6am or runs on demand via a manual trigger.
2. Loads branding and render settings (colors, fonts, hero video, music, timezone, and dry-run options) and reads workout rows from a Google Sheets tab.
3. Selects today’s row using the configured timezone. Date, WorkoutName and Ex1 are required. If fallbackToLatest=true, use the latest past row, preserve its original workout date and never select a future row. Parse Ex1–Ex5 into exercise and reps fields.
4. Builds a Zvid project JSON for a three-scene vertical video (hook footage, workout board, and coach’s note) and generates a ready-to-post caption.
5. Validates the Zvid project payload using Zvid’s validation endpoint and stops with a detailed error if the payload is invalid.
6. Optional dryRun=true saves an editor draft only with Zvid Project → Create support; published npm v0.1.8 does not expose this operation. Keep dryRun=false with that version.
7. dryRun=false is the default: submit a Zvid render job, poll until completion or timeout and output a summary. The gated Watch video step downloads completed media for review in Binary → data → View.

## Setup
1. Use self-hosted n8n. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before configuring credentials; a workspace owner/admin may need to install it.
2. Create a Zvid API credential with a key from https://app.zvid.io/api-keys and Base URL https://api.zvid.io, then select it on every Zvid node.
3. Add Google Sheets credentials and set the spreadsheet document ID and sheet name in the Google Sheets read step.
4. Use headers Date, WorkoutName, Focus, Ex1, Ex2, Ex3, Ex4, Ex5, CoachNote. Date must use YYYY-MM-DD; WorkoutName and Ex1 must be filled. Format exercises as “Exercise x Reps”; the last separator is used. Add a row for today, or optionally set fallbackToLatest=true to reuse the latest past workout.
5. Update gymName, handle, branding, heroVideo, musicUrl, timezone and polling settings in Config. Align the workflow and Config timezones. dryRun defaults to false and spends Zvid credits after successful validation. Test manually and review the result before activating daily runs. Editor drafts require Project → Create support, unavailable in published v0.1.8.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
