# ⚙️ Monitor website uptime and content changes with HTTP checks and Slack

> ⚡ **56 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick Overview
This workflow runs every 30 minutes to check a list of website URLs, detect downtime or page content changes using HTTP requests and stored workflow state, and post alerts to a Slack channel only when something goes down, changes, or recovers.

## How it works
1. Runs every 30 minutes on a schedule.
2. Builds a list of target URLs (with labels) to monitor.
3. Fetches each page with an HTTP GET request while capturing the full response and continuing even on 4xx/5xx errors.
4. Compares each page’s current status code and content signature against the last saved value in n8n workflow static data and updates the stored baseline.
5. Posts a message to Slack only when a page is down, its content has changed, or it has recovered.

## Setup
1. Add a Slack credential/connection and set the destination channel (for example, #alerts).
2. Update the URL list (label and url fields) in the “Define URLs to Monitor” code step.
3. Optionally adjust the schedule interval and HTTP timeout to match your monitoring needs.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
