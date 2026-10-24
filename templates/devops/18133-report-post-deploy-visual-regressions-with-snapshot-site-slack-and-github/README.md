# ⚙️ Report post-deploy visual regressions with Snapshot Site, Slack, and GitHub

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives a post-deploy webhook from your CI pipeline, waits for the site to settle, compares the deployed page against a baseline using Snapshot Site, and reports failures to Slack while opening a GitHub issue when the visual mismatch exceeds a defined threshold.

## How it works
1. Receives a POST webhook from your CI/CD job with the deployed page URL, a baseline URL, and optional commit and environment values.
2. Waits 45 seconds to let CDN caches and client-side rendering stabilize before taking screenshots.
3. Uses Snapshot Site Compare to capture and compare the baseline and deployed pages.
4. Detects comparison failures (hard request errors or Snapshot Site soft errors) and sends an alert to a Slack channel.
5. Checks the mismatch percentage against a 10% threshold to determine whether a layout regression occurred.
6. For regressions, posts a detailed Slack alert with diff/before/after links and creates a GitHub issue with the same evidence; otherwise it ends without action.

## Setup
1. Install the verified `n8n-nodes-snapshot-site` community node and add Snapshot Site API credentials.
2. Add Slack credentials and set the target channels (for example `#deploys` for regressions and `#deploys-alerts` for comparison failures).
3. Add GitHub credentials (a personal access token with `repo` scope) and set the repository owner and name in the GitHub issue creation step.
4. Activate the workflow, copy the Webhook node Production URL, and configure your CI pipeline to POST `url`, `baselineUrl`, and optionally `commit` and `environment` after each deploy.
5. Adjust the wait time and the mismatch threshold to match your site’s typical post-deploy rendering variability.

## 🔗 Nodes Used

GitHub, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
