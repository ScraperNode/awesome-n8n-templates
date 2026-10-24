# 🎣 Turn chat conversations into automation blueprints with Claude, Gmail and Google Sheets

> ⚡ **24 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who's it for

Automation consultants and agencies who want a lead magnet that delivers real value, and teams collecting automation ideas.

## How it works

1. A visitor opens the hosted chat and describes a task they hate doing.
2. A Claude AI Agent with memory asks a few focused questions (trigger, inputs, destination, rules, exceptions), then asks for a name and email.
3. A Structured Output Parser with a fixer model and a contract-guard Code node keep every reply valid.
4. Code nodes turn the blueprint into an inactive, credential-free n8n workflow and an escaped HTML email.
5. Gmail sends it with the workflow attached and BCCs you. Google Sheets logs the lead.

## Setup

Takes about 15 minutes.

1. In Configuration, set `ownerEmail`, `senderName` and `brandName`.
2. Add Anthropic credentials to both chat models, plus Gmail and Google Sheets credentials.
3. Create a sheet with headers: Date, First Name, Email, Automation, Problem, Hours Saved per Week, Complexity, Session ID. Select it in the Sheets node.
4. Click Open chat to test, then activate and share the chat URL.

## Requirements

- Anthropic API key
- Gmail and Google Sheets accounts

## How to customize the workflow

Edit the system message for your services, change `maxFollowUps`, swap Claude for another model, or embed the chat on your site with the n8n chat widget.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, Anthropic Chat Model, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
