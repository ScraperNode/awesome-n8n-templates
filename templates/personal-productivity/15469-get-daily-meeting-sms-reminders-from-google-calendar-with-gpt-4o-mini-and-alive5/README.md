# ⚡ Get daily meeting SMS reminders from Google Calendar with GPT-4o-mini and Alive5

> ⚡ **48 views** · ⚡ [Personal Productivity](../)

## Description

## Description

Automatically fetch today's Google Calendar meetings every morning at 9 AM, generate a natural, human-sounding SMS reminder for each one using GPT-4o-mini, and deliver it to your US phone number via [Alive5](https://n8n.io/integrations/alive5/ ) — all without typing a single word manually.

## Daily AI-Powered SMS Reminders for Every Meeting on Your Calendar

Stop missing meetings or fumbling with calendar notifications. This workflow automatically reads your Google Calendar at 9 AM every day, loops through each meeting scheduled for that day, and uses GPT-4o-mini to write a friendly, under-160-character SMS reminder — then ships it to your phone via Alive5.

Perfect for busy professionals, founders, sales reps, consultants, and remote workers who want a clean, distraction-free reminder system that feels personal — not robotic.

## What This Workflow Does

This automation handles five key tasks:

- **Triggers automatically every morning at 9 AM** — Cron-based schedule fires daily without any manual input
- **Fetches today's calendar events** — Pulls every meeting from your Google Calendar for the current day in one clean call
- **Loops through each meeting individually** — If you have 3 meetings, you get 3 SMS reminders; one per event, processed in order
- **Generates natural-sounding SMS with GPT-4o-mini** — A 9-rule system prompt produces friendly, professional reminders under 160 characters with no greetings, no emojis, no sign-offs — just the meeting details
- **Delivers via Alive5 SMS** — Sends each generated message to your US phone number in E.164 format, then loops back for the next meeting

## How It Works

The workflow runs on a schedule — no form, no manual trigger needed. At 9 AM every day, the cron expression `0 9 * * *` fires automatically.

The Google Calendar node fetches all events for today from your connected calendar. You can use `primary` or pick a specific calendar from the dropdown after connecting your OAuth credential.

A SplitInBatches node then loops through each event one at a time. This is the key to per-meeting personalization — every event gets its own AI-generated message rather than one bulk summary.

For each meeting, a Set node extracts six clean fields: meeting title, formatted time (h:mm a), location, calculated duration in minutes, attendee count, and description. These structured values feed cleanly into the AI prompt.

GPT-4o-mini receives the meeting details and applies a strict 9-rule system prompt: keep it under 160 characters, no greetings like "Hi" or "Hello", always include title and time, skip location if empty or TBD, no emojis, no quotation marks, no sign-offs, output only the SMS text — nothing else. Temperature is set to 0.6 for slight natural variation, and max tokens are capped at 80 to enforce brevity.

The generated message is then passed to the Alive5 node, which sends it as an SMS to your US phone number. After sending, the workflow loops back to the SplitInBatches node and processes the next meeting until all events for the day are handled.

## Setup Requirements

**Accounts needed:**

- n8n instance (self-hosted or cloud)
- Google account with Google Calendar access (OAuth2)
- OpenAI account with GPT-4o-mini API access
- Alive5 account with SMS sending enabled (US numbers only)
- A US phone number in E.164 format (example: +14155551234)

**Estimated setup time:** 5–10 minutes

## Setup Steps

### 1. Import Workflow

- Copy the workflow JSON
- Open n8n → Workflows → Import from JSON
- Paste and import
- Verify all 6 nodes are properly connected in the linear flow

### 2. Configure Google Calendar

- Add Google Calendar OAuth2 credential in n8n
- Complete the OAuth flow with the Google account you want to read events from
- Open the **2. Google Calendar — Get Today's Meetings** node
- Replace `YOUR_CALENDAR_ID` with `primary` or pick your calendar from the dropdown
- Test the connection — you should see today's events return as JSON

### 3. Configure OpenAI

- Add OpenAI API credential in n8n
- Enter your API key
- Open the **5. OpenAI — Generate SMS Text** node
- Verify the model is set to `gpt-4o-mini`
- Test the connection

### 4. Configure Alive5

- Add Alive5 credential in n8n
- Enter your Alive5 API credentials
- Open the **6. Alive5 — Send SMS** node
- Replace `+1XXXXXXXXXX` with the recipient US phone number in E.164 format (example: +14155551234)
- Test the connection by sending a sample SMS

### 5. Adjust the Schedule (Optional)

- Open the **1. Schedule — Daily 9 AM** node
- Default cron is `0 9 * * *` (every day at 9 AM)
- Change the time if you prefer a different trigger window — for example, `0 7 * * *` for 7 AM or `0 8 * * 1-5` for weekdays only

### 6. Test and Activate

- Manually execute the workflow once
- Check that each meeting on today's calendar generates and sends an SMS
- Verify the message arrives on your phone within 10–20 seconds
- Activate the workflow once output is confirmed correct

## What Gets Analyzed and Generated

**From each Google Calendar event:**

- Meeting title (or "Untitled Meeting" if missing)
- Formatted start time in 12-hour format (e.g., 2:30 PM)
- Location — physical address, video link, or skipped if empty
- Duration in minutes (calculated from start and end time)
- Attendee count
- Meeting description (passed through but kept out of the SMS)

**AI-generated SMS output:**

- Under 160 characters (strict — counts as one SMS credit)
- Natural, conversational tone — no robotic phrasing
- No greetings, no emojis, no sign-offs
- Includes title and time always
- Includes location only when meaningful
- Outputs the raw SMS text only — no preamble, no quotation marks

## Use Cases

- **Founders and executives:** Get a clean morning summary delivered as individual SMS pings instead of staring at a packed calendar app
- **Sales reps and account managers:** Never miss a client call or demo — each meeting gets its own AI-written reminder with the details that matter
- **Remote workers and consultants:** Stay aligned across time zones without relying on calendar app push notifications that get drowned in noise
- **Busy professionals:** Replace generic calendar reminders with personalized, natural-sounding messages that feel like a personal assistant texted you

## Important Notes

- Replace all placeholder credentials and IDs before activating the workflow
- Alive5 supports US phone numbers only — international numbers will not work
- Phone numbers must be in E.164 format (example: +14155551234, not 415-555-1234)
- The workflow sends one SMS per meeting — if you have 8 meetings in a day, you'll receive 8 SMS messages
- GPT-4o-mini is used to keep AI costs minimal while still producing natural reminders
- Max tokens are capped at 80 to enforce the 160-character SMS limit
- Cron timezone follows your n8n instance timezone — adjust if needed for accurate 9 AM firing
- All-day events will display as "All Day" in the time field
- Meetings without a location will skip the location entirely in the SMS
- Each execution is independent — no data is stored between days

## Customization Ideas

- Change the cron expression to send reminders 30 minutes before each meeting instead of one batch at 9 AM
- Edit the system prompt to change tone (formal, casual, motivational)
- Add a Filter node to skip meetings with specific keywords (e.g., focus blocks, OOO)
- Replace Alive5 with Twilio if you need international SMS support
- Add a second branch to send a daily summary to Slack or Email in parallel

## Support

For questions or assistance:

- **Email:** [info@incrementors.com](info@incrementors.com)
- **Contact:**[ https://www.incrementors.com/]( https://www.incrementors.com/)

## 🔗 Nodes Used

Google Calendar, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
