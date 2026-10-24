# 🔒 Monitor Entra ID high-risk users with Microsoft Graph, TheHive and Slack

> ⚡ **38 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick Overview
This workflow polls Microsoft Entra ID Protection for new high-risk risk detections, aggregates them per user, enriches them with risky-user and recent sign-in context from Microsoft Graph, then creates or updates matching alerts in TheHive and posts a summary to a Slack security channel.

## How it works
1. Runs every 30 minutes on a schedule.
2. Queries Microsoft Graph Identity Protection for risk detections with risk level set to high from the last 20 minutes, following @odata.nextLink pagination.
3. Groups detections by user and aggregates key context such as detection types, risk states, IP addresses, locations, and first/last detection timestamps.
4. Retrieves additional user context from Microsoft Graph by fetching the risky user record and the user’s five most recent sign-in events.
5. Correlates deterministic signals (for example privileged roles, multiple countries, confirmed compromise state, or non-compliant devices) to classify severity and build a detailed incident description.
6. Queries TheHive for existing open alerts of type entra-id-risk and either updates the matching alert (by sourceRef) or creates a new alert with observables.
7. Posts a formatted alert summary and TheHive reference to a chosen Slack channel.

## Setup
1. Create a Microsoft Entra ID (Microsoft Graph) OAuth2 credential with permissions for IdentityRiskEvent.Read.All, IdentityRiskyUser.Read.All, and AuditLog.Read.All.
2. Add a TheHive 5 credential with permission to query, create, and update alerts, and ensure your TheHive instance is reachable from n8n.
3. Add a Slack OAuth2 credential and select the security/SOC channel to post notifications to.
4. Review and adjust the lookback filter (currently last 20 minutes) and schedule interval (every 30 minutes) to match your monitoring requirements.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, TheHive 5

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
