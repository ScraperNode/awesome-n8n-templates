# 🎫 Triage support tickets and draft AI replies with CometAPI, Slack and Gmail

> ⚡ **40 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow ingests support tickets from an n8n Form or from Gmail, uses CometAPI to classify each ticket (category, urgency, sentiment) and generate a suggested reply, then routes high/medium urgency tickets to Slack and creates a Gmail draft for low-urgency tickets.

## How it works
1. Triggers when a support ticket is submitted through an n8n Form or when a new email arrives via the Gmail Trigger.
2. Normalizes the incoming data into a consistent schema (name, email, subject, and ticket text) for downstream processing.
3. Sends the ticket text to CometAPI to classify the issue into category, urgency, and sentiment.
4. Parses the CometAPI response as JSON and merges the classification back into the original ticket data.
5. Sends the enriched ticket to CometAPI again to generate a short, polite, placeholder-free suggested reply.
6. Routes the ticket by urgency, posting high and medium urgency tickets to a Slack channel and creating a Gmail draft reply for low urgency tickets.

## Setup
1. Add CometAPI credentials/configuration in both CometAPI nodes used for classification and reply generation.
2. Connect your Gmail account credentials for the Gmail Trigger and Gmail Draft actions, and confirm which mailbox/labels the trigger should poll.
3. Connect your Slack credentials and set the target channel ID for alerts in the Slack message step.
4. Publish the workflow form and share the form URL (or embed it) so users can submit tickets through the n8n Form trigger.

## 🔗 Nodes Used

Slack, Gmail, Gmail Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
