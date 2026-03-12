# 🔒 Track policy expiry dates and ownership with Google Sheets and Gmail notifications

> ⚡ **60 views** · 🔒 [SecOps & Security Automation](../)

## Description

Purpose
Automates the monitoring of policy documents for expiry and ownership gaps. Ensures accountability by sending proactive notifications when policies are nearing renewal deadlines or when no owner is assigned.

Key Benefits

Avoids missed policy reviews or lapses.

Enforces accountability by flagging missing owners.

Sends automated, clear email notifications.

Reduces manual tracking workload across teams.

Maintains an audit-ready record of policy metadata.

How It Works

Fetches policy metadata from Google Sheets.

Checks if policy expiry date is within 30 days.

Flags entries with blank owner fields.

Sends automated notifications to responsible teams.

Maintains an updated log of policy status for audits.

Requirements

Google Sheets (OAuth2) to store and manage policy metadata.

Gmail/SMTP node for notifications (optional).

Sheet must include:

policy_name

owner_email

last_reviewed

expiry_date

review_frequency_months

status

Customization Tips

Adjust expiry window to 60 or 90 days.

Replace Gmail with Slack/Teams notifications.

Integrate with Jira/ServiceNow for policy tasks.

Modify email templates to include escalation paths.

Compliance Alignment

ISO 27001: A.5.1.1 (Policies for Information Security)

NIST 800-53: PL-2 (System and Communications Protection Policy)

SOC 2: CC5.3 (Policies and Communication)

Supports lifecycle validation for external audits.

Supports

ISO 27001 Information Security

SOC 2 Compliance

NIST 800-53

ACSC Essential Eight

🔗 https://cyberpulsesolutions.com

## 🔗 Nodes Used

Google Sheets, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
