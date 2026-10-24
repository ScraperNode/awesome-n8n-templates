# 👥 Validate staff certifications for upcoming sessions with Google Calendar and Slack

> ⚡ **1 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow runs weekly to check upcoming Google Calendar sessions against a Google Sheets roster and staffing map, validates required certifications using rules from an n8n Data Table, then posts a coverage report to Slack and emails renewal reminders via Gmail.

## How it works
1. Runs weekly on a schedule and loads configuration values like the Google Sheet ID, Calendar ID, Slack channel ID, and lookahead window.
2. Reads the staff roster (person, email, certification, expiry) and session staffing assignments from Google Sheets, and loads per-session coverage rules from an n8n Data Table.
3. Fetches all Google Calendar events in the lookahead window (including expanded recurring instances) and extracts a bracketed session code (for example, `[FA-101]`) from each event title.
4. Matches each event to staffing and rules using the session code, then compares each assigned staffer’s certification expiry date to the session date to calculate certified headcount and any shortfall.
5. Generates a Slack-ready report that lists under-covered sessions with a minimal renewal plan, warns about unmatched events that cannot be validated, and summarizes fully covered sessions.
6. Posts the report to Slack and sends one Gmail renewal email per staffer per lapsed certification, listing all affected upcoming sessions and the earliest renew-by date.

## Setup
1. Add OAuth credentials for Google Sheets, Google Calendar, Slack, and Gmail.
2. Update the configuration values for `rosterSheetId`, `calendarId`, `slackChannelId`, and `lookaheadWeeks`.
3. Create a Google Sheet with a `Roster` tab (columns: Person, Email, Certification, Expiry) and a `Staffing` tab (columns: SessionCode, Person), and ensure names and codes match exactly across tabs.
4. Populate the “Certification Lapse Radar Rules” n8n Data Table with `session_type`, `required_cert`, and `min_certified` values, making sure `required_cert` matches the Certification text used in the roster.
5. Ensure each relevant Google Calendar event title contains a `[SESSIONCODE]` token (for example, `First Aid Refresher [FA-101]`) so events can be matched and validated.

## Requirements
- View access is enough on both the spreadsheet and the calendar, every Google node here reads and none of them write back.
- A Gmail account cleared to email your staff, one message goes out per person per lapsed certification on every run with no batching or throttling.
- A Slack app with the chat:write scope, and the channel's ID value rather than its name, the node resolves the channel in id mode so a #name string will not match.
- An n8n instance new enough to offer Data Tables, the coverage rules are read through a Data Table node and there is no Sheet fallback.
- Person values spelled identically across the Roster and Staffing tabs, the join trims whitespace but is case sensitive, so Dana Ruiz, dana ruiz and D. Ruiz are three different people.
- A numeric min_certified on every rule row, a blank or non-numeric value reads as zero and every session of that type then reports as covered no matter who is assigned.
- An Email value on the roster row of anyone you expect to hear from the workflow, a lapsed staffer with no email still appears in the Slack fix line but is skipped when the notices are built.

## Customization
- Widening lookaheadWeeks in Workflow Configuration catches lapses earlier, at the cost of pulling in every unrelated calendar event in the window, each of which prints its own unmatched warning line.
- The title token pattern is the regex /[([A-Za-z0-9_-]+)]/ in Extract Session Code Token, edit it to fit a naming convention you already use instead of retitling every event, the captured token is uppercased so title case in event titles is fine.
- Session type comes from sessionCode.split('-')[0] in Validate Certs On Session Date, change the separator there, or drop the split to treat the whole code as the type.
- The pass test in Validate Certs On Session Date is cert.expiry.toISODate() >= sessionDateIso, set that const to sessionDate.plus({ days: 30 }).toISODate() to demand a buffer so certs expiring just after a session still flag.
- Slack wording and emoji live in Mark Fix Required, Mark Unmatched Warning and Mark Covered Session, disconnecting Mark Covered Session from Collect Report Sections makes the post exceptions only, but Compose Coverage Report counts both the covered total and the sessions checked total from those same items, so both read low.
- Build Staffer Expiry Notices emails on sessions with status under_covered or covered, drop the covered case from that filter if you only want a staffer contacted when the session they are on actually falls short.
- Subject and body sit in Send Expiry Renewal Email as plain text, switch emailType to HTML if you want formatting or links in the notice.

## Additional info
Nothing is written back to the Sheet, the calendar or the Data Table, and no state carries between runs, so a lapsed staffer receives the same notice on every run until their Expiry cell changes. Assigned people who are missing from the roster, missing a row for the required certification, or carrying an expiry date the parser cannot read all count against coverage but cannot be renewed, so they surface only as an instruction to assign more holders rather than as a named fix. Recurring events are expanded into one line per occurrence, so a long lookahead over a busy calendar produces a long post, and Slack will truncate or reject it past its message length limit. Both Slack and Gmail are set to continue on error, which keeps one bad address or a failed post from stopping the run, but also means nothing is retried and no failure is reported anywhere. Coverage is judged only against the people listed in the Staffing tab, a qualified holder who is not assigned to the session does not raise the certified count.

## 🔗 Nodes Used

Google Sheets, Slack, Google Calendar, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
