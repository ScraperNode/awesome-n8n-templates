# 💬 Send outreach/cold email using Gmail to new HubSpot contacts

> ⚡ **3,743 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Use case

This workflow uses Gmail to send outreach emails to new Hubspot contacts that have yet to be contacted (usually unknown contacts), and records the outreach in Hubspot. 


## Setup
1. [Setup HubSpot Oauth2 creds](https://docs.n8n.io/integrations/builtin/credentials/hubspot/) (Be careful with scopes. They have to be exact, not less or more. Yes, it's not simple, but it's well documented in the n8n docs. Be smarter than me, read the docs)
2. Setup Gmail creds. 
3. Change the from email and from name in the `Record outreach in HubSpot` node

## How to adjust this template to your needs
- Change the email message in the `Set keys` node
- Think about your criteria to reach out to new contacts. Here we simply filter for only contacts with unknown dates.

## 🔗 Nodes Used

HubSpot, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
