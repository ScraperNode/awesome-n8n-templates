# 📊 Build multi-touch attribution reports with Supabase multi-model MTA

> ⚡ **7 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow ingests marketing touch events, stores them in Supabase, stitches identities by shared email, and calculates first-touch, last-touch, linear, and time-decay multi-touch attribution credit per channel, outputting a side-by-side model comparison.

## How it works
1. Runs when triggered manually (or can be adapted to receive real touch events via a webhook).
2. Loads configuration such as the channel list and the time-decay half-life window.
3. Generates a batch of synthetic multi-touch customer journeys for the demo run.
4. Writes all touch events to a Supabase table via the Supabase REST API.
5. Reloads the stored touches from Supabase and merges visitors into a single identity when they share an email address.
6. Computes revenue-weighted channel credit across converting journeys using first-touch, last-touch, linear, and time-decay attribution models.
7. Prints a formatted comparison table of channel credit across the four models.

## Setup
1. Create a Supabase project and table (for example, `mta_touches`) to store touch events, matching the fields used in the workflow (visitor_id, email, channel, ts, is_conversion, revenue).
2. Add `SUPABASE_URL` and `SUPABASE_KEY` environment variables to your n8n instance so the workflow can call the Supabase REST API.
3. Update the Supabase table name and any row-filtering logic in the Supabase requests if your schema or naming differs.
4. If you want production ingestion, replace the synthetic journey generator with a Webhook trigger that posts real touch events into the same storage step.
5. Adjust `HALF_LIFE_DAYS` and `CHANNELS` in the configuration to match your attribution model settings and marketing taxonomy.

## 🔗 Nodes Used

Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
