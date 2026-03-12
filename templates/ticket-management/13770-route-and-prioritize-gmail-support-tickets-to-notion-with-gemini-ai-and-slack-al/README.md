# 🎫 Route and prioritize Gmail support tickets to Notion with Gemini AI and Slack alerts

> ⚡ **3 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Who is this for

Customer support teams and operations managers who receive support requests via email and need automated triage. Works well for small to mid-size teams using Notion as their ticket tracker.

## What this workflow does

This workflow watches a Gmail inbox for incoming support emails. Each email is analyzed by Gemini AI to determine its category (billing, technical, feature request, or general), priority level, and a suggested response draft. A new page is created in a Notion database with all classified fields. Critical tickets trigger an immediate Slack alert to the on-call team, while all tickets get a summary notification.

## Setup

1. Add a **Gmail OAuth2** credential and configure label or address filters.
2. Add a **Google Gemini API** credential for email classification.
3. Add a **Notion API** credential and create a database with columns: Title, Category, Priority, Status, Summary.
4. Add a **Slack OAuth2** credential and set your alerts channel.

## Requirements

- Gmail account with OAuth2 access
- Google Gemini API key
- Notion workspace with API integration enabled
- Slack workspace with OAuth2 app

## How to customize

- Edit the AI prompt in "Classify ticket with AI" to add more categories or adjust priority rules.
- Change the critical priority condition in "Is critical priority" to include high-priority tickets.
- Replace Notion with Airtable or Google Sheets for a different ticket backend.

## 🔗 Nodes Used

Slack, Notion, Gmail Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
