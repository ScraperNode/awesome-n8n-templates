# 📱 Automate daily signup stats from PostgreSQL to Slack, Teams & Telegram

> ⚡ **246 views** · 📱 [Social Media & Email Marketing](../)

## Description

## How it works
This workflow automatically pulls daily signup stats from your PostgreSQL database and shares them with your team across multiple channels. Every morning, it counts the number of new signups in the last 24 hours, formats the results into a concise report, and posts it to Slack, Microsoft Teams, and Telegram. This ensures your entire team stays updated on customer growth without manual queries or reporting.

## Step-by-step

**Daily Trigger & Data Fetching**

- The Daily Report Trigger runs at 9:00 AM each day.

- The Fetch Signup Count node queries the customers table in PostgreSQL.

- It calculates the number of new signups in the last 24 hours using the created_at timestamp column.

**Report Preparation**

- The Prepare Report Message node formats the results into a structured message:

  - Report date

  - Signup count

  - A clear summary line:
Daily Signup Report – New signups in the last 24h: X

**Multi-Channel Delivery**

- The prepared message is sent to multiple platforms simultaneously:

  - Slack

  - Microsoft Teams

  - Telegram

 - This ensures all teams receive the update in their preferred communication tool.

## Why use this?

- Automates daily customer growth reporting.

- Eliminates manual SQL queries and report sharing.

- Keeps the whole team aligned with real-time growth metrics.

- Delivers updates across Slack, Teams, and Telegram at once.

- Provides simple, consistent reporting every day.

## 🔗 Nodes Used

Postgres, Slack, Telegram, Microsoft Teams, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
