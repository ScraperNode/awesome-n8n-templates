# 📊 Automate news intelligence with Gemini AI for RSS feeds to Notion and Slack

> ⚡ **635 views** · 📊 [Market Research & Insights](../)

## Description

**Who’s it for**

Teams that monitor multiple news sources and want an automated, tagged, and prioritized briefing—PMM, PR/Comms, Sales/CS, founders, and research ops.

**What it does / How it works**

Each morning the workflow reads your RSS feeds, summarizes articles with an LLM, assigns tags from a maintained dictionary, saves structured records to Notion, and posts a concise Slack digest of top items. Core steps: Daily Morning Trigger → Workflow Configuration (Set) → Read RSS Feeds → Get Tag Dictionary → AI Summarizer and Tagger → Parse AI Output → Write to Notion Database → Sort by Priority → Top 3 Headlines → Format Slack Message → Post to Slack.

**How to set up**

Open Workflow Configuration (Set) and edit: rssFeeds (array of URLs), notionDatabaseId, slackChannel.

Connect your own credentials in n8n for Notion, Slack, Google Sheets (if used for the tag dictionary), and your LLM provider.

Adjust the trigger time in Daily Morning Trigger (e.g., weekdays at 09:00).

**Requirements**

n8n (Cloud or self-hosted)

Slack app with chat:write to the target channel

Notion database with properties: summary (rich_text), tags (multi_select), priority (number), url (url), publishedDate (date)

Optional Google Sheet for the tag dictionary (or replace with another source)

**How to customize the workflow**

Scoring & selection: Change priority rules, increase “Top N” items, or sort by recency.

Taxonomy: Extend the tag dictionary; refine the AI prompt for stricter tagging.

Outputs: Post per-tag Slack threads, send DMs, or create Notion relations to initiatives.

Sources: Add more feeds or mix in APIs/newsletters.

Security: Do not hardcode API keys in HTTP nodes; keep credentials in n8n.

## 🔗 Nodes Used

Google Sheets, RSS Read, Slack, Notion, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
