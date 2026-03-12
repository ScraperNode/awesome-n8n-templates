# 📊 Automate company research using ProspectLens and Google Sheets

> ⚡ **5,184 views** · 📊 [Market Research & Insights](../)

## Description

This n8n workflow automates the process of researching companies by gathering relevant data such as traffic volume, foundation details, funding information, founders, and more.

The workflow leverages the [ProspectLens API](https://prospectlens.net), which is particularly useful for researching companies commonly found on Crunchbase and LinkedIn.

**ProspectLens** is an API that provides very detailed company data. All you need to do is supply the company's domain name.

You can obtain your ProspectLens API key here:
[https://apiroad.net/marketplace/apis/prospectlens](https://apiroad.net/marketplace/apis/prospectlens)

In n8n, create a new "HTTP Header" credential. Set `x-apiroad-key` as the "Name" and enter your APIRoad API key as the "Value". Use this credential in the HTTP Request node of the workflow.


![20240823 at 18.27.png](fileId:832)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
