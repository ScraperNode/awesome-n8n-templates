# 📋 Track Zoom attendance and create AI summaries with Google Sheets, ClickUp and Telegram

> ⚡ **95 views** · 📋 [Project Management](../)

## Description

## Description

When a Zoom meeting ends, this workflow fires automatically — no manual action needed. It classifies every participant as On Time or Late, logs all attendance data to Google Sheets, and sends you one AI-written summary via Telegram. For every late joiner, a ClickUp follow-up task is created automatically so no one slips through the cracks. Built for team leads, trainers, and operations managers who run recurring Zoom meetings.

---

## What This Workflow Does

- **Automatic attendance capture** — Receives the Zoom meeting.ended event via webhook and processes all participant data instantly, with zero manual input
- **Late participant detection** — Classifies each attendee as Attended or Late based on a configurable join delay threshold (default: 5 minutes)
- **14-column Google Sheets log** — Saves every participant as one row including join time, leave time, time in meeting, join delay, and status
- **AI-written Telegram summary** — GPT-4o-mini writes a professional attendance summary and sends it once per meeting directly to the host's Telegram
- **Automated ClickUp follow-up tasks** — Creates one ClickUp task per late joiner with full meeting context, participant details, and a next-day due date
- **Clean exit for on-time attendees** — Participants who joined on time bypass the task creation step with no noise or extra actions

---

## Setup Requirements

### Tools and accounts needed

- n8n instance (self-hosted or cloud)
- Zoom Marketplace account with a Webhook Only App configured
- Google account with Google Sheets access
- OpenAI account with API access (GPT-4o-mini)
- ClickUp account with API access
- Telegram Bot (via BotFather)

**Estimated Setup Time: 20–30 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n, go to Workflows → Import from JSON, paste the workflow JSON, and verify all nodes are connected.

2. **Configure Zoom Webhook** — In the **1. Webhook — Zoom Meeting Ended** node, copy the webhook URL. Go to your Zoom Marketplace app, open your Webhook Only App, and paste the URL under the `meeting.ended` event subscription.

3. **Set your config values** — Open **2. Set — Config Values** and replace all six placeholders:
   - `YOUR_TELEGRAM_CHAT_ID` — your Telegram chat ID (get it from @userinfobot)
   - `YOUR_GOOGLE_SHEET_ID` — the ID from your Google Sheet URL (the long string between `/d/` and `/edit`)
   - `Attendance Log` — rename if your sheet tab has a different name
   - `YOUR HOST NAME` — the name that appears in the Telegram summary
   - `5` — change to your preferred late threshold in minutes
   - `YOUR_CLICKUP_LIST_ID` — copy from your ClickUp list URL

4. **Connect Google Sheets** — Open **4. Google Sheets — Log Participant Row** and connect your Google Sheets OAuth2 credential. Authenticate via Google when prompted.

5. **Connect OpenAI** — Open **7. OpenAI — GPT-4o-mini Model** and connect your OpenAI API credential. Enter your API key from platform.openai.com.

6. **Connect ClickUp** — Open **9. ClickUp — Create Late Participant Task** and connect your ClickUp API credential. Enter your personal API token from ClickUp Settings → Apps.

7. **Connect Telegram** — Open **12. Telegram — Send Meeting Summary** and connect your Telegram Bot API credential. Enter the token from BotFather.

8. **Activate the workflow** — Toggle the workflow to Active before running your next Zoom meeting.

---

## How It Works (Step by Step)

**Step 1 — Webhook: Zoom Meeting Ended**
When any Zoom meeting ends, Zoom sends a POST request to this webhook. This is the trigger that starts the entire workflow. No polling or manual action is needed — it fires the moment the meeting closes.

**Step 2 — Set: Config Values**
This step stores all six configuration values in one place — Telegram chat ID, Google Sheet ID, sheet tab name, host name, late threshold in minutes, and ClickUp list ID. You only set these once, and all downstream steps read from here automatically.

**Step 3 — Code: Extract and Classify Participants**
This step reads the full participant list from the Zoom payload. For each person, it calculates how many minutes after the meeting start they joined. If the delay exceeds the threshold, they are marked Late. Everyone else is marked Attended. This step outputs one item per participant — every step after this runs once per person.

**Step 4 — Google Sheets: Log Participant Row**
Every participant — regardless of status — is written as one row in your Google Sheet. The row includes 14 columns: meeting ID, topic, host email, date, start time, duration, participant name, email, join time, leave time, time in meeting, join delay in minutes, status, and the timestamp when the row was logged.

**Step 5 — IF: First Row Check**
This check gates the Telegram path. Only the first participant item passes through to the summary path (YES). All other participants go to the late-check path (NO). This prevents the host from receiving one Telegram message per attendee.

**Step 6 — AI Agent: Write Telegram Summary**
Using GPT-4o-mini, this step generates a concise, plain-text Telegram message for the host. The message covers the meeting topic, date, duration, participant counts, one observation about attendance quality, and one action suggestion. It is capped at 80 words and uses no markdown.

**Step 7 — OpenAI GPT-4o-mini Model**
This is the language model powering the AI Agent in Step 6. It runs with a max token limit of 200 and a temperature of 0.4 for consistent, professional output.

**Step 8 — Set: Prepare Telegram Fields**
Reads the AI-generated message and the Telegram chat ID, then packages them into a clean output ready to send.

**Step 9 — Telegram: Send Meeting Summary**
Sends the final AI-written message to the host's Telegram chat. This fires exactly once per meeting — not once per participant.

**Step 10 — IF: Is Participant Late?**
For every non-first participant, this check reads their status. If status equals Late (YES), they move to the ClickUp task step. If they joined on time (NO), they exit cleanly through the No Action step.

**Step 11 — ClickUp: Create Late Participant Task**
Creates one ClickUp task per late participant. The task name includes the participant's name and meeting topic. The task body includes full meeting context, participant details, join time, delay in minutes, time in meeting, and three pre-written action items. Due date is automatically set to the next day.

**Step 12 — Set: No Action Needed**
On-time participants exit here with a simple confirmation message. No task is created and no further action is taken.

---

## Key Features

✅ **Zero-click attendance logging** — The workflow fires automatically when Zoom ends; you never need to start it manually
✅ **Configurable late threshold** — Change one value in the config step to adjust what counts as late for your team
✅ **One Telegram message per meeting** — The first-row gate ensures the host gets one clean summary, not one message per attendee
✅ **14-column Google Sheets record** — Every row is complete with time-in-meeting, join delay, and logged-at timestamp for easy reporting
✅ **Pre-written ClickUp task body** — Late participant tasks include context and three ready-to-act follow-up items out of the box
✅ **Next-day due date on tasks** — ClickUp tasks are automatically due 24 hours after the meeting ends
✅ **GPT-4o-mini for cost efficiency** — Telegram summaries use the lightweight model for fast, affordable generation

---

## Customisation Options

**Change the late threshold per meeting type** — In **2. Set — Config Values**, update `lateThresholdMinutes` to a higher value (e.g., 10) for longer or less structured meetings.

**Add email notification for late participants** — After **9. ClickUp — Create Late Participant Task**, connect a Gmail or SMTP node to automatically email the late participant a summary of what they missed.

**Log to multiple sheets by meeting topic** — In **4. Google Sheets — Log Participant Row**, use an expression to dynamically set the sheet tab name based on the meeting topic — one tab per recurring meeting type.

**Add a Slack notification alongside Telegram** — Duplicate **12. Telegram — Send Meeting Summary** and replace it with a Slack node to send the same summary to a team channel in addition to the host's personal Telegram.

**Increase task priority for participants who joined very late** — In **9. ClickUp — Create Late Participant Task**, add an IF check before the task node to set `priority: 1` (urgent) if `joinDelayMin` exceeds 15 minutes.

**Filter out internal test accounts** — Before **3. Code — Extract and Classify Participants**, add a Code node that removes any participants matching test email domains so they don't pollute your sheet or trigger tasks.

---

## Troubleshooting

**Workflow not triggering when the meeting ends:**
- Confirm the webhook URL from **1. Webhook — Zoom Meeting Ended** is pasted correctly in your Zoom Marketplace app
- Verify the event subscription is set to `meeting.ended` specifically — not `meeting.ended` with a typo or a different event type
- Make sure the workflow is activated in n8n before the meeting starts

**Google Sheets rows not appearing:**
- Check that the Sheet ID in **2. Set — Config Values** is the correct ID from the sheet URL
- Confirm the sheet tab name matches exactly what is written in `sheetName` — it is case-sensitive
- Re-authenticate the Google Sheets OAuth2 credential if you recently changed Google account permissions

**Telegram message not sending:**
- Verify the Telegram chat ID is correct — use @userinfobot in Telegram to retrieve it
- Confirm the Telegram Bot token in **12. Telegram — Send Meeting Summary** is valid and has not been revoked via BotFather
- Make sure the bot has been added to the chat and has permission to send messages

**ClickUp tasks not being created:**
- Check that the ClickUp list ID in **2. Set — Config Values** is the correct list — not a space ID or folder ID
- Verify the ClickUp API credential is connected and the token has not expired
- If no participants are late in your test, the task node will not fire — use a threshold of `0` for initial testing

**AI summary is blank or returns an error:**
- Confirm the OpenAI API key in **7. OpenAI — GPT-4o-mini Model** is valid and has available credits
- Check that the credential is connected properly in n8n — reconnect and re-enter the key if needed

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email:[info@isawow.com](info@isawow.com)
🌐 Website:[https://isawow.com](https://isawow.com)

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, ClickUp, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
