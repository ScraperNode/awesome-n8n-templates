# 🎬 Generate presentation decks from prompts with Encelade

> ⚡ **72 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow starts a presentation generation job in Encelade from a prompt and outline hints, polls Encelade for completion, and outputs the finished deck link (or stops with an error if generation fails).

## How it works
1. Starts when you manually execute the workflow in n8n.
2. Sends the topic, slide count, audience, tone, theme settings, and outline hints to Encelade to generate a 6-slide presentation.
3. Waits 20 seconds and then checks the Encelade session status using the returned session ID.
4. If the session phase is not finished, it keeps waiting and rechecking until the phase changes.
5. When the phase is "done", it returns the generated deck link and project PID.
6. When the phase is "failed", it stops the workflow and raises an error with the failure details.

## Setup
1. Install and configure Encelade credentials in n8n for the Encelade node.
2. Update the generation inputs (topic, page count, outline hints, audience/tone, theme mode, and media provider) to match the deck you want to create.
3. Ensure the workflow has enough time to complete by adjusting the 20-second wait interval if your Encelade generations typically take longer.

## 🔗 Nodes Used

Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
