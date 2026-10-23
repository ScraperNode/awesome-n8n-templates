# 🔒 Detect 1Password vault exports with TheHive and Slack alerts

> ⚡ **2 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick Overview
This workflow polls the 1Password Events API every 15 minutes for recent audit events, detects vault export activity, creates an alert in TheHive, and posts a notification to a Slack channel with the export details and a link to the alert.

## How it works
1. Runs every 15 minutes on a schedule.
2. Requests the last 24 hours of audit events from the 1Password Events API.
3. Splits the returned events into individual items and keeps only events where the object type is `vault` and the action contains `export`.
4. Extracts key details (user, email, vault name/ID, timestamp, source IP, and event UUID) and prepares a TheHive base URL for link building.
5. Creates a new TheHive alert with severity/TLP/PAP settings, tags, and a description containing the vault export context.
6. Posts a Slack message to the selected channel summarizing the incident and linking directly to the created TheHive alert.

## Setup
1. Create and configure a 1Password Events API token with access to the `auditevents` feature and add it as an HTTP request credential used by the workflow.
2. Add TheHive credentials in n8n and set the correct TheHive instance URL, then ensure alert creation permissions are granted.
3. Add Slack OAuth2 credentials and select the destination Slack channel for the notification.
4. Replace the placeholder value for the TheHive base URL in the export-details step so the Slack alert link points to your TheHive UI.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Filter, TheHive 5

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
