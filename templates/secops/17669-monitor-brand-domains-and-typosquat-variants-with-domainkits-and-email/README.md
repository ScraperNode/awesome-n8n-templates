# 🔒 Monitor brand domains and typosquat variants with DomainKits and email

> ⚡ **23 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow runs daily to monitor newly registered domains matching your brand keyword and to check typosquat variants of your brand domain using DomainKits, then compiles WHOIS/DNS details into a CSV and emails a plaintext report.

## How it works
1. Runs daily at 14:00 UTC and sets the brand domain
2. Searches domains registered in the last 10 days containing your brand
3. Generates typosquat variants and captures which are registered
4. Batches those domains and looks up WHOIS and DNS in bulk, not one call per domain.
5. Builds the report,then emails it with a CSV attached

## Setup
1. Create a DomainKits account and upgrade to Premium — the REST API requires a Premium plan or higher. Sign up at [domainkits.com](https://domainkits.com), then generate an API key and add it as a DomainKits API credential in n8n. 
2. Select these four DomainKits nodes: NRD search, typosquat, bulk WHOIS and bulk DNS. 
3. Set your brand domain in the Set Brand node.
4. Configure the Email Send node with your SMTP credentials and set the to/from addresses. Adjust the daily schedule time if needed.

## Requirements
- DomainKits Premium API Key

## Additional info
For more information:

- API reference and key management: [https://domainkits.com/dev](https://domainkits.com/dev)
- OpenAPI 3.0 spec: [https://domainkits.com/dev/openapi.yaml](https://domainkits.com/dev/openapi.yaml)

## 🔗 Nodes Used

Send Email, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
