# 💬 Nurture leads from Google Sheets with Gmail, SMS, and OpenRouter AI

> ⚡ **41 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
Automatically nurture leads with AI-personalized email follow-ups (plus optional SMS) across 3 stages triggered hourly, respecting business hours, and fully tracked in Google Sheets.

## How it works
1. Runs every hour, filtered to a business-hours window (default 9am–6pm, timezone configurable).
2. Reads all leads from Google Sheets and filters those due for follow-up skipping replies, unsubscribes, and completed leads.
3. Routes by stage Stage 1 (Welcome), Stage 2 (Check-in), or Stage 3 (Final nudge).
4. AI writes the email an LLM (via OpenRouter) generates a personalized subject + body using the lead's name, source, and service of interest.
5. Sends via Gmail, and optionally an SMS via Seven/Twilio (Day 1 and Day 4, with consent and dedupe checks).
6. Updates Google Sheets advances the lead's stage, sets the next follow-up timestamp, and marks SMS sent.

## Setup
1. Import all 4 workflows they share one Google Sheet.
2. Paste your Sheet ID/tab name into each 🔧 CONFIG node (same Sheet ID throughout).
3. Connect Google Sheets, Gmail, and OpenRouter credentials.
4. Edit the 3 LLM prompt nodes to replace "YOUR NAME/company" with your actual brand name.
5. (Optional) Connect Seven/Twilio for SMS, and adjust the business-hours filter to your timezone.

## Requirements
- Google Sheets (OAuth2)
- Gmail (OAuth2)
- OpenRouter API key (free-tier models supported)
- Seven or Twilio API key optional, for SMS

## Customization
- Swap Gmail/SMS for any other email or SMS provider with a native n8n node.
- Adjust delivery hours or timezone in the "Adjusting Hours" filter.
- Edit LLM prompts to change tone, length, or add new personalization fields.
- Part of a 4-workflow system: Lead Intake → Nurture Scheduler (this one) → Reply Listener → Daily Report.

## Additional info
This is Workflow 1 of 4 in a complete AI lead nurturing system built for freelancers, agency owners, and solo founders:

Workflow 1 — Lead Intake : Captures, validates, deduplicates, and stores leads
Workflow 2 — Nurture Scheduler (this template): Sends AI-written email and SMS follow-ups across 3 stages
Workflow 3 — Reply Listener: Classifies lead replies with an LLM and escalates hot leads in real time
Workflow 4 — Daily Report: Emails you a morning summary of pipeline activity and follow-up counts

## 🔗 Nodes Used

Google Sheets, seven, Gmail, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
