# ⚡ Summarize unread Gmail into a daily Slack digest with Claude

> ⚡ **68 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs on a daily schedule, pulls your unread Gmail from the last 24 hours, and uses Anthropic Claude to sort and summarize it by Gmail category — then posts a clean, triage-ready digest to a Slack channel so you can scan your inbox at a glance.

## How it works
1. Runs automatically on a daily schedule (default 8am).
2. Fetches up to 50 unread emails from Gmail that arrived in the last 24 hours.
3. A Code node combines them into a single prompt block, tagging each message with its Gmail category (Primary, Promotions, Social, Updates, Forums) and flagging multi-message threads.
4. Anthropic Claude turns that into a concise, Slack-ready digest: active threads flagged at the top, Primary mail listed individually with a needs-reply note, and Promotions/Social condensed to a single count.
5. A Code node extracts the summary text from Claude's API response.
6. The digest is posted to your chosen Slack channel.

## Setup
1. Connect a Gmail OAuth2 credential to the Gmail node, and adjust the search query (e.g. is:unread newer_than:1d) or 50-email limit if needed.
2. Add your Anthropic API key as an HTTP Header Auth credential named x-api-key, used for requests to https://api.anthropic.com/v1/messages.
3. Connect a Slack OAuth2 credential, select the target channel, and invite the Slack app/bot to that channel (/invite @YourApp) so posting succeeds.

## Requirements
- A Gmail account (connected via Gmail OAuth2).
- An Anthropic (Claude) API key.
- A Slack workspace with an app that has the chat:write scope, added to the target channel.
- An n8n instance (Cloud or self-hosted).

## Customization
- Change the run time or frequency on the Schedule Trigger.
- Adjust the Gmail query (is:unread newer_than:1d) or the 50-email limit to widen or narrow what's included.
- Edit Claude's prompt to change how categories are summarized, what gets flagged, or the digest's tone.
- Swap the Claude model (e.g. to Haiku) to lower cost, or raise max_tokens for very high email volume.
- Point the Slack node at a different channel, or send it as a direct message instead.

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
