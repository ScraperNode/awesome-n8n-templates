# 🔧 Nightly Discord channel cleanup

> ⚡ **1,512 views** · 🔧 [Miscellaneous](../)

## Description

# Nightly Discord Channel Cleanup
### This workflow runs every day at 9:00 p.m. and:
- Retrieves all Discord channels using your provided credentials.
- Pauses briefly to respect Discord API rate limits.
- Loops through each channel and fetches messages.
- Filters out messages older than seven days.
- Deletes those older messages, again pausing to stay within deletion rate limits.

By setting up this workflow on a schedule, you can automatically keep Discord channels tidy and compliant with retention policies.
### 👨‍🎤 Setup
1. Add your **Discord** credentials
2. Change the server in each **Discord** node to the correct one
3. Click the Test Workflow button
3. Activate the workflow to run on a schedule

## 🔗 Nodes Used

Discord, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
