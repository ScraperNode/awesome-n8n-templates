# 🎫 Triage and draft support replies using Anthropic and Google Sheets

> ⚡ **16 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives support tickets via webhook (or manual test), uses Anthropic chat models to triage, research your documentation over HTTP, and draft a reply, then either auto-sends or pauses for human approval, and logs outcomes to Google Sheets.

## How it works
1. Receives a ticket via a POST webhook (or a manual test run that builds a sample ticket) and normalizes the ticket fields.
2. Uses an Anthropic chat model to classify the ticket (category, severity, sentiment, question vs bug, and whether it contains credentials).
3. If credentials are detected, skips AI drafting and produces a fixed security-hold reply with an internal note.
4. If no credentials are detected, uses an Anthropic chat model to fetch and review relevant pages from your docs site via HTTP and extract key facts, suggested resolution, and any docs gap.
5. Uses an Anthropic chat model to draft a customer reply constrained to the research findings, then checks whether it is safe to auto-send based on severity, research coverage, and draft confidence.
6. If auto-send criteria are not met, posts a review message (with Send/Rewrite/Escalate links) to your configured webhook endpoint and pauses until a human decision resumes the run.
7. Appends a ledger row with classification, research, draft, and routing details to Google Sheets and optionally sends a separate docs-gap notification when research finds no answer.

## Setup
1. Add an Anthropic chat model credential and select it for the triage, research, and drafting chat model nodes.
2. Configure the values in the Settings step, especially your product context, severity definitions, tone guide, docsBaseUrl, autoSendMaxSeverity, and notifyWebhookUrl for reviewer/docs-gap notifications.
3. Create a Google Sheets ledger with the specified header columns, then connect your Google Sheets account and select the target spreadsheet and sheet in the logging step.
4. If using the webhook trigger, copy the Ticket webhook production URL into your helpdesk (POSTing at least text, email, and subject) and test with a manual run before routing real tickets.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, Anthropic Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
