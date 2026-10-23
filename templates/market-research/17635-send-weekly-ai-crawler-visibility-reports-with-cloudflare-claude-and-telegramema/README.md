# 📊 Send weekly AI crawler visibility reports with Cloudflare, Claude, and Telegram/email

> ⚡ **10 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs on a weekly schedule, queries Cloudflare GraphQL Analytics for requests matching known AI crawler user-agents, aggregates request counts per bot, generates a short summary with Anthropic Claude, and optionally delivers the report via SMTP email and Telegram.

## How it works
1. Runs on a weekly schedule at the configured hour.
2. Loads your configuration (zone ID, lookback window, bot list, and notification toggles) and builds a Cloudflare GraphQL query that matches the selected AI crawler user-agents.
3. Calls the Cloudflare GraphQL Analytics API to retrieve request groups for the zone within the lookback time range.
4. Aggregates the results into exact request totals per tracked bot based on the returned user-agent strings.
5. Sends the totals to Anthropic Claude to generate a plain-language report for the configured site and language.
6. Formats the report and sends it via SMTP email and/or Telegram depending on which notification options are enabled.

## Setup
1. Create a Cloudflare API token with Zone → Analytics → Read for your zone and add it as an HTTP Header Auth credential (Authorization: Bearer <token>) on the Cloudflare request step.
2. Add an Anthropic credential for the Claude node.
3. Configure the CONFIG values, including your Cloudflare Zone ID, site name, lookback days, bot list, report language, and whether email/Telegram delivery is enabled.
4. If using email, add SMTP credentials and set the recipient address in ALERT_EMAIL (and adjust the From address if your SMTP server requires a specific sender).
5. If using Telegram, add a Telegram bot credential and set TELEGRAM_CHAT_ID to the destination chat or channel.

## 🔗 Nodes Used

Send Email, HTTP Request, Telegram, Schedule Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
