# 🎫 Triage tenant complaints with GPT-4.1, Slack, email and Google Sheets

> ⚡ **40 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Who this is for

Property management teams handling multiple properties with high tenant complaint volumes who want AI-assisted triage.

## What this workflow does

Automatically classifies tenant complaints by urgency and type, escalates high-priority complaints, schedules medium-priority follow-ups, acknowledges low-priority complaints, and logs all activity for reporting.

## How it works

1. Tenant submits a complaint through the portal.
2. AI classifies complaint urgency and type.
3. High-priority complaints trigger Slack notifications and follow-up tasks.
4. Tenant receives an AI-personalized acknowledgment email.
5. Google Sheets logs each complaint with details.

## How to set up

Connect your form, Slack, Email, Google Sheets, and AI credentials. Customize AI prompts for your tenant complaint categories and test routing.

## Requirements

- n8n (cloud or self-hosted)
- AI node access
- Slack and Email credentials
- Google Sheets

## How to customize

Adjust complaint types, escalation rules, notification channels, or AI follow-up prompts.

Built by QuarterSmart. Created by Hyrum Hurst.

## 🔗 Nodes Used

Send Email, Google Sheets, Slack, Webhook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
