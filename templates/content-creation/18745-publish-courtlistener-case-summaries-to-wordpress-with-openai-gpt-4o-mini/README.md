# 🎬 Publish CourtListener case summaries to WordPress with OpenAI GPT-4o-mini

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow runs daily on a schedule, queries CourtListener for new opinions matching topics and courts defined in a WordPress plugin, drafts neutral case summaries with OpenAI, and publishes new posts to the WordPress site while producing a run summary of created, duplicate, and failed ingests.

## How it works
1. Runs every day at 7 AM on a scheduled trigger.
2. Pulls Case Monitor settings from a WordPress site via the CLCM plugin API and builds a CourtListener search query from the configured topics, courts, and lookback window.
3. Calls the CourtListener Search API for recent opinions, then normalizes the results into a consistent set of fields (title, URL, court, date, and snippet).
4. Sends the opinion URLs to the WordPress CLCM plugin to identify which decisions are already known, and keeps only the newly discovered decisions.
5. Uses OpenAI (GPT-4o-mini) to generate a structured JSON draft containing a headline, HTML body, excerpt, and tags for each new decision, and discards drafts that are not valid JSON or missing required fields.
6. Submits each valid draft to the WordPress CLCM ingest endpoint to create a post, then compiles a final summary with counts and created post metadata.

## Setup
1. Install and configure the WordPress CLCM plugin on your site so the /wp-json/clcm/v1/config, /check, and /ingest endpoints are available and you have a valid X-CLCM-Key.
2. Update the site URL and CLCM API key values in the workflow’s site configuration step to match your WordPress environment.
3. Provide a CourtListener API token and replace the Authorization header used for the CourtListener Search API request.
4. Add an OpenAI API credential and ensure the selected chat model (gpt-4o-mini) is available in your account.
5. Adjust the schedule time and the WordPress plugin settings (topics, courts, and days_lookback) to control which decisions are monitored and posted.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
