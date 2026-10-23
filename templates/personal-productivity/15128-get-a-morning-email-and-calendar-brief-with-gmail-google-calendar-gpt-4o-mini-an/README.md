# ⚡ Get a morning email and calendar brief with Gmail, Google Calendar, GPT-4o-mini and Telegram

> ⚡ **226 views** · ⚡ [Personal Productivity](../)

## Description

### Description

Activate this workflow once and every weekday morning at 8AM your phone receives a complete day briefing on Telegram — automatically. It fetches your unread emails and today's and tomorrow's calendar events in parallel, sends everything to GPT-4o-mini which filters out promotions and noise, and delivers one clean structured message with your urgent emails, today's schedule, tomorrow's preparation, and one focus recommendation. Built for founders, executives, and busy professionals who want full day context before they open a single app.

---

## What This Workflow Does

- **Fetches emails and calendar simultaneously** — Pulls unread inbox emails from the last 24 hours and calendar events for today and tomorrow at the same time to save processing time
- **Filters out email noise automatically** — GPT-4o-mini identifies only emails that need a reply or action — newsletters, promotions, automated notifications, and receipts are silently excluded
- **Separates today and tomorrow events** — Calendar events are split into two lists so your schedule and your preparation are clearly distinct in the brief
- **Generates one focus recommendation** — Based on the combined context of your emails and calendar, GPT surfaces the single most important thing to concentrate on today
- **Adds a preparation tip for busy meetings** — If tomorrow has meetings with more than two attendees, the brief automatically includes a preparation suggestion
- **Delivers with Markdown formatting** — The Telegram message uses bold headings and clean layout so the brief is easy to scan on a phone screen
- **Includes a timezone-aware timestamp** — A footer shows the exact local time the brief was generated so you always know when the data was pulled

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- Gmail account (the inbox you want monitored)
- Google Calendar (your primary calendar)
- OpenAI account with GPT-4o-mini API access
- Telegram bot (created via @BotFather)

### Credentials Required
- Gmail OAuth2
- Google Calendar OAuth2
- OpenAI API key
- Telegram Bot credential

**Estimated Setup Time: 15–20 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your Telegram Chat ID** — Open Telegram → search for `@userinfobot` → send `/start` → it replies with your numeric chat ID

3. **Fill in Config Values** — Open node **2. Set — Config Values** → replace all four placeholders:

| Field | What to enter |
|---|---|
| `PASTE_YOUR_TELEGRAM_CHAT_ID_HERE` | Your Telegram chat ID from step 2 |
| `PASTE_YOUR_GMAIL_ADDRESS_HERE` | Your Gmail address (e.g. `you@gmail.com`) |
| `PASTE_YOUR_NAME_OR_COMPANY_HERE` | Your name or company name (used in the GPT prompt greeting) |
| `timezone` | Your timezone string — default is `Asia/Kolkata`. Change to your timezone e.g. `America/New_York`, `Europe/London`, `Asia/Singapore` |

4. **Connect Gmail** — Open node **3. Gmail — Fetch Unread Emails** → click the credential dropdown → add Gmail OAuth2 → sign in with the Gmail account you want monitored → authorize access

5. **Connect Google Calendar** — Open node **4. Google Calendar — Fetch Today and Tomorrow** → click the credential dropdown → add Google Calendar OAuth2 → sign in with the same Google account → authorize access

6. **Connect OpenAI** — Open node **7. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

7. **Connect Telegram** — Open node **9. Telegram — Send Morning Brief** → click the credential dropdown → add your Telegram Bot API credential (paste the bot token from @BotFather) → save

8. **Activate your Telegram bot** — Open Telegram → find your bot → send `/start` — this is required before the bot can message you for the first time

9. **Activate the workflow** — Toggle the workflow to Active — it will run automatically every weekday at 8AM

&gt; ⚠️ **Test before 8AM** — To test immediately, click on node **1. Schedule — Every Weekday 8AM** and use the manual Execute option to trigger a test run.

---

## How It Works (Step by Step)

**Step 1 — Schedule: Every Weekday 8AM**
This step fires the workflow automatically every Monday through Friday at 8AM. The cron expression `0 8 * * 1-5` ensures it never runs on weekends. No manual trigger is needed once activated.

**Step 2 — Set: Config Values**
Your Telegram chat ID, Gmail address, name, timezone, and all date variables used throughout the workflow are stored here. Today's date, today's ISO timestamp, yesterday's timestamp (for the 24-hour email window), tomorrow's timestamp, and the day-after-tomorrow's timestamp are all calculated automatically from the current date — you never need to update these.

**Step 3 — Gmail: Fetch Unread Emails (parallel)**
All unread inbox emails received in the last 24 hours are fetched from your Gmail account. This step runs at the same time as the calendar fetch to save time. Up to 20 emails are processed — the sender, subject line, and a short preview of each message are captured.

**Step 4 — Google Calendar: Fetch Today and Tomorrow (parallel)**
All events from your primary Google Calendar for today and tomorrow are fetched simultaneously alongside the Gmail step. For each event, the title, start and end time, location, and attendee count are captured. If the event has a specific time it is formatted as HH:MM to HH:MM — all-day events are labelled accordingly.

**Step 5 — Code: Merge Emails and Calendar**
Both the email and calendar data are read together here and formatted into clean text for GPT. Emails are listed with sender, subject, and preview. Calendar events are separated into a today list and a tomorrow list, each with time and attendee count. If either source returns no data, a clean fallback message is used (e.g. "No unread emails in the last 24 hours"). The formatted text, event counts, and email count are all packaged for the AI step.

**Step 6 — AI Agent: Write Morning Brief**
GPT-4o-mini receives your name, today's date, the full email list, and both calendar lists. It writes a structured 4-section brief in plain text with basic Telegram Markdown bold headings. Section 1 lists only urgent emails that need a reply or action — all promotional and automated emails are excluded. Section 2 lists all today's events with their times. Section 3 lists tomorrow's events and adds a preparation tip for any meeting with more than two attendees. Section 4 gives one single focus recommendation for the day based on the combined context. The brief is kept under 300 words.

**Step 7 — OpenAI: GPT-4o-mini Model**
This is the language model powering the brief. It runs at temperature 0.4 for a natural, warm tone that is not robotic but also not overly creative. It is capped at 600 tokens to keep the brief concise and costs extremely low — well under $0.001 per morning brief.

**Step 8 — Code: Prepare Telegram Message**
The GPT brief text is read and a timestamp footer is added in your local timezone (e.g. `Brief generated at 08:02`). If GPT failed to generate any output, a fallback message is used instead so Telegram always receives something. The complete message and your Telegram chat ID are packaged for delivery.

**Step 9 — Telegram: Send Morning Brief**
The full brief is sent to your Telegram chat with Markdown rendering enabled. Bold headings render correctly in Telegram so the four sections are clearly separated. A Telegram attribution footer is suppressed so the message looks clean.

---

## Key Features

✅ **Fully automated weekday delivery** — Runs Monday to Friday at 8AM with zero manual input after the one-time setup
✅ **Parallel Gmail and Calendar fetch** — Both data sources are pulled at the same time rather than one after the other, keeping the workflow fast
✅ **Noise-filtered email list** — GPT actively excludes newsletters, promotions, and automated notifications so only actionable emails appear in your brief
✅ **Two-day calendar view** — Today's schedule and tomorrow's events are always both included so you can plan ahead from the morning brief alone
✅ **Preparation tips for group meetings** — If tomorrow has a meeting with more than two attendees, the brief automatically suggests how to prepare
✅ **Fallback protection** — If GPT fails or returns empty output, a fallback message is sent to Telegram so you always receive something at 8AM
✅ **Timezone-correct timestamp** — The footer shows your local time based on the `timezone` value in Config Values — not UTC
✅ **Under $0.001 per brief** — GPT-4o-mini at 600 tokens with temperature 0.4 costs fractions of a cent per run — 260 working days a year costs less than $0.25 total

---

## Customisation Options

**Change the delivery time** — In node **1. Schedule — Every Weekday 8AM**, edit the cron expression `0 8 * * 1-5` to fire at a different hour — for example `0 7 * * 1-5` for 7AM or `30 7 * * 1-5` for 7:30AM.

**Include weekends** — In node **1. Schedule — Every Weekday 8AM**, change the cron expression from `0 8 * * 1-5` to `0 8 * * *` to receive a brief every day of the week including Saturday and Sunday.

**Add a specific Gmail label filter** — In node **3. Gmail — Fetch Unread Emails**, add a label filter to only pull emails tagged with a specific Gmail label (e.g. your client label) so the brief focuses only on the emails that matter most to you.

**Include a second Google Calendar** — After node **4. Google Calendar — Fetch Today and Tomorrow**, duplicate the step and connect it to a second calendar ID — then update node **5. Code — Merge Emails and Calendar** to also read from that second calendar result and merge the events together.

**Add a Slack summary for your team** — After node **8. Code — Prepare Telegram Message**, add a Slack node that posts a shorter 2-line version (just today's meeting count and your one focus) to a `#team-standup` channel so your team gets daily context too.

---

## Troubleshooting

**Workflow not triggering at 8AM:**
- Confirm the workflow is Active — inactive workflows do not run on a schedule
- Check that the cron expression in node **1. Schedule — Every Weekday 8AM** is exactly `0 8 * * 1-5` — any accidental edit breaks the schedule
- Confirm your n8n instance is running at 8AM — self-hosted instances that are turned off will not fire scheduled workflows
- To test immediately, click on node 1 and use the manual Execute option

**Gmail returning no emails even when you have unread messages:**
- Confirm the Gmail OAuth2 credential in node **3. Gmail — Fetch Unread Emails** is connected and not expired — re-authorize if needed
- The filter fetches emails received after `yesterdayISO` — if your n8n instance timezone is set incorrectly, this window may shift unexpectedly
- Check that `PASTE_YOUR_GMAIL_ADDRESS_HERE` in node **2. Set — Config Values** is replaced with your actual Gmail address

**Google Calendar returning no events:**
- Confirm the Google Calendar OAuth2 credential in node **4. Google Calendar — Fetch Today and Tomorrow** is connected with the same Google account that owns the calendar
- The step fetches from the `primary` calendar — if your events are on a different calendar (e.g. a work calendar with a different email), you need to change the calendar ID in the step
- Check that your calendar events have dates that fall within today or tomorrow relative to your n8n server's timezone

**OpenAI not generating the brief:**
- Confirm the API key is connected in node **7. OpenAI — GPT-4o-mini Model** and your account has available credits
- If the brief arrives as the fallback message ("Your brief could not be generated"), check the execution log of node **6. AI Agent — Write Morning Brief** for the raw error
- Temperature 0.4 and 600 max tokens are set by design — do not reduce max tokens below 400 or the brief may be cut off mid-section

**Telegram message not arriving:**
- Confirm the Telegram Bot credential in node **9. Telegram — Send Morning Brief** is connected with a valid bot token from @BotFather
- Confirm `PASTE_YOUR_TELEGRAM_CHAT_ID_HERE` in node **2. Set — Config Values** is replaced with your numeric chat ID from @userinfobot
- You must send `/start` to your bot in Telegram before the first message can be delivered — bots cannot initiate conversations without this activation step

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@isawow.com](info@isawow.com)
🌐 Website: [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Telegram, Google Calendar, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
