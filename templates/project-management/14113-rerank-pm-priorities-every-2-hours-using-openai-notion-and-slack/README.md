# 📋 Rerank PM priorities every 2 hours using OpenAI, Notion, and Slack

> ⚡ **100 views** · 📋 [Project Management](../)

## Description

# Description
AI-powered priority re-evaluation every 2 hours. Analyzes new signals, meeting decisions, emails, and blockers, then runs 3 AI passes (Impact, Urgency, Final Ranking) to suggest re-ranking. Only updates when the ranking actually changes.

# Context
Runs every 2 hours during work days (8:00–18:00). Pulls 5 data sources in parallel: open priorities, recent high-impact signals, today’s meeting decisions, urgent emails, and overdue/blocked actions.
A Priority Context Matrix links each priority to relevant new information. Three sequential AI passes score Impact, Urgency, and produce a Final Ranking with rationale. CompareDatasets detects changes vs current ranking. Only if the ranking changed, Notion is batch-updated and Slack shows before/after.

# Who is this for?
•	PMs managing dynamic priority stacks
•	Product leaders who need real-time priority alignment
•	Teams where priorities shift frequently due to customer signals
# Requirements
•	Notion account with PM Daily databases
•	OpenAI API key
•	Slack Bot token

# How it works
- Trigger  Runs every 2 hours, Monday–Friday, 8:00–18:00.
- Context Collection  5 parallel pulls: open priorities, signals, meetings, emails, blocked actions.
- Priority Matrix  Links each priority to relevant signals, emails, and decisions. Deduplicates and normalizes.
- 3-Pass AI Scoring  Pass 1: Impact. Pass 2: Urgency. Pass 3: Final Ranking with rationale.
- Change Detection  Compares new vs current ranking. If changed: batch-updates Notion and posts before/after to Slack.
# What you get
- Continuous priority re-evaluation every 2 hours
- 3-pass AI scoring (Impact, Urgency, Final)
- Change detection — only updates when needed
- Before/after ranking comparison on Slack
- 40+ node workflow with CompareDatasets intelligence

## About me :
I’m Yassin a Product Manager  Scaling tech products with data-driven project management.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)

## 🔗 Nodes Used

Slack, Notion, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
