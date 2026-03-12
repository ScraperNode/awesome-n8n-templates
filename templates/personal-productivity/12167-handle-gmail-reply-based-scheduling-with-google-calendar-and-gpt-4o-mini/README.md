# ⚡ Handle Gmail reply-based scheduling with Google Calendar and GPT-4o-mini

> ⚡ **58 views** · ⚡ [Personal Productivity](../)

## Description

Reply Handling (Optional Extension)

This optional workflow handles email replies after availability options have been sent.

It extends the main scheduling flow by enabling two-way, email-based confirmation.

What this extension does

Listens for user replies via Gmail

Normalizes free-text replies into structured data

Detects whether the user confirmed a proposed slot or requested alternatives

Automatically creates a Google Calendar event on confirmation

Sends a confirmation or follow-up email accordingly

Why this matters

Most scheduling automations stop after sending availability.
This extension closes the loop by turning email replies into real actions —
without requiring booking links or manual follow-ups.

Typical reply examples

1 → Confirms the suggested time and creates the calendar event

2 → Requests alternative time slots and continues the scheduling flow

When to use this

Email-first scheduling (no Calendly / booking pages)

High-touch or human-like scheduling flows

Sales calls, interviews, consultations, internal meetings

## 🔗 Nodes Used

Webhook, Google Calendar, Gmail, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
