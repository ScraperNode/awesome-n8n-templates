# 💬 Send postcards to contacts automatically using CentralStationCRM and EchtPost

> ⚡ **128 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Workflow Overview
This workflow benefits anyone, who:
* wants to automate sending Postcards to tagged CentralStationCRM contacts

## Tools in this Workflow 
* [CentralStationCRM](https://centralstationcrm.de) - the simple and intuitive CRM Software for small teams.
* [EchtPost](https://echtpost.de) - send postcards online

## Workflow Screenshot
![Send Postcards to Contacts Automatically using CentralStationCRM and EchtPost  n8n 20250723 at 4.29.30 PM.jpg](fileId:1848)

## Workflow Description
This workflow consists of:
* a webhook trigger
* a set node
* an if node
* an HTTP request

### The Webhook Trigger
The webhook triggers when a person is updated in CentralStationCRM. 

The persons data is sent to n8n, including the company name and the address. 

### The Set node
This node filters the webhook data for just the data the EchtPost node needs. It also transforms the country field to the associated country code (i.e. "Deutschland" -&gt; "DE")

### The if node
This node checks if there is an "EchtPost" tag in the persons data.
-&gt; if false: do nothing
-&gt; if true: go to HTTP request

### The HTTP Request
This node sends the persons name, address and country code alongside with the id of the EchtPost template (inserted manually in the node) to EchtPost. It also needs an E-Mail-Adress for a confirmation mail.

The data starts a "Mail in 3 days" process with the EchtPost service, which mails a postcard with that template to the person.

## Preconditions 
For this workflow, you need:
* a CentralStationCRM account with API access
* an EchtPost account with API access
* an EchtPost template, with a message, and the templates ID

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
