# 🔒 IP reputation check & SOC alerts with Splunk, VirusTotal and AlienVault

> ⚡ **1,877 views** · 🔒 [SecOps & Security Automation](../)

## Description

# IP Reputation Check & Threat Summary using Splunk + VirusTotal + AlienVault + n8n

This workflow automates IP reputation analysis using **Splunk alerts**, enriches data via **VirusTotal** and **AlienVault OTX**, and generates actionable threat summaries for SOC teams — all without any coding.

---

## What It Does

When a Splunk alert contains a suspicious IP:

- **Ingests the IP** from the Splunk alert via webhook.
- **Performs dual threat enrichment** using:
  - VirusTotal IP reputation & tags.
  - AlienVault OTX pulses, reputation & WHOIS.
- **Merges & processes** threat intel data.
- **Generates a rich HTML summary** for analyst review.
- **Routes action based on severity**:
  - Sends Slack alert for suspicious IPs.
  - Creates an incident in ServiceNow.
  - Emails a formatted HTML report to the SOC inbox.

---

## Tech Stack Used

- **Splunk** – SIEM alert source  
- **VirusTotal API** – Reputation check & analysis stats  
- **AlienVault OTX API** – Community threat intel & pulse info  
- **n8n** – For orchestration, merging, summary generation  
- **Slack, Gmail, ServiceNow** – For SOC notifications and ticketing

---

## Ideal Use Case

Perfect for security teams wanting to:

- Automatically validate IP reputation from SIEM logs
- Get quick context from multiple threat feeds
- Generate email-ready reports and escalate high-risk IPs

---

## Included Nodes

- Webhook (Splunk)
- Function nodes for IOC extraction and intel processing
- HTTP Request (VirusTotal & AlienVault)
- Merge + Switch nodes for conditional logic
- Gmail, Slack, ServiceNow integration

---

## Tips

- Add your **VirusTotal** and **AlienVault** credentials in n8n's credential manager.  
- Use the Switch node to route based on your internal threat score logic.  
- Easily extend this to include AbuseIPDB or GreyNoise for deeper enrichment.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Gmail, ServiceNow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
