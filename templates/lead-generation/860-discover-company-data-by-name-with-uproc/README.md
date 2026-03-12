# 🎣 Discover company data by name with uProc

> ⚡ **1,042 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Do you want to discover company-related information to enrich a signup process?

This workflow enriches any company by name using the uProc [**Get Company by Name tool**](https://app.uproc.io/#/tools/processor/get/company/by-name).
This tool combines Google Maps and emails research on the internet to return results. You get no results if the company has no presence on Google Maps. 

![workflow-screenshot](fileId:359)

You need to add your credentials (Email and API Key - real -) located at [**Integration section**](https://app.uproc.io/#/settings/integration) to n8n.

You can replace node "Create Company Item" with any other supported service returning Company names and countries, like Hubspot, Google Sheets, MySQL, or Typeform.

You can set up the uProc node with several parameters:
- country: the country name you want to use.
- name: the name of the company you need to locate.

Every "uProc" node returns the next fields per every located company:
- name: Contains the company's given name.
- email: Contains the company's given email.
- cif: Contains company's cif number.
- address: Contains company's formatted address.
- city: Contains the city location of the company.
- state: Contains province location of the company.
- county: Contains state location of the company
- country: Contains country location of the company
- zipcode: Contains zipcode code of the company
- phone: Contains phone number of the company
- website: Contains website of the company
- latitude: Contains latitude of the company
- longitude: Contains longitude of the company
 
Next, you can save results to a CRM or Google Sheets, and prepare returned email or phone to launch an email or telemarketing campaign.

## 🔗 Nodes Used

Function Item, Start, uProc

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
