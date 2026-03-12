# 📈 Analyze USD/JPY rates with AI and Tavily news search for email reporting

> ⚡ **54 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

Who’s it for

Traders, operations teams, and finance-minded founders who want a low-maintenance USD/JPY monitor that blends live pricing with short, news-aware AI commentary—delivered straight to email on a reliable cadence.

How it works / What it does

On a fixed schedule (every 4 hours), the workflow fetches the latest USD→JPY spot rate, enriches it with recent market context via a search tool, and asks an AI agent to produce a concise, structured take (trend, key drivers, and a buy/sell/neutral stance with rationale). The final summary is sent by email so stakeholders can skim, log, or forward without opening n8n. The design favors clarity (renamed nodes, sticky notes) and safety (no hardcoded secrets).

How to set up

Open Set (Fields) — Configure me and enter your Tavily API key and notification email.

In Send results via Gmail, attach your email credential (or swap to SMTP/another provider).

(Optional) Point LLM provider (configure) to your preferred model/vendor.

Enable the schedule or adjust the interval to match your cadence.

Requirements

Tavily (or compatible) Search API key

Email credential in n8n (Gmail or SMTP)

An n8n instance with internet access

How to customize the workflow

Change the schedule frequency or trading window.

Swap the rate source, add indicators (MA/RSI), or log to Sheets/DB.

Extend the AI prompt and output schema for risk flags or position sizing.

Add Slack/Telegram delivery or dashboards for team visibility.

Disclaimer (community nodes)

If you use community/experimental nodes, publish as self-hosted only and include a static workflow image at the top of your listing.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, Structured Output Parser, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
