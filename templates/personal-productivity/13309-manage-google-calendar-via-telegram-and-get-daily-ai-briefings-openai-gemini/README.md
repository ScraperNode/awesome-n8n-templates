# ⚡ Manage Google Calendar via Telegram and get daily AI briefings (OpenAI + Gemini)

> ⚡ **23 views** · ⚡ [Personal Productivity](../)

## Description

# Categories

- Productivity  
- Automation  
- AI Agents  
- Scheduling  
- Personal Operations  

---

# Description

Build a fully automated AI-powered Calendar Assistant that manages your Google Calendar via Telegram and delivers a daily executive productivity briefing.

This workflow combines conversational AI scheduling with automated daily analytics to transform your calendar from a passive storage tool into an active decision system.

The assistant handles event creation, updates, deletions, conflict detection, and rescheduling through natural language messages or voice notes. It uses AI to interpret requests, validate availability, and maintain a clean scheduling structure.

In addition, a daily automated summary analyzes your calendar and sends a productivity briefing directly to Telegram. It calculates total meeting hours, identifies deep work windows, and flags overload risks to help you protect strategic time.

The result is a smart, low-friction scheduling system that reduces decision fatigue and improves time allocation without manual calendar reviews.

---

# Benefits

## Natural Language Scheduling
Create and manage events directly from Telegram using text or voice.

## Conflict Prevention
Automatically checks availability before creating meetings.

## Daily Executive Briefing
Receive a structured summary of your day every morning.

## Deep Work Visibility
Identifies uninterrupted focus windows automatically.

## Overload Detection
Flags days with excessive meetings.

## Time Zone Safe
Designed to operate reliably in Asia/Dubai timezone.

---

# How It Works

## AI Scheduling Layer

- Telegram Trigger receives messages  
- Voice notes are transcribed automatically  
- AI agent extracts intent and event details  
- Google Calendar tools execute actions safely  

## Daily Analytics Engine

- Scheduled trigger runs every morning  
- Pulls today's events from Google Calendar  

### Calculates:
- Meeting count  
- Total meeting hours  
- Free focus blocks  
- Overload status  

- Sends formatted summary to Telegram  

---

# Required Setup

- Google Calendar OAuth  
- Telegram Bot Token  
- OpenAI API Key  
- Google Gemini API (for voice transcription)  
- n8n Cloud or Self-Hosted  

---

# Business Use Cases

- Founders  
- Executives  
- Consultants  
- Remote Teams  
- High-Performance Professionals  

---

# Difficulty Level

Intermediate

---

# Estimated Build Time

45–75 minutes

---

# Monthly Operating Cost

- OpenAI: Usage-based  
- Google Gemini: Usage-based  
- n8n: Cloud or self-hosted  

Typical range: **$10–40/month** depending on usage.

---

#  Why This Workflow Works

- Scheduling friction is reduced to conversation  
- Daily analytics creates behavioral awareness  
- Automation removes repetitive calendar checking  
- AI interpretation minimizes manual input errors  
- Time allocation becomes measurable and optimizable  

---

# Possible Extensions

- Revenue vs internal meeting classification  
- Auto-block deep work if none exists  
- CRM pipeline integration  
- Weekly time allocation report  
- Meeting quality scoring  
- Automatic follow-up reminders

## 🔗 Nodes Used

Telegram, Telegram Trigger, Google Calendar, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
