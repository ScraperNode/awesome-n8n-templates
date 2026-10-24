# 🔬 Track Japanese business-day contract deadlines with Sheets, Claude and Slack

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily to read contract-style deadline wording from Google Sheets, uses Anthropic Claude to convert new wording into a structured rule, calculates Japan-aware business-day deadlines using the Cabinet Office holiday CSV, writes results back to the sheet, and posts due/overdue reminders to Slack.

## How it works
1. Runs every day at 8:00 (or manually) to start the deadline check.
2. Reads open items from the Google Sheets “Deadlines” tab and downloads Japan’s national holiday list from the Cabinet Office CSV.
3. Sends only rows with new or changed deadline wording to Anthropic Claude to extract a JSON rule (type, number/month, and holiday-adjustment direction) without calculating dates.
4. Validates the extracted rule against the original wording, then computes each deadline and remaining business days while skipping weekends, national holidays, and any configured company holidays.
5. Updates the Google Sheets “Deadlines” tab with the stored rule, computed deadline, business-days-left, and any “Needs review” problems.
6. Builds a Slack-ready summary of overdue, due today, due soon (within the configured business-day window), and rows needing review, and posts it to a selected Slack channel when there is anything to report.

## Setup
1. Create a Google Sheet, paste its spreadsheet ID in the “Spreadsheet ID” step, run the one-time setup to add the “Deadlines” tab and headers, and select the same document in both Google Sheets nodes.
2. Add Google Sheets OAuth credentials, an Anthropic credential for Claude, and Slack OAuth credentials, then choose the target Slack channel.
3. Populate the “Deadlines” tab with rows containing at least task, base_date (YYYY-MM-DD), rule_text, and status (set status to “done” to exclude items).
4. In the Config step, confirm the holiday CSV URL, set weekend day numbers, add any extra company holidays, and set the reminder window (business days) and default holiday adjustment behavior.

## Requirements
- Google account (Google Sheets OAuth2) and a blank Google Sheet
- Anthropic API key (Claude Haiku 4.5 by default; one short call per new or changed wording, not per day)
- Slack app that is a member of the channel you choose
- No API key for the holidays: the Cabinet Office national holiday CSV (syukujitsu.csv), downloaded on every run
- Base dates written year first (2026-10-15)
- The deadline wording (rule_text) is sent to Anthropic, the task names are not

## Customization
- Config: extra_holidays (your company days, comma separated), weekend_days (0 = Sunday, 6 = Saturday), remind_business_days (3), default_adjust (previous, next or none), language (en or ja)
- Add rule types (for example "the last business day of the month") in "Check the rule" and "Compute deadlines"
- Change the model in the "AI: Read the wording" node
- Change the run time in "Every day at 8:00"
- Send reminders by email or LINE instead of Slack
- To ask Claude again for the same wording, clear its rule_source cell

## Additional info
What Claude does and what code does:
- Claude only turns the wording into a small rule (type, number, month, holiday rule). It never returns a date.
- Code rejects a rule whose number, day or month is not in the wording (kanji numerals like 五 are read too), a business-day rule when the wording does not say business days, and 翌々月 read as next month. A holiday rule written in the wording wins over the AI. When the wording says nothing about holidays, the Config default is used and noted in the row.
- Code counts the dates with weekends, the national holidays and your extra holidays. If the holiday CSV gives fewer than 100 dates, the run stops instead of counting with a broken calendar.
- Wording that cannot be turned into a rule ("as soon as possible") becomes Needs review with the reason. It is never dropped, and it is not sent to Claude again every day.

Conventions: the base date is not counted; "N days" is calendar days unless the wording says business days; "the 31st" in a 30-day month becomes the last day. The deadline is a calculation from the wording you entered, not legal advice: check important deadlines against the contract.

Holidays: I did not find a terms page specific to the Cabinet Office CSV; holiday dates are facts. On 2026-10-16 it covered 1955 to 2027, and the page says 2028 will be added in February 2027. A deadline beyond the last listed year is counted with weekends and your extra holidays only.

What I tested: the live Cabinet Office CSV and Claude Haiku 4.5 with 7 made-up rows on 2026-10-16. All 6 open rows got the expected deadline, including 10 business days from 10/01 -> 10/16 across the Sports Day holiday on 10/12, and 翌々月10日 -> 12/10 with the default holiday rule noted. "なるべく早めに" became Needs review, the done row was excluded, and Slack listed the two rows due today. On a later run Claude was not called at all. Plus 22 unit checks of the code with the real holiday CSV (holiday moved back or forward, the year change, a month end on a Sunday, a wrong day, 翌々月 read as next month, "10日" read as business days, a holiday rule read the wrong way, kanji numerals, unreadable output). Test with your own wording first.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
