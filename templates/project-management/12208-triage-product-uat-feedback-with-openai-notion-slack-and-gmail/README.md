# 📋 Triage product UAT feedback with OpenAI, Notion, Slack and Gmail

> ⚡ **64 views** · 📋 [Project Management](../)

## Description

## Description
Automatically triage Product UAT feedback with AI, deduplicate it against your existing Notion backlog, create/update the right Notion item, and close the loop with the tester (Slack or email).

This workflow standardizes incoming UAT feedback, runs AI classification (type, severity, summary, suggested title, confidence), searches Notion to prevent duplicates, and upserts the roadmap entry for product review. It then confirms receipt to the tester and returns a structured webhook response.

## Context
Feature requests often arrive unstructured and get lost across channels. Product teams waste time re-triaging the same ideas, creating duplicates, and manually confirming receipt.

This workflow ensures:

- Faster feature request triage

- Fewer duplicates in your roadmap/backlog

- Consistent structure for every feedback item

- Automatic tester acknowledgement

- Full traceability via webhook response

## Who is this for?

- Product Managers running UAT or beta programs

- Product Ops teams managing a roadmap backlog

- Teams collecting feature requests via forms, Slack, or internal tools

- Anyone who wants AI speed with clean backlog hygiene

## Requirements

- Webhook trigger (form / Slack / internal tool)

- OpenAI account (AI triage)

- Notion account (roadmap/backlog database)

- Slack and/or Gmail (tester notification)

## How it works
![image.png](fileId:3835)
- Trigger: feedback received via webhook

- Normalize & Clean: standardizes fields and cleans message

- AI Triage: returns structured JSON (type, severity, title, confidence…)

- Notion Dedupe & Upsert: search by suggested title → update if found, else create

- Closed Loop: notify tester (Slack or email) + webhook response payload

## What you get

- One workflow to capture and structure feature requests

- Clean Notion backlog without duplicates

- Automatic tester confirmation

- Structured output for downstream automation

## About me :
I’m Yassin a Product Manager  Scaling tech products with a data-driven mindset.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)

## 🔗 Nodes Used

Slack, Webhook, Gmail, Notion, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
