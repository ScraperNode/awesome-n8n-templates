# ⚙️ Automate incident response with Jira, Slack, Google Sheets & Drive

> ⚡ **674 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## 📘 Description:
This workflow automates the incident response lifecycle — from creation to communication and archival.
It instantly creates Jira tickets for new incidents, alerts the on-call Slack team, generates timeline reports, logs the status in Google Sheets, and archives documentation to Google Drive — all automatically.
It helps engineering and DevOps teams respond faster, maintain audit trails, and ensure no incident details are lost, even after Slack or Jira history expires.

## ⚙️ What This Workflow Does (Step-by-Step)
- 🟢 Manual Trigger – Start the incident creation and alerting process manually on demand.
- 🏷️ Define Incident Metadata – Sets up standardized incident data (Service, Severity, Description) used across Jira, Slack, and Sheets for consistent processing.
- 🎫 Create Jira Incident Ticket – Automatically creates a Jira task with service, severity, and description fields.
-  Returns a unique Jira key and link for tracking.
- ✅ Validate Jira Ticket Creation Success – Confirms the Jira ticket was successfully created before continuing.
- True Path: Proceeds to Slack alerts and documentation flow.
- False Path: Logs the failure details to Google Sheets for debugging.
- 🚨 Log Jira Creation Failures to Error Sheet – Records any Jira API errors, permission issues, or timeouts to an error log sheet for reliability monitoring.
- 🔗 Combine Incident & Jira Data – Merges incident context with Jira ticket data to ensure all details are unified for downstream notifications.
- 💬 Format Incident Alert for Slack – Generates a rich Slack message containing Jira key, service, severity, and description with clickable Jira links.
- 📢 Alert On-Call Team in Slack – Posts the formatted message directly to the #oncall Slack channel to instantly notify engineers.
- 📋 Generate Incident Timeline Report – Parses Slack message content to create a detailed incident timeline including timestamps, service, severity, and placeholders for postmortem tracking.
- 📄 Convert Timeline to Text File – Converts the generated timeline into a structured .txt file for archival and compliance.
- ☁️ Archive Incident Timeline to Drive – Uploads the finalized incident report to Google Drive (“Incident Reports” folder) with timestamped filenames for traceability.
- 📊 Log Incident to Status Tracking Sheet – Appends Jira key, service, severity, and timestamp to the “status update” Google Sheet to build a live incident dashboard and enable SLA tracking.

## 🧩 Prerequisites
Jira account with API access
Google Sheets for “status update” and “error log” tracking
Slack workspace connected via API credentials
Google Drive access for archival

## 💡 Key Benefits
 ✅ Instant Slack alerts for new incidents
 ✅ Centralized Jira ticketing and tracking
 ✅ Automated timeline documentation for audits
 ✅ Seamless Google Drive archival and status logging
 ✅ Reduced MTTR through faster communication

## 👥 Perfect For
DevOps and SRE teams managing production incidents
Engineering managers overseeing uptime and reliability
Organizations needing automated post-incident documentation
Teams focused on SLA adherence and compliance reporting

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Jira Software, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
