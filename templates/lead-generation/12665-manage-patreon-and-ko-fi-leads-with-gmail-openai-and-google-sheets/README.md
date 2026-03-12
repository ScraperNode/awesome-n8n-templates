# 🎣 Manage Patreon and Ko-fi leads with Gmail, OpenAI and Google Sheets

> ⚡ **17 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who is this for?
This is for creators who run Patreon and/or Kofi pages, support donations and want to automate their communication process.

## About
This system is listening for webhooks from patreon and kofi.
Once received, it detects the service by looking at headers. 

For Kofi it parses and validates the payload to make sure it's not fake. Once validated, it checks whether the person is on your newsletter lead list. If not, it adds person to your newsletter list. Then it checks the status of the payload, either it's a donation, subscription or shop purchase. 

For Patreon it checks whether the person is on your newsletter lead list and adds him if not. Then it checks the payload type using AI and returns a status, e.g. new patron, cancelled subscription etc.

## Customization
For Kofi you can customize emails that you'll be sending to members. For shop orders you can add invoice generation, supplier file generation, connect with your stock etc.
For Patreon you can customize emails you'll send to followers and patrons.
For both you can enable a crm where you'll track how much each person paid you so you know whether somebody upgrades or downgrades their subscription based on CRM data.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
