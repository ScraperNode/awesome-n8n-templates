# 🎣 Capture and qualify website leads with n8n Forms and Twenty CRM

> ⚡ **72 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow captures consultation requests from an n8n Form, logs the raw submission in Twenty CRM, normalizes and scores the lead, deduplicates Companies by website and People by work email, and then creates either a qualified Opportunity with a follow-up Task or a nurture-review Task.

## How it works
1. Receives a website lead submission via an n8n Form trigger.
2. Creates a Note in Twenty CRM to store the untouched raw submission details for audit and context.
3. Normalizes the lead data (email, website, domain) and calculates a lead score based on budget, team size, and urgency.
4. Searches Twenty CRM for an existing Company matching the submitted website and updates it or creates a new Company if none is found.
5. Searches Twenty CRM for an existing Person matching the work email and updates it or creates a new Person linked to the resolved Company.
6. If the lead score meets the qualification threshold (60+), creates a Twenty CRM Opportunity and a next-day follow-up Task; otherwise, creates a nurture-review Task due in three days.

## Setup
1. Install the community node package `@blackswampai/n8n-nodes-twentycrm` in your n8n instance.
2. Create and select a Twenty CRM API credential (root URL and API key) for all Twenty CRM steps, with access to Notes, Companies, People, Opportunities, and Tasks.
3. Review and publish the form, then copy the form URL (path `twenty-crm-qualified-lead`) to embed or link it from your website.
4. Adjust the scoring weights and qualification threshold (currently 60), plus any Opportunity naming, currency, and task due dates to match your sales process.

## 🔗 Nodes Used

n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
