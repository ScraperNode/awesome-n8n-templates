# 📋 Get client sign-off on ClickUp tasks by email with Claude, Gmail and Slack

> ⚡ **0 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow monitors ClickUp tasks in a “client review” status, drafts or sends review request emails via Gmail, then uses Anthropic Claude to classify client replies and automatically update the task status and checklist, while posting alerts and a daily summary to Slack.

## How it works
1. Runs every 30 minutes (and also at 9:00 daily) to check configuration and build ClickUp search URLs for review tasks and tasks tagged as awaiting a reply.
2. Fetches ClickUp tasks in the review status, extracts the client email/name and review link from custom fields or the task description, and reads task comments to determine whether to email, wait for replies, or log a problem.
3. For tasks needing outreach, adds an “awaiting client reply” tag in ClickUp, then drafts a Gmail review email (or sends it directly) and logs the email thread details to the task and to Slack.
4. For tagged tasks waiting on a reply, retrieves the corresponding Gmail thread, filters for new client messages, and flags bounces or replies from unknown senders by logging a ClickUp comment and sending a Slack alert.
5. Sends each valid client reply to Anthropic Claude to classify it (approved, changes requested, question, or unclear) and extract exact decision quotes and change requests.
6. Verifies Claude’s quoted text exists in the email and only treats unconditional approvals as approvals, then updates the ClickUp task status (approved or revisions), creates a ClickUp checklist for requested changes, and posts the outcome to ClickUp and Slack.
7. On the 9:00 run, compiles a Slack morning summary of unsent drafts, waiting reviews, and overdue replies, and creates Gmail reminder drafts for quiet clients when due.

## Setup
1. Add credentials for ClickUp, Gmail, Slack, and Anthropic (Claude) in n8n.
2. In the Config node, set your ClickUp workspace ID, optional list IDs, the exact ClickUp status names (review/approved/revisions), your Slack channel ID, and your preferred sendMode (draft or send).
3. In ClickUp, enable tags in your space and ensure tasks include the client’s email, client name, and review link as custom fields (or matching “Client Email:” and “Review Link:” lines in the description).
4. Update the custom field names in Config (Client Email/Client Name/Review Link) if your ClickUp fields use different labels.
5. If using the workflow for the first time, publish it and move a test task into the configured review status to verify drafts, Slack alerts, and status changes work as expected.

## Requirements
- ClickUp account with Tags turned on in your space
- Gmail account to send the review emails from
- Slack workspace and the ID of the channel for alerts
- Anthropic API key for Claude
- About 1,500 n8n runs a month at the default 30 minute schedule

## Customization
- Set sendMode in the Config node to send if you want review emails to go out straight away instead of as Gmail drafts.
- Change the reminder days, approval phrases or lists in the Config node to fit how your team works.
- Edit the wording of the review email in the Work Out Review State node.
- To send a fresh review email for a task, remove its waiting tag in ClickUp.
- Swap the Claude model for another chat model if you prefer.

## 🔗 Nodes Used

HTTP Request, Slack, ClickUp, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
