# 🔒 Monitor SSL certificate of any domain with uProc

> ⚡ **2,991 views** · 🔒 [SecOps & Security Automation](../)

## Description

Do you want to check the SSL certificate expiration dates of your customers or servers?

This workflow gets information of an SSL certificate using the uProc [**Get Certificate by domain tool**](https://app.uproc.io/#/tools/processor/get/domain/certificate).
You can use this workflow to query SSL certificates in bulk and send alarms when any certificate has expired.

![workflow-screenshot](fileId:360)

You need to add your credentials (Email and API Key - real -) located at [**Integration section**](https://app.uproc.io/#/settings/integration) to n8n.

You can replace "Create Domain Item" with any integration containing a domain, like Google Sheets, MySQL, or Zabbix server.

Every "uProc" node returns the next fields per every analyzed SSL certificate:
- issuer: Contains the issuer.
- provider: Contains the provider.
- valid_from: Contains the start date.
- valid_to: Contains the end date.
- serial_number: Contains the serial number.
- type: Contains if supports one or multiple domains.
- protocol: Contains the protocol.
- valid: Contains its validity.
- domains: Contains all domains and subdomains supported.

An "IF" node detects if the certificate is valid or not.

Finally, the workflow sends an alarm to a Telegram channel to know if the certificate has expired.

## 🔗 Nodes Used

Function Item, Start, Telegram, uProc

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
