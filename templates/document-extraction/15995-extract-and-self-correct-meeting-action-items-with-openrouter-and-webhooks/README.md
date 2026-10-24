# 🔬 Extract and self-correct meeting action items with OpenRouter and webhooks

> ⚡ **92 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This webhook-driven workflow extracts structured action items from meeting notes using an OpenRouter chat model, validates the JSON against a strict schema, and iteratively self-corrects with feedback while using session-based window memory to keep IDs consistent across requests.

## How it works
1. Receives a POST webhook request containing meeting notes, a sessionId, and optional maxAttempts.
2. Normalizes the payload into a standard state object (request/session identifiers, attempt counters, and placeholders for extraction and validation results).
3. Uses an OpenRouter chat model with session-keyed window buffer memory to extract action items as strict JSON (id, title, assignee, deadline, priority, context).
4. Parses the model output and validates each action item against required fields, deadline format, allowed priority values, and context length.
5. If validation fails and attempts remain, feeds the numbered validation errors back into the next extraction attempt and retries until it passes or reaches maxAttempts.
6. Returns a JSON response to the webhook caller with the validated action items on success, or failure details (errors, attempts used, and last raw extraction) for human review.

## Setup
1. Add an OpenRouter API credential and select it in the OpenRouter Chat Model configuration.
2. Activate the workflow and copy the webhook URL from the Webhook trigger.
3. Configure your source system to POST to the webhook with meetingNotes and sessionId (and optionally maxAttempts as a number).

## 🔗 Nodes Used

Webhook, AI Agent, Simple Memory, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
