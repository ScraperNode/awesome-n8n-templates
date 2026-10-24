# 🎫 Triage held WordPress comments with OpenAI spam classification and auto-marking

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow runs manually or every 3 hours to fetch held WordPress comments, uses OpenAI to classify them with a confidence score, and marks only high-confidence spam as spam in WordPress while leaving all other comments in the moderation queue with a reason and optional draft reply.

## How it works
1. Runs on a manual trigger or on a 3-hour schedule.
2. Fetches up to the configured number of WordPress comments that are in the “hold” (moderation) status via the WordPress REST API.
3. Cleans and truncates each comment’s text to prepare it for analysis.
4. Sends each prepared comment to the OpenAI Chat Completions API to classify it as spam, abusive, question, positive, or other, including a confidence score, reason, and suggested reply for questions.
5. Flags comments as “auto spam” only when the category is spam and the confidence meets or exceeds the configured threshold.
6. If dry run is enabled, outputs a result indicating the comment would be marked as spam; otherwise, updates the comment status to “spam” in WordPress.
7. For all non-confident-spam comments, outputs a result indicating the comment is left in the moderation queue along with the classification details and suggested reply (when applicable).

## Setup
1. Create a WordPress Application Password for a user allowed to moderate comments and add it as an HTTP Basic Auth credential in n8n for the WordPress REST API requests.
2. Add an OpenAI API credential in n8n for the Chat Completions request.
3. Update the configuration values for your site URL, max comments per run, model name, spam confidence threshold, and dry-run mode before enabling the scheduled trigger.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
