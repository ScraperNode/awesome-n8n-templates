# 🔧 Find and track flaky CI jobs in GitHub Actions with OpenAI and Slack

> ⚡ **3 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily (or on demand) to analyze GitHub Actions re-runs for a specific workflow and branch, identify flaky jobs by comparing pass/fail history across attempts, summarize likely causes with OpenAI, post a report to Slack, file GitHub issues for confirmed flakes, and store rates in an n8n Data Table.

## How it works
1. Runs every morning on a schedule or manually to start the analysis.
2. Fetches recent completed GitHub Actions runs for the configured repository and branch, then keeps only the target workflow’s successful and failed runs and includes earlier attempts when a run was re-run.
3. Retrieves all GitHub Actions jobs for each run attempt, paging through results so matrix workflows are fully captured.
4. Aggregates job outcomes by job name to classify jobs as flaky, confirmed flaky (failed then passed on the same commit via re-run), broken, or one-off, and calculates flake rates and common failing step names.
5. Compares current flake rates against the historical `flaky_jobs` n8n Data Table to report only new or significantly worse flaky jobs.
6. Uses OpenAI to group the reported flaky jobs by likely intermittent cause based on the failing step names, then posts a formatted summary to the configured Slack channel.
7. Creates GitHub issues (up to the configured limit) for confirmed flaky jobs and upserts the latest per-job flake rates and verdicts into the `flaky_jobs` Data Table.

## Setup
1. Create an HTTP Header Auth credential for GitHub with header name `Authorization` and value `Bearer <your_token>` that has permission to read Actions, and add a GitHub credential that can create issues in the target repository.
2. Configure the Settings values for `owner`, `repo`, `workflow_name` (exactly as shown in GitHub Actions), `branch`, and optional thresholds like `runs_to_read`, `min_observations`, and `report_when_worse_by`.
3. Create an n8n Data Table named `flaky_jobs` with columns `job_key`, `job_name`, `flake_rate`, `failures`, `runs_seen`, `verdict`, and `last_seen`.
4. Add an OpenAI credential for the chat model used to summarize groups of flakes.
5. Add a Slack credential and set the target channel name in `slack_channel` (for example `#ci`).

## 🔗 Nodes Used

GitHub, HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
