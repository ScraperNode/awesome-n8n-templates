# 🎬 Generate missing WordPress post excerpts with OpenAI Chat Completions

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs manually or weekly to find published WordPress posts missing excerpts, generates plain-text excerpts with OpenAI Chat Completions, and optionally saves the validated excerpts back to WordPress via the REST API.

## How it works
1. Runs either on a weekly schedule or when triggered manually.
2. Fetches a configurable number of WordPress posts in edit context and keeps only published posts with an empty excerpt and at least 200 characters of content.
3. Limits the batch size per run, strips HTML from each post, and prepares plain text for prompting.
4. Calls the OpenAI Chat Completions API to generate a JSON-formatted excerpt in the post’s language with a configurable word limit.
5. Parses and validates the AI response, skipping posts where the excerpt is missing or outside the allowed length range.
6. If dry-run mode is enabled, outputs the generated excerpts for review; otherwise, updates each post’s excerpt in WordPress via the REST API.

## Setup
1. Create a WordPress Application Password for a user with permission to edit posts and add a WordPress API credential in n8n.
2. Add an OpenAI API credential in n8n.
3. In the workflow configuration, set your site URL, posts-to-scan and per-run limits, OpenAI model, excerpt word limit, and whether dryRun is enabled.

## 🔗 Nodes Used

HTTP Request, Wordpress, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
