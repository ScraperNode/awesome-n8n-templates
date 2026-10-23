# 🎣 Qualify inbound leads with OpenAI, HubSpot, Slack and Gmail

> ⚡ **14 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow captures inbound website leads via an n8n form, uses OpenAI to infer firmographics and score ICP fit, upserts the lead into HubSpot, and for high-priority leads posts an instant alert to Slack and creates a Gmail follow-up draft.

## How it works
1. Receives a new submission from an n8n Form with the lead’s name, work email, website, and message.
2. Sends the lead details to OpenAI to infer industry and company size, score ICP fit (0–100), assign a Hot/Warm/Cold priority, and draft a suggested reply as structured JSON.
3. Upserts the lead as a contact in HubSpot and stores the AI summary, score, and priority in the contact record.
4. Checks whether the lead is marked as Hot based on the AI priority.
5. For Hot leads, posts a detailed alert message to a selected Slack channel.
6. For Hot leads, creates a Gmail draft addressed to the lead using the AI-generated suggested reply.

## Setup
1. Connect credentials for OpenAI, HubSpot, Slack, and Gmail.
2. Edit the Ideal Customer Profile text in the OpenAI prompt to match your target industries, regions, and qualification rules.
3. Select the Slack channel to post hot-lead alerts to in the Slack message step.
4. Customize the form fields and copy the form URL from the n8n Form trigger to embed or link it from your website.

## 🔗 Nodes Used

Slack, HubSpot, Gmail, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
