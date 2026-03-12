# 🔒 Manage vulnerabilities end-to-end with GPT-4, Jira, Slack and Google Sheets

> ⚡ **4 views** · 🔒 [SecOps & Security Automation](../)

## Description

Automates the full vulnerability lifecycle — from scheduled scanning and data aggregation to intelligent prioritization, ticket creation, real-time alerting, weekly reporting, and centralized tracking. Ensures critical vulnerabilities are patched quickly while maintaining audit-ready logs and executive visibility.

### How it works

1. **Dual Trigger** - Scheduled daily scans at 6 AM + on-demand webhook for emergency scans
2. **Multi-Scanner Aggregation** - Pulls findings from Nessus, Qualys, and custom scanner APIs in parallel
3. **Normalize & Deduplicate** - Unifies scan results into a standard CVE schema, removes duplicates
4. **GPT-4 Risk Prioritization** - AI enriches each vuln with exploitability context, business impact, and remediation urgency
5. **Severity Gate** - Routes Critical/High vulns to expedited track; Medium/Low to standard queue
6. **Jira Ticket Creation** - Auto-creates structured remediation tickets with SLA-based due dates
7. **Real-Time Alerting** - Sends Slack alerts for Critical vulns and email digests for High findings
8. **Patch Verification** - Checks remediation status against scanner re-scan results
9. **Weekly Executive Report** - Generates CISO-ready KPI summary and sends to leadership
10. **Audit Log** - Writes immutable compliance log to Google Sheets for SOC2/ISO 27001

### Setup Steps

1. Import workflow into n8n
2. Configure credentials:
   - **OpenAI API** — GPT-4o for risk prioritization
   - **Jira API** — Ticket creation and tracking
   - **Slack** — Critical vulnerability alerts
   - **Google Sheets** — Vulnerability registry and audit log
   - **SMTP / Gmail** — Executive and team email reports
3. Set your scanner API endpoints and tokens in aggregation nodes
4. Configure Jira project key and SLA thresholds
5. Set Slack channel IDs for security team alerts
6. Schedule weekly report trigger to your preferred day/time
7. Activate both the scheduled and webhook triggers

### CVE Severity SLA Targets
- 🔴 **CRITICAL (CVSS 9.0–10.0)** — Patch within 24 hours
- 🟠 **HIGH (CVSS 7.0–8.9)** — Patch within 7 days
- 🟡 **MEDIUM (CVSS 4.0–6.9)** — Patch within 30 days
- 🟢 **LOW (CVSS 0.1–3.9)** — Patch within 90 days

### Sample Scanner Payload (Nessus)
```json
{
  "scanId": "SCAN-2025-0042",
  "scanner": "nessus",
  "targetHost": "192.168.1.105",
  "hostName": "prod-db-01",
  "cveId": "CVE-2024-21413",
  "cvssScore": 9.8,
  "pluginId": "212105",
  "description": "Microsoft Outlook RCE vulnerability"
}
```

### Features
- **Multi-scanner normalization** — Nessus, Qualys, and custom scanners unified
- **AI-powered exploit context** — GPT-4 adds CISA KEV status, weaponization likelihood
- **SLA-driven Jira tickets** — auto-assigns, sets due dates, links CVE details
- **Executive KPI dashboard** — weekly metrics: MTTD, MTTR, patch compliance rate
- **Audit-ready log** — every vuln tracked from detection to closure

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
