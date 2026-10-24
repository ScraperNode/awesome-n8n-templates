# 📊 Watch brand edits on Wikipedia and Wikidata with OpenAI and email summaries

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow checks specified Wikipedia articles and the matching Wikidata items on a weekly schedule, compares the latest revisions to what was seen previously, uses OpenAI to judge whether edits meaningfully change your brand description, and emails an HTML briefing while storing revision history in an n8n Data Table.

## How it works
1. Runs weekly (or manually) and loads the list of Wikipedia article titles, language, Wikimedia User-Agent, and email addresses.
2. Requests the latest revision metadata from Wikipedia and the corresponding entity info from Wikidata for all configured titles.
3. Merges both sources, looks up the last stored revision IDs in an n8n Data Table, and classifies each source as edited, unchanged, first look, or missing.
4. For edited sources, fetches a MediaWiki compare diff between the previous and current revision, and for missing pages runs a Wikipedia search or a Wikidata entity search to surface mentions and lookalikes.
5. Extracts added and removed lines from the diff (or missing-page findings) and sends the structured changes to OpenAI to prioritize edits that affect how the company is described.
6. Builds an HTML email briefing with the diffs, links, missing-page results, and OpenAI’s prioritization, then sends it via SMTP.
7. Upserts one row per watched source into the Data Table to record the latest revision ID and state for the next run.

## Setup
1. Add an OpenAI API credential (Chat model) and an SMTP email credential for sending the briefing.
2. Create an n8n Data Table named `entity_watch` with columns `source_key`, `entity`, `source`, `revid`, `state`, and `checked_on`.
3. Update the Settings values for `titles` (exact Wikipedia titles), `language`, and a contact `User-Agent` string, and set `email_to` and `email_from` for delivery.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
