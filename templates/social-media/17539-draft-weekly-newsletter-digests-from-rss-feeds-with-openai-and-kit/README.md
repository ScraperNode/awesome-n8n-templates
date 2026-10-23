# 📱 Draft weekly newsletter digests from RSS feeds with OpenAI and Kit

> ⚡ **18 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs every Monday, pulls stories from your chosen RSS feeds, uses OpenAI Chat Completions to draft a grouped HTML newsletter, and saves it as a draft broadcast in Kit (ConvertKit) or emails the draft via Gmail, with an optional Slack notification.

## How it works
1. Runs every Monday at 05:00 on a scheduled trigger.
2. Loads your list of RSS/Atom feed URLs and reads recent items from each feed.
3. Filters to stories from the last 7 days, removes duplicates, cleans snippets, and keeps up to 25 items.
4. Builds a prompt with the curated stories and sends it to the OpenAI Chat Completions API to generate clean HTML digest copy.
5. Wraps the generated HTML in an email-safe container and sets the subject and preview text.
6. Creates a draft broadcast in Kit (ConvertKit) and optionally posts a “draft ready” message to Slack.
7. In parallel, optionally emails the draft HTML to your inbox via Gmail for manual publishing.

## Setup
1. Update the RSS feed URLs in the “Your feeds” code step.
2. Add an HTTP Header Auth credential for OpenAI (Authorization: Bearer <API key>) and ensure the model name and endpoint URL match your provider.
3. Add an HTTP Header Auth credential for Kit (X-Kit-Api-Key: <your Kit API key>) and confirm you have access to create broadcasts.
4. If you use the Slack notification, paste your Slack Incoming Webhook URL into the Slack request.
5. If you use the Gmail branch, connect your Gmail account and set the recipient email address.

## Requirements
- An OpenAI API key — or any OpenAI-compatible endpoint, including self-hosted Ollama
- A Kit (ConvertKit) account with a v4 API key (Settings → Developer) — or skip Kit entirely and use the Gmail delivery branch instead
- A Gmail connection in n8n if you use the email-to-yourself branch
- Optional: a Slack incoming-webhook URL for the "draft is ready" ping

## Customization
- Add/remove source feeds in the "Your feeds" node; story cap and freshness window in "Last 7 days only"
- Newsletter name, tone and AI model in "Build AI prompt"
- Delivery is swappable: beehiiv (POST /v2/publications/{id}/posts) or Mailchimp (POST /campaigns + /content) — one URL and body change in the Kit HTTP node
- Schedule day/time in the trigger (default: Monday 05:00)

## Additional info
This workflow never emails your subscribers. It creates a draft (send_at: null) or emails the draft to you — human review before sending is deliberate, not a limitation.

## 🔗 Nodes Used

HTTP Request, RSS Read, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
