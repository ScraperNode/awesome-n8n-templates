# 🔧 Search and preview GIFs with forms and GIPHY

> ⚡ **13 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow publishes an n8n Form where users enter a search term, queries the GIPHY Search API for the top 9 G-rated GIFs, and renders the results as a clickable HTML gallery on the form completion page with copy-to-clipboard links.

## How it works
1. Receives a submission from an n8n Form at the `gif-finder` path with a required `query` field.
2. Calls the GIPHY Search API with the submitted query, limiting results to 9 GIFs and filtering to G-rated content.
3. Transforms the GIPHY response into responsive HTML that shows a grid of GIF thumbnails and a fallback message when no results are returned.
4. Displays the generated HTML on the form completion page so users can click any GIF to copy its direct URL to the clipboard.

## Setup
1. Create a GIPHY developer app and generate an API key.
2. Add an HTTP Query Auth credential and set the `api_key` value to your GIPHY API key, then select it in the HTTP Request that calls GIPHY.
3. Activate the workflow and share the n8n Form URL for the `gif-finder` form with your users.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
