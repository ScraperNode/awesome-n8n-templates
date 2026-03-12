# 🤝 Stripe customer duplicate detection & management with Airtable & Slack notifications

> ⚡ **59 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Description
Automatically scan your Stripe customers daily to detect duplicates and keep your customer database clean. This workflow uses advanced fuzzy matching for emails and names, logs results to Airtable for review, and notifies your team in Slack with actionable insights. 💳🧹💬

## What This Template Does
- Runs every day at 2:00 AM via scheduled trigger ⏰
- Fetches all customers from Stripe 💳
- Analyzes for potential duplicates using email and name similarity 🔍
- Logs duplicate suggestions into Airtable for review 📊
- Sends formatted Slack notifications with detailed reports 💬

## Key Benefits
- Keeps your Stripe customer database clean and deduplicated 🧹
- Reduces errors in reporting and billing 💵
- Provides confidence scoring for duplicate matches 🔑
- Centralized review and approval in Airtable 📋
- Real-time team notifications in Slack with actionable insights 📲

## Features
- Daily 2 AM schedule with cron expression 0 2 * * *
- Email-based duplicate detection 📧
- Name similarity matching using Levenshtein distance 👤
- Smart grouping: oldest record becomes the primary 🏷️
- Logs duplicates to Airtable with status tracking 🔄
- Slack notifications with statistics, match types, and Airtable link ⚡

## Requirements
- n8n instance (cloud or self-hosted)
- Stripe API credentials with customer read access
- Airtable account with a table for duplicate tracking
- Slack App & Bot Token with chat:write permission
- Target Audience
- SaaS companies managing large Stripe customer databases 🏢
- Finance and billing teams wanting clean records 💰
- Support teams reducing customer confusion from duplicates 🎧
- Growth and marketing teams ensuring CRM accuracy 📈
- Any business that relies on Stripe for recurring billing 💼

## Step-by-Step Setup Instructions
- Set up Stripe API credentials in n8n (use your Secret Key).
- Create an Airtable base and table with required fields (Customer IDs, Email, Similarity Score, Status).
- Add Slack API credentials and choose your target channel.
- Replace environment variables for Airtable (AIRTABLE_BASE_ID, AIRTABLE_TABLE_ID) and Slack (SLACK_CHANNEL_ID).
- Import this workflow into n8n and connect your credentials.
- Run the workflow once manually to validate data flows.
- Enable the workflow for daily automated duplicate detection. ✅

## 🔗 Nodes Used

Airtable, Function, Slack, Stripe, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
