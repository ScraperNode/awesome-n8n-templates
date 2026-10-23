# 🎣 Qualify inbound website leads from forms with Gaffa and HubSpot

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow collects inbound leads via an n8n Form, checks whether the email already exists in HubSpot, and uses Gaffa to extract company details from the submitted website to qualify the lead before creating the contact and follow-up tasks in HubSpot.

## How it works
1. Receives a new submission from an n8n Form with first name, last name, work email, and company website.
2. Searches HubSpot for an existing contact with the submitted email and stops if one is found.
3. Uses Gaffa to load the company website and extract the company name, industry, what they sell, and whether they match your ideal customer definition.
4. If the website is successfully read, creates or updates the HubSpot contact and sets the lead status to OPEN when the lead fits your ideal customer or UNQUALIFIED when it does not.
5. For qualified OPEN leads, creates a HubSpot task assigned to the specified owner with context from the website extraction.
6. If the website cannot be read or no company details are found, creates or updates the HubSpot contact with lead status NEW and creates a HubSpot review task explaining what failed.

## Setup
1. Install the @gaffa-dev/n8n-nodes-gaffa community node and add a Gaffa API credential.
2. Create a HubSpot private app access token (app token) with permissions to read and write contacts and create engagements/tasks, then add it as HubSpot credentials in n8n.
3. Update the Settings values for your ideal customer description and the HubSpot owner ID to assign tasks.
4. Publish the workflow and share the n8n Form URL where you want to collect inbound leads.

## 🔗 Nodes Used

HubSpot, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
