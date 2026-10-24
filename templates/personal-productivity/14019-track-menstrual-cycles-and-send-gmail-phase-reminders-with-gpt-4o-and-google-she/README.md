# ⚡ Track menstrual cycles and send Gmail phase reminders with GPT-4o and Google Sheets

> ⚡ **999 views** · ⚡ [Personal Productivity](../)

## Description

## 📊 Description
Most period tracking apps tell you when your period is coming. This workflow goes further — it tracks every phase of every subscriber's unique cycle, sends the right email at exactly the right time, and delivers GPT-4o powered wellness coaching every week tailored to where each woman is in her cycle.
Built for women's health platforms, wellness coaches, femtech creators, and community builders who want to deliver genuinely useful cycle-aware health support at scale without building a custom app.

## What This Workflow Does
- 📝 Subscribers fill in a simple form — name, email, last period date, and cycle length
- 🧮 Instantly calculates all key cycle dates — next period, ovulation day, fertile window start and end, and PMS window start
- 📧 Sends a personalized welcome email with their complete cycle overview
- 🕐 Runs every morning at 8AM checking all active subscribers
- 🔍 Detects which phase event is happening today for each subscriber
- 📬 Sends the right phase-specific reminder email on the exact right day: 
- - 3 days before period — preparation tips
- - Period start day — comfort and self-care tips
- - Ovulation day — fertility awareness and energy tips
- - PMS window start — mood, energy, and boundary tips
- 🔒 Duplicate send prevention ensures each email type is only sent once per cycle per subscriber
- 📝 Updates each subscriber's last email sent record after every send
- 📊 Logs every delivery to Send Log sheet with date, phase, cycle day, and email type
- 💜 Every Sunday generates a personalized weekly wellness digest for every subscriber using GPT-4o based on their current cycle phase — with energy, nutrition, movement, and mindset tips

## Key Benefits
✅ Fully automated — set up once and runs forever
✅ Every subscriber gets emails timed to their unique cycle not a generic schedule
✅ 4 different phase-specific reminder emails with tailored content and colors
✅ GPT-4o generates unique wellness tips per phase every week — never repetitive
✅ Duplicate send prevention — no subscriber ever gets the same email twice in one cycle
✅ Auto-recalculates cycle dates on period start for continuous tracking
✅ Full send log for tracking delivery history and engagement patterns

## How It Works

SW1 — Subscriber Intake & Cycle Calculator Subscribers open the form and enter their name, email, last period start date, and average cycle length. The workflow immediately calculates all key dates using standard cycle science — next period is last period plus cycle length, ovulation is next period minus 14 days, fertile window opens 5 days before ovulation and closes 1 day after, and PMS window starts 5 days before the next period. All dates are saved to the Subscribers sheet and a branded welcome email is sent instantly showing the subscriber their complete cycle overview with all dates laid out clearly.

SW2 — Daily Cycle Monitor & Smart Reminders Every morning at 8AM the workflow reads all active subscribers and calculates where each one is in their cycle today. It checks if today matches any of the 4 key trigger dates — 3 days before period, period start, ovulation day, or PMS start. If there is a match it builds the appropriate phase-specific HTML email with tailored tips, colors, and messaging and sends it via Gmail. Before sending it checks the last email sent field to prevent duplicate sends within the same cycle. After every send it updates the subscriber record and logs the delivery to the Send Log sheet.

SW3 — Weekly Wellness Digest Every Sunday at 9AM the workflow reads all active subscribers and calculates each one's current cycle phase — Menstrual, Follicular, Fertile, Ovulation, or PMS. It builds a personalized prompt for each subscriber including their name, phase, cycle day, and days until next period and sends it to GPT-4o. The AI generates phase-specific tips across 5 categories — energy management, nutrition, movement, mindset, and what to expect this week — plus a weekly affirmation. The response is assembled into a branded HTML email where the header color and emoji adapt automatically to the current phase. Every send is logged to the Send Log sheet.

## Features
- n8n Form intake — no external form tool needed
- Automatic cycle date calculation from last period and cycle length
- 4 phase-specific trigger emails with unique content per phase
- Duplicate send prevention per cycle per subscriber
- Phase detection engine covering all 5 cycle phases
- GPT-4o weekly wellness coaching per phase
- Phase-adaptive email colors and emojis
- 5 wellness categories per digest — energy, nutrition, movement, mindset, what to expect
- Weekly affirmation generated per phase
- Full delivery logging to Send Log sheet
- Active subscriber filtering — easy to pause or deactivate users

## Requirements
- OpenAI API key (GPT-4o access)
- Google Sheets OAuth2 connection
- Gmail OAuth2 connection
- A configured Google Sheet with 2 sheets — Subscribers and Send Log

## Setup Steps
- Create a Google Sheet called "Period Health Tracker" with 2 sheets — Subscribers and Send Log
- Paste your Sheet ID into all Google Sheets nodes
- Connect your Google Sheets OAuth2 credentials
- Add your OpenAI API key to the GPT-4o node
- Connect your Gmail OAuth2 credentials

## Target Audience
🌸 Women's health and wellness platforms delivering cycle-aware content
💼 Femtech creators building automated health tracking without a custom app
🧘 Wellness coaches who want to deliver personalized cycle coaching at scale
🤖 Automation agencies building health and wellness products for women's communities

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
