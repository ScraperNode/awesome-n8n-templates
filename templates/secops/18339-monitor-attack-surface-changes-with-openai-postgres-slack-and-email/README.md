# 🔒 Monitor attack surface changes with OpenAI, Postgres, Slack, and email

> ⚡ **2 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick Overview
This scheduled workflow inventories your external attack surface from three HTTP APIs, diffs it against a Postgres baseline, and uses OpenAI to generate concise risk notes before routing critical/high alerts to Slack and medium changes to email, with optional compliance emails for out-of-policy cloud assets.

## How it works
1. Runs every 6 hours on a schedule trigger.
2. Queries three HTTP API sources in parallel to collect subdomains, exposed services, and public cloud resources, then merges and normalizes them into a deduplicated asset inventory with stable fingerprints.
3. Loads the previous inventory baseline from Postgres and compares it to the current inventory to identify new, changed, and removed assets.
4. Classifies each change with a severity score and flags new cloud resources that are outside the allowed provider/region allowlists.
5. Uses OpenAI to generate a one-to-two sentence risk triage narrative for each change and attaches it back to the change record.
6. Sends a compliance email when an unauthorized cloud footprint is detected, then routes alerts by severity by posting critical/high changes to Slack, emailing medium changes to the security recipients, and logging low/removed changes without notifying.
7. Upserts the full current inventory into Postgres as the new baseline so the next run diffs against the latest known state.

## Setup
1. Provide credentials for the three HTTP Request nodes (header-auth or equivalent) and update the source API URLs and root domains in the configuration values.
2. Create a Postgres table for the baseline (for example, 
attack_surface_baseline) and add a Postgres credential, then adjust the SELECT and UPSERT queries to match your schema and conflict keys.
3. Add an OpenAI credential and set the model name used for risk narratives.
4. Add a Slack credential and set the target channel for critical/high alerts.
5. Add SMTP credentials for both email nodes and set the security and compliance recipient addresses and sender address.

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Slack, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
