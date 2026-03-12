# 🔒 Monitor zero-day threats with Anthropic Claude, Airtable, Slack and Jira

> ⚡ **130 views** · 🔒 [SecOps & Security Automation](../)

## Description

This workflow continuously monitors CVE databases, threat intelligence feeds, and public security advisories to surface emerging zero-day threats, correlates them against your registered infrastructure assets and software inventory, and uses Claude AI to score exploitability, assess business impact, and generate actionable remediation playbooks — all before attackers can operationalise the vulnerability.

### How it works

1. **Trigger** — Hourly schedule or on-demand webhook for immediate threat scans
2. **Load Asset Inventory** — Fetches registered infrastructure (IPs, hostnames, software, versions) from Airtable
3. **Scrape CVE Sources** — Queries NVD API, CISA KEV, and GitHub Security Advisories in parallel
4. **Fetch Threat Feeds** — Pulls OSINT feeds (AlienVault OTX, abuse.ch, Shodan) for active exploitation signals
5. **Normalise & Deduplicate** — Merges all findings, deduplicates by CVE ID, enriches with CVSS scores
6. **Correlate with Assets** — Matches CVEs to your specific software/version inventory
7. **AI Threat Assessment** — Claude AI scores exploitability, blast radius, and urgency per matched threat
8. **Filter Critical Findings** — Keeps only threats scoring above configurable risk threshold
9. **Route by Severity** — Branches CRITICAL / HIGH / MEDIUM for different response paths
10. **Alert SOC via Slack** — Immediate notification with threat summary and patch status
11. **Create Incident Tickets** — Auto-opens Jira/ServiceNow issues for CRITICAL and HIGH threats
12. **Email Security Team** — Detailed HTML threat brief with CVE details and remediation steps
13. **Update Threat Register** — Appends findings to Google Sheets threat intelligence log
14. **Trigger Patch Workflow** — Webhooks downstream patch management system for auto-remediation
15. **Return API Response** — Structured JSON result for SIEM/SOAR integration

### Setup Steps

1. Import workflow into n8n
2. Configure credentials:
   - **Anthropic API** — Claude AI for threat assessment
   - **NVD API Key** — NIST National Vulnerability Database
   - **CISA KEV** — Known Exploited Vulnerabilities catalogue (public)
   - **AlienVault OTX API** — Open Threat Exchange pulses
   - **Shodan API** — Internet exposure checks
   - **Airtable** — Asset/software inventory
   - **Google Sheets OAuth** — Threat intelligence log
   - **Slack OAuth** — SOC alerts
   - **Jira API** — Incident ticket creation
   - **SendGrid / SMTP** — Security team email digests
3. Register your asset inventory in Airtable (hostnames, IPs, software, versions)
4. Set your risk score threshold (default: 65) in the filter node
5. Set your Slack SOC channel IDs
6. Configure downstream patch webhook URL
7. Activate the workflow

### Sample Webhook Payload (On-Demand Scan)
```json
{
  "scanType": "targeted",
  "software": "Apache HTTP Server",
  "version": "2.4.51",
  "urgency": "high",
  "requestedBy": "soc-analyst@company.com"
}
```

### Threat Sources Monitored
- **NVD (NIST)** — Full CVE database with CVSS v3.1 scores
- **CISA KEV** — Actively exploited vulnerabilities catalogue
- **GitHub Security Advisories** — Open source dependency vulnerabilities
- **AlienVault OTX** — Community threat intelligence pulses
- **abuse.ch URLhaus** — Malware distribution and C2 URLs
- **Shodan** — Internet-exposed asset enumeration
- **EPSS** — Exploit Prediction Scoring System probabilities

### AI Assessment Dimensions
- **CVSS Score** — Base, temporal, and environmental scoring
- **EPSS Probability** — Likelihood of exploitation in the wild
- **Asset Exposure** — Internal vs external facing, attack surface
- **Patch Availability** — Vendor patch, workaround, or no fix status
- **Active Exploitation** — CISA KEV / OTX confirmation
- **Business Impact** — Confidentiality, integrity, availability impact
- **Blast Radius** — Number of affected assets and systems
- **Urgency Score** — Composite prioritisation score (0–100)

### Features
- Multi-source CVE aggregation with deduplication
- Asset correlation against software/version inventory
- EPSS-weighted AI exploitability scoring
- Automated CRITICAL/HIGH/MEDIUM severity routing
- Jira ticket creation with full CVE context
- Patch management webhook integration
- Full threat intelligence audit log
- SIEM/SOAR-ready JSON output


**Explore More Automation:**  
[Contact us](https://www.oneclickitsolution.com/contact-us/) to design AI-powered lead nurturing, content engagement, and multi-platform reply workflows tailored to your growth strategy.

## 🔗 Nodes Used

Airtable, Send Email, Google Sheets, HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
