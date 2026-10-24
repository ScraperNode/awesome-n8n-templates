# 🎬 Create weekly SEO blog posts from Google Sheets with Gemini and Sanity

> ⚡ **43 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This scheduled workflow pulls focus keywords from Google Sheets, expands them with rising Google Trends queries via SerpApi, validates demand with Ahrefs metrics on RapidAPI, then uses Google Gemini to write and publish an SEO article to Sanity CMS, including internal/external links and AI-generated images.

## How it works
1. Runs on a weekly schedule and reads a list of focus keywords from a Google Sheets spreadsheet.
2. Queries Google Trends (via SerpApi) for rising related queries for each keyword and keeps only queries that match the original focus keyword list.
3. Fetches keyword metrics from Ahrefs (via RapidAPI), filters out entries with no search volume or missing difficulty, then sorts by volume and selects the top result.
4. Uses a Google Gemini-powered agent that performs Google Search research (via SerpApi) and generates a complete SEO blog article as structured JSON (title, slug, excerpt, and markdown body).
5. Converts the generated article into a Sanity “post” document, normalizes the body content, assigns author/categories, and creates the post in Sanity via the Sanity Data API.
6. Uses Google Gemini to insert a small number of relevant internal links to other Sanity posts and adds a limited set of authoritative external links, then patches the updated body back into Sanity.
7. Generates three image prompts, renders images with Cloudflare Workers AI (Flux), uploads them as Sanity assets, and patches the hero and inline images into the published post.

## Setup
1. Add credentials for Google Sheets (Service Account), SerpApi (query auth), RapidAPI (header auth for Ahrefs keyword metrics), Google Gemini (PaLM/Gemini API), and Cloudflare Workers AI (Bearer token).
2. Create or choose a Sanity project and dataset, then replace the Sanity project ID, dataset, and API write token in all Sanity HTTP requests and the internal/external linking scripts.
3. Update the Google Sheets document ID and sheet/tab used for your focus keyword list, and ensure the sheet includes the expected keyword and targeting fields (for example keyword, Geo, and Ln).
4. Review and adjust the keyword validation threshold (search volume/difficulty checks), scheduling interval, and the AI writing prompt/brand CTA to match your publishing rules.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
