# 📋 Alert team health drops with TeamRetro, OpenAI GPT-5 Mini, and Slack

> ⚡ **1 views** · 📋 [Project Management](../)

## Description

## Quick Overview
This workflow triggers when a TeamRetro health check completes, compares each dimension score against a rolling baseline from recent checks, and uses OpenAI to generate a neutral interpretation and discussion prompts for any significant drops, then posts an alert to Slack and can optionally queue prompts in TeamRetro.

## How it works
1. Receives a TeamRetro webhook event when a health check is completed.
2. Fetches the completed health check’s dimension scores and the team’s most recent health checks from TeamRetro.
3. Stops if there are fewer than two prior completed checks to build a baseline.
4. Averages prior scores per dimension and flags any current dimension that drops 0.75 points or more below its own baseline.
5. If any dimensions are flagged, sends the drop details to OpenAI to produce a short neutral interpretation and one discussion question per dimension.
6. Posts the interpretation, deltas, and suggested prompts to a Slack channel.
7. If enabled, creates TeamRetro parked items to queue each discussion prompt for the team’s next retro.

## Setup
1. Add a TeamRetro API credential to the TeamRetro trigger and each TeamRetro node.
2. Copy the workflow’s TeamRetro trigger Production webhook URL into TeamRetro (Settings → Integrations → Webhooks), enable the Health Check Completed event, and paste the webhook signing secret into the trigger.
3. Add an OpenAI API credential and keep or change the model selection used by the OpenAI Chat node.
4. Add a Slack credential and set the target channel (default is #team-leads) for the alert message.
5. (Optional) Turn on auto-queueing by setting the autoQueue value to true if you want prompts created as TeamRetro parked items.

## 🔗 Nodes Used

Slack, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
