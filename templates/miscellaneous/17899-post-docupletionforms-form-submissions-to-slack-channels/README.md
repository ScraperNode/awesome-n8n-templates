# 🔧 Post DocupletionForms form submissions to Slack channels

> ⚡ **1 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow triggers on new DocupletionForms form submissions and posts a formatted notification to a selected Slack channel, including the form name, submission number, and submitted answers.

## How it works
1. Triggers when a DocupletionForms form is submitted.
2. Extracts the form name, submission number, and all answer fields from the submission payload.
3. Formats the answers into a single Slack message and posts it to the chosen Slack channel.

## Setup
1. Install and enable the verified community node `n8n-nodes-docupletionforms` (required for n8n Cloud and self-hosted instances).
2. Add your DocupletionForms API credentials (API key and tenant ID) and select the form to watch in the trigger.
3. Add your Slack credentials and select the destination channel for the notification message.

## 🔗 Nodes Used

Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
