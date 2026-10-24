# ⚒️ Build an engineering knowledge graph with ClickUp, GitHub, Claude, and Slack

> ⚡ **44 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow ingests ClickUp tasks, GitHub pull request events, incident updates, and documentation changes, buffers them, then batch-processes the events to extract entity relationships (including Claude-based entity linking) and upserts nodes and edges into a graph database, posting a summary to Slack.

## How it works
1. Receives incoming webhook events from ClickUp, GitHub, an incident-management tool, and a documentation platform.
2. Normalizes each payload into a shared graph-event structure and posts it to an external graph-event buffer API.
3. Runs on an hourly schedule and fetches the latest batch window of buffered events from the buffer API.
4. Extracts explicit relationships from structured fields (like assignee-to-task, PR-to-repo, and incident-to-service) and flags any events with free-text for further entity extraction.
5. If ambiguous free-text is present, fetches the known entity registry from the graph store and uses Anthropic Claude to extract additional high-confidence links grounded to existing entities.
6. Merges the AI-extracted links with the explicit links, builds node and edge upserts, sends them to the graph database bulk-upsert API, and posts an update summary to a Slack channel.

## Setup
1. Create and configure four webhook sources to POST to the workflow’s webhook URLs: ClickUp task events, GitHub pull_request events, your incident tool events, and your documentation platform page events.
2. Add HTTP Header Auth (or equivalent) credentials and update the endpoints for the graph-event buffer API (POST /v1/events and GET /v1/events/window).
3. Add HTTP credentials and update the graph store endpoints for the entity registry lookup (/v1/entities?types=...) and the graph bulk upsert (/v1/graph/bulk-upsert).
4. Add Anthropic credentials and confirm the Claude model selection used for entity linking.
5. Add Slack credentials and set the target channel ID (for example, eng-knowledge-graph) for the notification message.
6. Review the normalization and link-extraction mapping to ensure your incoming payload fields match the canonical event fields used downstream (for example, linkedRepo, linkedService, affectedService, and postmortemUrl).

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
