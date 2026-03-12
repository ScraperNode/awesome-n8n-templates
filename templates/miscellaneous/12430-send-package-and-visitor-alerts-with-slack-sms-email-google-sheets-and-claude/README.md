# 🔧 Send package and visitor alerts with Slack, SMS, email, Google Sheets and Claude

> ⚡ **58 views** · 🔧 [Miscellaneous](../)

## Description

## Who this is for

Property management teams handling multiple properties with high package/visitor traffic who want automated tenant and management notifications.

## What this workflow does

Automatically classifies package and visitor events, sends notifications to tenants, alerts property managers, and logs activity for accountability.

## How it works

1. Package/visitor system triggers workflow.
2. AI classifies urgency and type.
3. Notifications sent via Email, SMS, and Slack.
4. Google Sheets logs all events.
5. Optional AI follow-up suggestions for unclaimed packages or missed visitors.

## How to set up

Connect Webhook, Slack, Email, SMS, and AI. Test routing and logging. Adjust AI prompts for local building protocols.

## Requirements

- AI Node
- Webhook from package/visitor system
- Slack, Email, SMS credentials
- Google Sheets

Built by QuarterSmart. Created by Hyrum Hurst.

## 🔗 Nodes Used

Send Email, Google Sheets, Slack, Webhook, seven, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
