# 🔒 Detect and route cybersecurity threats with SIEM, Slack, email and PagerDuty

> ⚡ **50 views** · 🔒 [SecOps & Security Automation](../)

## Description

This n8n workflow proactively scans and aggregates threat intelligence, network logs, and vulnerability data every 15 minutes to detect emerging risks across the infrastructure. It analyzes anomalies, correlates indicators, assigns severity, triggers critical alerts, and generates executive-ready summaries—enabling security teams to act before threats escalate.

### How it works

1. **Collect** — Fetches network logs from SIEM, vulnerability scan results, and external threat intel feeds in parallel
2. **Merge & analyze** — Combines all data, then detects brute force attacks, malware, critical CVEs, suspicious traffic, and IOC matches
3. **Route by severity** — Critical/High threats go to immediate alerting; Medium/Low are logged to the database
4. **Alert** — Sends Slack alert, detailed email to SOC, creates a PagerDuty incident, and opens a ticket
5. **Log** — Stores Medium/Low threats to SIEM and PostgreSQL for audit trail
6. **Report** — Merges all paths and posts a scan summary to the Slack monitoring channel

### Setup steps

1. **SIEM** — Replace `your-siem-system.com` with your SIEM endpoint in both the log fetch and log write nodes
2. **Vulnerability scanner** — Update the scanner URL and replace `YOUR_API_KEY` with your credentials
3. **Threat intel** — Add your API key to the threat intelligence feed node header
4. **PagerDuty** — Replace `YOUR_PAGERDUTY_KEY` and `YOUR_SERVICE_ID` in the PagerDuty node
5. **Ticketing** — Update the ticket URL to your Jira or ServiceNow instance and add `YOUR_TICKET_API_KEY`
6. **Slack** — Set the correct channel IDs in both Slack nodes (alerts channel and monitoring channel)
7. **Email** — Configure SMTP credentials; update `from` and `to` addresses in the email node
8. **PostgreSQL** — Ensure a `threat_log` table exists with columns: severity, type, description, timestamp, action_required

### Industries That Benefit
* **Enterprise IT/SOC:** Scale threat detection without alert fatigue.
* **MSP/MSSP:** Offer proactive monitoring to clients with automated reporting.
* **Finance & Banking:** Meet FFIEC and PCI DSS continuous monitoring requirements.
* **Healthcare:** Detect ransomware precursors before patient data is locked.
* **Critical Infrastructure (OT):** Bridge IT/OT visibility with unified alerting.

### Prerequisites
* SIEM with API access (Splunk, QRadar, ELK)
* Vulnerability scanner API (Qualys, Nessus, OpenVAS)
* Threat intelligence feed (OTX, MISP, commercial)
* n8n instance with Schedule, HTTP Request, Slack, and Database nodes
* Slack workspace, SMTP, or Twilio for notifications
* ITSM system (Jira, ServiceNow) with create permission

### Modification Options
* Add UEBA (User Entity Behavior Analytics) integration.
* Integrate with SOAR for auto-containment on Critical alerts.
* Enable geo-mapping of malicious IPs.
* Add CVE trend dashboard via Grafana export.
* Trigger on-demand scans via webhook (e.g., post-pen-test).
* Export to security data lake for ML training.

**Explore More Proactive Security Automations:**  
[Contact us](https://www.oneclickitsolution.com/contact-us/) to build AI-driven threat hunting, automated patching, and zero-trust enforcement workflows with n8n.

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
