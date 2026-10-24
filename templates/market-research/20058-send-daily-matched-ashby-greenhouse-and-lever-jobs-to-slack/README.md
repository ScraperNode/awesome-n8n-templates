# 📊 Send daily matched Ashby, Greenhouse and Lever jobs to Slack

> ⚡ **18 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily to scan Ashby, Greenhouse, and Lever job boards for postings that match your title and location keywords, deduplicates roles across runs, and posts a single summary message with new matches to a Slack channel.

## How it works
1. Runs every morning at 8:00 (or manually) and loads the configured job boards and keyword filters.
2. Builds one public API request per board for Ashby, Greenhouse, and Lever based on each company slug.
3. Fetches each board’s job postings via HTTP and skips boards that fail to respond.
4. Normalizes the different API response formats into a single list of roles and filters them by your title include/exclude and location include/exclude rules.
5. Removes roles that have already been announced in previous executions using a persistent deduplication key.
6. Formats the remaining new roles into one consolidated message and posts it to the selected Slack channel.

## Setup
1. Edit the board list and keyword filters (title and location include/exclude lists) in the configuration node to match the companies and roles you care about.
2. Add a Slack credential and set the destination channel (or replace the Slack step with another notification or storage node).
3. Run the workflow once manually to seed the deduplication state, then activate the schedule.

## Requirements
- A Slack credential and a channel to post to (or swap the last node for Gmail, Telegram or a Google Sheet)
- No API keys for the job boards: Ashby, Greenhouse and Lever publish their postings through open endpoints

## Customization
- Add or remove companies in Boards and filters: one line per board with its ATS (ashby, greenhouse, lever or recruitee) and the slug from its careers URL
- Change the title and location word lists to your roles and to the countries you can work from; words of up to three letters (ai, eu, us) match whole words only
- Move the daily run to another hour on the schedule trigger
- Support another ATS by adding its URL in Build board requests and its response shape in Normalise and match

## Additional info
The remote flag some boards set is not trusted on its own, because it also appears on office roles: location_any is checked against the location text, and only a posting with no location text passes on the flag alone. Recruitee is supported in the code but not in the example boards. Companion templates from the same creator: https://n8n.io/workflows/19797 and https://n8n.io/workflows/19895

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
