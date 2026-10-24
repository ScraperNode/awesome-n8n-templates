# ⚙️ Back up workflows daily to GitHub with incremental updates

> ⚡ **21 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs nightly to back up all workflows from your n8n instance to a GitHub repository, creating a new JSON file for new workflows and only updating existing files when the workflow has changed to avoid unnecessary commits.

## How it works
1. Runs every day at 11 PM on a schedule trigger.
2. Retrieves a list of all workflows in your n8n instance using the n8n API and processes them one by one.
3. Checks GitHub to see whether a backup JSON file already exists for the current workflow.
4. If no file exists, fetches the full workflow JSON from n8n and creates a new file in the GitHub repository.
5. If a file exists, calls the GitHub Commits API to get the latest commit date for that file and compares it to the workflow’s updatedAt date in n8n.
6. If n8n is newer, downloads the latest workflow JSON and updates the existing file on GitHub; otherwise it skips updating to avoid creating a commit.
7. Waits 10 seconds between GitHub operations to reduce the chance of hitting GitHub API rate limits.

## Setup
1. Create an n8n API key and add an n8n API credential, then select it in the n8n nodes that list and fetch workflows.
2. Create a GitHub Personal Access Token with repo access and add a GitHub credential, then select it in the GitHub and GitHub-authenticated HTTP request steps.
3. Replace `YOUR_GITHUB_USERNAME` and `YOUR_BACKUP_REPO` in all GitHub-related settings, including the Commits API URL.
4. Ensure your target repository has a `workflows/` folder (or allow the workflow to create files under that path) and verify the filename pattern works with your workflow names.

## Requirements
- An n8n API credential (self-hosted or cloud) with an API key that can read workflows — used by the n8n nodes to list and fetch workflows.
- A GitHub account with a repository (private recommended) where backups will be stored.
- A GitHub Personal Access Token (classic or fine-grained) with Contents read/write access to that repo. The same token powers both the GitHub nodes and the HTTP Request node that reads the latest commit date.
- Public API access enabled on your n8n instance (Settings → API), otherwise the n8n nodes can't fetch workflows.

## Customization
- Change the backup time in the Schedule Trigger (default 23:00) — make it hourly, twice-daily, or weekly.
- Edit the owner and repository fields in the three GitHub nodes and the HTTP Request URL — replace YOUR_GITHUB_USERNAME / YOUR_BACKUP_REPO.
- Adjust the folder path or file naming in filePath (default workflows/{id}-{name}.json).
- Increase the Wait node durations if you run a large instance and hit GitHub/n8n rate limits.
- Add a filter after "Get many workflows" to back up only active workflows, or only those with a specific tag/name.
- Push to a specific branch, or add a Slack/email notification at the end to report success or failures.

## Additional info
The workflow is incremental by design: it compares each workflow's last update against the latest GitHub commit and only writes when something actually changed, keeping commit history clean and avoiding needless writes.

Brand-new workflows are created; existing changed ones are edited in place, so file history stays intact per workflow.

Before first run, do a manual test execution to confirm the n8n API key and GitHub token are both authorized — the Get/Create/Edit file nodes will surface auth errors early.

## 🔗 Nodes Used

GitHub, HTTP Request, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
