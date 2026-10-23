# 🔬 Send weekly Fireflies meeting reports to Gmail and log metrics in Google Sheets

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### Description

Activate this workflow once and every Friday at 5PM it automatically pulls your week's meeting data from Fireflies, calculates seven metrics, and emails a formatted report to your manager inbox. It tracks total meetings, total hours, average duration, busiest day, top participant, and longest meeting — plus a day-by-day breakdown and a numbered list of every meeting. Every week's summary is also logged to Google Sheets so you can track meeting load trends over time. Built for team leads, operations managers, and founders who want visibility into meeting time without manually checking Fireflies each week.

---

## What This Workflow Does

- **Runs automatically every Friday** — Fires at 5PM every week so your end-of-week report arrives without any manual trigger
- **Calculates seven meeting metrics** — Computes total meetings, total hours, average duration, busiest day, top participant, longest meeting, and a day-by-day breakdown from raw Fireflies data
- **Identifies the busiest day** — Counts meetings per day of the week and surfaces which day had the most meetings and exactly how many
- **Finds the top participant** — Counts how many meetings each person attended and surfaces the most-present person across the week
- **Logs one summary row to Google Sheets** — Appends a 9-column weekly record for trend tracking so you can compare meeting load week over week
- **Emails a formatted plain-text report** — Sends the full report with all metrics, daily breakdown, and numbered meeting list to your manager email automatically
- **Exits cleanly with no meetings** — If no meetings were recorded this week, the workflow stops silently without sending an empty email

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- Fireflies.ai account with API access
- Google Sheets (one sheet with a tab named **Weekly Meeting Report**)
- Gmail account (used to send the weekly report)

### Credentials Required
- Fireflies API key (pasted into **2. Set — Config Values**)
- Google Sheets OAuth2
- Gmail OAuth2

**Estimated Setup Time: 10–15 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your Fireflies API key** — Log in to fireflies.ai → Settings → Integrations → copy your API key

3. **Fill in Config Values** — Open node **2. Set — Config Values** → replace all placeholders:

| Field | What to enter |
|---|---|
| `YOUR_FIREFLIES_API_KEY` | Your Fireflies API key from step 2 |
| `YOUR_GOOGLE_SHEET_ID` | The ID from your Google Sheet URL (the string between `/d/` and `/edit`) |
| `Weekly Meeting Report` | Leave as-is, or change to match your sheet tab name exactly |
| `manager@yourcompany.com` | The email address where the weekly report should be sent |
| `YOUR NAME` | The sender name shown in the email sign-off |
| `YOUR COMPANY NAME` | Your company name (shown in the email subject and body) |

4. **Create your Google Sheet** — Open Google Sheets → add a tab named exactly **Weekly Meeting Report** → add these 9 column headers in row 1: `Week`, `Total Meetings`, `Total Hours`, `Avg Duration (min)`, `Busiest Day`, `Top Participant`, `Longest Meeting`, `All Participants`, `Logged At`

5. **Connect Google Sheets** — Open node **6. Google Sheets — Log Weekly Summary** → click the credential dropdown → add Google Sheets OAuth2 → sign in with your Google account → authorize access

6. **Connect Gmail** — Open node **7. Gmail — Send Weekly Report** → click the credential dropdown → add Gmail OAuth2 → sign in with the Gmail account you want to send reports from → authorize access

7. **Activate the workflow** — Toggle the workflow to Active — it will run automatically every Friday at 5PM

&gt; ⚠️ **To test immediately** — Click on node **1. Schedule — Every Friday 5PM** and use the manual Execute option to trigger a test run without waiting for Friday.

---

## How It Works (Step by Step)

**Step 1 — Schedule: Every Friday 5PM**
This step fires the workflow automatically every Friday evening at 5PM. No manual trigger is needed. Once the workflow is active, it runs on its own every week.

**Step 2 — Set: Config Values**
Your Fireflies API key, Google Sheet ID, sheet tab name, manager email, sender name, company name, and the 7-day date window are stored here. The week start and end dates are calculated automatically from today's date so you never need to update them manually.

**Step 3 — HTTP: Fetch Transcripts**
A request is sent to the Fireflies API using your API key. It retrieves the 100 most recent transcripts from your account — title, date, duration, and participants for each. Fetching 100 ensures meetings from busy weeks are not missed during the 7-day filter.

**Step 4 — Code: Calculate Meeting Metrics**
The 100 transcripts are filtered to only those recorded in the past 7 days. If no meetings are found, a `hasMeetings: false` flag is set and the result passes to the gate check. For weeks with meetings, seven metrics are calculated: total meeting count, total minutes and hours, average duration per meeting, busiest day of the week with count, top participant with count, longest meeting with title and duration, and a full list of all unique participants. A day-by-day breakdown is assembled showing meeting count and total minutes per day, sorted chronologically. A numbered meeting list is also built showing each meeting's date, title, and duration, sorted most recent first.

**Step 5 — IF: Meetings Found?**
This is the gate check. If meetings were found (YES path), the workflow continues to log and email the report. If no meetings were found this week (NO path), the workflow routes to **8. Set — No Meetings Skip** and stops cleanly — no email is sent, no empty row is logged.

**Step 6 (No path) — Set: No Meetings Skip**
This step handles the empty-week case. It sets a brief message confirming no meetings were found and the workflow ends here for that run.

**Step 6 — Google Sheets: Log Weekly Summary**
One row is appended to your Weekly Meeting Report tab with all 9 columns: the week date range, total meetings, total hours, average duration, busiest day, top participant, longest meeting, all participants combined, and the logged-at timestamp. This runs before the email so the sheet is always up to date even if the email step fails.

**Step 7 — Gmail: Send Weekly Report**
A plain-text email is sent to your manager email address. The subject includes your company name and the week date range. The body contains the full summary section (all seven metrics), the day-by-day breakdown, the complete numbered meeting list, and a sign-off with your name and company. A footer notes that data has been logged to Google Sheets and that the report was auto-generated every Friday.

The final result: every Friday evening your manager receives a clean, complete meeting hours report in their inbox — and one row is added to your Google Sheet for trend tracking.

---

## Key Features

✅ **Fully automated Friday delivery** — Fires at 5PM every Friday with zero manual input after setup
✅ **Seven metrics calculated automatically** — Total meetings, hours, average duration, busiest day, top participant, longest meeting, and daily breakdown — all from a single Fireflies API call
✅ **Top participant tracking** — Counts appearances across all meetings and surfaces the most-present person so you can spot meeting bottlenecks
✅ **Trend-ready Google Sheets log** — One row per week means you can chart meeting load trends, spot overloaded weeks, and compare month over month
✅ **Plain-text email format** — Renders cleanly in any email client without HTML formatting issues
✅ **100-transcript buffer** — Fetches 100 recent transcripts to ensure high-volume weeks are never truncated during the 7-day filter
✅ **Clean empty-week exit** — No meetings this week means a clean stop — no empty email, no blank Sheets row, no errors
✅ **Chronological daily breakdown** — Day-by-day data is sorted by date, not alphabetically, so the breakdown reads naturally from Monday to Friday

---

## Customisation Options

**Change the report delivery day and time** — In node **1. Schedule — Every Friday 5PM**, edit the cron expression `0 17 * * 5` to change when the report fires. For example, `0 8 * * 1` sends a Monday morning summary of last week's meetings instead.

**Extend the date window to 30 days for a monthly report** — In node **2. Set — Config Values**, change `{days: 7}` in both the `weekStart` and `sevenDaysAgoMs` fields to `{days: 30}` and adjust the schedule to monthly for a full meeting hours report.

**Add a Slack summary alongside the email** — After node **6. Google Sheets — Log Weekly Summary**, add a Slack node that posts a short 3-line summary (total meetings, total hours, busiest day) to a `#operations` or `#team-leads` channel so the team sees it without checking email.

**Filter to specific meeting types only** — In node **4. Code — Calculate Meeting Metrics**, add a keyword filter on the meeting title before calculating metrics — for example, only include meetings with "client" or "sync" in the title to separate client time from internal meetings.

**Add a meeting-load alert** — In node **4. Code — Calculate Meeting Metrics**, add a check: if `totalHours` exceeds a threshold (e.g. 20 hours), set a `heavyWeek` flag to true. Then add an IF check after step 4 that sends an additional Slack or email alert flagging the overloaded week before the normal report runs.

---

## Troubleshooting

**Workflow not triggering on Friday:**
- Confirm the workflow is toggled to Active — inactive workflows do not run on a schedule
- Check the cron expression in node **1. Schedule — Every Friday 5PM** is exactly `0 17 * * 5` — any accidental edit breaks the schedule
- To test immediately, click on node 1 and use the manual Execute option

**Fireflies returning no transcripts or an auth error:**
- Confirm `YOUR_FIREFLIES_API_KEY` in node **2. Set — Config Values** is replaced with your actual key — not the placeholder text
- Get your key from fireflies.ai → Settings → Integrations → API Key
- If your team recorded more than 100 meetings in the past week, increase the `limit` value in node **3. HTTP — Fetch Transcripts** from `100` to a higher number in the GraphQL query body

**Google Sheets not logging rows:**
- Confirm the Google Sheets OAuth2 credential in node **6. Google Sheets — Log Weekly Summary** is connected and not expired — re-authorize if needed
- Check that `YOUR_GOOGLE_SHEET_ID` in node **2. Set — Config Values** matches the ID in your sheet URL exactly
- Confirm the tab is named **Weekly Meeting Report** exactly — capitalization must match `sheetName` in Config Values
- Verify all 9 column headers in row 1 match exactly: `Week`, `Total Meetings`, `Total Hours`, `Avg Duration (min)`, `Busiest Day`, `Top Participant`, `Longest Meeting`, `All Participants`, `Logged At`

**Email not being received:**
- Confirm the Gmail OAuth2 credential in node **7. Gmail — Send Weekly Report** is connected and authorized with the correct sending account
- Check that `manager@yourcompany.com` in node **2. Set — Config Values** is replaced with the actual recipient email address
- Check your spam or promotions folder — automated emails from Gmail OAuth2 sometimes land there on first send
- Check the execution log of node 7 for any error message from the Gmail API

**Metrics showing wrong totals or missing meetings:**
- Confirm your n8n instance timezone is set correctly — the 7-day filter uses millisecond timestamps and timezone mismatches can cause meetings to fall outside the window
- If meetings are missing, check that the Fireflies transcripts were fully processed before Friday 5PM — transcripts still processing at trigger time will not appear in the results
- Check the execution log of node **4. Code — Calculate Meeting Metrics** to see the raw list of meetings that passed the filter

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
