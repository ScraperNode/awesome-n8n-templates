# 🎬 Publish operational assessment microsites from Supabase records

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow runs manually or every six hours to pull approved operational assessment records from Supabase, validate required fields, generate a structured microsite content object, upsert it into a Supabase `microsites` table, and update the source assessment with a published URL or failure reason.

## How it works
1. Runs on a manual trigger or a six-hour schedule.
2. Fetches up to the configured maximum number of Supabase `assessment_microsite_queue` records where `status = approved`.
3. Splits the response into individual assessments, normalizes the microsite slug, and validates that required fields like company, slug, and assessment summary are present.
4. Builds a microsite page payload with headlines, summary, cards, opportunity ideas, and a call-to-action URL.
5. Upserts the page into the Supabase `microsites` table using the slug as the conflict key and requests the merged record back.
6. Updates the original Supabase assessment record as `published` with the generated microsite URL, or marks it as `failed` with a validation or publish error.

## Setup
1. Create the Supabase tables referenced by the workflow (a source queue table like `assessment_microsite_queue` and a destination table like `microsites`) with columns that match the fields being read and written.
2. Add a Supabase API credential and select it in each Supabase HTTP Request step.
3. Update the values in “Set Microsite Settings” (Supabase project URL, table names, public site base URL, booking URL, CTA label, and max record limit).
4. Ensure your Supabase REST API access is configured so the workflow can read approved records and PATCH status updates, and can upsert into the `microsites` table.
5. Add a test assessment record with `status` set to `approved`, run the workflow manually, and confirm your front end renders the published record at the configured URL pattern.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
