# 🔒 Monitor attack surface changes with OpenAI, Slack, Postgres and email

> ⚡ **5 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow runs every 6 hours to collect attack-surface assets from three HTTP APIs, normalize and deduplicate them, compare them to a Postgres baseline, and use OpenAI to generate risk narratives before sending critical/high alerts to Slack and medium alerts by email.

## How it works
1. Runs on a schedule every 6 hours.
2. Queries three HTTP APIs to enumerate subdomains, exposed services, and public cloud resources, then merges the results.
3. Normalizes all discovered assets into a single schema, computes stable fingerprints, and deduplicates the inventory.
4. Loads the previous baseline from Postgres and diffs it against the current inventory to identify new, changed, and removed assets.
5. Classifies each change by severity (including out-of-policy cloud provider/region) and uses OpenAI to write a short risk narrative for the engineering/security team.
6. Sends an additional compliance email when an unauthorized cloud footprint is detected, then routes critical/high changes to Slack, medium changes to email, and logs low/removed changes without alerting.
7. Upserts the full current inventory into Postgres as the new baseline so the next run compares against the latest known state.

## Setup
1. Provide HTTP Header Auth credentials (or equivalent) for the three discovery HTTP APIs and update the API URLs and root domain list in the configuration values.
2. Add a Postgres credential and create an `attack_surface_baseline` table (or update the SQL queries) to store and retrieve the baseline inventory.
3. Add an OpenAI credential and ensure the configured chat model name is available in your account.
4. Add a Slack credential and set the target channel for critical/high alerts.
5. Add SMTP email credentials and set the security and compliance recipient addresses and the desired “from” address.

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Slack, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
