# 🎣 Score and sync weekly Sales Navigator leads with Evaboot, OpenAI and HubSpot

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow schedules a weekly LinkedIn Sales Navigator export with Evaboot and, when the export completes, creates or updates HubSpot contacts for leads whose emails are marked deliverable.

## How it works
1. Runs every Monday at 8am to start a new Evaboot export from a specified LinkedIn Sales Navigator people search URL.
2. Waits for Evaboot to send an exportFinished webhook event when the export completes.
3. Splits the exported Evaboot results into one item per lead.
4. Keeps only leads whose Evaboot email status is “safe” or “riskier”.
5. Creates or updates a HubSpot contact using the lead’s email and maps name, job title, and company fields.

## Setup
1. Add your Evaboot API key credentials and set the LinkedIn Sales Navigator saved search URL in the Evaboot export step.
2. Add your HubSpot app token credentials and verify the contact property mappings match your HubSpot account.
3. Activate the workflow so Evaboot can call the built-in webhook trigger when an export finishes.

## 🔗 Nodes Used

Slack, HubSpot, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
