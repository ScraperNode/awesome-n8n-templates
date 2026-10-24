# 👥 Automate new student onboarding from Close CRM to Airtable, Mighty Networks, Intercom and Slack

> ⚡ **35 views** · 👥 [HR & Recruitment](../)

## Description

## Who is this for?

This workflow is built for **education businesses**, **course creators**, **coaching programs**, and **online academies** that use **Close CRM** for sales and need to automate everything that happens after a deal closes.

If your team is manually creating Airtable records, sending community invites, setting up support contacts, and pinging Slack every time a new student enrolls this template handles all of it automatically.

## What problem does this solve?

- Post-sale onboarding involves 5+ manual steps across different platforms, and things get missed
- New students wait hours (or days) for their community invite and welcome emails
- No single source of truth student data lives in CRM, Airtable, community platform, and support tool separately
- When one step fails (e.g., Airtable is down), the entire onboarding stalls with no visibility

## What this workflow does

When a deal is marked **"Closed/Won"** in Close CRM, this workflow automatically:

- **Validates the data** filters for won opportunities only, validates the student's email before proceeding
- **Fetches full CRM context** pulls lead details from Close CRM's API and maps custom field IDs to human-readable names
- **Routes by program tier** uses a Switch node to direct students into different onboarding paths based on what they purchased
- **Creates Airtable records** adds entries to both a Student Onboarding tracker and a Clients table with full contact details, program info, and sales rep
- **Invites to Mighty Networks** sends a community invitation to the student's email automatically
- **Creates Intercom contact** sets up a support profile so your CS team is ready on day one
- **Notifies your team on Slack** sends a success message, or step-specific error alerts if any integration fails

Each integration step has independent error handling if Airtable goes down, the community invite and Intercom sync still run, and your team gets a specific Slack alert about the Airtable failure.

## Setup

### Credentials needed
- **Close CRM** API credentials
- **Airtable** API credentials
- **Mighty Networks** API credentials
- **Intercom** OAuth credentials
- **Slack** OAuth credentials
- **Kit (ConvertKit)** API credentials (optional, for email drip sequence)

### Configuration
1. In Close CRM → Settings → Webhooks, create a webhook that fires on opportunity status changes. Point it to the n8n webhook URL shown in the **Close CRM Webhook** node
2. Open the Airtable nodes and update the base ID, table IDs, and field mappings to match your Airtable setup
3. Update the Mighty Networks community/group IDs in the invite node
4. Set the Slack channel ID to your onboarding notifications channel
5. (Optional) Set your Kit sequence ID if using the email drip add-on

### Test it
Create a test opportunity in Close CRM, set it to "Closed/Won," and verify that records appear in Airtable, the community invite is sent, an Intercom contact is created, and Slack receives the notification.

## How to customize this workflow

- **Different CRM?** Replace the Close CRM webhook and API nodes with your CRM's webhook trigger and API calls (HubSpot, Salesforce, Pipedrive, etc.)
- **Different community platform?** Swap the Mighty Networks invite node for Circle, Skool, Discord, or any platform with an API
- **Add more onboarding steps?** Insert nodes after the Switch for things like Google Workspace account creation, LMS enrollment, or calendar booking
- **Multiple program tiers?** Extend the Switch node with additional routes each tier can have its own Airtable table, community group, and email sequence
- **Remove integrations you don't use?** Each branch is independent simply delete or disable the Intercom, Mighty Networks, or Kit nodes without breaking the rest

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
