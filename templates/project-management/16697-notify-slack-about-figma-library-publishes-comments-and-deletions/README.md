# 📋 Notify Slack about Figma library publishes, comments and deletions

> ⚡ **58 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow listens for Figma team events (library publishes, file comments, and file deletions), formats each event into a readable message, and posts the result to a chosen Slack channel.

## How it works
1. Triggers when a Figma team library is published.
2. Triggers when a new Figma file comment is added, replied to, or resolved.
3. Triggers when a Figma file is deleted.
4. Formats library publish events into a Slack message including the file name, a summary of changed components/styles/variables, a short preview of changed item names, author, timestamp, and a Figma link.
5. Formats comment events into a Slack message by reconstructing the comment text (including resolving @mentions to handles), adding author, timestamp, and a direct reply link to the comment in Figma.
6. Formats delete events into a Slack message including the file name, author, timestamp, and a note that the file is recoverable from Figma trash for 30 days.
7. Posts the formatted message to the configured Slack channel.

## Setup
1. Connect a Figma API credential that has access to the target team and set the correct Figma Team ID in each Figma trigger.
2. Connect a Slack OAuth/bot credential and set the destination Slack channel in the Slack message action.
3. Activate the workflow so Figma can deliver webhook events to n8n.

## 🔗 Nodes Used

Slack, Figma Trigger (Beta)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
