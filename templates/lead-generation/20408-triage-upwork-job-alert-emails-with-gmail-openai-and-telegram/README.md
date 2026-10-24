# 🎣 Triage Upwork job alert emails with Gmail, OpenAI, and Telegram

> ⚡ **8 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow watches your Gmail inbox for Upwork job-alert emails, uses OpenAI to extract and score each job against your freelancer profile, then sends high-scoring opportunities as formatted cards to Telegram with a button to open the job link.

## How it works
1. Triggers every minute when a new Upwork email arrives in Gmail matching the search filter.
2. Adds your freelancer profile, preferred language, and minimum score threshold to the incoming email data.
3. Uses OpenAI (GPT model) to parse the email, extract all listed jobs, and return a JSON list with summaries, risks, and a 0–10 fit score.
4. Splits the results into one item per job, drops jobs below the minimum score, and selects a safe Upwork link (direct job URL, “View job details” link, or a fallback search link).
5. Formats each remaining job into an HTML Telegram message card with score, budget, summary, and key reasons/risks.
6. Sends each card to Telegram with an inline button that opens the job on Upwork.

## Setup
1. Connect Gmail Trigger credentials and adjust the Gmail search query (e.g., sender and time window) to match your Upwork alert emails.
2. Add OpenAI credentials and confirm the selected model is available for your account.
3. Create a Telegram bot with @BotFather, add Telegram credentials in n8n, and set your target chat ID in the Telegram message node.
4. Update the “Your profile & settings” values (profile text, language, and minimum score) to match your preferences.

## 🔗 Nodes Used

Telegram, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
