# 💬 Generate overdue lead follow-up Gmail drafts with Google Sheets and Gemini

> ⚡ **28 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Automatically identifies overdue sales leads and generates personalized follow-up emails using AI.

## How it works

1. Runs every weekday
2. Reads leads from Google Sheets
3. Filters leads with no contact for 5+ days
4. Downloads last meeting transcript from Google Drive
5. Uses Google Gemini to write a personalized email
6. Saves the email as a Gmail Draft for review
7. Updates lead status in the Sheet

## Setup

- Google Sheets with columns: Current Status, Last Contact, Name, Company, Email, Meeting Transcript, Sales Rep
- Google Drive access for transcript files
- Google Gemini API key (free from Google AI Studio)
- Gmail account
- Slack workspace

## Supported file types

- PDF
- TXT

## Notes

- Emails are saved as **drafts only** — not sent automatically
- Supported lead statuses: New
- Skips leads with status: Draft Created, Sent, Closed

## Inspiration

This workflow was built to solve a real problem at an educational institute.
The sales team needed someone to remind them about follow-ups and draft personalized emails — but hiring a personal assistant wasn't financially feasible.

Based on that, this system acts as that assistant: it tracks overdue leads, reads meeting transcripts, and writes personalized follow-up emails automatically.

I kept this stack free where possible — using Google Gemini's free tier for AI. 
For small sales teams, I believe the daily token limits are more than sufficient, making this a zero-cost automation.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
