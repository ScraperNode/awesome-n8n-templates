# 🔬 Sync a GitHub integration catalog from GitHub to StudioCMS pages

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs manually or daily to sync a StudioCMS integration catalog from GitHub by reading each matching repository’s README, package.json, and latest release, then safely creating or updating one deterministic StudioCMS page per integration while reporting conflicts, warnings, and proposed changes.

## How it works
1. Runs manually or every day at 06:00 and validates the catalog configuration (GitHub org, repo prefix, folder name, slug prefix, and preview mode).
2. Looks up the target StudioCMS folder by name and creates it only when preview mode is disabled, otherwise reporting that it would be created.
3. Loads existing StudioCMS pages once, lists repositories in the GitHub organization, and filters to non-fork repos that match the configured repository name prefix.
4. Processes repositories sequentially and reads each repository’s README.md, package.json, and latest GitHub release.
5. Builds a standardized Markdown catalog page (with ownership marker and source digest) including install instructions, links, supported operations, and release notes, and marks archived repos as drafts.
6. Creates, updates, or skips the StudioCMS page based on exact slug matching and ownership checks, and records conflicts without overwriting unowned pages.
7. Compiles a final report summarizing created/updated/unchanged items, preview-only actions, warnings, conflicts, and errors.

## Setup
1. Add GitHub API credentials with access to list the target organization’s repositories and read repository files and releases.
2. Add StudioCMS API credentials with permission to read, create, and update folders and pages.
3. Update the configuration values (GitHub organization, repository prefix, StudioCMS folder name, slug prefix, and max repositories) to match your catalog.
4. Keep previewOnly set to true for the first run, review the report for conflicts and warnings, then set previewOnly to false to allow writes.
5. Ensure the StudioCMS site does not already contain unrelated pages using the same slugs, or adjust the slug prefix/ownership marker to avoid conflicts.

## 🔗 Nodes Used

GitHub, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
