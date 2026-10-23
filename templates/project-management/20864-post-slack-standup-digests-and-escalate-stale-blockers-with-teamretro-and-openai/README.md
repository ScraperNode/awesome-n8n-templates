# 📋 Post Slack standup digests and escalate stale blockers with TeamRetro and OpenAI

> ⚡ **0 views** · 📋 [Project Management](../)

## Description

## Quick Overview
This workflow triggers when a TeamRetro standup is completed, uses OpenAI to generate a concise digest, posts a summary plus per-person details to Slack, and escalates long-running blockers to a separate lead channel.

## How it works
1. Triggers on the TeamRetro standup.completed event and deduplicates runs using the deliveryId so retried webhook deliveries don’t post twice.
2. Stops the workflow if the standup contains no participant updates.
3. Formats all updates into Slack-ready text, extracts blockers based on a configurable topic match, and flags “stale” blockers based on how many standups they have carried forward.
4. Sends the standup transcript to OpenAI (GPT-5 Mini) to generate a headline, up to three highlights, and up to three watch-outs.
5. Posts the digest message to the configured Slack team channel and replies in the same thread with everyone’s full updates.
6. If any stale blockers are found, posts an escalation message to the configured Slack lead channel.

## Setup
1. In TeamRetro, enable the Standup Completed webhook, paste the n8n production webhook URL, and set the signing secret in the TeamRetro trigger node.
2. Add Slack credentials with permission to post messages, and set the team and lead Slack channels in the workflow settings.
3. Add an OpenAI API credential for the Chat model used by the summarization step.
4. Adjust the workflow’s settings values (teamChannel, leadChannel, staleAfter, and blockerTopic) to match your Slack channels and how your standup identifies blockers.

## 🔗 Nodes Used

Slack, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
