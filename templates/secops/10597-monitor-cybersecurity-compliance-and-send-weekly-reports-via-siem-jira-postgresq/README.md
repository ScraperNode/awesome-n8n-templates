# 🔒 Monitor cybersecurity compliance and send weekly reports via SIEM, Jira, PostgreSQL, Slack and email

> ⚡ **91 views** · 🔒 [SecOps & Security Automation](../)

## Description

This n8n workflow automates **continuous compliance monitoring** across IT, OT, and cloud environments by aggregating security controls, validating policies (ISO 27001, NIST, GDPR, SOC2), detecting anomalies in logs and configurations, generating real-time alerts, creating remediation tickets, and delivering **audit-ready weekly reports** with compliance scorecards, risk trends, and evidence logs.

## How it works

1. **Trigger** — Runs every Monday at 9 AM
2. **Scan & collect** — Initiates full security scan and fetches 7 days of SIEM logs in parallel
3. **Analyze** — Detects log anomalies, scores policy controls, classifies as COMPLIANT / WARNING / NON-COMPLIANT
4. **Remediate** — Creates Jira tickets for findings; sends critical alerts for non-compliant status
5. **Store** — Saves report to PostgreSQL for historical trend tracking
6. **Report** — Generates HTML compliance scorecard and delivers via Email + Slack

## Setup steps

1. **Security APIs** — Replace placeholder URLs with your SIEM, vulnerability scanner, and policy engine
2. **PostgreSQL** — Create a `compliance_reports` table to store weekly results
3. **Jira** — Update the ticket API URL with your Jira or ServiceNow instance
4. **Slack** — Add your incoming webhook URL to the Slack node
5. **Email** — Configure SMTP credentials and set `from` / `to` addresses
6. **Test** — Run manually to verify all connections, then activate


## Industries That Benefit
* **Finance:** Automate **FFIEC, GLBA, SOX** reporting.
* **Healthcare:** Prove **HIPAA Security Rule** compliance.
* **Government:** Streamline **FISMA, NIST 800-53** audits.
* **SaaS & Tech:** Scale **SOC2, ISO 27001** for customer trust.
* **Critical Infrastructure:** Meet **NERC CIP, IEC 62443**.


## Prerequisites
* SIEM with API (Splunk, ELK, QRadar)
* Configuration assessment tools (Tenable, AWS Config)
* Cloud APIs (AWS, Azure, GCP)
* ITSM (Jira, ServiceNow) with API access
* n8n with Schedule, HTTP, Database, Email, and Slack nodes
* SMTP/Slack/Twilio for notifications
* Compliance framework mapping (CSV)


## Modification Options
* Add **GRC platform sync** (RSA Archer, OneTrust).
* Enable **continuous control monitoring (CCM)** with real-time feeds.
* Integrate **digital signatures** for audit evidence.
* Auto-generate **POA&M (Plan of Action & Milestones)**.
* Support **custom frameworks** via JSON upload.
* Trigger **pen test scheduling** on low compliance scores.


**Explore More Compliance Automation:**  
[Contact us](https://www.oneclickitsolution.com/contact-us/) to build **zero-trust policy enforcement**, **automated evidence collection**, and **regulatory reporting as code** with n8n and AI.

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
