# 🔬 Send monthly volunteer hour statements from Google Sheets with Gmail

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs monthly and reads a Google Sheets volunteer-hours ledger to generate per-volunteer hour statements and an in-kind valuation summary, then emails volunteers and a coordinator via Gmail while logging each issued period in an n8n Data Table to prevent duplicate sends.

## How it works
1. Runs on a monthly schedule and calculates the previous calendar month’s start/end dates and period key.
2. Checks the “Volunteer Statements Issued Log” n8n Data Table for the current period and stops if statements were already issued.
3. Loads valuation settings (hourly in-kind rate, milestone thresholds, and zero-hour policy) from the “Volunteer Statement Config” n8n Data Table.
4. Reads verified volunteer entries from Google Sheets and groups them by volunteer to compute monthly hours, year-to-date hours, milestone progress, in-kind value, and an HTML statement.
5. Sends each volunteer their HTML statement by Gmail one at a time, continuing even if individual sends fail.
6. Builds a coordinator program summary (totals, in-kind value, milestones, and send status), emails it via Gmail, and appends the period record to the issued-log Data Table.

## Setup
1. Connect Google Sheets OAuth2 credentials and set the ledger spreadsheet ID and tab name in the workflow configuration values.
2. Connect Gmail OAuth2 credentials for the account that sends volunteer statements and the coordinator summary.
3. Create and populate the n8n Data Tables “Volunteer Statement Config” (in_kind_hourly_rate, milestone_thresholds, include_zero_hour_volunteers) and “Volunteer Statements Issued Log” (period and totals columns).
4. Update the coordinator email address and organization name in the workflow configuration values.
5. Ensure your Google Sheets ledger contains columns for date, volunteer name, email, hours, and activity, and that dates are ISO-formatted (YYYY-MM-DD) or consistently parseable.

## Requirements
- Read access is enough for the Google credential, as the workflow only reads the ledger tab and never writes a sent flag or timestamp back to it.
- A Gmail account you are willing to have volunteers reply to, since the connected account is the from address and no send-as alias is configured; only the display name on the volunteer email is overridden, using org_name.
- An n8n version that includes Data Tables, with both tables in the same project as the workflow, because they are referenced by name rather than by id.
- A ledger tab that already holds only approved entries, since no status or verified column is read anywhere in the workflow.
- One consistent email address per volunteer, as rows are grouped by lowercased email and a second address produces a second statement for the same person.
- A single Volunteer Statement Config row carrying all three settings, because the code takes the first row that has a milestone_thresholds value and ignores every other row.
- An in-kind hourly rate your funder will accept, agreed before the first run, since the same figure drives every volunteer statement and the coordinator's grant match total.

## Customization
- Change the hour and day in "Monthly Run on the 1st", currently hour 6 with no day set so it fires on the 1st; moving it later in the month gives verifiers more time and still covers the same month.
- Edit milestone_thresholds in the Volunteer Statement Config table as a comma-separated list, keeping in mind the values are tested against year-to-date hours rather than hours in the period; leaving it empty falls back to 25, 50, 100.
- Set include_zero_hour_volunteers to boolean true or the string "true" to keep volunteers with a year-to-date balance but no hours this period on the send list, where their statement shows a single no-hours line in place of activity rows.
- Reword the statement in "Compute Volunteer Statements": the subject line, the greeting that uses only the first word of the name, the milestone sentence, and the sign-off. Keep any styling inline, as the HTML carries no style block.
- Change the yearStart line in "Compute Volunteer Statements", currently January 1 of the period's year, if your funder reports year-to-date on a fiscal year.
- Adjust the coordinator email in "Compose Program Summary": the four table columns of name, period hours, year-to-date hours and period in-kind value, the grant match total line, and the milestones list, which names only volunteers whose year-to-date total crossed a threshold during this period.
- Replace the two Gmail nodes with Outlook or SMTP if you send from elsewhere, mapping statement_subject and statement_html for volunteers and summary_subject and summary_html for the coordinator.

## Additional info
The issued-log gate is per period, not per volunteer, and the log row is appended only at the very end, so a run that dies partway through the roster records nothing and a retry re-emails everyone who already received a statement; re-issuing a corrected period means deleting that period's row from the log first. A run where every send failed still logs the period as issued. The send counts in the coordinator summary reflect only what Gmail rejected at the API, so a message that is accepted and bounces later shows as sent. Rows with a blank email, a blank date, or hours that are not a positive number are skipped with no count reported, and because dates are compared as text after being cut to their first ten characters, a cell that renders as 8/1/2026 instead of 2026-08-01 falls outside the range test and is skipped the same way. If in_kind_hourly_rate is missing or non-numeric the rate falls back to zero and statements still go out showing $0.00 rather than failing. Every run reads the entire ledger tab and does all date filtering in memory, so a multi-year ledger is pulled in full each month, and the dollar figures are estimates for internal and grant reporting, not tax receipts.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
