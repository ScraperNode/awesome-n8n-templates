# 🎣 Detect web visitors country by IP address with uProc

> ⚡ **1,009 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Do you want to know where a web visitor lives? 

This workflow enriches any lead by IP address using the uProc.io [**Location By IP address tool**](https://app.uproc.io/#/tools/processor/get/location/by-ip) and sends an email in Spanish or English depending on the detected web visitor country.

![workflow-screenshot](fileId:353)

You need to add your credentials (Email and API Key - real -) located at [**Integration section**](https://app.uproc.io/#/settings/integration) to n8n.

Node "Create IP and Email Item" can be replaced by any other supported service with IP and Email values, like Mailchimp, Calendly, or MySQL.

The "uProc" node returns the location of the provided IP address. 

"If" node checks if the web visitor country code belongs to Spain (ES Isocode). If positive, we use the Spanish language in our emails. Otherwise, we will use the English language in our communications.

Depending on the detected country code, we use the Amazon SES node to send the customized email adapted to the right language.

## 🔗 Nodes Used

Function Item, Start, AWS SES, uProc

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
