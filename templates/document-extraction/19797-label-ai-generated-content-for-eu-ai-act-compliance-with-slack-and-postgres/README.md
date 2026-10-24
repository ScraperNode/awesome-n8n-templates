# 🔬 Label AI-generated content for EU AI Act compliance with Slack and Postgres

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects AI-generated assets via an n8n form or sub-workflow call, classifies them for EU AI Act Article 50 disclosure, optionally burns disclosure labels into media, routes each asset through a human approval gate (with optional Slack notification), and records decisions plus a registry snapshot in Postgres.

## How it works
1. Receives an asset submission from an n8n Form trigger or from another workflow via Execute Workflow.
2. Hashes the prompt, classifies the asset against EU AI Act Article 50 rules, and generates a language-specific disclosure sentence and manifest metadata.
3. For text assets, appends the disclosure sentence to the text when disclosure is required.
4. For media assets, saves the incoming file and attempts to burn in the disclosure label using n8n Edit Image for images or an HTTP media-labelling service for video/audio, falling back to non-burn-in handling if labelling fails.
5. Stores the asset manifest and approval link in Postgres and optionally posts a review request to a Slack channel.
6. Waits for a reviewer to approve, apply an editorial exception (text only), or return the asset, then records the decision in a hash-chained Postgres ledger and snapshots an AI-systems registry by scanning workflows via the n8n API.

## Setup
1. Create and configure the required Postgres tables/triggers (assets, decisions ledger, and registry snapshots) and add a Postgres credential in n8n.
2. Add an n8n API credential so the workflow can list workflows and generate the registry snapshot.
3. (Optional) Add a Slack credential with permission to post messages and set the target channel for review notifications.
4. (Optional) Deploy and network the media-labelling HTTP service at the configured URL (http://kit-media-label:8881) if you want burn-in labels for video/audio; otherwise those assets fall back to non-burn-in labelling behavior.

## Requirements
- Self-hosted n8n: the workflow writes files to disk and reads the instance's own workflows through the n8n API
- PostgreSQL for the append-only decision ledger and the AI-systems registry; the schema and a docker compose stack that creates it are in the repository
- A Slack credential with chat:write (and files:write to attach the asset) only if you use the Slack gate; the built-in form gate works without Slack
- Basic knowledge of which Article 50 obligations apply to you: the template implements the mechanism, it does not give legal advice

## Customization
- Edit the nine Article 50 paths and their disclosure sentences in the Classify (Art. 50) node to match your house style and languages
- Call it from an existing production line with Execute Sub-workflow, passing asset_type, language, model, prompt, operator, depicts_real_person, public_information and the file as binary data
- Change the Slack channel, or remove the Slack node to run the gate purely as an n8n form
- Point the Postgres nodes at an existing audit database if you already keep one; the ledger only needs the append-only trigger to stay meaningful

## Additional info
Article 50 of the EU AI Act applies from 2 August 2026, and the deep-fake definition it leans on is Article 3(60). This template is the mechanism rather than the policy: it decides, labels, stops for a person, and leaves a record that can be checked. Full source, the database schema with the append-only triggers, a docker compose install and a written case study: https://github.com/karusrus/transparency-kit and https://karusrus.github.io/transparency-kit/ . Built by Ruslan Karymov, AI Enablement & Automation Lead, Creative, marketing and business operations.

## 🔗 Nodes Used

Edit Image, HTTP Request, Postgres, Slack, n8n, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
