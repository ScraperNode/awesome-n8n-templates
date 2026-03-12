# 🔒 Malicious file detection & response: Wazuh to VirusTotal with Slack alerts

> ⚡ **2,643 views** · 🔒 [SecOps & Security Automation](../)

## Description

# Malicious File Detection & Threat Summary Automation using Wazuh + VirusTotal + n8n

This workflow helps SOC teams automate the detection and reporting of potentially malicious files using **Wazuh alerts**, **VirusTotal hash validation**, and integrated **summary/report generation**. It's ideal for analysts who want instant context and communication for file-based threats — without writing a single line of code.

---

## What It Does

When Wazuh detects a suspicious file:

- **Ingests Wazuh Alert**  
  A webhook node captures incoming alerts containing file hashes (SHA256/MD5).

- **Parses IOCs**  
  Extracts relevant indicators (file hash, filename, etc.).

- **Validates with VirusTotal**  
  Automatically checks the file hash reputation using VirusTotal's threat intelligence API.

- **Generates Human-Readable Summary**  
  Outputs a structured file report.

- **Routes Alerts Based on Threat Level**  
  - Sends a formatted email with the file summary using Gmail.  
  - If the file is deemed malicious/suspicious:
    - Creates a file-related incident ticket.  
    - Sends an instant Slack alert to notify the team.

---

## Tech Stack Used

- **Wazuh** – For endpoint alerting  
- **VirusTotal API** – For real-time hash validation  
- **n8n** – To orchestrate, parse, enrich, and communicate  
- **Slack, Gmail, Incident Tool** – To notify and take action

---

## Ideal Use Case

This template is designed for security teams looking to automate **file threat triage**, **IOC validation**, and **alert-to-ticket escalation**, with zero human delay.

---

## Included Nodes

- **Webhook** (Wazuh)
- **Function** (IOC extraction and summary)
- **HTTP Request** (VirusTotal)
- **If / Switch** (threat level check)
- **Gmail**, **Slack**, **Incident Creation**

---

## Tips

- Make sure to add your **VirusTotal API key** in the HTTP node.  
- Customize the **incident creation node** to fit your ticketing platform (Jira, ServiceNow, etc.).  
- Add logic to enrich the file alert further using WHOIS or sandbox reports if needed.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Gmail, ServiceNow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
