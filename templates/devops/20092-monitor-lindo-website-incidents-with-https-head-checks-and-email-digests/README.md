# ⚙️ Monitor Lindo website incidents with HTTPS HEAD checks and email digests

> ⚡ **4 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs on a schedule to pull your website inventory from Lindo, probe each public URL twice via HTTPS HEAD requests, and email a reviewer only when there are new incidents, recoveries, or a periodic portfolio digest.

## How it works
1. Runs on a schedule (and can also be started manually for testing) and loads email and digest settings.
2. Validates the sender/reviewer email addresses and the digest interval to ensure the report is configured.
3. Calls the Lindo API to list all websites in the workspace and normalizes each entry into a valid public HTTPS URL.
4. Checks each website’s reachability with an unauthenticated HTTPS HEAD request, waits 30 seconds, then runs a second confirmation HEAD check.
5. Classifies each site as healthy, incident (two failures), or transient (only the confirmation fails) and compiles a full report with both samples.
6. Compares current results to the last stored portfolio state in n8n static data to detect new incidents, recoveries, and whether a digest is due.
7. Emails the incident update or digest via SMTP when needed, then commits the updated monitoring baseline for the next run.

## Setup
1. Create HTTP Header Auth with header name Authorization and value Bearer YOUR_LINDO_API_KEY. Select it only in the Lindo inventory node; leave both public website probes unauthenticated.
2. Add an SMTP email credential and set valid fromEmail and reviewerEmail values in the monitoring settings.
3. Review and set digestDays (1–30), then activate the schedule interval you want (default is every 30 minutes).

## Requirements
- Lindo API access, SMTP and an n8n instance using built-in nodes. Keep executions sequential and verify two active scheduled executions; manual tests do not persist the monitoring baseline.

## Customization
- Adjust the schedule and digestDays (default seven days), or route reports to your incident-management service. Use a database or Data Table for concurrent workloads or portfolios above 1000 websites.

## Additional info
Two failed samples open an incident; a healthy confirmation resolves a previous incident. A transient second-sample failure preserves prior state. Repeat incidents are suppressed, while the first active run and periodic digests include the portfolio. HEAD checks measure reachability, not page content or continuous uptime. Redirects are not followed; 403/405 may indicate HEAD restrictions. Removed inventory entries are not reported as recovered. Invalid domains or incomplete inventories stop execution; configure separate n8n execution-error notifications. State advances after successful delivery, so delivery failures may repeat notifications.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
