# 🎬 Write multilingual weather articles with Open-Meteo, Claude, and OpenAI

> ⚡ **5 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs weekly (or manually) to generate multilingual weather-news articles from Open-Meteo forecasts, uses Anthropic Claude for analysis, verification, writing, and QA, creates a matching header image via OpenAI, and uploads CMS-ready JSON and images to S3-compatible storage with Slack alerts and run monitoring.

## How it works
1. Runs on a weekly schedule (Monday 06:00) or manually to start an article-generation batch.
2. Builds a per-country workload (with cities, language, and locale) and loops through each selected country.
3. Fetches 3-day city forecasts from the Open-Meteo API and aggregates them into a compact, macro-area-based dataset.
4. Uses Anthropic Claude to write a structured meteorological summary and optionally cross-checks it against a secondary source URL, posting a Slack warning if that source is unavailable.
5. Computes deterministic “ground truth” per macro-area (including windiest/wettest/hottest records), then uses Claude to write a short HTML article and extract the final HTML and title.
6. Uses Claude to QA the article against the ground truth and verification report, rewrites and re-checks once on failures, then applies deterministic guardrails to flag warning-related wording or banned terms.
7. Generates a calibrated image scene with Claude, creates a header image via the OpenAI Images API (or falls back to a predefined image), then uploads the image and a CMS-agnostic article JSON payload to S3.
8. Logs a run summary to an n8n Data Table and uses a separate scheduled watchdog plus Slack notifications to alert on workflow failures or missing scheduled runs.

## Setup
1. Add Anthropic credentials for the Claude steps and OpenAI API credentials for image generation.
2. Add an S3-compatible credential (AWS S3, Cloudflare R2, MinIO, etc.) and set the target bucket name and prefix in the Config values.
3. Add a Slack credential and select the channel for the “Source Unavailable”, “Error Alert”, and “Run Missing Alert” Slack messages.
4. Create an n8n Data Table named `article_runs` with columns `runDate`, `countriesProcessed`, `countries`, `completedAt`, and `mode` (all text) for run logging and watchdog checks.
5. Update the Config values (brand name, countries to run, fallback image URL, optional house rules and banned terms) and, if needed, edit the country/city list and optional `secondarySourceUrl` entries.

## 🔗 Nodes Used

HTTP Request, Slack, S3, Schedule Trigger, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
