# 🎣 Enrich HubSpot sales sequence contacts with Lusha and route to outreach

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works
1. Triggers when a contact property changes in HubSpot (e.g., added to a sequence)
2. Lusha enriches the contact with verified email, direct phone, and seniority
3. A prospect record is built and validated — contacts with email are sent to your outreach tool and updated in HubSpot
4. Contacts missing email are logged and a Slack notification alerts the team

## Set up steps
1. Install the [Lusha community node](https://www.npmjs.com/package/@lusha-org/n8n-nodes-lusha)
2. Add your Lusha API, HubSpot, and Slack credentials
3. Configure the HubSpot trigger to listen for the property change that signals sequence enrollment
4. Update the outreach HTTP node with your engagement platform's API endpoint

## 🔗 Nodes Used

HTTP Request, Slack, HubSpot, HubSpot Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
