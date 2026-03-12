# 📖 Search Slack for n8n templates with OpenAI tips, Google Sheets cache and weekly analytics

> ⚡ **6 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

# Slack Bot for n8n Template Search with AI Tips, Cache and Analytics

Search n8n workflow templates directly from Slack with AI-powered suggestions. Mention the bot with what you need in English, Spanish or Japanese and get matching templates plus actionable tips to improve your automation.

## Who is this for

Teams using n8n who want to find workflow templates without leaving Slack. Great for multilingual teams and onboarding new members.

## What this workflow does

- Detects user intent (search, help, or browse categories) and routes accordingly
- Extracts keywords from 200+ known services and translates 150+ Japanese business terms to English
- Checks a Google Sheets cache before calling the n8n Templates API
- Uses OpenAI (gpt-4o-mini) to generate contextual tips based on the search results and use case
- When no templates are found, the AI suggests alternative keywords and how to build the workflow from scratch
- Logs every search to Google Sheets and posts a weekly usage report to Slack

## Setup

1. Create a Slack App with `app_mentions:read` and `chat:write` scopes
2. Set Slack credentials in n8n
3. Create an HTTP Header Auth credential for OpenAI (name: `Authorization`, value: `Bearer sk-your-key`)
4. Create a Google Sheet with two tabs: `Cache` (SearchQuery, CachedResponse, ResultCount, Timestamp) and `Analytics` (Timestamp, User, Query, Keywords, ResultCount, Intent, FromCache)
5. Connect the Google Sheet in all four Sheets nodes
6. Select your Slack channel in the Trigger, Error Reply and Weekly Summary nodes
7. Activate and test with a mention

## How to customize

- Add services to `knownServices` or extend `jaToEn` for more languages
- Edit the AI system prompts to change tone or tip style
- Adjust the weekly report schedule in the Schedule Trigger node
- Replace Google Sheets cache with Redis for better performance at scale

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
