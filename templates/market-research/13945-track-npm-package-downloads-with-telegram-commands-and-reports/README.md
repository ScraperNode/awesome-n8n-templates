# 📊 Track npm package downloads with Telegram commands and reports

> ⚡ **42 views** · 📊 [Market Research & Insights](../)

## Description

**Title**

Monitor npm package downloads from Telegram with commands, weekly digests, milestone alerts,...

**Short description**

Track npm package adoption directly from Telegram. This workflow provides on-demand download stats, automated weekly and monthly reports, growth trends, and milestone alerts using the public npm Downloads API.

**What it does**

The workflow combines Telegram commands with scheduled reports to provide quick insights into package usage.

**Commands**

- `/downloads` - all-time totals, sorted highest first
- `/weekly` - last 7 days per package
- `/status` - weekly and all-time combined
- `/trending` - this week vs last week
- `/help` - available commands

**Automated reports**

- Weekly digest with package performance
- Monthly summary comparing usage trends
- Daily milestone checker that sends alerts when packages cross download thresholds

**Smart defaults:**

- Typo-tolerant command matching via Levenshtein distance
- Slash optional, case insensitive
- Auto-discovers packages from npm registry - new packages appear without code changes
- Milestone check is silent on days with no crossings - zero noise

## 🔗 Nodes Used

Telegram, Telegram Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
