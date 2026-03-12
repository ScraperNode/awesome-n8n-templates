# ⚡ Track daily moods with AI analysis & reports using GPT-4o, Data Tables & Gmail

> ⚡ **150 views** · ⚡ [Personal Productivity](../)

## Description

Track your daily mood in one tap and receive automated AI summaries of your emotional trends every week and month.
Perfect for self-reflection, wellness tracking, or personal analytics.

This workflow logs moods sent through a webhook (/mood) into Data Tables, analyzes them weekly and monthly with OpenAI (GPT-4o), and emails you clear summaries and actionable recommendations via Gmail.

⚙️ How It Works

Webhook – Mood → Collects new entries (🙂, 😐, or 😩) plus an optional note.

Set Mood Data → Adds date, hour, and note fields automatically.

Insert Mood Row → Stores each record in a Data Table.

Weekly Schedule (Sunday 20:00) → Aggregates the last 7 days and sends a summarized report.

Monthly Schedule (Day 1 at 08:00) → Aggregates the last 30 days for a deeper AI analysis.

OpenAI Analysis → Generates insights, patterns, and 3 actionable recommendations.

Gmail → Sends the full report (chart + AI text) to your inbox.

📊 Example Auto-Email

Weekly Mood Summary (last 7 days)
🙂 5 ██████████
😐 2 ████
😩 0
Average: 1.7 (Positive 🙂)

AI Insights:
You’re trending upward this week — notes show that exercise days improved mood.
Try keeping short walks mid-week to stabilize energy.

🧩 Requirements

n8n Data Tables enabled

OpenAI credential (GPT-4o or GPT-4 Turbo)

Gmail OAuth2 credential to send summaries

🔧 Setup Instructions

Connect your credentials:

Add your own OpenAI and Gmail OAuth2 credentials.

Set your Data Table ID:

Open the Insert Mood Row node and enter your own Data Table ID.

Without this, new moods won’t be stored.

Replace the email placeholder:

In the Gmail nodes, replace your.email@example.com with your actual address.

Deploy and run:

Send a test POST request to /mood (e.g. { "mood": "🙂", "note": "productive day" }) to log your first entry.

⚠️ Before activating the workflow, ensure you have configured the Data Table ID in the “Insert Mood Row” node.

🧠 AI Analysis

Interprets mood patterns using GPT-4o.

Highlights trends, potential triggers, and suggests 3 specific actions.

Runs automatically every week and month.

🔒 Security

No personal data is exposed outside your n8n instance.
Always remove or anonymize credential references before sharing publicly.

💡 Ideal For

Personal mood journaling and AI feedback

Therapists tracking client progress

Productivity or self-quantification projects

🗒️ Sticky Notes Guide

🟡 Mood Logging
Webhook POST /mood receives mood + optional note.
⚠️ Configure your own Data Table ID in the “Insert Mood Row” node before running.

🟢 Weekly Summary
Runs every Sunday 20:00 → aggregates last 7 days → generates AI insights + emails report.

🔵 Monthly Summary
Runs on Day 1 at 08:00 → aggregates last 30 days → creates monthly reflection.

🟣 AI Analysis
Uses OpenAI GPT-4o to interpret trends and recommend actions.

🟠 Email Delivery
Sends formatted summaries to your inbox automatically.

## 🔗 Nodes Used

Webhook, Gmail, Schedule Trigger, OpenAI, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
