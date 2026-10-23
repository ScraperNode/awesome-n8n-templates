# 🎬 Score draft content citability with GPT-4o-mini and Google Sheets

> ⚡ **5 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow manually scores draft content for AI citability using OpenAI GPT-4o-mini and logs detailed, evidence-backed results to Google Sheets, either from pasted draft text or by fetching and cleaning a provided page URL.

## How it works
1. Starts when you run the workflow manually.
2. The workflow reads drafts from the `content` tab of your Google Sheet (content_id, title, brand, target_query, draft_text).

3. A Code node validates each row, computes word count, and builds the full judge payload. The complete anchored rubric lives in this node, so the entire scoring methodology is readable in one place.

4. One HTTP call per draft sends the rubric and draft to gpt-4o-mini (temperature 0, JSON mode, retries with backoff). The rubric anchors describe what a 90, 70, 50, and 30 look like on each dimension, so the judge grades against fixed criteria.

5. A second Code node parses the judge output, clamps each score to 0-100, computes the weighted composite (Answer Structure 40%, Entity Clarity 30%, Factual Density 30%), and assigns the verdict band: 80+ publish, 60-79 revise, below 60 rework.
6. Results append to the `scores` tab with the run date, per-dimension scores, the top 3 fixes, the judge's issue notes, and the single best passage an AI engine could quote verbatim.


## Setup
1. Add an OpenAI API credential using HTTP Header Auth (Authorization: Bearer YOUR_OPENAI_KEY) for the OpenAI Chat Completions request.
2. Add a Google Sheets OAuth2 credential with access to the spreadsheet used for the `content` and `scores` tabs.
3. Update the Google Sheets document ID and ensure the sheet has tabs named `content` and `scores` with columns that match the workflow’s inputs/outputs (for example: `draft_text`/`page_url` in `content` and the scoring fields in `scores`).
4. Populate the `content` tab with rows that include `content_id`, `title`, `brand`, `target_query`, and either `draft_text` or a `page_url` that allows automated fetching.

## Customization
- Swap the weights or verdict thresholds in the Parse & Score node to match your own quality bar.
- Extend the rubric with additional dimensions (for example, freshness signals or schema readiness) by editing the system prompt in the Prepare Drafts node and adding the new fields to the output mapping.
- Pair it with a visibility tracker: score drafts before publishing, then measure whether the published pages actually get cited.

## Additional info
The manual trigger is used as an example. Replace it with a schedule, webhook, or form trigger to score drafts as part of your publishing pipeline.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
