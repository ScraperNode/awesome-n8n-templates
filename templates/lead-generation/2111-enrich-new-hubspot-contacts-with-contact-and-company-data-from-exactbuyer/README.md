# 🎣 Enrich new Hubspot contacts with contact and company data from ExactBuyer

> ⚡ **1,814 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Use Case 

This workflow aims to enrich new contacts in HubSpot. The more relevant the HubSpot profile, the more useful it is. Once active, this n8n workflow will update the social profiles, contact data (phone, email) as well as location data from ExactBuyer.

## Setup
1. Add HubSpot trigger credential (be careful, scopes must be exactly as in [n8n docs](https://docs.n8n.io/integrations/builtin/credentials/hubspot/) )
2. Add your Exact Buyer API key
3. Add HubSpot credential for update node (be careful, scopes must be same as [n8n docs](https://docs.n8n.io/integrations/builtin/credentials/hubspot/) for this. This is different from the trigger cred)
4. Activate workflow


## How to adjust this template
There's plenty of interesting info that ExactBuyer returns that could be helpful. Take a look and update this workflow to add what you need.

## 🔗 Nodes Used

HTTP Request, HubSpot, HubSpot Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
