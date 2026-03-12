# 🔒 Automate cybersecurity incident response with Claude AI, VirusTotal and Slack

> ⚡ **131 views** · 🔒 [SecOps & Security Automation](../)

## Description

This workflow automates end-to-end cybersecurity incident response by ingesting alerts from multiple sources, enriching threat intelligence, assessing severity with Claude AI, executing containment actions, notifying stakeholders, and creating audit-ready tickets.

### How it works

1. **Ingest Alert** - Webhook receives alerts from SIEM, EDR, firewall, IDS/IPS
2. **Validate & Normalize** - Standardizes alert format across all sources
3. **Enrich Threat Intel** - Queries VirusTotal, AbuseIPDB, Shodan for context
4. **AI Severity Assessment** - Claude AI classifies severity and recommends response
5. **Containment Actions** - Auto-blocks IPs, isolates hosts, revokes tokens based on severity
6. **Notify Stakeholders** - Alerts SOC team via Slack/email based on severity level
7. **Create Incident Ticket** - Logs to Jira/ServiceNow with full enrichment data
8. **Audit Log** - Writes compliance-ready record to Google Sheets

### Setup Steps

1. Import workflow into n8n
2. Configure credentials:
   - **Webhook** - Point your SIEM/EDR to the webhook URL
   - **Anthropic API** - Claude AI for severity classification
   - **VirusTotal API** - Threat intelligence enrichment
   - **AbuseIPDB API** - IP reputation checking
   - **Slack OAuth** - SOC team notifications
   - **Jira API** - Incident ticket creation
   - **Google Sheets** - Compliance audit log
3. Update firewall/EDR API endpoints in containment nodes
4. Set your Slack channel IDs and Jira project key
5. Activate the workflow

### Sample Alert Payload
```json
{
  "source": "splunk",
  "alertType": "brute_force",
  "sourceIP": "192.168.1.100",
  "destinationIP": "10.0.0.5",
  "affectedHost": "prod-server-01",
  "affectedUser": "admin@company.com",
  "timestamp": "2025-02-22T10:30:00Z",
  "rawLog": "Failed login attempt x50 in 60s"
}
```

### Features
- **Multi-source ingestion** - SIEM, EDR, firewall, IDS/IPS
- **Real-time threat enrichment** from VirusTotal & AbuseIPDB
- **AI-powered severity scoring** with recommended playbooks
- **Automated containment** for Critical/High severity
- **Compliance audit trail** with full chain of custody

### Industries That Benefit
* **Financial Services:** Rapid containment of fraud and data exfiltration attempts.
* **Healthcare:** Protect PHI with automated isolation and HIPAA-compliant logging.
* **Retail & E-commerce:** Prevent POS breaches and payment card compromises.
* **Government & Defense:** Enforce zero-trust response with full audit trails.
* **Critical Infrastructure:** Contain OT threats before operational disruption.

### Prerequisites
* SIEM/EDR alerting configured to forward to webhook
* API access to threat intelligence platforms (VirusTotal, OTX, MISP)
* EDR (CrowdStrike, Carbon Black) or firewall API credentials
* ITSM system (Jira, ServiceNow) with API access
* n8n instance with HTTP Request, Function, Slack, and Email nodes enabled
* SMTP, Slack, or SMS gateway credentials

### Modification Options
* Add phishing triage with email detonation sandbox.
* Integrate SOAR playbooks for ransomware response.
* Enable auto-remediation (e.g., disable user in AD).
* Add forensic artifact collection (memory dump, logs).
* Trigger war room creation in Slack/Teams for Major incidents.
* Export incidents to case management (e.g., TheHive, Cortex).

**Explore More Cybersecurity Automation Workflows:**  
[Contact us](https://www.oneclickitsolution.com/contact-us/) to build custom SOAR, threat hunting, and compliance automation solutions powered by n8n and AI.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
