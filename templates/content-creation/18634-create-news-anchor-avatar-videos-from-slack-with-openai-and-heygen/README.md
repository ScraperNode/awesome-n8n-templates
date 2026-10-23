# 🎬 Create news anchor avatar videos from Slack with OpenAI and HeyGen

> ⚡ **9 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Chat with a Slack bot to draft a script from any topic, revise it right in the thread, then approve to auto-generate a talking-avatar video with HeyGen — delivered straight back to you in Slack. No editing software required.

## How it works
1. Triggers on new Slack messages in the configured channel or DM and extracts the sender, channel ID, and message text.
2. Ignores bot messages, edited events, and empty messages to prevent loops and accidental runs.
3. Checks an n8n Data Table for an existing session in the same channel that is awaiting confirmation.
4. If no pending session exists, sends the user’s news bullets to OpenAI to draft a 30-second (75–85 word) broadcast script, saves it as a draft in the Data Table, and posts it to Slack for review.
5. If a pending session exists, treats the message as either a confirmation or feedback and uses OpenAI to revise the draft script when feedback is provided, then posts the updated draft back to Slack.
6. When the user confirms, calls the HeyGen API to start avatar video generation, stores the HeyGen video job ID, and polls HeyGen every 15 seconds until the video completes or fails/times out.
7. Posts the HeyGen video URL to Slack on success and marks the session completed, or sends a failure notice and marks the session failed.

## Setup
1. Create and install a Slack app with Event Subscriptions for message events (for channels and/or DMs), then add an n8n Slack credential with the Signing Secret and Bot Token and connect it to the Slack trigger and all Slack message nodes.
2. Create an n8n Data Table (for example, `slack_video_sessions`) with columns `channelId`, `newsContent`, `script`, `status`, and `heygenVideoId`, and select it in all Data Table read/write steps.
3. Add an OpenAI API credential and connect it to both OpenAI chat model steps used for drafting and revising scripts.
4. Add a HeyGen API key as an HTTP Header Auth credential (`X-Api-Key`) for the HeyGen HTTP requests and replace `avatar_id` and `voice_id` in the HeyGen request body with your own HeyGen IDs.
5. Set the Slack channel/DM targeting as needed (or leave it to respond in the originating conversation) and activate the workflow, then point Slack’s Request URL to the trigger’s production webhook URL.

## 🔗 Nodes Used

HTTP Request, Slack, AI Agent, OpenAI Chat Model, Slack Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
