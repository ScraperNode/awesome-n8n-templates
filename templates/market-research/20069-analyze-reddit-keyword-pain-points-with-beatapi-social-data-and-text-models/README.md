# 📊 Analyze Reddit keyword pain points with BeatAPI Social Data and text models

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This manual workflow uses BeatAPI Social Data to fetch up to 12 recent public Reddit posts for a keyword and then calls a BeatAPI text model to produce a cited draft highlighting themes, questions, and potential pain points.

## How it works
1. Starts when you run the workflow manually.
2. Sets the Reddit keyword to research and the BeatAPI chat model to use.
3. Calls BeatAPI Social Data to search public Reddit posts from the past week, sorted by newest, and returns a preview of up to 12 results.
4. Cleans and validates the preview results, keeping identifiable post evidence (IDs, titles, URLs, and any available text) and stopping with an error if nothing usable is returned.
5. Sends the evidence package to the BeatAPI chat completions endpoint to generate a research draft with themes, notable questions, and observations cited to post IDs or URLs.
6. Returns the final research draft along with source metadata such as result counts and the BeatAPI request ID.

## Setup
1. Create a BeatAPI API key and add an n8n HTTP Header Auth credential with `Authorization: Bearer <your BeatAPI key>`, then select it in both BeatAPI HTTP Request steps.
2. Set your target `keyword` and a BeatAPI `model` available to your account in the input configuration step.
3. If needed, adjust the BeatAPI Social Data search inputs (time range, sorting, safe search, and max items) in the Reddit search request before activating the workflow.

## Additional info
BeatAPI Reddit API: https://beatapi.io/reddit-api. Create and manage your own API key: https://beatapi.io/dashboard/apikeys. Social Data action catalog: https://docs.beatapi.io/social-data-catalog. This template runs reddit.app.fetch_dynamic_search; the catalog also documents subreddit feeds, post details, comments, public user activity, typeahead, and trending searches. Those other actions are optional extensions and are not executed by this workflow.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
