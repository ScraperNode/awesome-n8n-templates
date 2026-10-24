# 🔬 Summarize Zoom meetings and create tasks with Claude, ClickUp, Calendar, Slack, and Sheets

> ⚡ **90 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### Description

Activate this workflow once and every day at 9AM it automatically processes all Zoom meetings from the past 24 hours — no manual action needed after any call. For each recorded meeting, it downloads the transcript, fetches all participants, and uses Claude 3.7 Sonnet with the Think Tool to write a 6-section structured summary covering key discussion points, decisions, action items, follow-up meeting details, and key quotes. The HTML summary is emailed to every participant individually, action items become ClickUp tasks, follow-up meetings get added to Google Calendar, a Slack notification is sent to your team, and every meeting is logged to Google Sheets. Built for teams who use Zoom for meetings and want complete post-meeting automation without spending time on notes, tasks, or emails after every call.

&gt; ⚠️ **Zoom requirement:** This workflow requires a Zoom Pro account or higher with Cloud Recording and Auto-Transcription enabled. Free Zoom accounts do not support cloud transcription.

---

## What This Workflow Does

- **Downloads and parses the Zoom VTT transcript automatically** — The workflow fetches the transcript file from Zoom's recording API and parses the WEBVTT format into clean readable text
- **Generates a 6-section AI meeting summary using Claude 3.7 Sonnet** — The Think Tool helps Claude reason through the transcript to extract meeting summary, key discussion points, decisions, action items, follow-up meeting details, and key quotes
- **Emails the full HTML summary to every participant individually** — Participant emails are fetched from Zoom, deduplicated, and the summary is sent to each person with their name in the email
- **Creates one ClickUp task per action item** — Action items extracted from the summary are split and created as separate tasks in your ClickUp list with the correct priority
- **Creates a Google Calendar event if a follow-up meeting was mentioned** — The follow-up meeting section of the summary is parsed and a calendar event is created with all participants invited automatically
- **Sends a Slack status notification to your team** — A message is posted with the meeting title, duration, participant count, and checkmarks showing which actions were completed
- **Logs every processed meeting to Google Sheets** — Date, meeting title, duration, participant count, task count, and follow-up status are saved per meeting

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- Zoom account — Pro or higher with Cloud Recording and Auto-Transcription enabled
- Anthropic account with Claude 3.7 Sonnet API access
- ClickUp account
- Google Calendar
- Gmail account
- Slack workspace
- Google Sheets

### Credentials Required
- Zoom OAuth2 (used in **3. Zoom — Get All Meetings**, **5. Zoom — Get Recording Data**, **7. Zoom — Download Transcript File**, **9. Zoom — Get All Participants**)
- Anthropic API key
- ClickUp API token
- Google Calendar OAuth2
- Gmail OAuth2
- Slack OAuth2
- Google Sheets OAuth2

&gt; ⚠️ **Zoom OAuth2 appears in 4 steps** — use the same Zoom credential in **3. Zoom — Get All Meetings**, **5. Zoom — Get Recording Data**, **7. Zoom — Download Transcript File**, and **9. Zoom — Get All Participants**.

**Estimated Setup Time: 40–50 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Enable Zoom Auto-Transcription** — In your Zoom account, go to Settings → Recording → Cloud Recording → enable Auto-transcription. This must be done before any meeting is recorded.

3. **Create a Zoom OAuth app** — Go to marketplace.zoom.us → Develop → Build App → OAuth → set scopes to `meeting:read` and `recording:read` → get your Client ID and Secret → connect Zoom OAuth2 in n8n credentials

4. **Connect Zoom OAuth2 to all four Zoom steps** — Open nodes **3. Zoom — Get All Meetings**, **5. Zoom — Get Recording Data**, **7. Zoom — Download Transcript File**, and **9. Zoom — Get All Participants** → select the same Zoom OAuth2 credential in each

5. **Get your Anthropic API key** — Log in to console.anthropic.com → go to API Keys → create a new key → connect it in n8n as an Anthropic credential → open node **Anthropic — Claude 3.7 Sonnet Model** → select this credential

6. **Get your ClickUp API token** — In ClickUp, go to Settings → Apps → API Token → copy the token

7. **Get your ClickUp List ID** — Right-click any list in ClickUp → click "Copy link" → the List ID is the last segment of the URL after the final `/`

8. **Add ClickUp credentials to node 16** — Open node **16. HTTP — Create ClickUp Task** → in the URL, replace `YOUR_CLICKUP_LIST_ID` with your actual List ID → in the `Authorization` header, replace `YOUR_CLICKUP_API_TOKEN` with your actual token

9. **Connect Google Calendar** — Open node **19. Google Calendar — Create Follow-Up** → click the credential dropdown → add Google Calendar OAuth2 → authorize access → replace `YOUR_CALENDAR_ID` in the Calendar field with your actual calendar ID (usually your Google account email address)

10. **Connect Gmail** — Open node **12. Gmail — Send to Each Participant** → click the credential dropdown → add Gmail OAuth2 → complete the Google authorization flow

11. **Connect Slack** — Open node **20. Slack — Send Team Notification** → click the credential dropdown → add Slack OAuth2 → authorize access → replace `YOUR_SLACK_CHANNEL_ID` in the channel field with your actual Slack channel ID (right-click your channel in Slack → Copy link → the channel ID is the last segment)

12. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named **Meeting Log** → add these 9 column headers: `Date`, `Meeting Title`, `Meeting ID`, `Duration (min)`, `Participants`, `Summary Sent`, `Tasks Created`, `Follow-up Created`, `Processed At`

13. **Get your Google Sheet ID** — Open the spreadsheet in a browser → copy the string between `/d/` and `/edit`

14. **Connect Google Sheets** — Open node **21. Google Sheets — Log Meeting** → replace `YOUR_GOOGLE_SHEET_ID` with your actual Sheet ID → add Google Sheets OAuth2 → authorize access

15. **Activate the workflow** — Toggle the workflow to Active — it will run at 9AM daily. To run immediately on any meeting, click node **2. Manual Trigger** and execute manually.

---

## How It Works (Step by Step)

**Steps 1 and 2 — Schedule and Manual Trigger**
**1. Schedule — Every Day 9AM** fires at 9AM daily using the cron expression `0 9 * * *`. **2. Manual Trigger** lets you run the workflow immediately on demand. Both connect to the same next step — fetching all Zoom meetings.

**Step 3 — Zoom: Get All Meetings**
The Zoom API is called with OAuth2 to fetch all scheduled meetings for your account. The response returns a list of all meetings.

**Step 4 — Filter: Last 24 Hours Only**
Each meeting's `start_time` is checked against a 24-hour window from now minus 24 hours to now. Meetings outside this window are filtered out. Only meetings that actually happened in the last day proceed forward.

**Step 5 — HTTP: Zoom — Get Recording Data (with error branch)**
The Zoom recordings API is called for each filtered meeting to retrieve its recording files. If the meeting has no recording — because the host did not record it or Cloud Recording was not enabled — the error branch routes to **5b. Stop — No Recording Available** which stops gracefully with a clear message instead of crashing.

**Step 6 — Code: Extract Transcript URL**
The recording files array is scanned for a file with `file_type` equal to `TRANSCRIPT`. The download URL is extracted. Meeting metadata — ID, topic, start time, duration — is also packaged. If no TRANSCRIPT file is found (separate from the recording failing), another clear error is thrown.

**Step 7 — HTTP: Zoom — Download Transcript File**
The VTT transcript file is downloaded from the extracted URL using the Zoom OAuth2 credential for authentication. The file content is returned as plain text.

**Step 8 — Code: Parse Transcript Text**
The WEBVTT format is parsed — cue numbers and timestamp lines are stripped, leaving only the spoken text lines. All lines are joined into a clean readable transcript. Word count and the meeting metadata from step 6 are also packaged.

**Step 9 — HTTP: Zoom — Get All Participants**
The Zoom past meetings API is called to fetch all participants from this specific meeting, including their names and email addresses.

**Step 10 — Claude 3.7: Generate Meeting Summary**
Claude 3.7 Sonnet receives the formatted transcript, participant list, meeting title, date, and duration. The Think Tool is attached — it gives Claude additional reasoning capacity before generating the summary. The system prompt specifies exactly six labeled sections: Meeting Summary, Key Discussion Points, Decisions Made, Action Items (with Task / Owner / Due / Priority format), Follow-up Meeting, and Key Quotes. Claude extracts only what was actually said in the transcript.

**Step 11 — Code: Format Email + Split Participants**
The Claude summary is converted to HTML with styled headings, bullet lists, and a dark branded header. The participants list is deduplicated by email address. One separate data object is returned per unique participant email so the next step can send individual emails.

**Step 12 — Gmail: Send to Each Participant**
An HTML summary email is sent to each unique participant email address individually. Each email has the participant's address in the To field, a subject line containing the meeting title and date, and the formatted HTML body.

**Step 13 — Code: Extract Action Items**
The Action Items section of the Claude summary is parsed using regex. If it is empty or says "None", the workflow returns `hasTasks: false`. If items are found, they are parsed for the task name, owner, due date, and priority level.

**Step 14 — IF: Has Action Items?**
If action items were found (YES path), the workflow splits them and creates ClickUp tasks. If no action items (NO path), the workflow skips directly to extracting follow-up meeting info.

**Steps 15 and 16 — Code: Split Tasks + HTTP: Create ClickUp Task**
The tasks array is split into individual rows — one per task. For each task, a POST request creates a ClickUp task in your specified list with the task name, description, priority (High=1, Medium=2, Low=3), and status set to "to do".

**Step 17 — Code: Extract Follow-Up Info**
The Follow-up Meeting section of the Claude summary is parsed for a date, topic, and participants. If it says "None scheduled", the workflow returns `hasFollowUp: false`. If a date is mentioned but cannot be parsed, the follow-up defaults to the next Tuesday at 10AM.

**Step 18 — IF: Has Follow-Up?**
If a follow-up meeting was mentioned (YES path), a Google Calendar event is created. If not (NO path), the workflow skips directly to the Slack notification.

**Step 19 — Google Calendar: Create Follow-Up**
A Google Calendar event is created with the follow-up meeting title and time. All meeting participants from step 9 are added as attendees. The event description includes the parsed follow-up section from the Claude summary.

**Step 20 — Slack: Send Team Notification**
A Slack message is posted to your channel with the meeting title, date, duration, and participant count. Three status lines use checkmarks (✅) or skip arrows (⏭️) to show whether the summary was emailed, tasks were created in ClickUp, and whether a follow-up calendar event was added.

**Step 21 — Google Sheets: Log Meeting**
One row is appended to your Meeting Log tab with all 9 columns: date, meeting title, meeting ID, duration, participant count, Summary Sent set to Yes, tasks created count, follow-up created (Yes or No), and the current timestamp.

---

## Key Features

✅ **Dual trigger — scheduled and manual** — Runs automatically every morning at 9AM and can also be triggered manually any time for immediate processing
✅ **Graceful handling when no recording exists** — Meetings without cloud recordings stop cleanly with an informative message rather than crashing the entire workflow run
✅ **Claude 3.7 Sonnet with Think Tool** — The Think Tool gives Claude additional reasoning before writing the summary — producing more accurate extraction of action items and decisions
✅ **Participant email deduplication** — If someone joined from multiple devices or appears twice in the participant list, they only receive one summary email
✅ **Action items only created when found** — The ClickUp task creation branch only runs when Claude actually extracted action items — meetings with no tasks skip that branch entirely
✅ **Follow-up calendar event with all attendees** — When a follow-up is mentioned, the calendar event automatically includes every meeting participant as an invitee
✅ **Slack notification shows exactly what was done** — The team message uses ✅ and ⏭️ to show which of the three automated actions were taken so everyone knows the status at a glance

---

## Customisation Options

**Change the daily run time** — In node **1. Schedule — Every Day 9AM**, edit the cron expression from `0 9 * * *` to a different time — for example `0 8 * * *` for 8AM or `0 18 * * *` for a 6PM end-of-day run.

**Add a retry limit for ClickUp task creation** — After node **16. HTTP — Create ClickUp Task**, add an IF check that routes failed requests (non-200 responses) to a Gmail notification so you know if any task failed to create without crashing the rest of the flow.

**Change the action item format in the prompt** — If your Claude summary produces action items in a different format from the expected `Task: Owner | Due: Date | Priority: Level`, edit node **13. Code — Extract Action Items** to match your Claude output format — the regex pattern is the key part to update.

**Add a second Slack channel for urgent meetings** — After node **20. Slack — Send Team Notification**, add an IF check that routes meetings with action items labeled High priority to a separate `#urgent-tasks` Slack channel for immediate team attention.

**Extend the 24-hour window to process older meetings** — In node **4. Filter — Last 24 Hours Only**, change the `hours: 24` value in the date comparison to a larger number — for example `hours: 48` to catch meetings from the past two days on each run.

---

## Troubleshooting

**Workflow runs but stops at step 5b with "No Recording Available":**
- Confirm that Cloud Recording is enabled in your Zoom account settings — go to zoom.us → Settings → Recording → Cloud Recording and toggle it on
- Confirm that Auto-Transcription is also enabled in the same section — the workflow specifically looks for a TRANSCRIPT file type, not just any recording file
- Confirm the meeting host has the correct Zoom plan — Cloud Recording requires Zoom Pro, Business, or Enterprise accounts

**Zoom OAuth2 returning 401 errors:**
- Confirm the Zoom OAuth app at marketplace.zoom.us has the correct scopes: `meeting:read` and `recording:read` — missing either scope causes authentication failures
- Re-authorize the Zoom OAuth2 credential in n8n if the token has expired — OAuth tokens expire and need periodic reauthorization

**ClickUp tasks not being created:**
- Confirm `YOUR_CLICKUP_LIST_ID` in the URL of node **16. HTTP — Create ClickUp Task** is replaced with your actual List ID — get it by right-clicking a list in ClickUp and copying the link
- Confirm `YOUR_CLICKUP_API_TOKEN` in the Authorization header is replaced with your Personal API Token from ClickUp Settings → Apps
- Check the execution log of node 16 for the raw ClickUp error — a 401 means wrong token, a 404 means wrong List ID

**Google Calendar event not being created:**
- Confirm the Google Calendar OAuth2 credential in node **19. Google Calendar — Create Follow-Up** is connected and not expired
- Confirm `YOUR_CALENDAR_ID` is replaced with your actual calendar ID — for most users this is their Google account email address; go to Google Calendar → Settings → find your calendar's "Calendar ID" in the integration settings
- The calendar event only creates when Claude's summary contains a follow-up meeting with a parseable date — if the transcript did not mention a specific next meeting, step 18 takes the NO path and skips calendar creation

**Google Sheets not logging:**
- Confirm `YOUR_GOOGLE_SHEET_ID` in node **21. Google Sheets — Log Meeting** is replaced with your actual Sheet ID
- Confirm the tab is named **Meeting Log** exactly and all 9 column headers in row 1 match exactly
- Check that the Google Sheets OAuth2 credential is connected in node 21

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@isawow.com](info@isawow.com)
🌐 Website: [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Calendar, Zoom, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
