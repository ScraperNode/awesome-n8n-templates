# ⚙️ Export Cloudflare domains with DNS records and settings to Google Sheets

> ⚡ **597 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## How it works

This workflow simply exports all your CloudFlare domains to Google Sheet to get high overview of all of your settings. This could help for easy debugging, searching or similar needs. 
In flow simple pagging nodes are used to iterate over all your domains, because this list could be huge. 
For each host we are merging DNS & Settings and transforming them into columns for all our domains.

## Requirements

For storing and processing of data in this flow you will need:

- CloudFlare.com API key/token - for retrieving your data (https://dash.cloudflare.com/:account/api-tokens) (need full access)
- Google Spreadsheet auth connected in your n8n Credentials
- Google Spreadsheet template - you can copy [my sheet](https://docs.google.com/spreadsheets/d/1jt6od8FMt-Yo7A_CPGuyfqWzL7HJk6SZmQQFO6kkWBo/edit?usp=sharing) as starting point, start by copying it to your account 
- Match Sheet ID in 'Export' node to your newly created.

#### Official CloudFlare api Documentation
For full details and specifications please use API documentation from: https://developers.cloudflare.com/api/

### Potential API timeouts
If you encounter CF API timeouts - I would suggest to only put somewhere in the loop simple sleep/wait node - for couple of seconds - and it should resolve timeouts.

### Google Sheet
I've used simple Google Sheet feature `conditional formatting` to visually distinct my on|off toggles that was of my interest to easily get high overview for debuggint some of the settings on my hosts - but please use your own logic or change it completely.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
