# ⚒️ Format JSON and secure HR payloads with DevDeskApp utilities

> ⚡ **19 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow runs on a manual trigger and uses DevDeskApp utilities to prettify a JSON payload, generate a SHA-256 hash and UUID trace ID, slugify a candidate name, and calculate a CTC-to-in-hand salary breakdown, then returns a consolidated result.

## How it works
1. Runs when you manually execute the workflow to generate a sample developer and HR payload.
2. Uses DevDeskApp to prettify the minified JSON string into a readable formatted JSON object.
3. Creates a SHA-256 digest of the formatted JSON using DevDeskApp to provide a tamper-evident payload hash.
4. Generates a UUID v4 trace ID with DevDeskApp for request tracking.
5. Slugifies the candidate full name into a URL-safe identifier using DevDeskApp.
6. Calculates the CTC-to-in-hand breakdown (monthly gross, take-home, PF, tax estimates, and professional tax) using DevDeskApp.
7. Consolidates the formatted JSON, security metadata, slug, and compensation breakdown into a single output item.

## Setup
1. Install the DevDeskApp community node (n8n-nodes-devdeskapp) in your n8n instance.
2. Review or replace the sample payload values (minified JSON, candidate name, annual CTC, and basic percentage) to match your use case.
3. Click the orange 'Test workflow' button at the bottom of the canvas to run the complete DevDeskApp utility suite and inspect the consolidated output JSON.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
