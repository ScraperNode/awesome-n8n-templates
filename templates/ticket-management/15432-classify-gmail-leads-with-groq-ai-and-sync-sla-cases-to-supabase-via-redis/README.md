# 🎫 Classify Gmail leads with Groq AI and sync SLA cases to Supabase via Redis

> ⚡ **50 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Who’s it for

This workflow is for contractors, freelancers, local service businesses, and small teams that receive leads and customer requests through Gmail but do not have a dedicated sales or admin team.

## What it does

This template turns Gmail into an AI lead desk and follow-up tracker. It filters inbox noise, reads real customer emails, and classifies each message by urgency, intent, sentiment, department, technical details, and business value.

Each email gets a color-coded response deadline:

- RED: critical issue, respond within 1 hour
- ORANGE: urgent lead or follow-up, respond within 4 hours
- YELLOW: standard lead or request, respond within 24 hours
- GREEN: low-priority message, respond within 48 hours

The first workflow watches Gmail, retrieves and cleans the email, classifies it with AI, and publishes the structured case to Redis. The second workflow listens for Redis events and logs each case to Supabase/PostgreSQL as a lightweight CRM and follow-up dashboard.

## Requirements

- Gmail OAuth2 credentials
- Groq API credentials
- Redis credentials
- Supabase/PostgreSQL credentials
- Optional Mem0 API credentials

## How to customize

Update the blocked Gmail labels, AI prompt, response deadlines, Redis channel, Supabase schema, owner alert logic, and dashboard views to match your business process.

## 🔗 Nodes Used

HTTP Request, Postgres, Redis, Gmail, Redis Trigger, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
