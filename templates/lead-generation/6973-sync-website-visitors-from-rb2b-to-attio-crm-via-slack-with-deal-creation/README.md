# 🎣 Sync website visitors from RB2B to Attio CRM via Slack with deal creation

> ⚡ **314 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This n8n template automatically syncs website visitors identified by RB2B into your Attio CRM, creating comprehensive contact records and associated sales deals for immediate follow-up.

Perfect for sales teams who want to capture every website visitor as a potential lead without manual data entry!

## Good to know

* RB2B identifies anonymous website visitors and sends structured data via Slack notifications
* The workflow prevents duplicate contacts by checking email addresses before creating new records
* All RB2B leads are automatically tagged with source tracking for easy identification

## How it works

* RB2B sends website visitor notifications to your designated Slack channel with visitor details
* The workflow extracts structured data from Slack messages including name, email, company, LinkedIn, and location
* It searches Attio CRM to check if the person already exists based on email address
* For new visitors, it creates a complete contact record with all available information
* For existing contacts, it updates their record and manages deal creation intelligently
* Automatically creates sales deals tagged as "RB2B Website Visitor" for proper lead tracking

## How to use

* Configure RB2B to send visitor notifications to a dedicated Slack channel
* The Slack trigger can be replaced with other triggers like webhooks if you prefer different notification methods
* Customize the deal naming conventions and stages to match your sales pipeline

## Requirements

* RB2B account with Slack integration enabled
* Attio CRM account with API access
* Slack workspace with bot permissions for the designated RB2B channel

## Customising this workflow

* Modify deal stages and values based on your sales process
* Add lead scoring based on company domain or visitor behavior patterns
* Integrate additional enrichment APIs to enhance contact data
* Set up automated email sequences or Slack notifications for high-value leads

## 🔗 Nodes Used

HTTP Request, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
