# ⚙️ Sync GitHub workflows to n8n after pull request merges

> ⚡ **1,770 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

## Who is this for?

This template is ideal for **developers, DevOps engineers, and automation managers** who manage their n8n workflows using GitHub. It helps teams streamline their CI/CD automation by syncing changes from GitHub directly into n8n after a pull request (PR) is merged.

## What problem is this workflow solving?

Manually restoring workflows after reviewing and merging code in GitHub can be tedious and error-prone. This workflow solves that by **automating the restore process**, ensuring that any new or updated workflow committed to your GitHub repo is automatically imported into your n8n environment.

## What this workflow does

- Triggers when a GitHub pull request is **closed and merged**.
- Fetches the details of the merge commit.
- Retrieves the list of **added and modified workflow files**.
- Downloads and decodes each workflow file.
- **Creates or updates** the corresponding workflow in your n8n instance automatically.

## Setup

1. **Connect GitHub**: Use the `GitHub Trigger` node and configure GitHub API credentials.
Note: I'd recommended to use *GitHub PAT (Personal Access Token) classic* with `repo` and `admin:repo_hook` permission scopes enabled.
2. **Connect n8n API**: Provide your n8n API credentials in the `n8n` nodes. - [Check this doc](https://docs.n8n.io/api/authentication/)
3. **Set repository variables**: Update `github_owner` and `repo_name` in the **Define Local Variables** node.
4. **Enable webhook**: Make sure your GitHub repository has a webhook for `pull_request` events pointing to this workflow.

## How to customize this workflow to your needs

- Modify filters to handle only certain branches or file paths.
- Add Slack or email notifications to confirm successful imports.
- Insert logging or version tagging for better traceability.
- Extend with conditional logic for workflow testing before applying changes.

This automated flow provides a seamless CI/CD loop between GitHub and n8n, empowering teams to manage workflow versioning efficiently and securely.

## 🔗 Nodes Used

GitHub, Github Trigger, HTTP Request, n8n, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
