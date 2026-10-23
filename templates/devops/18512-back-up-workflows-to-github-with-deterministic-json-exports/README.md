# ⚙️ Back up workflows to GitHub with deterministic JSON exports

> ⚡ **41 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily and exports all workflows from your n8n instance, normalizes them into deterministic JSON files, and pushes the result to a GitHub repository using the Git Data API so changes are committed only when the exports actually differ.

## How it works
1. Runs every day at 03:05, or on any schedule you set.
2. Retrieves every workflow from your n8n instance through the n8n API, archived ones included.
3. Normalizes each export: volatile fields are stripped, JSON keys are sorted, archived workflows are filed separately, and a README inventory is generated.
4. Reads the current branch reference, commit and repository tree from GitHub.
5. Builds one Git tree holding every workflow file, and marks orphaned exports for deletion so a renamed or deleted workflow does not linger in the backup.
6. Creates a single commit and moves the branch, but only when the new tree differs from the current one, so an unchanged run writes nothing.

## Setup
1. Create a private GitHub repository and initialize it with at least one commit, then decide the target branch and backup folder.
2. Create a fine-grained GitHub token scoped to that repository with Contents read and write, and store it in a GitHub API credential.
3. Create an n8n API key in Settings, store it in an n8n API credential, and assign it to the List workflows node.
4. Assign the GitHub API credential to the six HTTP Request nodes. Update owner, repo, branch and folder in the Configuration node, then run the workflow manually twice: the second run should commit nothing.

## Requirements
- n8n with the public API enabled, plus an n8n API credential

## Customization
- A private GitHub repository containing at least one commit

## Additional info
A GitHub fine-grained token limited to that repository, with Contents read and write

## 🔗 Nodes Used

HTTP Request, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
