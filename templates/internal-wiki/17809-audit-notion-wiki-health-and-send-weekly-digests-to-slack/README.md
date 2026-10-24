# 📖 Audit Notion wiki health and send weekly digests to Slack

> ⚡ **1 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow runs every Monday to audit a Notion wiki by crawling page content, building an internal link graph, and scoring pages for orphaned, stale, thin, and unreachable Notion mentions, then writing results to a Notion “Wiki Health” database and posting a ranked weekly digest to Slack.

## How it works
1. Runs every Monday at 7:00 AM and loads audit settings such as the wiki search text, thresholds, weights, the Notion “Wiki Health” database ID, and the Slack channel ID.
2. Searches Notion for pages matching the configured text (or all accessible pages) and iterates through each result.
3. Fetches each page’s blocks recursively from Notion, then extracts outbound Notion page links (mentions, link-to-page blocks, child pages, and pasted notion.so URLs) and counts words.
4. Builds a wiki link graph to compute inbound link counts, flags pages as orphan/stale/thin (and detects unreachable mentions), and assigns a weighted health score.
5. Filters to pages with a non-zero score, matches them to existing rows in the Notion “Wiki Health” database by Page ID, and updates or creates the corresponding database entries.
6. Ranks the highest-scoring pages and posts a single Slack message summarizing totals and the worst offenders.

## Setup
1. Add Notion API credentials for an internal integration and share the wiki pages (and the “Wiki Health” database) with the integration so it can search pages and read blocks.
2. Create a Notion “Wiki Health” database with properties that match what the workflow writes (including Page ID, Page URL, Status, Score, Word Count, Inbound Links, Broken Links, and Last Audited).
3. Add Slack API credentials with permission to post messages and invite the Slack app/bot to the target channel.
4. In the workflow configuration, set the wiki search text (optional), the “Wiki Health” database ID, and the Slack channel ID, and adjust thresholds/weights (stale days, thin word count, digest size) as needed.

## Requirements
- A Notion workspace on any plan, with an internal integration. Page search only returns pages explicitly shared with the integration, so what you share is exactly what gets audited.
- A wiki of roughly 400 pages or fewer per run. The Notion API allows about three requests per second and this reads every page's blocks.
- A Slack workspace where the bot can hold chat:write.
- No AI credentials, no paid plan tier on any service, and no community nodes.

## Customization
- staleAfterDays, thinWordCount and digestSize set what counts as a problem and how much of it reaches Slack.
- orphanWeight, staleWeight, thinWeight and brokenLinkWeight change the ranking rather than the flagging, so raise orphanWeight if unlinked pages are what your team cares about most.
- Leave the wiki search text blank to audit every page the integration can read, or narrow it to one section's titles.
- Run it monthly on a settled wiki, or daily while a cleanup sprint is in progress.
- Add properties to the Wiki Health database and map them in the update and create nodes to track anything else per page, such as an owner or a review date.

## Additional info
Two node settings silently break this workflow and neither fails loudly. Get Page Blocks From Notion must keep simplifyOutput off, because simplified output flattens rich text into a plain string and drops the page IDs inside mentions, which empties the link graph and makes every page in the wiki read as an orphan. Search Wiki Pages In Notion must keep simple off for the same class of reason: simplified output returns only id, name and url with no last_edited_time, so nothing is ever stale. Both are already off in the template and should stay that way. Two smaller things worth knowing: a page the integration cannot read is labelled Fetch failed and skips the orphan and thin checks, so a permissions gap never gets reported as an abandoned page, and nothing here calls a model, so every classification is a threshold you set and the same wiki produces the same result on every run.

## 🔗 Nodes Used

Slack, Notion, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
