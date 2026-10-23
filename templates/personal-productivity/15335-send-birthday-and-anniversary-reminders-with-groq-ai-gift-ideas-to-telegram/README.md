# ⚡ Send birthday and anniversary reminders with Groq AI gift ideas to Telegram

> ⚡ **52 views** · ⚡ [Personal Productivity](../)

## Description

# Birthday & Anniversary Reminder with AI Gift Ideas — Telegram

Never forget a birthday again. This workflow checks your contacts daily and sends you a Telegram alert 7 days before each birthday and on the day itself — with a warm, AI-generated personal message and 3 gift ideas tailored to the person's interests.

## How It Works

1. Fill a Google Sheet ("People" tab) with: name, birthday, relationship, interests
2. The workflow runs daily at 8 AM (configurable)
3. Checks if any birthday is today → sends 🎂 "TODAY" alert
4. Checks if any birthday is in 7 days → sends 📅 "REMINDER" alert
5. AI (Groq, free tier) writes a warm, personalized birthday message based on the person's name, age, relationship, and interests
6. AI suggests 3 specific gift ideas with price estimates ($20-100)
7. Everything sent to your Telegram in one clean message

## What You'll Receive on Telegram

```
🎂 TODAY — Khalil Mansour turns 34!
👤 friend
📅 2026-04-26
💡 Interests: football, gaming, tech gadgets

💌 MESSAGE:
Happy Birthday Khalil! 🎉 Wishing you an epic 34th year filled
with incredible goals, clutch victories, and exciting new tech
to geek out over. You deserve all the best — enjoy your day!

🎁 GIFT IDEAS:
1. FIFA 26 Ultimate Edition ($60)
2. Razer BlackShark V2 gaming headset ($45)
3. Anker portable phone charger for match days ($30)
```

## Workflow Architecture

```
▶️ Manual Test ──→ 📖 Read People → 📅 Check Dates → 🎁 Format Messages
⏰ Daily 8 AM ──↗                                         ↓
                                                    🤖 AI Personalize ← Groq Chat Model
                                                          ↓
                                                    📝 Combine Message
                                                          ↓
                                                    📲 Send Telegram
```

**9 nodes total.** Each node has a clear, single responsibility.

## Google Sheet Format

Create a Google Sheet with a tab named **"People"** and these columns:

| name | birthday | relationship | interests |
|---|---|---|---|
| Mom | 1965-08-20 | family | gardening, cooking |
| Ahmad | 1990-05-15 | friend | photography, hiking |
| Sarah | 1985-12-03 | colleague | books, cooking |
| Boss | 1978-11-02 | work | golf, wine, travel |

## What You Need

- **Google Sheet** with your contacts (format above)
- **Telegram bot** — create via @BotFather in 2 minutes, then send /start to your bot
- **Groq API key** — free, no credit card needed (console.groq.com)

## Setup (10 minutes)

1. Import the workflow JSON into n8n
2. Open **📖 Read People** → select your Google Sheet and set tab name to "People"
3. Open **📲 Send Telegram** → add your Telegram credential and set your Chat ID (get it from @userinfobot on Telegram)
4. Open **Groq Chat Model** → add your Groq API credential
5. Click **▶️ Manual Test** to verify everything works
6. Activate the workflow — it runs automatically every day at 8 AM

## Features

- **7-day advance reminder** — enough time to buy and ship a gift
- **Day-of alert** — never miss sending a birthday message
- **AI-personalized messages** — warm, unique messages based on who the person is and what they like
- **AI gift suggestions** — 3 specific ideas with prices, tailored to their interests
- **Age calculation** — automatically calculates how old they're turning
- **Year wrap-around** — correctly handles birthdays that already passed this year
- **Graceful fallback** — if AI is unavailable, you still get the basic reminder
- **Manual test button** — test the full workflow before activating

## Customizable

- **Reminder window** — change from 7 days to any number (edit one line in the Check Dates node)
- **Alert time** — change from 8 AM to any time (edit the cron in the Schedule trigger)
- **AI model** — swap Groq model in the Chat Model node (default: llama-3.1-8b-instant)
- **Multiple events** — works for birthdays, anniversaries, or any annual date — just add rows

## Monthly Cost

$0. Google Sheets is free. Telegram Bot API is free. Groq free tier (14,400 requests/day) easily handles a few AI calls per day.

## Setup Time

10 minutes. Import → connect 3 credentials → fill your contacts sheet → activate. Done forever.

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger, Basic LLM Chain, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
