# 📊 Sync Etsy customers with Meta custom audiences using hashed emails

> ⚡ **13 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily to fetch recent Etsy receipt emails via an Etsy Shop Operations sub-workflow, normalizes and SHA-256 hashes the emails, and either previews the hashed payload or uploads it to a Meta Custom Audience using the Meta Graph API.

## How it works
1. Runs every day on a schedule.
2. Sets sync parameters (lookback window, maximum receipts, dry-run mode, Meta audience ID, and API version).
3. Requests recent Etsy receipt records from a connected Etsy Shop Operations workflow and extracts buyer/payment email addresses.
4. Normalizes, deduplicates, and SHA-256 hashes the email addresses to build a Meta Custom Audience upload payload.
5. If dry-run is enabled, returns counts and a small sample of hashes for verification.
6. If dry-run is disabled, sends the hashed EMAIL payload to the Meta Graph API endpoint for the specified Custom Audience.

## Setup
1. Configure and connect the “Get Etsy customer receipts” execute-workflow step to an Etsy Shop Operations (PRO) workflow that returns receipt records including buyer/payment emails.
2. Create or choose a Meta Custom Audience and paste its ID into the configuration values.
3. Add a Meta access token to the HTTP header auth for the upload request (for example, an Authorization: Bearer <TOKEN> header) and ensure the token has permissions to manage the selected audience.
4. Review and adjust the lookback window, max receipt limit, and keep dry-run enabled for initial validation before enabling live uploads.

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
