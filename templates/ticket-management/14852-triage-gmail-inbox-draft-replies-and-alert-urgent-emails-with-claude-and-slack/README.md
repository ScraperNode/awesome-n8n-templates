# 🎫 Triage Gmail inbox, draft replies, and alert urgent emails with Claude and Slack

> ⚡ **251 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Overview
Your inbox shouldn't run your day. This workflow checks Gmail every 15 minutes, uses Claude AI to classify every new email into Urgent, Needs Reply, FYI Only, Automated, or Spam — then takes the right action automatically: Slack alert for urgent, draft reply saved for action needed, label and archive for everything else. Every email logged to Google Sheets.

## How it works

- Polls Gmail every 15 minutes for new unread emails
- Claude Sonnet reads each email and classifies it into one of five categories
- Urgent emails trigger an immediate Slack alert with sender, subject and summary
- Needs Reply emails get a Claude-written draft saved to Gmail drafts ready for one-click send
- FYI Only emails get labelled and marked as read automatically
- Automated emails (newsletters, receipts, notifications) get labelled and archived
- Spam gets moved to trash
- Every email processed is logged to Google Sheets with category and reasoning

## Setup steps

1.  **Gmail** — Connect your Gmail account in Check for New Emails, and all action nodes
2.  **Gmail labels** — Create four labels in Gmail: AI-Urgent, AI-Needs-Reply, AI-FYI, AI-Automated. Copy each label ID into the corresponding label node
3.  **Claude AI** — Add your Anthropic API key to the Claude Sonnet sub-node from console.anthropic.com
4.  **Slack** — Connect your Slack account in Notify Urgent Email and set your channel. Disable this node if you do not use Slack
5.  **Customise the prompt** — Open Classify Email Intent and add your name, role, and any VIP senders that should always route as Urgent
6.  **Google Sheets** — Create a sheet called Email Log with columns: Timestamp, Sender, Subject, Category, Summary, Reasoning, Draft Saved
7.  **Activate** — runs every 15 minutes automatically

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Gmail Trigger, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
