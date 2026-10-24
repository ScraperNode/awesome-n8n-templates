# 🔧 Draft Gmail replies to stock and visit inquiries with Claude Haiku

> ⚡ **4 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow checks a Gmail inbox every 5 minutes for new inquiry emails, uses Anthropic Claude to classify them as stock or store-visit requests, looks up matching data in n8n Data Tables, and saves a suggested reply as a Gmail draft while labeling each message for follow-up.

## How it works
1. Runs every 5 minutes on a schedule trigger.
2. Fetches up to 10 recent Gmail inbox messages sent to the configured inquiry address that are not already labeled as drafted or needing human review.
3. Processes emails one by one and uses Anthropic Claude to classify each message as a Stock inquiry, Store visit, or Other.
4. For stock inquiries, Claude extracts the product category from the email, the workflow looks up matching items in an n8n Data Table, and Claude drafts a reply using only the returned stock and pricing details.
5. For store-visit requests, Claude extracts the desired date/time from the email, the workflow looks up that day’s slots in an n8n Data Table, and Claude drafts a reply listing available times (or indicating fully booked/unavailable).
6. Creates a Gmail draft reply in the original thread and adds an ai-drafted label to the email, while non-matching inquiries are labeled needs-human for manual handling.

## Setup
1. Connect Gmail credentials with access to the inbox that receives inquiries.
2. Add an Anthropic API credential for Claude.
3. Create and populate two n8n Data Tables (one for products/stock and one for visit slots) and select their table IDs in the two lookup steps.
4. Create the Gmail labels ai-drafted and needs-human and select them in the two Gmail labeling steps.
5. Update the Config values for inbox address, timezone, currency, and the signature appended to drafted replies.

## 🔗 Nodes Used

Gmail, Schedule Trigger, Basic LLM Chain, Anthropic Chat Model, Text Classifier, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
