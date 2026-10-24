# 📊 Find and score event and speaker opportunities with Gumloop, Supabase, and OpenAI

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow accepts event or speaker search requests via webhooks, triggers Gumloop to find opportunities, stores and scores the results in Supabase (Postgres), optionally emails the results via Gmail, and provides a separate webhook that uses OpenAI to draft an outreach email.

## How it works
1. Receives a POST webhook request from a Lovable app with search parameters and validates/normalizes the input (event mode: industry/location/vendor type; speaker mode: topic/context/location).
2. Creates a “running” record in Supabase (Postgres) to track the request and immediately returns a request_id to the caller for polling.
3. Optionally stores the requester’s email in a Supabase subscribers table and triggers the appropriate Gumloop flow (event or speaker) via an HTTP request.
4. Receives the Gumloop callback webhook containing request_id and a results array, then looks up the original request context from Supabase.
5. Scores and sorts the returned results based on deadlines (events) or recency (speakers), updates the Supabase record to completed, and optionally sends a formatted results email via Gmail.
6. Exposes a GET results webhook that returns the current status, stored results, and any error message for a given request_id.
7. Exposes a POST draft-email webhook that sends opportunity details to the OpenAI Chat Completions API and returns a JSON-formatted outreach email subject and body.

## Setup
1. Create the Supabase/Postgres tables required by the workflow, including temp_search_results (request_id UUID default primary key, status, email, mode, results jsonb, error_message) and optionally subscribers (email, source).
2. Add Postgres credentials for Supabase, Gmail OAuth2 credentials for sending emails, and an OpenAI API credential (HTTP Header Auth) for the draft-email endpoint.
3. Replace the two Gumloop trigger URLs with your Gumloop incoming webhook trigger endpoints and configure Gumloop to POST back to the callback webhook with request_id and results.
4. Copy the three webhook URLs (search request, results polling, and draft email) into your client app (for example, Lovable) and secure the public endpoints as needed.

## Requirements
- Supabase knowledge and setup

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
