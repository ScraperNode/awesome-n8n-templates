# 🔒 Detect GitHub Actions supply-chain risks with Gemini and Slack

> ⚡ **19 views** · 🔒 [SecOps & Security Automation](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily to scan GitHub Actions workflow files across a GitHub org or user, flags supply-chain risk patterns and unpinned actions, uses Google Gemini to review new or changed workflows, and posts instant alerts plus a daily security digest to Slack while tracking results in an n8n Data Table.

## How it works
1. Runs every day at 7:00 AM on a schedule.
2. Creates (if missing) and loads an n8n Data Table baseline of previously scanned workflow files and their last known SHAs.
3. Uses the GitHub REST and Contents APIs to list repositories, enumerate `.github/workflows` files, and keep only YAML workflow files.
4. Compares each workflow file’s current SHA to the stored inventory to process only new or changed files and keep previous results for unchanged files.
5. Downloads changed workflow files, performs rule-based checks for common GitHub Actions attack patterns, and uses GitHub GraphQL to resolve commit SHAs for unpinned `uses:` references to provide ready-to-paste pinning suggestions.
6. Sends the highest-risk changed workflows (up to the configured limit) to Google Gemini for a structured security verdict and posts an immediate Slack alert when the verdict is malicious/suspicious or rule checks include critical findings.
7. Upserts scan results back into the Data Table, has Google Gemini generate a short daily digest from the scan statistics, posts the digest to Slack, and optionally creates GitHub issues for serious findings in private repositories.

## Setup
1. Add a GitHub credential (personal access token) with Contents/Metadata read access (and Issues write access if you enable issue creation) and select it for the GitHub and GitHub HTTP Request steps.
2. Add a Google Gemini API key credential and connect it to both Gemini chat model steps used for file review and for the daily digest.
3. Add a Slack credential and set the target channel (default `#security-alerts`) for the instant alert and daily digest messages.
4. Update the Settings values (at least `github_owner` and `owner_type`, plus any optional filters and limits like `repo_name_filter`, `max_repositories`, and `max_ai_reviews`).
5. Run the workflow once to create/populate the `gha_security_inventory` Data Table baseline, then activate it to scan automatically on the schedule.

## 🔗 Nodes Used

GitHub, HTTP Request, Slack, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
