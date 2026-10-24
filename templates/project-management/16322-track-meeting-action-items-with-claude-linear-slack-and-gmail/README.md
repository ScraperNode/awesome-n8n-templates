# 📋 Track meeting action items with Claude, Linear, Slack and Gmail

> ⚡ **26 views** · 📋 [Project Management](../)

## Description

## Quick Overview
This workflow receives meeting transcripts via webhook, uses Anthropic Claude to extract summaries, decisions, and action items, then posts a digest to Slack, emails the organizer via Gmail, and creates high-confidence action items as Linear issues while skipping duplicate deliveries.

## How it works
1. Receives meeting event data via a POST webhook and immediately returns a JSON acknowledgement to prevent provider timeouts and retries.
2. Extracts the transcript and meeting metadata from Fireflies, Otter, or a raw payload, and ignores test events.
3. Validates the payload represents a real meeting and deduplicates deliveries using a stored fingerprint so the same meeting is not processed twice.
4. Sends the transcript and attendee list to Anthropic Claude to generate a structured JSON summary, decisions, next-meeting details, and action items with owners and confidence scores.
5. Parses the Claude JSON response, filters action items by a confidence threshold (>= 0.7), and formats both a Slack message and an HTML email recap.
6. Posts the meeting digest to a Slack channel and emails the recap to the meeting organizer.
7. Creates one Linear issue per high-confidence action item, including meeting context, priority, owner, due-date hint, and confidence.

## Setup
1. Configure your transcript provider (for example Fireflies or Otter) to POST meeting events to this workflow’s webhook URL.
2. Add Anthropic API credentials for the Claude model used to analyze transcripts.
3. Add a Slack OAuth2 credential and select the target channel for posting the meeting digest.
4. Add a Gmail OAuth2 credential and ensure the incoming payload includes the organizer email address used as the recipient.
5. Add a Linear OAuth2 credential and update the Linear team ID used when creating issues.
6. Adjust the confidence threshold constant (default 0.7) if you want to create Linear issues more or less aggressively.

## 🔗 Nodes Used

Slack, Webhook, Gmail, Linear, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
