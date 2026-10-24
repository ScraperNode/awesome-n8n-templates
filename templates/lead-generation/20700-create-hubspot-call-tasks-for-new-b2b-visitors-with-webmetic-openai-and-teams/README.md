# 🎣 Create HubSpot call tasks for new B2B visitors with Webmetic, OpenAI and Teams

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Every minute, this workflow picks up companies Webmetic identified on your website for the first time. If HubSpot or any CRM shows an open deal, the deal owner gets a task. Otherwise Webmetic reveals a decision maker, OpenAI writes a call script, and the Team get's the new lead.

## How it works
1. When Scheduled Every Minute starts the workflow. A longer interval works too.
2. Fetch Webmetic Visits returns the companies Webmetic identified on your website in the last hour. Deduplicate Companies passes each company only once, across executions.
3. Filter Interested Companies skips companies below your minimum lead score (0 to 100).
4. Searches HubSpot for a matching company by domain and checks whether it has any open deals.
5. Post to HubSpot (or any CRM) Company Search finds the company by domain, and Check for open deals.
6. If no open deal exists, uses Webmetic to reveal a contact person and uses OpenAI to generate a short intecartion script based on the company profile and page views.
7. Upserts the contact in CRM, creates a call task containing the script, and posts an notification.

## Setup
1. In Webmetic, copy the Visitor Intelligence API key (app.webmetic.de → API keys) and complete the one-time contact setup there. Contact reveals only work after this step.
2. Create a Webmetic credential with the key and select it in Fetch Webmetic Visits and Find Contacts via Webmetic.
3. In Set Lead Criteria, enter your domain, minimum lead score, your company name, one sentence about what you sell, and the script language.
4. Add your CRM, AI and Notification credentials for any plattforms and starting using the workflow.

## Requirements
- A Webmetic account with tracking on your website. 

## Customization
- Choose departments and minimum level in Find Contacts via Webmetic, or reveal e-mail only instead of e-mail and phone.

## 🔗 Nodes Used

HTTP Request, HubSpot, Microsoft Teams, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
