# 💬 Send appointment SMS follow-ups with Typeform, Twilio, and Google Sheets

> ⚡ **526 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## How it works

- 📋 Customer submits your Typeform → instant personalised welcome SMS fires via Twilio
- 📊 Submission logged to Google Sheets with name, phone, timestamp, and nudge tracking
- 💬 Twilio listens 24/7 for replies → marks customer as responded, stops all future nudges
- ⏰ Scheduler runs every 6 hours → finds non-responders and sends up to 2 follow-up nudges
- 🛑 System stops contacting anyone who replies or hits the 2-nudge limit

## The three branches

| Branch | Trigger | What it does |
|--------|---------|--------------|
| 🟢 New Submission | Typeform form submit | Welcome SMS + log to Sheets |
| 🔵 Reply Handler | Incoming Twilio SMS | Mark replied, stop nudges |
| 🟡 Nudge Engine | Schedule every 6hrs | Nudge 1 at 24h, Nudge 2 at 48h |

## Why this matters

| Metric | Manual | This workflow |
|--------|--------|---------------|
| ⚡ Speed to lead | Hours or days | Under 10 seconds |
| 🔁 Follow-up consistency | Whoever remembers | 100% automated |
| 📉 Lead drop-off | High — people go cold fast | Nudges catch non-responders |
| 🧠 Staff time per lead | 5–15 min | Zero |
| 💸 Revenue at risk | Every ignored inquiry | Recovered automatically |

Studies show leads contacted within 5 minutes are 9x more likely to convert. This workflow makes that the default — not the exception.

## What you need

| Tool | Cost | Why |
|------|------|-----|
| Typeform | Free tier works | Intake/booking form |
| Twilio | ~$1/mo + $0.0075/SMS | Send and receive SMS |
| Google Sheets | Free | Track submissions and nudge state |

⚠️ **A2P 10DLC notice:** Twilio requires business registration for production SMS in the US. Allow 2-4 weeks. Your signup form needs opt-in language, terms, and a privacy policy.

## Set up steps

- Takes about 15 minutes
- Create a Google Sheet with columns: customerName · customerPhone · submittedAt · repliedAt · nudgeCount · lastNudgeAt
- Branch 1 — connect Typeform, select your form, connect Twilio + Google Sheets
- Branch 2 — connect Twilio trigger for inbound SMS, connect Google Sheets to mark replied
- Branch 3 — connect Google Sheets to read non-responders, connect Twilio to send nudges
- Verify Typeform field names match the Extract node exactly (case-sensitive)
- Submit a test entry with your own phone, reply to it, confirm Sheets updates correctly
- Toggle workflow Active


### Learn more at [SMB Excel](https://www.smbexcel.com)

## 🔗 Nodes Used

Google Sheets, Twilio, Typeform Trigger, Schedule Trigger, Twilio Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
