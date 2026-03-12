# 🎫 Triage LinkedIn notifications and InMails using Gmail, OpenAI, Notion, and Slack

> ⚡ **38 views** · 🎫 [Ticket Management & Triage](../)

## Description

# LinkedIn Inbox Triage (Gmail Label to Notion + Slack)

This n8n template demonstrates how to use AI to triage LinkedIn emails in your Gmail inbox, so you only see the messages worth your time.  
It filters out automated noise, scores sales likelihood, drafts quick replies for real conversations, stores everything in Notion, and sends you a Slack DM for items you should answer quickly.

## Good to know
* This workflow sends email content to an LLM. Do not use it with sensitive mailboxes unless you are comfortable with that.
* Cost depends on your model choice and token usage. The body is currently limited to 4000 characters to control spend.
* If you want a shorter run window, adjust the `receivedAfter` filter.

## How it works
* Runs on a daily schedule.
* Pulls emails from Gmail using a label you define (example: `LinkedIn`).
* Applies two filters:
  * Keeps only invitations and messages
  * Removes common automated notifications
* Fetches the full email body for better classification.
* Sends the message to an AI agent that returns strict structured JSON:
  * `action` (`reply_quick`, `review`, `ignore`, `block`)
  * `relevancy_score` (0 to 100)
  * `sales_likelihood` (0 to 1)
  * `summary`
  * optional `reply_draft`
* Applies a quality gate to keep high signal messages.
* Writes the output to a Notion database as a ticket.
* Sends a Slack DM only for items marked `reply_quick`.

## How to use
* Create a Gmail label that captures LinkedIn emails, then add the label id to the Gmail node.
* Create a Notion database with fields matching the Notion node mapping.
* Connect your OpenAI, Gmail, Notion, and Slack credentials in n8n.
* Run once manually to verify mapping, then enable the workflow.

## Requirements
* Gmail account
* OpenAI API credentials (or compatible model node)
* Notion database
* Slack account

## Customising this workflow
* Make it more aggressive by increasing the sales threshold or raising the relevancy cutoff.
* Add more filter phrases for your own LinkedIn email language.
* Swap Slack DM for a channel post, or send a daily digest instead of per message.
* Add a redaction step before the AI node if you want to remove signatures or quoted replies.

## 🔗 Nodes Used

Slack, Gmail, Notion, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
