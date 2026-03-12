# 🔒 IP threat intelligence report generator with VirusTotal, OpenAI and Google Docs

> ⚡ **643 views** · 🔒 [SecOps & Security Automation](../)

## Description

Cybersec IP Intelligence Gatherer
---
This project utilizes the VirusTotal node and Geolocation node to thoroughly gather data on a provided IP address. 

From there a LLM AI assistant will assess the gathered data and create a report that will then be uploaded to Google Docs.

___

This workflow is perfect for:
- Cybersecurity Analysis
- Security Audits
- Penetration Testing
- Ethical Hacking

---
1. Configure Virus Total Node Credentials **Double click** to edit and enter your VirusTotal credentials. This node will assess the target IP's reputation.
2. Configure OpenAI Node Credentials **Double click** to edit and enter your OpenAI credentials.
3. Configure Google OAuth credentials **Double click** to edit and configure this node with your Google credentials and Sheet Settings.
5. Click the orange **'Execute Workflow'** button.
6. Enter an IP address and click 'submit' to generate a report.

## 🔗 Nodes Used

HTTP Request, Google Docs, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
