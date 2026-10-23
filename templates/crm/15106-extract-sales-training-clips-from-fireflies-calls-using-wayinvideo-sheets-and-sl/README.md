# 🤝 Extract sales training clips from Fireflies calls using WayinVideo, Sheets and Slack

> ⚡ **27 views** · 🤝 [CRM & Sales Operations](../)

## Description

### Description

Connect Fireflies and WayinVideo to this workflow once and every recorded sales call automatically generates a set of training clips delivered to your Slack channel. The moment Fireflies finishes transcribing a call, the workflow takes the video recording, submits it to WayinVideo with your custom search query, waits for processing, and logs every matching clip with its timestamp, score, and description to Google Sheets. Your sales team receives a single Slack message with the top clips, ready to review and use for coaching. Built for sales managers and revenue teams who want a consistent stream of real training moments without manually scrubbing through call recordings.

---

## What This Workflow Does

- **Triggers automatically when a call ends** — Fireflies fires the workflow the moment transcription completes, so clips are extracted from every call without any manual step
- **Submits the recording to WayinVideo** — Sends the video URL with your natural language query to the WayinVideo Find Moments API to locate matching moments
- **Polls until processing is complete** — Waits 45 seconds then checks WayinVideo's status repeatedly, retrying up to 20 times over approximately 15 minutes before timing out
- **Sorts clips by relevance score** — Ranks all returned clips from highest to lowest score and keeps only your configured maximum number of top clips
- **Converts timestamps to readable format** — Transforms raw millisecond timestamps into MM:SS format so your team can jump straight to the right moment in the recording
- **Logs every clip to Google Sheets** — Appends one row per clip with date, meeting title, clip number, start and end time, duration, score, tags, and description
- **Sends one Slack alert after all clips are saved** — Posts a formatted breakdown to your sales training channel exactly once after all rows are logged, never once per clip

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- Fireflies.ai account with webhook access and video recording enabled
- WayinVideo account with API access
- Google Sheets (one sheet with a tab named **Sales Training Clips**)
- Slack workspace with OAuth2 app configured

### Credentials Required
- Fireflies API key (pasted into **2. Set — Config Values**)
- WayinVideo API key (pasted into **2. Set — Config Values**)
- Google Sheets OAuth2
- Slack OAuth2

**Estimated Setup Time: 15–20 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Activate the workflow and copy the webhook URL** — Toggle the workflow to Active → click on node **1. Webhook — Fireflies Transcript Done** → copy the Production URL shown

3. **Register the webhook in Fireflies** — Log in to app.fireflies.ai → Settings → Developer Settings → Webhooks → paste the webhook URL → save

4. **Get your Fireflies API key** — In Fireflies, go to Settings → Integrations → Fireflies API → copy your API key

5. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to API settings or your account dashboard → copy your API key

6. **Fill in Config Values** — Open node **2. Set — Config Values** → replace all placeholders:

| Field | What to enter |
|---|---|
| `YOUR_FIREFLIES_API_KEY` | Your Fireflies API key from step 4 |
| `YOUR_WAYINVIDEO_API_KEY` | Your WayinVideo API key from step 5 |
| `YOUR_GOOGLE_SHEET_ID` | The ID from your Google Sheet URL (the string between `/d/` and `/edit`) |
| `Sales Training Clips` | Leave as-is, or change to match your sheet tab name exactly |
| `#sales-training` | Your Slack channel name including the `#` |
| `findMomentsQuery` | Your natural language search query — default is `objection handling and rebuttal moments` — change to match what you want to extract (e.g. `pricing discussion moments` or `closing technique moments`) |
| `maxClips` | Leave as `3` or change to a higher number to extract more clips per call |

&gt; ⚠️ `findMomentsQuery` should use 4–6 descriptive words for best WayinVideo results — very short queries may return no results.

7. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Sales Training Clips** → add these 11 column headers in row 1: `Date`, `Meeting Title`, `Clip #`, `Clip Title`, `Start`, `End`, `Duration (sec)`, `Score`, `Tags`, `Description`, `Logged At`

8. **Connect Google Sheets** — Open node **14. Google Sheets — Log Training Clips** → click the credential dropdown → add Google Sheets OAuth2 → sign in with your Google account → authorize access

9. **Connect Slack** — Open node **16. Slack — Send Training Clips Alert** → click the credential dropdown → connect your Slack workspace via OAuth2 → invite the n8n bot to your sales training channel (`/invite @n8n`)

10. **Activate the workflow** — Confirm the workflow is Active — Fireflies will now fire it automatically after every recorded sales call

---

## How It Works (Step by Step)

**Step 1 — Webhook: Fireflies Transcript Done**
This step listens for a signal from Fireflies. Every time a meeting finishes transcribing, Fireflies sends a request to this webhook URL containing the meeting ID. No manual trigger is needed — it fires automatically after every recorded call.

**Step 2 — Set: Config Values**
Your Fireflies API key, WayinVideo API key, Google Sheet ID, sheet tab name, Slack channel, Find Moments query, max clips setting, and the meeting ID from the webhook are all stored here. The meeting ID is extracted automatically from all possible Fireflies payload formats.

**Step 3 — HTTP: Fetch Transcript**
A request is sent to the Fireflies API using your API key and the meeting ID. It retrieves the meeting title, date, duration, participants, transcript URL, and — most importantly — the `video_url` and `audio_url` fields for the recording. Only metadata is fetched, not full transcript sentences.

**Step 4 — Code: Extract Video URL**
This step checks for a video URL first, then falls back to an audio URL if no video is available. If neither is present, the workflow throws an error and stops cleanly — WayinVideo requires a media URL to process. The meeting metadata is also cleaned and formatted here for use in the sheet and Slack message.

**Step 5 — HTTP: Submit Find Moments Task**
The recording URL and your natural language query are submitted to the WayinVideo Find Moments API. The project name is set automatically using the meeting title. WayinVideo returns a project ID confirming the job was accepted and processing has started.

**Step 6 — Code: Save Project ID**
The project ID returned by WayinVideo is saved along with all the meeting metadata. A poll counter is initialized at zero — this counter tracks how many times the workflow has checked the status and enforces the 20-poll timeout.

**Step 7 — Wait: 45 Seconds**
The workflow pauses for 45 seconds before checking the WayinVideo status for the first time. This initial wait gives WayinVideo time to begin processing before the first poll.

**Step 8 — HTTP: Poll Find Moments Results**
A GET request is sent to the WayinVideo results endpoint using the project ID. It returns the current processing status and, once complete, the full list of matched clips with their timestamps, scores, titles, descriptions, and tags.

**Step 9 — Code: Check Status**
The poll counter is incremented and the status is evaluated. If the status is SUCCEEDED, the `isReady` flag is set to true and the workflow moves forward. If the status is FAILED, the workflow throws an error with the failure message and stops. If the status is anything else (still processing), the workflow continues to the next check. If the poll counter reaches 20 without a SUCCEEDED status (approximately 15 minutes), the workflow throws a timeout error and stops.

**Step 10 — IF: Processing Complete?**
This is the retry gate. If `isReady` is true (YES path — processing is done), the workflow moves forward to extract and log the clips. If `isReady` is false (NO path — still processing), the workflow routes to **11. Set — Still Processing** which loops back to **7. Wait — 45 Seconds** for another cycle.

**Step 11 — Set: Still Processing**
This step handles the not-yet-complete case. It sets a brief in-progress message and the loop continues back to the wait step for another 45-second pause before the next poll.

**Step 12 — Code: Process Clips**
All clips returned by WayinVideo are sorted by relevance score from highest to lowest. The top clips up to your `maxClips` limit are kept. Each clip's millisecond timestamps are converted to MM:SS format for easy reading. Sheet rows are assembled for each clip and the full Slack message is built — including meeting title, date, duration, the query used, total clips found, and a numbered clip breakdown with timestamps, duration, score, and a short description.

**Step 13 — Code: Split Rows for Sheets**
The clips array is converted into individual items — one per clip — so each can be written to Google Sheets as a separate row. An `isLastRow` flag is set to true only on the final clip, which controls when the Slack alert fires.

**Step 14 — Google Sheets: Log Training Clips**
Each clip is appended as one row to your Sales Training Clips tab. All 11 columns are populated: date, meeting title, clip number, clip title, start time, end time, duration in seconds, relevance score, tags, description, and logged-at timestamp.

**Step 15 — IF: Last Clip Logged?**
After each row is written, this check reads the `isLastRow` flag. If true (YES path — this was the final clip), the Slack alert fires. If false (NO path — more clips still need logging), the workflow routes to **17. Set — More Clips** and the loop continues to the next clip row.

**Step 16 — Slack: Send Training Clips Alert**
Once all clips are logged, one formatted Slack message is posted to your sales training channel. It shows the meeting title, date, duration, the query used, total clips found, and a numbered breakdown of each clip with timestamps, duration, score, and a short description.

**Step 17 — Set: More Clips**
This step handles non-final clips during the logging loop. It sets a brief in-progress message and the loop continues to the next clip.

---

## Key Features

✅ **Natural language clip search** — You describe what you want to find in plain English and WayinVideo locates the matching moments — no manual scrubbing through recordings
✅ **Retry loop with hard timeout** — The workflow polls every 45 seconds for up to 20 attempts (approximately 15 minutes) before stopping — long calls never hang indefinitely
✅ **Clips ranked by relevance score** — Results are sorted by WayinVideo's confidence score so your top clip is always the most relevant match to your query
✅ **MM:SS timestamps for every clip** — Raw millisecond data is converted to human-readable timestamps so anyone on the team can jump straight to the right moment
✅ **Slack fires exactly once** — The `isLastRow` flag ensures your sales team receives one clean notification after all clips are logged, never one message per clip
✅ **Video URL preferred, audio fallback** — The workflow uses the video recording when available and falls back to audio automatically — no manual configuration per meeting type
✅ **Per-clip Google Sheets logging** — Each clip gets its own row with score, tags, timestamps, and description — your sheet becomes a searchable training library over time
✅ **Customizable query per workflow instance** — Change `findMomentsQuery` once in Config Values and every future call is analyzed against your chosen training focus

---

## Customisation Options

**Change the training focus** — In node **2. Set — Config Values**, update `findMomentsQuery` to match whatever you want to extract — for example `pricing and discount discussions`, `discovery questions about pain points`, or `closing and next steps conversations` to build different training clip libraries.

**Increase the number of clips per call** — In node **2. Set — Config Values**, change `maxClips` from `3` to `5` or `10` to capture more moments per recording — useful for longer calls or when you want a broader set of examples per session.

**Reduce the polling wait time for faster calls** — In node **7. Wait — 45 Seconds**, change the wait duration to `30` for shorter recordings that WayinVideo processes faster, or increase to `60` for very long calls to reduce unnecessary API calls.

**Add a Slack alert when no clips are found** — In node **12. Code — Process Clips**, the workflow currently throws an error if clips is empty — instead you can change this to return a `noClips: true` flag and add an IF check that posts a brief Slack message noting no matching moments were found for this call.

**Log clips to a different sheet per month** — In node **2. Set — Config Values**, make `sheetName` dynamic by appending the current month (e.g. `Sales Training Clips — April 2026`) so clips are automatically organized into monthly tabs without any manual file management.

---

## Troubleshooting

**Workflow not triggering when a call ends:**
- Confirm the workflow is Active — inactive workflows do not receive Fireflies webhooks
- Log in to app.fireflies.ai → Settings → Developer Settings → Webhooks → confirm the URL matches the Production URL from node **1. Webhook — Fireflies Transcript Done** exactly
- Fireflies only fires webhooks for meetings where you are the organizer and where the bot was invited to record — calls without the bot will not have a video URL

**WayinVideo returning no project ID or auth error:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **2. Set — Config Values** is replaced with your actual key — not the placeholder text
- Check the execution log of node **5. HTTP — Submit Find Moments Task** for the exact API error response
- Confirm the `findMomentsQuery` uses 4–6 descriptive words — very short single-word queries may be rejected or return empty results

**Polling loop running too long or timing out:**
- If the loop exceeds 20 polls, it stops with a timeout error — check the WayinVideo dashboard to see if the job is still processing or failed on their end
- For very long recordings (over 60 minutes), consider increasing the wait in node **7. Wait — 45 Seconds** to 90 seconds to reduce the chance of timeout on a tight poll budget
- Check node **9. Code — Check Status** execution log to see the current status value returned on each poll

**Google Sheets not logging rows:**
- Confirm the Google Sheets OAuth2 credential in node **14. Google Sheets — Log Training Clips** is connected and not expired
- Check that `YOUR_GOOGLE_SHEET_ID` in node **2. Set — Config Values** is the ID from the sheet URL, not the full URL
- Confirm the tab is named **Sales Training Clips** exactly — capitalization must match `sheetName` in Config Values
- Verify all 11 column headers in row 1 match exactly: `Date`, `Meeting Title`, `Clip #`, `Clip Title`, `Start`, `End`, `Duration (sec)`, `Score`, `Tags`, `Description`, `Logged At`

**Slack alert not arriving after clips are logged:**
- Confirm the Slack OAuth2 credential in node **16. Slack — Send Training Clips Alert** is connected and authorized
- Check that `#sales-training` in node **2. Set — Config Values** includes the `#` prefix and matches your channel name exactly
- Type `/invite @n8n` in the channel to ensure the bot has posting permission
- Check the `isLastRow` value in the execution log of node **15. IF — Last Clip Logged?** — if it never reaches true, the clips array may have had only one clip that was not marked as last correctly

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@isawow.com](info@isawow.com)
🌐 Website: [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
