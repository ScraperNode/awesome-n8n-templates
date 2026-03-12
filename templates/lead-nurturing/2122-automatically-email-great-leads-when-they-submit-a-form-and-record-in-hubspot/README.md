# 💬 Automatically email great leads when they submit a form and record in HubSpot

> ⚡ **3,934 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Use case
This workflow automatically qualifies great leads from a form and sends them an email 😮..
It also adds the user to Hubspot if not already added and records the outreach.

## How to setup
1. Add you **MadKudu**, **Hunter**, and **Gmail** credentials 
2. Setup your **HubSpot** Oauth2 creds using [n8n docs](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.hubspottrigger/)
3. Set the email content and subject
4. Click the Test Workflow button, enter your email and check the Slack channel
5. Activate the workflow and use the form trigger production URL to collect your leads in a smart way 

## How to adjust this template
You may want to raise or lower the threshold for your leads, as you see fit. 
You also need to update the content (the email and the subject), obviously 😅.

## 🔗 Nodes Used

HTTP Request, HubSpot, Hunter, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
