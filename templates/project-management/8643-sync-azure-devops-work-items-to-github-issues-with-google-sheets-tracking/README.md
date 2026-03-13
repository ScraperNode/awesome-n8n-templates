# 📋 Sync Azure DevOps work items to GitHub issues with Google Sheets tracking

> ⚡ **432 views** · 📋 [Project Management](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

## Who is this for?

This workflow is designed for software teams, project managers, and
developers who manage work across Azure DevOps and GitHub. It helps
organizations that use Azure DevOps for work item tracking but rely on
GitHub for issue management and collaboration.

If you need to ensure that your DevOps Stories and Tasks are mirrored in
GitHub issues while keeping a single source of truth in Google Sheets,
this workflow is for you.

## What problem is this workflow solving? / Use case

Managing projects across multiple platforms often leads to missed
updates and poor traceability.

-   Stories created in Azure DevOps may not be tracked properly in
    GitHub.\
-   Tasks under Stories often lose visibility when teams split between
    platforms.\
-   Manual syncing between tools takes time and causes human errors.

This workflow solves that problem by automating the sync between Azure
DevOps Stories and GitHub Issues, while also keeping a Google Sheets
record for cross-referencing and reporting.

## What this workflow does

1.  **Triggers from Azure DevOps Stories** -- When a Story is created or
    updated, the workflow is activated.\
2.  **Creates a GitHub Issue** -- A new issue is generated in the
    specified GitHub repository.\
3.  **Assigns a random collaborator** -- One repository collaborator is
    randomly assigned to the issue.\
4.  **Logs mapping in Google Sheets** -- The Azure DevOps Story ID,
    GitHub Issue number, and URL are stored for tracking.\
5.  **Triggers from Azure DevOps Tasks** -- When a Task linked to a
    Story is created, the workflow looks up its parent in Google
    Sheets.\
6.  **Updates the GitHub Issue** -- The parent GitHub Issue is updated
    with a clickable link to the new Task for better visibility.

## Setup

### Connect your accounts

-   GitHub (OAuth2 or personal token)\
-   Google Sheets (OAuth2)\
-   Azure DevOps (Webhook integration)

### Configure Webhooks

-   Add the workflow's webhook URLs to Azure DevOps service hooks for
    Work Item Created/Updated events.

### Update repository details

-   Set the GitHub repository where issues should be created.

### Customize Sheets

-   Use the provided Google Sheet or link your own for issue mappings.

## How to customize this workflow to your needs

-   **Modify assignment logic**: Instead of random collaborator
    assignment, edit the Code node to assign issues based on workload or
    labels.\
-   **Change Sheet schema**: Add more fields (e.g., State,
    IterationPath) to your Google Sheet for richer reporting.\
-   **Expand task linking**: Customize the way Tasks are appended to
    GitHub issues (e.g., group by state, show due dates).

## Powered By Concept Recall

[https://conceptrecall.com](https://conceptrecall.com/)

## 🔗 Nodes Used

GitHub, Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
