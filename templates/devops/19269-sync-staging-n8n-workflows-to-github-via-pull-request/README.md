# ⚙️ Sync staging n8n workflows to GitHub via pull request

> ⚡ **3 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow takes a published workflow from a staging n8n instance, cleans noisy metadata, commits the JSON to a GitHub repository on a new branch, and opens a pull request against a base branch so workflow changes can be promoted via a standard GitHub review and merge process.

## How it works
1. Triggers when the workflow is activated or updated in n8n, or when another workflow calls it with a `workflow_id` input.
2. Fetches the target workflow JSON from the staging n8n API using the provided workflow ID.
3. Removes workflow metadata fields (such as IDs and timestamps) to keep Git diffs focused on real changes, then converts the cleaned JSON into a formatted file payload.
4. Ensures the target GitHub repository exists, retrieves the base branch commit SHA, and creates a new branch named from the workflow name and version counter.
5. Checks whether a JSON file for the workflow already exists in the repository and then creates or updates that file on the new branch by committing the base64-encoded JSON.
6. Opens a GitHub pull request from the new branch into the configured base branch.

## Setup
1. Create a GitHub OAuth2 credential with access to the target repository (repo scope) and select it for the GitHub and GitHub API HTTP requests.
2. Create an n8n API credential for your staging instance and set `stagingN8nBaseUrl` to your staging n8n URL.
3. Update the publish variables to your `repoOwner`, `repoName`, `baseBranch`, and whether the repository should be private.
4. Ensure this workflow receives the correct workflow ID (via the `workflow_id` input when executed by another workflow, or by adjusting the trigger/input mapping to your publish event source).

## 🔗 Nodes Used

GitHub, HTTP Request, n8n Trigger, Execute Workflow Trigger, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
