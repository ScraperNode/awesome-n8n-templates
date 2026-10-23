# 📊 Send Fireflies meeting talk-time dominance reports to Telegram

> ⚡ **9 views** · 📊 [Market Research & Insights](../)

## Description

### Description

Connect Fireflies to this workflow once and every meeting you record automatically generates a complete talk-time breakdown delivered to your Telegram. The moment transcription finishes, the workflow fetches per-speaker analytics from Fireflies, builds a visual bar chart showing exactly how much each person spoke, and checks whether anyone crossed your dominance threshold. You receive a formatted report on your phone within seconds of the meeting ending — no AI cost, no spreadsheets, no manual review. Built for managers, coaches, and team leads who want to know if their meetings are balanced or dominated by one voice.

---

## What This Workflow Does

- **Triggers instantly when a meeting ends** — Fireflies fires the workflow the moment transcription completes, so the report arrives on your phone without any manual step
- **Fetches per-speaker analytics from Fireflies** — Retrieves talk time percentage, word count, speaking pace, questions asked, longest single speech, speaking turns, and filler words for each participant
- **Builds a visual ASCII bar chart per speaker** — Converts each speaker's talk percentage into a 10-block bar so you can see the balance at a glance
- **Detects meeting dominance automatically** — Checks if any speaker crossed your configured threshold (default 70%) and labels them as DOMINANT in the report
- **Counts total questions across all speakers** — Surfaces the total number of questions asked in the meeting as a single engagement metric
- **Delivers the full report to Telegram instantly** — Sends a formatted message to your Telegram chat with speaker breakdown, dominance alert, and a direct Fireflies link

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- Fireflies.ai account with webhook access and speaker analytics enabled
- Telegram bot (created via @BotFather)

### Credentials Required
- Fireflies API key (pasted into **2. Set — Config Values**)
- Telegram Bot credential (connected in n8n)

**Estimated Setup Time: 10–15 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Activate the workflow and copy the webhook URL** — Toggle the workflow to Active → click on node **1. Webhook — Fireflies Transcript Done** → copy the Production URL shown

3. **Register the webhook in Fireflies** — Log in to app.fireflies.ai → Settings → Developer Settings → Webhooks → paste the webhook URL → save

4. **Get your Fireflies API key** — In Fireflies, go to Settings → Integrations → Fireflies API → copy your API key

5. **Get your Telegram Chat ID** — Open Telegram → search for `@userinfobot` → send `/start` → it replies with your chat ID number

6. **Fill in Config Values** — Open node **2. Set — Config Values** → replace the placeholders:

| Field | What to enter |
|---|---|
| `YOUR_FIREFLIES_API_KEY` | Your Fireflies API key from step 4 |
| `YOUR_TELEGRAM_CHAT_ID` | Your Telegram chat ID number from step 5 |
| `dominanceThreshold` | Leave as `70` or change to your preferred percentage (e.g. `60` for stricter flagging) |

&gt; ⚠️ Do NOT change the `meetingId` field — it is extracted automatically from the Fireflies webhook payload.

7. **Connect Telegram** — Open node **5. Telegram — Send Talk-Time Report** → click the credential dropdown → add your Telegram Bot API credential (paste the bot token from @BotFather) → save

8. **Send /start to your bot** — Open Telegram → find your bot → send `/start` — this is required before the bot can message you for the first time

9. **Activate the workflow** — Confirm the workflow is Active — Fireflies will now fire it automatically after every recorded meeting

---

## How It Works (Step by Step)

**Step 1 — Webhook: Fireflies Transcript Done**
This step listens for a signal from Fireflies. Every time a meeting finishes transcribing, Fireflies sends a POST request to this webhook URL containing the meeting ID. No manual trigger is needed — it fires automatically after every recorded call where you are the organizer.

**Step 2 — Set: Config Values**
Your Fireflies API key, Telegram chat ID, dominance threshold, and the meeting ID from the webhook are stored here. The meeting ID is extracted automatically from all possible Fireflies payload formats — you never need to enter it manually.

**Step 3 — HTTP: Fetch Speaker Analytics**
A request is sent to the Fireflies API using your API key and the meeting ID. It retrieves the per-speaker analytics Fireflies computed for this meeting: each speaker's name, talk time percentage, total duration, word count, words per minute, questions asked, longest single speech in seconds, number of speaking turns, and filler word count. If no transcript is found, the workflow stops with an error.

**Step 4 — Code: Analyze Speaker Data**
This is where all the analysis happens. Speakers are sorted from highest to lowest talk time percentage. For each speaker, a 10-block visual bar is built — each filled block (█) represents 10% of talk time and empty blocks (░) fill the rest. So a speaker at 70% talk time shows as `███████░░░ 70%`. The dominance threshold from your config is checked — if any speaker's percentage meets or exceeds it, they are flagged as DOMINANT in the report and an alert line is added. Total questions across all speakers are also summed. The complete Telegram message is assembled with the meeting title, date, duration, total questions, the dominance alert or balance confirmation, and the full speaker breakdown. If no speaker analytics are available for the meeting, the workflow stops with an error rather than sending an empty message.

**Step 5 — Telegram: Send Talk-Time Report**
The formatted report is sent to your Telegram chat. The message shows the meeting title, date, duration, total questions asked, a dominance alert or balance confirmation, and one block per speaker showing their bar chart, talk percentage, minutes, word count, pace, questions, longest speech, speaking turns, and filler words. A direct Fireflies link is included at the bottom.

---

## Key Features

✅ **Zero AI cost** — This workflow uses only Fireflies built-in speaker analytics — no OpenAI or any other AI API is called, making it completely free to run beyond Fireflies
✅ **Visual bar chart per speaker** — Each speaker gets a 10-block ASCII bar so you can read the balance distribution without looking at numbers
✅ **Configurable dominance threshold** — Change one number in Config Values to set your own standard for what counts as dominating a meeting
✅ **Seven metrics per speaker** — Talk percentage, word count, speaking pace, questions asked, longest speech, speaking turns, and filler words — all from one Fireflies API call
✅ **Instant phone delivery** — Telegram delivers the report to your phone the moment the meeting transcript is ready — no email, no dashboard login
✅ **Dominance detection with name** — The alert names the specific speaker who dominated, not just a generic warning, so you know exactly who to address
✅ **Total questions surfaced** — The combined question count across all speakers gives you a quick read on how engaged and interactive the meeting was
✅ **No spreadsheet or dashboard needed** — The entire report arrives formatted in a single Telegram message — nothing to open, nothing to export

---

## Customisation Options

**Lower the dominance threshold for stricter flagging** — In node **2. Set — Config Values**, change `dominanceThreshold` from `70` to `60` or `55` to flag meetings where one person spoke for more than that percentage — useful for highly collaborative teams where even 60% is too much.

**Add a Slack alert for dominant meetings** — After node **4. Code — Analyze Speaker Data**, add an IF check that reads the `hasDominance` flag — if true, post a Slack message to a `#meeting-health` channel with the speaker name and percentage so the team lead is notified immediately.

**Log every meeting to Google Sheets** — After node **4. Code — Analyze Speaker Data**, add a Google Sheets append step to record the meeting title, date, total speakers, dominant speaker name (if any), and each speaker's talk percentage — building a long-term dataset of meeting balance over time.

**Send to multiple Telegram chats** — In node **2. Set — Config Values**, you can only store one `telegramChatId`. To send to multiple recipients, duplicate node **5. Telegram — Send Talk-Time Report**, change the `chatId` in each copy to a different ID, and connect all copies after step 4.

**Filter out very short meetings** — In node **4. Code — Analyze Speaker Data**, add a check at the top: if `meetingDurationMin` is less than 5, return a simple message saying the meeting was too short to analyze and skip the full report — avoiding noise from brief check-in calls.

---

## Troubleshooting

**Workflow not triggering when a meeting ends:**
- Confirm the workflow is Active — inactive workflows do not receive Fireflies webhooks
- Log in to app.fireflies.ai → Settings → Developer Settings → Webhooks → confirm the URL is saved and matches the Production URL from node **1. Webhook — Fireflies Transcript Done** exactly
- Fireflies only fires webhooks for meetings where you are the organizer — guest meetings will not trigger it

**Fireflies API key error or transcript not found:**
- Confirm `YOUR_FIREFLIES_API_KEY` in node **2. Set — Config Values** is replaced with your actual key — not the placeholder text
- Get your key from fireflies.ai → Settings → Integrations → Fireflies API
- If speaker analytics return empty, your Fireflies plan may not include speaker diarization — check your plan settings in Fireflies

**No speaker data in the report:**
- Fireflies speaker analytics require that speaker names were detected during transcription — if all speakers show as "Unknown" or the analytics array is empty, speaker diarization may not have run on this meeting
- Check in the Fireflies dashboard that the meeting transcript shows individual speaker labels — if it does not, speaker analytics will not be available
- The workflow throws an error and stops cleanly in this case rather than sending an empty or broken message

**Telegram message not arriving:**
- Confirm the Telegram Bot credential in node **5. Telegram — Send Talk-Time Report** is connected with a valid bot token from @BotFather
- Confirm `YOUR_TELEGRAM_CHAT_ID` in node **2. Set — Config Values** is your numeric chat ID — get it from @userinfobot in Telegram
- You must send `/start` to your bot in Telegram before the first message can be delivered — bots cannot initiate conversations without this step

**Dominance alert not firing when expected:**
- Check that `dominanceThreshold` in node **2. Set — Config Values** is stored as a string number (e.g. `"70"`) and matches what you expect — the code converts it to an integer automatically
- Open the execution log of node **4. Code — Analyze Speaker Data** and check the `hasDominance` value and the sorted speaker percentages to confirm which speaker's percentage the threshold was compared against

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

HTTP Request, Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
