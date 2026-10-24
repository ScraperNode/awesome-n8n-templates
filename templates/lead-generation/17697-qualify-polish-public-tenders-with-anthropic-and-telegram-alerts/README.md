# 🎣 Qualify Polish public tenders with Anthropic and Telegram alerts

> ⚡ **30 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow checks new announcements in Poland’s Baza Konkurencyjności register on a schedule, pre-filters them by keywords and deadlines, then uses an Anthropic chat model agent to fetch tender details on demand and return a structured GO/NO_GO verdict before notifying your team via Telegram.

## How it works
1. Runs manually or twice a day on weekdays using a cron schedule.
2. Calls the public Baza Konkurencyjności search API to fetch the latest published tender announcements.
3. Locally de-duplicates previously seen tenders and filters out obvious mismatches using inclusion/exclusion keywords, optional region matching, and a minimum days-to-deadline threshold.
4. Sends each remaining announcement to an AI agent powered by Anthropic, which decides whether to call the Baza Konkurencyjności detail API tool to retrieve missing fields like award criteria, scope, and contact.
5. Produces a structured qualification result per tender (GO, NO_GO, or GO_IF) including reasons, risks, open questions, and key fields such as price weight and estimated value.
6. Builds a concise text report for all non-NO_GO tenders and sends it to a Telegram chat.

## Setup
1. Add credentials for an Anthropic chat model (or replace the model node with OpenAI/Gemini/local and connect its credentials).
2. Create a Telegram bot and add your Telegram credentials, then set the target chat ID in the Telegram send step.
3. Update the Settings values for companyProfile and dealBreakers so the agent evaluates tenders against your real capabilities and disqualifiers.
4. Tune keywords, excludeKeywords, minDaysToDeadline, regions (optional), and maxPerRun to control what reaches the agent and how many tenders are processed per run.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
