# 📋 Run weekly standups with Groq AI summaries via Telegram and Google Sheets

> ⚡ **18 views** · 📋 [Project Management](../)

## Description

# 📋 Weekly Standup with AI Summary — Telegram + Google Sheets

Automate your weekly team standups end-to-end. Bot asks each team member three questions on Telegram, waits for responses, then **AI summarizes** the entire team's update and sends a clean executive summary to the team lead. All logged to Google Sheets for history.

## Why This Is Useful

Standups are essential but consume hours every week. Slack/Teams threads get messy. Calendar invites get ignored. **This template runs your standup automatically** — questions go out Monday at 9 AM, the team replies on their phone via Telegram, and by lunchtime the team lead has a clean AI-generated summary.

No more "what did everyone do last week?" meetings. No more chasing replies. No more manually writing summaries.

## How It Works

1. **Monday 9 AM** — workflow triggers automatically (or run manually anytime)
2. **Bot sends questions** to each team member privately on Telegram
3. **Team replies** to the bot with their update (1-2 minute task per person)
4. **Workflow waits** 4 hours (configurable) for everyone to respond
5. **AI reads all responses** and generates an executive summary
6. **Team lead receives** the formatted summary on Telegram
7. **Everything logged** to Google Sheets for history

## What You Need

- **Telegram bot** — free, 2 minutes via [@BotFather](https://t.me/BotFather)
- **Groq API key** — free, no credit card required ([console.groq.com](https://console.groq.com))
- **Google Sheet** with a tab named `Standup_Log`

## Smart Features

### 🤖 AI-Generated Executive Summary

Powered by Groq's `llama-3.1-8b-instant` (free tier). Every summary follows the same structured format:

```
📌 KEY ACCOMPLISHMENTS LAST WEEK
- bullet point 1
- bullet point 2

🎯 THIS WEEK'S PLAN
- bullet point 1
- bullet point 2

🚧 BLOCKERS & RISKS
- list any blockers, or "None reported"

💪 TEAM HEALTH
One sentence assessment: on track / needs attention / at risk
```

Consistent format means leads can scan summaries in seconds across weeks.

### 🔄 Smart Retry on Rate Limits

When Groq hits rate limits (429), the workflow waits and retries automatically. Up to 2 retries per call. Falls back to raw responses if AI is unavailable — never breaks.

### 📊 Built-in Tracking

- **Standup_Log sheet** — every "sent" event tracked
- **Missing members** flagged in summary (`⚠️ Missing: Sarah, Omar`)
- **Response count** shown (`👥 Responded: 4/5`)
- **Run history** queryable for trends over time

### 🛡️ Resilient by Design

- `continueOnFail` on all Telegram and Sheets nodes
- One member's network error doesn't break the rest
- AI failure falls back to raw text — team lead still gets the data
- Manual trigger lets you test anytime without waiting for Monday

## Customizable

- **Questions** — edit all three in the Settings node
- **Schedule** — change the cron (default: `0 9 * * 1` = Monday 9 AM)
- **Wait time** — default 4 hours, change to whatever suits your team
- **AI model** — swap to any Groq-supported model in the AI node
- **Team size** — works with 1 to 50+ members (just add chat IDs)

## Setup Time

10 minutes:

1. Create a Telegram bot via @BotFather (get token)
2. Each team member sends `/start` to your bot once
3. Get each person's chat ID via [@userinfobot](https://t.me/userinfobot)
4. Import the JSON into n8n
5. Paste credentials in **⚙️ Settings**
6. Connect Telegram credential and Google Sheets credential
7. Click ▶️ Manual Test to verify
8. Activate the workflow

## Setup Step-by-Step

### 1. Create Your Bot

Open [@BotFather](https://t.me/BotFather) on Telegram → `/newbot` → choose a name → copy the **token** (looks like `7654321:AAGfHJ...`).

### 2. Get Team Chat IDs

Each team member opens [@userinfobot](https://t.me/userinfobot) → `/start` → copies the `Id:` number.

**Important:** every team member must send `/start` to your bot **once** before the bot can message them. This is a Telegram security policy.

### 3. Configure ⚙️ Settings

| Field | Example |
|---|---|
| `team_chat_ids` | `123456789,987654321,555555555` |
| `team_names` | `Ahmad,Sarah,Omar` |
| `team_lead_chat_id` | `123456789` (whoever gets the summary) |
| `question_1`, `_2`, `_3` | Customize for your team |
| `telegram_bot_token` | Token from @BotFather |
| `groq_api_key` | Free key from console.groq.com |

### 4. Connect Credentials

- **📲 Send to Team** → add Telegram credential (token from step 1)
- **📲 Send Summary to Lead** → same credential
- **💾 Log Sent** → add Google Sheets credential, select tab `Standup_Log`

### 5. Test

Click **▶️ Manual Test** → you'll get the standup questions on Telegram → reply to the bot → wait 4 hours (or temporarily change to 2 minutes for testing) → receive AI summary.

## Use Cases

- **Distributed teams** across timezones — async standups via Telegram
- **Engineering teams** — fast 1-minute updates instead of 30-minute meetings
- **Sales teams** — weekly pipeline updates auto-summarized for the manager
- **Remote startups** — keep founders informed without daily syncs
- **Agency project teams** — stakeholder updates compiled automatically

## Architecture

```
⏰ Every Monday 9 AM ──→
▶️ Manual Test ─────────→ ⚙️ Settings
                              ↓
                       📝 Prepare Messages
                              ↓
                       📲 Send to Team (Telegram)
                              ↓
                       💾 Log Sent (Google Sheets)
                              ↓
                       ⏳ Wait 4 Hours
                              ↓
                       📥 Fetch Responses (Telegram getUpdates)
                              ↓
                       🤖 AI Summarize (Groq + retry)
                              ↓
                       📲 Send Summary to Lead (Telegram)
```

10 nodes. Single workflow. Production-ready.

## Monthly Cost

**$0.** Telegram bots are free. Groq's free tier handles 14,400 requests/day on `llama-3.1-8b-instant` — way more than weekly standups need. Google Sheets is free.

## What You Get

A team that runs itself. Standups happen on autopilot. The team lead gets a structured weekly summary with zero manual effort. New team members ramp up faster because every week's update is searchable in Google Sheets.

Time saved per week: **30-45 minutes per team member** + **2-3 hours for the team lead**.

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
