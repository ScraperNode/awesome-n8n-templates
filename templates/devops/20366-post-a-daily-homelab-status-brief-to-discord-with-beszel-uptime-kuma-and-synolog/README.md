# ⚙️ Post a daily homelab status brief to Discord with Beszel, Uptime Kuma, and Synology

> ⚡ **7 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick Overview
This workflow runs daily (or manually) to pull server status from Beszel, monitor health from an Uptime Kuma status page, and backup results from Synology Active Backup, then posts a single formatted homelab health brief to a Discord channel via webhook.

## How it works
1. Runs every day at 7:00 AM (or on manual trigger) and loads the configured URLs, status page slug, backup task IDs, and timezone.
2. Logs in to Beszel and fetches the systems list, then summarizes each system’s status and uptime while flagging recent reboots.
3. Reads an Uptime Kuma public status page and its heartbeat data, then counts how many monitors are up and lists any down/maintenance states or low 24-hour uptime.
4. Logs in to Synology DSM and queries Synology Active Backup for Business for the latest backup version of each configured task.
5. Builds a single Discord-ready message combining the Beszel, Uptime Kuma, and Synology summaries and marks any unreachable section as unavailable.
6. Sends the brief to Discord via a webhook and then logs out of Synology.

## Setup
1. Create a Beszel HTTP Custom Auth credential that posts your username/password to the Beszel auth endpoint.
2. Create a Synology HTTP Custom Auth credential that supplies your DSM account and password for the SYNO.API.Auth login call.
3. Create a Discord webhook credential and choose the target channel/server where the brief should be posted.
4. Update the Set Configuration values with your Beszel, Uptime Kuma, and Synology base URLs, your Uptime Kuma status page slug, your backup task IDs (as `TASK_ID=Display name` pairs), and your preferred timezone.
5. Run the workflow manually to verify connectivity and formatting, then adjust the schedule time if needed before activating.

## 🔗 Nodes Used

HTTP Request, Discord, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
