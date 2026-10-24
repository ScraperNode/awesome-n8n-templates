# 📊 Summarize Japanese regulatory news with Claude, Slack, and Google Sheets

> ⚡ **19 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs weekly, reads user-configured RSS feeds for Japanese regulatory and government news, deduplicates against a Google Sheets log, summarizes and translates new articles with Anthropic Claude, then posts a digest to Slack with optional Gmail draft and Notion logging.

## How it works
1. Runs on a configurable weekly schedule.
2. Reads up to three RSS feeds you configure in parallel and labels each item with its source name.
3. Filters out articles older than a configurable lookback window, then cross-references a Google Sheets distribution log so already-sent articles are excluded.
4.  If at least one new article remains, sends all of them in a single batched request to Anthropic Claude, asking for a short summary and translation of each.
5. Parses Claude's response and assembles one digest that always preserves each article's original title, URL, and publish date.
6. Posts the digest to a Slack channel; optionally also creates a Gmail draft and/or appends an entry to a Notion database, based on configuration toggles.
7. Records each newly distributed article in the Google Sheets log with a timestamp, so it is never summarized twice.

## Setup
1.  Import this workflow along with its companion error-handling workflow, and set this workflow's Settings > Error Workflow to point at the imported error workflow.
2. Add credentials in n8n: an Anthropic credential (used by the AI summarization HTTP Request node), a Slack credential with chat:write and channels:read scopes, and a Google Sheets credential — plus Gmail/Notion credentials only if you plan to enable those optional branches.
3. Open "Set: Config (Sources & Distribution Options)" and replace the placeholder RSS feed URLs, source names, lookback window, and Slack channel with your own values.
4. Create a Google Sheet with columns articleUrl, sourceName, and distributedAt for the distribution log, then paste its ID into both Google Sheets nodes.
5. Run a manual test execution and check the output before turning on the schedule.

## Requirements
- An n8n instance (Cloud or self-hosted)
- An Anthropic API key, added as an "Anthropic" credential in n8n
- A Slack app with a Bot Token that has the chat:write and channels:read OAuth scopes
- A Google account with a Sheets credential
- A Google Sheet you create yourself with columns: articleUrl, sourceName, distributedAt
- RSS feed URLs you have personally verified — this template ships with no real source URLs, and you are responsible for confirming each source's terms of use permit AI summarization and redistribution

## Customization
- Change lookbackDays to widen or narrow which articles count as "new"
- Set createGmailDraft or appendToNotion to true to also deliver the digest by email draft or into a Notion database
- Add or remove RSS Feed Read + Set (Label) + Merge nodes if you need more or fewer than three sources
- Swap the Claude model in the prompt-building Code node — Haiku for speed/cost, Sonnet or Opus for higher-quality summaries — and increase max_tokens accordingly if you add more sources

## Additional info
This template is provided as-is. You are solely responsible for verifying that your chosen RSS sources and your use (AI summarization, translation, automated redistribution) comply with each source's terms of use and applicable law. This template does not warrant legal compliance for any specific source.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Slack, Gmail, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
