# 🔒 Analyze email headers for IPs and spoofing

> ⚡ **5,071 views** · 🔒 [SecOps & Security Automation](../)

## Description

This n8n workflow is designed to analyze email headers received via a webhook. The workflow splits into two main paths based on the presence of the received and authentication results headers.

In the first path, if received headers are present, the workflow extracts IP addresses from these headers and then queries the IP Quality Score API to gather information about the IP addresses, including fraud score, abuse history, organization, and more. Geolocation data is also obtained from the IP-API API. The workflow collects and aggregates this information for each IP address.

In the second path, if authentication-results headers are present, the workflow extracts SPF, DKIM, and DMARC authentication results. It then evaluates these results and sets fields accordingly (e.g., SPF pass/fail/neutral).

The paths merge their results, and the workflow responds to the original webhook with the aggregated analysis, including IP information and authentication results.

Potential issues during setup include ensuring proper configuration of the webhook calls with header authentication, handling authentication and API keys for the IP Quality Score API, and addressing any discrepancies or errors in the logic nodes, such as handling SPF, DKIM, and DMARC results correctly. Additionally, thorough testing with various email header formats is essential to ensure accurate analysis and response.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
