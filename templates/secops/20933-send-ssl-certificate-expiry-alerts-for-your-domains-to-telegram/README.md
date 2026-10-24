# 🔒 Send SSL certificate expiry alerts for your domains to Telegram

> ⚡ **1 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow runs daily to check the SSL certificate expiry status of a configured list of domains using the NetworkCalc certificate API, then sends a single consolidated alert message to a Telegram chat when certificates are expiring, expired, mismatched, or cannot be checked.

## How it works
1. Runs every day at 08:00 on a schedule.
2. Reads your configured domain list, cleans and deduplicates it, and limits processing to 50 valid domains.
3. Queries the NetworkCalc public certificate API for each domain to retrieve SSL certificate details.
4. Evaluates each result to detect expiry thresholds, already-expired certificates, hostname mismatches, and repeated check failures, while tracking previous alert state to avoid duplicate notifications.
5. Builds one prioritized Telegram message containing only the relevant alerts (or a full report when enabled).
6. Sends the formatted alert/report to your specified Telegram chat.

## Setup
1. Create a Telegram bot with BotFather and add the Telegram credential (bot token) to the Telegram node.
2. Set the target Telegram chat ID in the workflow settings value for `telegram_chat_id`.
3. Update `domains` with your comma/whitespace-separated list of public domain names and adjust `alert_days_before` (and optionally `report_all`) to match your alerting needs.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
