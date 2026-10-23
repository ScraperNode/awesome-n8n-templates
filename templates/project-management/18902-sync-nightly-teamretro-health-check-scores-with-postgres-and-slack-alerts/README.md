# 📋 Sync nightly TeamRetro health check scores with Postgres and Slack alerts

> ⚡ **2 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow runs nightly to fetch each team’s latest closed TeamRetro health checks, normalizes one row per health dimension, and upserts the scores into a Postgres table, sending a Slack alert only when errors occur.

## How it works
1. Runs every day at 02:00 (server time) and ensures the `team_health_scores` table exists in Postgres.
2. Retrieves all teams from TeamRetro and, for each team, fetches up to three most recent health checks.
3. Skips teams without a closed health check and continues processing only checks whose status is `closed`.
4. Pulls all dimensions for each closed TeamRetro health check and flattens the ratings into warehouse-ready rows (including the health model and rating scale).
5. Filters out unrated or failed dimension rows and upserts valid dimension scores into Postgres using `(health_check_id, dimension)` as the conflict key.
6. Aggregates outcomes into a single run summary and posts the error details to a Slack channel if any failures are detected.

## Setup
1. Create a TeamRetro credential using an account-scoped API key (`tra_`) and select it for the TeamRetro nodes.
2. Add a Postgres credential and confirm the workflow can create and write to the `team_health_scores` table in your target database.
3. Add a Slack credential and set the destination channel (for example `#data-alerts`) for failure notifications.

## 🔗 Nodes Used

Postgres, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
