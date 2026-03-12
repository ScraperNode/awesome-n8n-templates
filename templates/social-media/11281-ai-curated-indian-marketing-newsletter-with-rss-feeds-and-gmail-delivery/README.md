# 📱 AI-curated Indian marketing newsletter with RSS feeds and Gmail delivery

> ⚡ **149 views** · 📱 [Social Media & Email Marketing](../)

## Description

## How it works
This workflow automatically generates a daily Indian marketing & advertising newsletter. It fetches articles from Campaign India and Economic Times BrandEquity feeds, merges them, and evaluates each story using an AI relevance filter. Only meaningful updates, such as brand launches, marketing campaigns, and changes to digital media, are retained.

Relevant stories are stored in an n8n Data Table and later used to build a clean HTML newsletter. Every day at 7:30 PM IST, the workflow composes the email and sends it via Gmail, with an optional SMTP fallback if Gmail fails. After sending, processed entries are removed to keep the next day’s digest fresh.


## Set up steps

- Add your Gmail and (optional) SMTP credentials.
- Update the recipient email inside the Gmail/SMTP nodes.
- Confirm the Data Table exists or let n8n create it automatically.
- Adjust schedule timing if you want the newsletter at a different time.
- Add or remove RSS feeds as needed (inside the brown “RSS Fetching Block”).

(Full explanations for each block are included as sticky notes inside the workflow.)

### By Deepak Singh
If you need help or want custom automations:
deepakbiz@outlook.com

## 🔗 Nodes Used

Send Email, RSS Read, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
