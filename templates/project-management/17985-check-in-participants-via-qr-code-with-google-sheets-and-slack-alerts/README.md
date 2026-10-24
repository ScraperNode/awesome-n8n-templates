# 📋 Check in participants via QR code with Google Sheets and Slack alerts

> ⚡ **18 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow creates a QR-driven check-in kiosk that logs attendance to Google Sheets, prevents duplicate scans with an n8n Data Table, calculates each participant’s progress toward a required attendance threshold, and alerts coordinators in Slack when certification becomes mathematically unreachable.

## How it works
1. Receives a check-in submission from an n8n Form where the participant enters their email and the session code is prefilled from the QR link.
2. Normalizes the email, reads workflow settings (Sheet ID, tab names, Slack channel, threshold), and builds a composite check-in key from email + session code.
3. Checks an n8n Data Table for the composite key and, if it already exists, shows an “Already checked in” completion screen without logging a duplicate.
4. If it’s a first scan, looks up the participant in a Google Sheets roster and appends a timestamped check-in record to a Google Sheets “Check-Ins” tab, tagging unregistered attendees as WALK_IN.
5. Stores the composite key in the n8n Data Table to dedupe future scans for the same email and session.
6. Reads the cohort’s required sessions from a Google Sheets schedule tab, pulls the participant’s historical check-ins from the Data Table, and computes current and best-case attendance percentages against the threshold.
7. If the threshold is unreachable even with perfect future attendance, posts an at-risk alert to a Slack channel, then shows a confirmation screen with the participant’s attendance summary.

## Setup
1. Connect Google Sheets OAuth credentials and set the registration spreadsheet ID plus the correct tab names for your roster, schedule, and check-ins sheets.
2. Ensure your Google Sheets tabs include the expected columns (Roster: email, name, cohort; Schedule: cohort, session_code, session_date, required; Check-Ins: checked_in_at, email, name, cohort, session_code, status).
3. Create (or keep) an n8n Data Table named `session_checkin_dedupe` with columns for checkin_key, email, session_code, and checked_in_at.
4. Connect Slack credentials, set the target Slack channel ID, and invite the Slack app/bot to that channel.
5. Publish the workflow and generate QR codes using the production form URL with `?session_code=YOUR_CODE` appended so the hidden session code is populated.

## Requirements
- A Google Sheets credential with write access to the registration spreadsheet, since the workflow appends rows and not only reads them.
- A Slack app in the workspace with the chat:write scope, since the alert posts as the bot rather than as a user.
- An n8n version that includes the Data Table node, which the dedupe gate and the attendance lookup both depend on.
- The n8n instance reachable from participants' own phones on the venue network, since the form opens in their browser and not on a kiosk device you control.
- One roster row per participant email, as the lookup takes the first match and later rows for the same address are ignored.
- Cohort values in the roster that match cohort values in the schedule tab, and session codes on your printed QR codes that appear in that same tab, or the eligibility math has nothing to compare against.
- session_date stored as plain yyyy-MM-dd text, since sessions still ahead are found by string comparison and not by date parsing.
- A required column whose values read as true, yes or 1, keeping in mind that blank cells are counted as required.

## Customization
- certification_threshold is read as a fraction, so use 0.75 rather than 75, and Compute Attendance Reachability falls back to 0.8 for any value that is zero, negative or not a number.
- To warn before the point of no return, change Route Unreachable Certification from the boolean unreachable to a number condition on current_pct, best_case_pct or remaining_required, all of which the Code node already outputs.
- Add a date segment to checkin_key in Workflow Configuration if a session code is reused on more than one date, otherwise the second sitting reads as a duplicate scan and never reaches the logging branch.
- Kiosk wording lives in three places: the kiosk_message strings in Compute Attendance Reachability, and the title and message on each of the two completion screens.
- To swap Slack for another notifier, replace Alert Coordinator On Slack in place and keep both its onError continue setting and its connection into Show Check In Confirmation Screen, so a failed post still leaves the participant with a screen.
- To capture more than an email, add fields to Session Check-In Kiosk and map them into the column list on Log Check In To Sheet, which is the only way a walk-in supplies a name since name and cohort are otherwise read from the roster row.

## Additional info
Attendance history is read from the session_checkin_dedupe Data Table and not from the Check-Ins tab, so clearing that table resets every participant's math while the Sheet log stays intact. That history is filtered by email alone, so any past scan whose code matches a required code for the cohort is counted, and session codes need to be unique across cohorts for the numbers to mean anything. Sessions still ahead are counted as strictly later than today, so a session running today is not treated as still reachable. The Slack alert fires on every scan while the threshold is unreachable rather than once per participant, so a coordinator running several sessions a day will see the same name more than once. Only the Slack node is set to continue on error, so a Google Sheets failure ends the execution with no completion screen on the participant's phone, though the dedupe row is written after the Sheet append, which means that scan is not marked used and can be scanned again. There is no QR generation here and no undo path, so a mistaken check-in has to be removed from both the Check-Ins tab and the Data Table, and walk-ins are logged but never produce an alert because the unreachable check requires a roster match.

## 🔗 Nodes Used

Google Sheets, Slack, n8n Form Trigger, n8n Form, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
