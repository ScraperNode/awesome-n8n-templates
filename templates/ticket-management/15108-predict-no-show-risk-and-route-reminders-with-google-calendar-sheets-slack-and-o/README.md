# 🎫 Predict no-show risk and route reminders with Google Calendar, Sheets, Slack and OpenAI

> ⚡ **43 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Who is this for
Business owners and service providers who want to reduce no-show rates for appointments booked via Google Calendar.

## What this workflow does
This workflow fetches tomorrow's Google Calendar bookings, looks up each customer's no-show history from Google Sheets, and calculates a risk score (0-100) from four weighted signals. Based on the score, it routes to three automated responses: a Slack alert plus AI re-confirmation email for super high risk, a friendly AI reminder email for high risk, and a silent log for low risk.

## Setup
1. Create a Google Sheets file with a tab named customer_history (columns: customer_email, customer_name, total_bookings, no_show_count, last_booking_date, last_status)
2. Open the Set Configuration node and fill in your Sheet ID and Slack channel
3. Connect Google Calendar, Google Sheets, Gmail, Slack, and OpenAI credentials
4. Activate the workflow

## Requirements
- Google Calendar with appointment bookings
- Google Sheets for customer history
- Slack workspace for alerts
- OpenAI API key (used only for generating email text)
- Gmail account with OAuth2 access

## How to customize
- Adjust the risk thresholds in Set Configuration (default: 70 for Super High, 40 for High)
- Edit the AI prompts in Generate Urgent Message and Generate Reminder nodes to match your tone
- Replace Slack with Discord webhook if preferred

## Important note
Risk scoring is 100% rule-based. AI is used only for generating reminder text, never for the risk judgment itself.

## 🔗 Nodes Used

Google Sheets, Slack, Google Calendar, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
