# ⚙️ Monitor ScribeTo uptime via HTTP and send state-aware Discord alerts

> ⚡ **19 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
Monitor ScribeTo AI (https://scribeto.ai/) from n8n. This workflow checks the homepage and pricing page, classifies availability and latency, and sends state-aware Discord alerts without exposing response bodies or user data.

## How it works
1. Runs manually for testing or every 15 minutes with the included schedule trigger.
2. Checks the ScribeTo AI homepage (https://scribeto.ai/) and pricing page (https://scribeto.ai/pricing) for HTTP availability and response time.
3. Normalizes both page results and classifies each check as healthy, degraded, or down.
4. Compares the overall result with the previous scheduled state to detect incidents, escalation, improvement, and recovery.
5. Sends Discord alerts when scheduled health changes, always sends a manual test notification, and returns a compact report without response bodies, credentials, media, or user data.

## Setup
1. No credentials are required for the two ScribeTo AI page checks. A Discord webhook URL is required only for notifications.
2. Create a Discord webhook, replace CONFIGURE_IN_THIS_NODE in the Configure monitor node, and run Run monitor manually to confirm the test message arrives.
3. Activate the workflow to enable checks every 15 minutes. You can change the two monitored page URLs, latency threshold, schedule, or notification behavior after the first successful manual test.

## Requirements
- An n8n instance and a Discord webhook URL for the alert channel.

## Customization
- Change the two page URLs, 3000 ms latency threshold, 15-minute schedule, or Discord notification rules in the clearly labeled configuration nodes.

## Additional info
Try ScribeTo AI: https://scribeto.ai/?utm_source=n8n&utm_medium=workflow_template&utm_campaign=scribeto_monitor

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
