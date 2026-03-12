# 🎫 Triage Slack and Gmail requests with an AI-powered intake layer

> ⚡ **86 views** · 🎫 [Ticket Management & Triage](../)

## Description

This n8n template helps you turn inbound messages into a clean, deduped queue of actionable tickets.

It includes Slack and Gmail as ready to use examples, but the key idea is the universal intake normalizer: you can plug in other sources later (forms, webhooks, chat tools, other inboxes) as long as you map them into the same normalized schema.

## Good to know
* This workflow sends message content to an LLM for classification.
* Keep sensitive data out of the prompt, and only process messages you are allowed to process.
* Costs depend on message volume and length, so truncation and tight filters matter.

## How it works
* Collect inbound items (Slack and Gmail are included as examples).
* Normalize each item into one shared JSON format so every source behaves the same.
* Deduplicate items using a data table so repeats are skipped.
* Use an AI agent with structured output to score urgency and importance, produce a summary, and draft a reply.
* Create a Notion ticket for tracking, and optionally notify Slack for high priority items.

## Setup steps
* Connect credentials for Slack, Gmail, Notion, and your LLM provider.
* Choose your Slack channel and set a Gmail filter that keeps volume manageable.
* Select your Notion database and ensure properties match the field mappings.
* Create or select a data table and map the unique ID column for deduplication.
* Adjust the notification threshold and schedule interval to match your workflow.

## Requirements
* Slack workspace access (optional if you swap the source)
* Gmail access (optional if you swap the source)
* Notion database for ticket creation
* LLM API credentials

## Customising this workflow
* Add new sources by mapping them into the normalizer schema.
* Truncate long messages before the AI step to reduce cost.
* Change categories, scoring, and thresholds to match your operating model.

## 🔗 Nodes Used

Slack, Notion, Gmail Trigger, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
