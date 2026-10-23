# ⚙️ Send Gmail alerts for stalled scheduled workflows using the n8n API

> ⚡ **161 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs hourly to check your n8n instance for active, schedule-triggered workflows that have not completed an execution within a defined time window, and sends an alert email via Gmail when any workflow appears to have silently stopped running.

## How it works
1. Runs every hour on a schedule.
2. Calls the n8n REST API to fetch all active workflows.
3. Calls the n8n REST API to fetch the most recent execution records.
4. Compares active workflows against recent executions, keeping only schedule-based workflows whose last completed run is older than the configured threshold.
5. Sends a Gmail email alert for each workflow that has been quiet for longer than the threshold.

## Setup
1. Set your n8n base URL and the timeout window (in minutes) in the Settings values.
2. Create an n8n API key and configure both n8n REST API HTTP requests to send it as an `X-N8N-API-KEY` header.
3. Add a Gmail credential, set the recipient address, and adjust the alert message/subject to match your notification preferences.

## Requirements
- An n8n API key with read access to workflows and executions
- A Gmail credential, or swap the Alert node for Slack, Discord, or any other channel
- At least one active workflow with a Schedule, Cron, or Interval trigger

## Customization
- Change silentAfterMinutes in the Settings node to set how long is too long
- Replace the Gmail node with whatever you actually read
- Edit the trigger types in the Code node if you use custom scheduled triggers

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
