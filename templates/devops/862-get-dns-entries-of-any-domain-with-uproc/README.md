# ⚙️ Get DNS entries of any domain with uProc

> ⚡ **1,706 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Do you want to control the DNS domain entries of your customers or servers?

This workflow gets DNS information of any domain using the uProc [**Get Domain DNS records tool**](https://app.uproc.io/#/tools/processor/get/domain/records).

You can use this workflow to check existing DNS records in real-time to ensure that any domain setup is correct.

![workflow-screenshot](fileId:361)

You need to add your credentials (Email and API Key - real -) located at [**Integration section**](https://app.uproc.io/#/settings/integration) to n8n.

You can replace "Create Domain Item" with any integration containing a domain, like Google Sheets, MySQL, or Zabbix server.

Every "uProc" node returns multiple items with the next fields per every item:
- type: Contains the DNS record type (A, ALIAS, AAAA, CERT, CNAME, MX, NAPTR, NS, PTR, SOA, SRV, TXT, URL).
- values: Contains the DNS record values.

## 🔗 Nodes Used

Function Item, Start, uProc

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
