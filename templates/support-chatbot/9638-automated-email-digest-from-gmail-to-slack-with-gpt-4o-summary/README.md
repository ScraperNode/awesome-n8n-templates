# 💬 Automated email digest from Gmail to Slack with GPT-4o summary

> ⚡ **216 views** · 💬 [Support Chatbots](../)

## Description

## Who’s it for

Teams that start their day in Slack and want a concise, automated summary of yesterday’s emails—ops leads, PMs, founders, and anyone handling busy inboxes without writing code.

## What it does / How it works

Runs every morning at **08:00** (cron `0 0 8 * * *`), fetches all emails received **yesterday**, and routes the result: if none were found, it posts a polite “no emails” notice; if emails exist, it aggregates them and asks an AI agent to produce a structured digest, then formats and posts to your chosen Slack channel. The flow uses **Gmail → If → Aggregate (Item Lists) → AI Agent (OpenRouter model with structured output) → Code (Slack formatter) → Slack**. A set of sticky notes on the canvas explains each step and required inputs. 

## How to set up

1. Connect **Gmail (OAuth2)** and keep the default date window (yesterday → today at 00:00).
2. Connect **Slack (OAuth2)** and select your target channel.
3. Add **OpenRouter** credentials and pick a compact model (e.g., `gpt-4o-mini`).
4. Keep the provided structured-output schema and formatter code.
5. Adjust the schedule/timezone if needed (the fallback message includes an Asia/Tokyo example).
6. Paste this description into the **yellow sticky note** at the top of the canvas.

## Requirements

* Gmail & Slack accounts with appropriate scopes
* OpenRouter API key stored in **Credentials** (no hard-coded keys)
* n8n Cloud or self-host with LangChain agent nodes enabled

## How to customize the workflow

* Narrow Gmail results with label/search filters (e.g., `from:`, `subject:`).
* Change the digest sections or tone in the **AI Agent** system prompt.
* Swap the model for cost/quality needs and tweak temperature/max tokens.
* Localize dates/timezones in the formatter code and Slack messages.
* Branch the output to email, Google Docs, or Sheets for archival.

## Security & publishing tips

Rename all nodes clearly, **do not** hardcode API keys, remove real channel IDs/emails before sharing, and group end-user variables in a **Set (Fields)** node. Keep the sticky notes—they’re mandatory for reviewers.

## 🔗 Nodes Used

Slack, Gmail, Schedule Trigger, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
