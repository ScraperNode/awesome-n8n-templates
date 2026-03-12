# 🎣 Enrich new leads in Pipedrive and send an alert to Slack for high-quality ones

> ⚡ **2,228 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Use Case
This workflow is beneficial when you're automatically adding new leads to your Pipedrive CRM. Usually, you'd have to manually review each lead to determine if they're a good fit. This process is time-consuming and increases the chances of missing important leads. This workflow ensures every new lead is promptly evaluated upon addition.
## What this workflow does
The workflow runs every 5 minutes. On every run, it checks your new Pipedrive leads and enriches them with Clearbit. It then marks items as enriched and checks if the company of the new lead matches certain criteria (in this case if they are B2B and have more than 100 employees) and sends a Slack alert to a channel for every match.
## Pre Conditions
You must have Pipedrive, Clearbit, and Slack accounts. You also need to set up the custom fields `Domain` and `Enriched at` in Pipedrive.
## Setup
1. Go to Company Settings -&gt; Data fields -&gt; Organization and add `Domain` as a custom field
2. Go to Company Settings -&gt; Data fields -&gt; Leads and add `Enriched at` as a custom date field
2. Add your `Pipedrive`, `Clearbit` and `Slack` credentials.
3. Fill the `setup` node below. To get the ID of your custom domain fields, simply run the `Show only custom organization fields` and `Show only custom lead fields` nodes below and copy the keys of your `domain`, and `enriched at` fields.
## How to adjust this workflow to your needs
- Modify the criteria to suit your definition of an interesting lead.
- If you only want to focus on interesting leads in Pipedrive, add a node that archives all others.

This workflow was built using n8n version 1.29.1

## 🔗 Nodes Used

HTTP Request, Pipedrive, Slack, Clearbit, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
