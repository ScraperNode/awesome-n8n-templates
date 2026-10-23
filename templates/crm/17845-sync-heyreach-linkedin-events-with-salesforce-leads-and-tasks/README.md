# 🤝 Sync HeyReach LinkedIn events with Salesforce leads and tasks

> ⚡ **2 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives HeyReach campaign event webhooks and syncs them to Salesforce by finding or creating a Lead and logging each event as a completed Task with the message transcript and LinkedIn profile link.

## How it works
1. Receives a POST webhook from HeyReach for lead and messaging events.
2. Normalizes the payload, extracts lead identity (email and LinkedIn URL), and builds a Salesforce Task subject/description including the event label and message transcript.
3. Searches Salesforce for an existing Lead matching the email and/or a custom LinkedIn_Profile__c field.
4. If a matching Lead exists, creates a completed Salesforce Task linked to that Lead.
5. If no Lead is found, creates a new Salesforce Lead (including email, title, and LinkedIn_Profile__c) and then creates a completed Task linked to the new Lead.

## Setup
1. Add a Salesforce OAuth2 connection and ensure your Salesforce Lead object has a custom field API name LinkedIn_Profile__c to store the LinkedIn profile URL.
2. In HeyReach, create a webhook pointing to this workflow’s webhook URL path (/heyreach-events) and subscribe it to the event types you want to track.
3. Review and adjust the Salesforce field mappings (LeadSource, title, and Task status/fields) to match your Salesforce setup and reporting needs.

## 🔗 Nodes Used

Webhook, Salesforce

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
