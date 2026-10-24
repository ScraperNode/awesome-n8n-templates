# 📊 Send legal AI news digests from IMAP email with OpenAI, Tavily, and Gmail

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Monitor an inbox, keep only emails about AI in the legal industry (or any topic), research each topic with web search, and email a branded HTML digest.

## How it works
1. A schedule trigger polls an IMAP mailbox every few hours for unread emails.
2. Each message is extracted and passed to an agent that scores it for relevance
3. Irrelevant emails are filtered out and the source message is deleted from the inbox
4. Relevant Emails are added to the digest
5. An email summary is sent to the recipient

## Setup
1. Install the community nodes `n8n-nodes-imap` and `@tavily/n8n-nodes-tavily` (Settings → Community Nodes).
2. Add credentials for IMAP, OpenAI, Tavily, and Gmail OAuth2.
3. Set the recipient address in the **Gmail — Send Digest** node.
4. Optionally adjust the polling interval and the IMAP mailbox path
5. Set the cadence for you email digest

## Requirements
- IMAP, OpenAI, Tavily, and Gmail OAuth2 credentials
- ⚠️ Uses the `n8n-nodes-imap` and `@tavily/n8n-nodes-tavily` community nodes and requires a **self-hosted n8n instance**.

## Customization
- Change the polling frequency in the Schedule node.
- Rewrite the topic list in **OpenAI Agent — Score Relevance** to target a different industry or subject.
- Swap Gmail for another email node, or point the IMAP node at a specific subfolder.

## Additional info
Support is available at support@ais.email

## 🔗 Nodes Used

Gmail, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
