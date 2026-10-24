# 🎣 Score and qualify Google Sheets leads with OpenAI gpt-4o-mini

> ⚡ **17 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow reads leads from a Google Sheets spreadsheet, scores each pending lead against your Ideal Customer Profile using the OpenAI Chat Completions API, writes the results back to the sheet, and outputs only leads that meet your minimum qualified score.

## How it works
1. Starts when you manually execute the workflow.
2. Loads run settings (ICP description, OpenAI model, per-run cap, and minimum qualified score) and reads rows from the `leads` sheet in Google Sheets.
3. Skips empty rows and any leads already marked as `done`, then limits processing to the configured maximum per run.
4. Builds a strict JSON-only scoring prompt for each lead using your ICP and the lead’s fields, then sends it to OpenAI’s Chat Completions endpoint.
5. Parses the OpenAI response into score, tier, reasoning, next action, personalization angle, red flags, and confidence, and marks rows as `failed` if scoring output is missing or invalid.
6. Updates the matching Google Sheets rows (by `row_number`) with the scoring fields, status, and timestamp.
7. Outputs only the successfully scored leads whose numeric score is at or above the configured minimum qualified score for downstream automation.

## Setup
1. Create or copy a Google Sheet with a `leads` tab that includes a `row_number` column plus fields like `name`, `company`, `role`, `website`, `notes`, and output columns such as `score`, `tier`, `reason`, `next_action`, `personalization_angle`, `red_flags`, `confidence`, `status`, and `scored_at`.
2. Add a Google Sheets OAuth2 credential and paste your Google Sheet URL into the document ID field in both the read and update steps.
3. Add an OpenAI API credential (OpenAI node credential type) to authorize calls to the Chat Completions API.
4. In the run configuration, set your ICP description and (optionally) adjust `max_per_run`, choose an allowed model (for example `gpt-4o-mini`), and set `min_qualified_score` (0–100).

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
