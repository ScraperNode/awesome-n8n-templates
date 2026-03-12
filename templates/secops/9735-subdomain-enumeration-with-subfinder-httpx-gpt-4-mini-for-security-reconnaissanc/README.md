# 🔒 Subdomain enumeration with Subfinder, HTTPX & GPT-4-Mini for security reconnaissance

> ⚡ **1,807 views** · 🔒 [SecOps & Security Automation](../)

## Description

Generates a wordlist of 1,000–15,000 subdomains created by an AI agent by correlating detected technologies and recurring patterns.
## **Objective**
Assist security researchers, bug bounty hunters, and web pentesters in the reconnaissance phase by incorporating an AI agent that generates additional potential subdomains. This enables discovery of assets outside the scope of traditional scans and expands the analyzable attack surface.
## **How it works**
1. The user uploads a list of domains to scan (scope).
2. The workflow performs a passive, comprehensive scan using four sources (subfinder, assetfinder, crt.sh, Wayback Machine).
3. The scan results and detected technologies are passed to an AI agent.
4. The agent runs in a loop up to 20 iterations, generating new subdomains each pass (average output depends on input and model).
5. Generated subdomains are validated and deduplicated. Syntax is checked and availability is tested (host active / httpx).
### Requirements
- SSH access with a root user and the following tools:

1. [Subfinder](https://github.com/projectdiscovery/subfinder)
2. [Assetfinder](https://github.com/tomnomnom/assetfinder)
3. [HTTPX](https://github.com/projectdiscovery/httpx)

It is recommended to use a VPS with SSH because if the scope is very large the workflow will take a long time.

## 🔗 Nodes Used

HTTP Request, Webhook, SSH, Convert to File, Extract from File, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
