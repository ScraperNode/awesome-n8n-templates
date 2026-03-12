# 🔒 Automate external attack surface mapping with Shodan API and DNS lookups

> ⚡ **741 views** · 🔒 [SecOps & Security Automation](../)

## Description

The **Bug Bounty Target Recon** n8n workflow is a powerful automation tool for security professionals and ethical hackers.

It efficiently automates the time-consuming process of external attack surface mapping.

By taking a domain, the workflow performs DNS Lookups to identify all associated IP addresses, and then utilizes the Shodan API to query:

- Detailed service banners
- Open ports
- Technologies
- Known vulnerabilities

This system delivers crucial, organized OSINT data, saving the user hours of manual scripting and reconnaissance, and providing a clear, actionable map of a target's exposed infrastructure.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
