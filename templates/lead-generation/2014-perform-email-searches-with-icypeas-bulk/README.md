# 🎣 Perform email searches with Icypeas (bulk)

> ⚡ **725 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This template can be used to verify email addresses with [Icypeas](https://www.icypeas.com/). Be sure to have an active account to use this template. 



**How it works**
This workflow can be divided into four steps :

    1. The workflow initiates with a manual trigger (On clicking ‘execute’).
    2. It reads your Google sheet file.
    3. It connects to your Icypeas account.
    4. It performs an HTTP request to search for the email addresses.

**Set up steps**
    1. You will need a formated Google Sheet file with firstnames,lastnames and company/domain names. 
    2. You will need a working icypeas account to run the workflow and get your API Key, API Secret and User ID.
    3. You will need a personn firstname, lastname and domain/company name to perform the search.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
