# 🎫 Summarize and triage your daily Gmail inbox into Slack with Groq Llama 3.3

> ⚡ **13 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow runs every day at 8 AM, pulls the last 24 hours of emails from your Gmail Primary inbox, summarizes their full content using Groq’s Llama 3.3, and posts an actionable daily inbox briefing to a Slack channel.

## How it works
1. Runs daily at 8 AM on a schedule.
2. Fetches all Gmail messages from the last day in the Primary category using a Gmail search query.
3. Strips HTML, truncates long bodies, and combines all email subjects, senders, dates, and content into a single capped text block.
4. Sends the compiled inbox text to Groq (Llama 3.3 70B) to generate a Slack-formatted briefing with a TL;DR, urgent items, and an email-by-email summary with tags.
5. Posts the generated briefing to the selected Slack channel.

## Setup
1. Connect a Gmail OAuth2 credential and ensure the Gmail query (default: `newer_than:1d category:primary`) matches the emails you want to include.
2. Add a Groq API key credential and confirm the model selection (default: `llama-3.3-70b-versatile`) and prompt meet your formatting needs.
3. Connect a Slack API credential and choose the target channel to post the briefing.
4. Update the schedule time and confirm your n8n instance timezone so the workflow runs at the intended hour.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
