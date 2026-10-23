# 🔬 Turn meeting recordings into Slack summaries using WayinVideo and GPT-4o-mini

> ⚡ **28 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### Description

Paste any Zoom, Google Meet, or Teams recording URL into a simple form along with the meeting title, team name, date, and Slack channel and the workflow handles everything automatically. [WayinVideo](https://wayin.ai/api/) transcribes the full meeting with speaker labels and timestamps, then GPT-4o-mini extracts five structured sections: a meeting summary, action items with owners and due dates, decisions made, key discussion points, and next steps. A formatted Slack message is posted to your team channel and every meeting summary is logged to Google Sheets with the Slack message timestamp. Built for teams who run regular standups, project meetings, or client calls and want action items shared on Slack automatically — without anyone writing notes or copy-pasting summaries.

---

## What This Workflow Does

- **Transcribes meetings with speaker labels** — WayinVideo processes the full recording and returns every spoken segment attributed to the correct speaker with timestamps
- **Extracts five structured sections automatically** — GPT-4o-mini identifies the meeting summary, action items with owners and due dates, decisions, key discussion points, and next steps from the transcript
- **Assigns owners to every action item** — Action items include the responsible person's name if mentioned in the meeting, falling back to "Team" if no specific person was named
- **Posts a formatted Slack message with Block Kit** — The Slack message uses headers, fields, dividers, and sections so it is easy to scan on any device — not a wall of text
- **Includes a recording link in the Slack message** — Every Slack message ends with a clickable link to the full recording so anyone can watch back without searching for the URL
- **Polls automatically until transcription is ready** — Waits 90 seconds then checks every 30 seconds until the transcript is available, with no manual monitoring needed
- **Logs the full summary to Google Sheets** — Appends a row with the meeting title, team, date, duration, attendees, all five extracted sections, recording URL, Slack channel, and Slack message timestamp

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- Slack workspace with a bot connected to your team channel
- Google Sheets (one sheet with a tab named **Meeting Log**)

### Credentials Required
- WayinVideo API key (pasted into **2. WayinVideo — Submit Transcription** and **4. WayinVideo — Get Transcript Results**)
- OpenAI API key
- Slack OAuth2 credential
- Google Sheets OAuth2

&gt; ⚠️ **WayinVideo API key appears in 2 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in both **2. WayinVideo — Submit Transcription** and **4. WayinVideo — Get Transcript Results**. Missing either one will cause the workflow to fail.

**Estimated Setup Time: 20–25 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 2** — Open node **2. WayinVideo — Submit Transcription** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace `YOUR_WAYINVIDEO_API_KEY` with your actual key

4. **Add your WayinVideo API key to node 4** — Open node **4. WayinVideo — Get Transcript Results** → find the same `Authorization` header → replace `YOUR_WAYINVIDEO_API_KEY` with the same key

5. **Connect OpenAI** — Open node **9. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Get your Slack channel ID** — Open Slack in a browser → right-click on the channel you want to post to → click "Copy link" → the channel ID is the string starting with `C` at the end of the URL (e.g. `C08ABCDEF12`)

7. **Connect Slack and set the channel** — Open node **11. Slack — Post Action Items** → click the credential dropdown → add Slack OAuth2 → authorize n8n access to your workspace → replace `YOUR_SLACK_CHANNEL_ID` in the channel field with your actual channel ID

8. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Meeting Log** → add these 13 column headers in row 1: `Meeting Title`, `Team`, `Date`, `Duration (min)`, `Attendees`, `Summary`, `Action Items`, `Decisions`, `Next Steps`, `Recording URL`, `Slack Channel`, `Slack Message TS`, `Logged On`

9. **Connect Google Sheets** — Open node **12. Google Sheets — Log Meeting Summary** → click the document field → replace `YOUR_GOOGLE_SHEET_ID` by selecting your spreadsheet or entering the Sheet ID (the string between `/d/` and `/edit` in your Sheet URL) → click the credential dropdown → add Google Sheets OAuth2 → authorize access

10. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Meeting URL + Details** → open it in a browser to submit your first meeting

---

## How It Works (Step by Step)

**Step 1 — Form: Meeting URL + Details**
You open the form URL in a browser and fill in five fields: the meeting recording URL (Zoom, Google Meet, Teams, Loom, or any direct link), the meeting title, the team name, the meeting date, and the Slack channel name where the summary should be posted (e.g. `#team-updates`). Submitting the form starts the workflow.

**Step 2 — HTTP: WayinVideo — Submit Transcription**
The meeting recording URL is sent to the WayinVideo transcription API with the target language set to English. WayinVideo accepts the job and returns a task ID confirming transcription has started.

**Step 3 — Wait: 90 Seconds**
The workflow pauses for 90 seconds before the first status check. Meeting recordings are typically 30–90 minutes long and need more initial processing time than shorter videos.

**Step 4 — HTTP: WayinVideo — Get Transcript Results**
A GET request checks the WayinVideo results endpoint using the task ID from step 2. It returns the current processing status and, once complete, the full speaker-labeled transcript with timestamps.

**Step 5 — IF: Transcription Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the transcript is ready and the workflow moves forward to formatting. If still processing (NO path), the workflow routes to **6. Wait — 30 Seconds Retry** which pauses 30 seconds then loops back to step 4 to check again. This repeats until SUCCEEDED.

**Step 6 — Wait: 30 Seconds Retry**
When the transcript is not yet ready, the workflow waits 30 seconds then returns to step 4 for another check. The loop continues automatically.

**Step 7 — Code: Format Transcript**
Each segment is formatted as `[Speaker Name | MM:SS] text`. Total meeting duration in minutes, word count, and unique speaker names (attendees) are calculated. All form inputs — meeting title, team name, meeting date, Slack channel, and recording URL — are packaged here for the AI prompt.

**Step 8 — AI Agent: Extract Meeting Summary**
GPT-4o-mini receives the formatted transcript and a detailed system prompt. It extracts five labeled sections: a 2–3 sentence meeting summary, action items each with owner name and due date (or TBD), decisions made, up to five key discussion points, and next steps. If any section has no content from the transcript, it writes "None mentioned" or "None recorded" rather than inventing content. The output uses exact section labels so the parsing step is reliable.

**Step 9 — OpenAI: GPT-4o-mini Model**
This is the language model powering the meeting extraction. It runs with default settings for consistent, structured output.

**Step 10 — Code: Build Slack Message**
The AI output is parsed using regex to extract each of the five labeled sections. A complete Slack Block Kit JSON message is assembled with: a header block showing the meeting title, a fields section showing team, date, duration, and attendees in two columns, a divider, and then individual section blocks for Meeting Summary, Action Items, Decisions Made, Key Discussion Points, Next Steps, and a clickable recording link. A context block at the bottom credits the automation. All five extracted text sections and meeting metadata are also packaged for Google Sheets logging.

**Step 11 — Slack: Post Action Items**
The Block Kit message is posted to your specified Slack channel using the connected Slack OAuth2 credential. Slack returns a message timestamp (`ts`) which is used to uniquely identify the message for thread tracking.

**Step 12 — Google Sheets: Log Meeting Summary**
One row is appended to your Meeting Log tab with all 13 columns populated: meeting title, team, date, duration, attendees, summary, action items, decisions, next steps, recording URL, Slack channel, the Slack message timestamp, and the log timestamp. Your team now has a permanent searchable record of every meeting processed.

---

## Key Features

✅ **Slack Block Kit formatting** — The message renders with headers, two-column metadata fields, and divided sections so it is easy to scan in any Slack client — mobile or desktop
✅ **Owner names extracted from transcript** — GPT reads the transcript for assignments and names the right person per action item — not just a generic bullet list
✅ **Recording link embedded in every message** — The Slack message always includes a clickable link to the full recording so team members can watch back without asking for the URL
✅ **90-second initial wait for meeting-length recordings** — The longer first pause is calibrated for typical 30–90 minute meeting recordings rather than short clips
✅ **Five structured sections per meeting** — Summary, action items, decisions, key points, and next steps are all extracted separately so different team members can scan only what they need
✅ **Slack message timestamp logged to Sheets** — The `ts` value saved in Google Sheets lets you build direct links to the exact Slack message for any meeting in your log
✅ **Graceful fallback for missing content** — If no action items or decisions are found in the transcript, GPT writes "None identified" rather than inventing or leaving fields blank

---

## Customisation Options

**Post to a different channel per team** — In node **1. Form — Meeting URL + Details**, add a dropdown field with multiple channel options — then in node **11. Slack — Post Action Items**, map the channel ID dynamically based on the team name selected, so engineering meetings go to `#eng-standup` and sales meetings go to `#sales-updates`.

**Add a retry limit to stop infinite polling** — Before node **6. Wait — 30 Seconds Retry**, add a Set step that increments a poll counter, then add a second IF check that stops after 20 polls and sends a Slack error message to the channel instead of looping indefinitely.

**Send a direct message to each action item owner** — After node **11. Slack — Post Action Items**, add a second Slack step that sends a direct message to each person named in the action items list — parse the owner names from the `actionItems` text and send individual DMs with their specific tasks.

**Add a due date filter for urgent action items** — In node **10. Code — Build Slack Message**, add logic that scans the `actionItems` text for any item with "Due: today" or "Due:" plus the current date, then add a separate Slack section block that highlights only those urgent items at the top of the message.

**Trigger automatically from a Zoom webhook** — Replace node **1. Form — Meeting URL + Details** with a Zoom webhook trigger that fires when a cloud recording becomes available — eliminating the manual form submission step entirely.

---

## Troubleshooting

**WayinVideo returning an error on submission:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **2. WayinVideo — Submit Transcription** is replaced with your actual API key — not the placeholder text
- Confirm the same replacement was made in node **4. WayinVideo — Get Transcript Results** — both steps require the key
- Check the execution log of node 2 for the raw error — a 401 means wrong key, a 422 means the URL format is not supported

**Workflow stuck in the polling loop:**
- Check that the meeting recording URL is publicly accessible — Zoom recordings with password protection or expired links will not be processed
- Open the execution log of node **4. WayinVideo — Get Transcript Results** to inspect the raw response — WayinVideo may have returned FAILED with a specific error
- If the loop runs indefinitely, deactivate the workflow, fix the URL, and resubmit

**Slack message not posting:**
- Confirm the Slack OAuth2 credential in node **11. Slack — Post Action Items** is connected and your n8n Slack app has been added to the target channel — in Slack, go to the channel → click the channel name → Integrations → Add apps
- Confirm `YOUR_SLACK_CHANNEL_ID` is replaced with the actual channel ID starting with `C` — not the channel name like `#team-updates`
- Check the execution log of node 11 for the raw Slack API error — a `channel_not_found` error means wrong ID or the app is not in the channel

**GPT not extracting all five sections:**
- Confirm the API key is connected in node **9. OpenAI — GPT-4o-mini Model** and your account has credits
- Check the execution log of node **8. AI Agent — Extract Meeting Summary** for the raw output — if section labels are missing, the regex in node 10 will return the fallback values
- Very short meetings with less than 5 minutes of transcript may not have enough content for all five sections — this is expected behavior

**Google Sheets not logging the row:**
- Confirm `YOUR_GOOGLE_SHEET_ID` in node **12. Google Sheets — Log Meeting Summary** is replaced with your actual sheet ID from the URL
- Confirm the tab is named **Meeting Log** exactly and all 13 column headers match exactly
- Check that the Google Sheets OAuth2 credential is connected and not expired — re-authorize if needed

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
