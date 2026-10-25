# 🤖 LeadBot 24h — AI WhatsApp Lead Qualification

> 💬 [Lead Nurturing & AI Sales Agents](../)

AI-powered WhatsApp lead scoring using n8n + GPT-4o-mini. Automates qualification with a 0-100 score, routes Hot/Warm/Cold to Google Sheets, and triggers sales alerts for high-value prospects.

## How it works
1. **WhatsApp Trigger** — captures messages via n8n webhook
2. **AI Lead Scoring** — GPT-4o-mini scores the lead 0–100
3. **Classify** — routes: 🔥 Hot (≥70), 🌡️ Warm (40–69), ❄️ Cold (<40)
4. **Save to Sheets** — logs all leads with timestamp

## Tech
- n8n + WhatsApp Business API
- OpenAI GPT-4o-mini
- Google Sheets

## Usage
Import `workflow.json` into n8n → set credentials → activate ✅

https://planificador7.gumroad.com/l/leadbot-24h
