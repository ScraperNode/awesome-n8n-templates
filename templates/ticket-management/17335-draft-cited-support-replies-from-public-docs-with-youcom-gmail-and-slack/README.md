# 🎫 Draft cited support replies from public docs with You.com, Gmail, and Slack

> ⚡ **5 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow collects a support question via an n8n form, uses You.com to research live public documentation with citations, then creates a reviewed-only draft reply in Gmail and notifies a support agent in Slack.

## How it works
1. Receives a support question (plus optional context and customer email) through an n8n form trigger.
2. Builds a research prompt and submits it to You.com Research to retrieve an answer grounded in live public sources with citations.
3. Formats the returned answer and sources into an HTML email body (with a plain-text fallback) and sets a reply subject and recipient.
4. Creates a draft email in Gmail containing the cited reply so a human can review and send it manually.
5. Posts a Slack message to the support channel to tell an agent the Gmail draft is ready and how many sources were cited.
6. If the You.com research call fails, sends a Slack alert to the support team with the error details instead of creating a draft.

## Setup
1. Use a self-hosted n8n instance and install the You.com community node package `@youdotcom-oss/n8n-nodes-youdotcom`.
2. Add credentials for You.com, Gmail OAuth2 (for creating drafts), and Slack.
3. Set the Slack member ID to mention (and adjust the research effort if needed) in the configuration step that prepares the research request.
4. Select the Slack channel where the “draft ready” and failure notifications should be posted.
5. Copy the form URL from the trigger and share it with your support team (or embed it) so questions can be submitted.

## Requirements
- Self-hosted n8n. The You.com node is a community package, and community nodes cannot be installed on n8n Cloud.
- A You.com API key with access to the Research endpoint (you.com/platform).
- A Google account with Gmail connected over OAuth2. The workflow only ever needs permission to create drafts.
- Optional: a Slack app with the chat:write scope, plus the member ID you want mentioned. Without Slack the drafts still appear in Gmail, just with no notification.

## Customization
- Scope the research prompt to sources you trust, such as your own public docs, one vendor's API reference, or a specific regulatory standard.
- Change the research effort between lite, standard, deep and exhaustive. Higher settings read more sources and take longer per run.
- Delete the Slack notification if your team watches the Gmail drafts folder directly. The draft is still created either way.
- Swap the form trigger for a Gmail trigger on a support alias to draft a cited reply to every inbound message. Keep the Gmail node on create draft so replies still wait for a human.
- Run it on n8n Cloud by replacing the You.com node with an HTTP Request node: POST to https://api.you.com/v1/research with a header-auth credential and a JSON body carrying the prompt and effort level. The response shape matches what the formatting step already reads, so nothing downstream changes.

## Additional info
Nothing in this workflow sends an email. The Gmail step uses the create draft operation, and the only send is an agent opening that draft and pressing send, so a thin or badly sourced answer never reaches a customer on its own. If the customer email is left blank on the form, the draft is created with no recipient for the agent to fill in.

The You.com node at v0.2.9 exposes only the research question and the effort level, so there is no parameter to restrict results to official domains or to a recency window. This template steers toward authoritative sources through the wording of the research prompt instead. If you need hard domain control, the node's search operation accepts site: operators and a freshness filter, and works well as a cheaper single-document path.

Cost and latency both track the effort level. Standard is a sensible default, and deep or exhaustive are worth reserving for questions that genuinely need the extra sources.

## 🔗 Nodes Used

Slack, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
