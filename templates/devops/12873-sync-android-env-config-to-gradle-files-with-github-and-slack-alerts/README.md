# ⚙️ Sync Android env config to Gradle files with GitHub and Slack alerts

> ⚡ **4 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

# Environment Config Diff & Propagate for Android Builds

This workflow automatically detects changes in the .env.staging file in a GitHub repository and keeps Android configuration files (build.gradle and gradle.properties) in sync.It creates a new Git branch, applies updates safely, opens a pull request and notifies the team on Slack — all without manual effort.

Whenever .env.staging changes:

* The workflow detects the change via GitHub webhook
*   Compares ENV values with Android config files
*   Automatically updates build.gradle and gradle.properties
*   Creates a new Git branch
*   Opens a pull request
*   Sends a Slack notification
    
You get:

*   **Automatic Android config synchronization**
*   **Safe updates via pull requests**
*   **Zero manual copying of ENV values**
*   **Instant Slack visibility for the team**

Ideal for teams managing Android app configuration across environments without mistakes.

## What It Does

This workflow automates Android configuration updates end-to-end:

1.  Listens for GitHub push events.
2.  Checks if .env.staging was modified.
3.  Stops execution if ENV file was not changed.
4.  Fetches .env.staging and gradle.properties from main.
5.  Converts both files into easy-to-compare key-value pairs.
6.  Compares ENV values against Gradle values.
7.  Creates a new Git branch for changes.
8.  Fetches files from the new branch.
9.  Identifies which variables must be updated.
10.  Applies ENV values to:
    *   build.gradle
    *   gradle.properties
11.  Commits the changes.
12.  Creates a pull request.
13.  Sends a Slack notification with PR details.

This ensures Android configs are **always aligned with ENV files**.

## Who’s It For

This workflow is ideal for:

*   Android development teams
*   DevOps & platform engineers
*   CI/CD automation teams
*   Teams managing multiple environments (staging / prod)
*   Organizations avoiding manual config drift
*   Anyone tired of copy-pasting ENV values
    

## Requirements to Use This Workflow

To run this workflow, you need:

*   **n8n instance** (cloud or self-hosted)
*   **GitHub repository** with:
    *   .env.staging
    *   app/build.gradle
    *   gradle.properties
*   **GitHub Personal Access Token**
*   **Slack workspace** + API credentials
*   Basic understanding of Android config files

## How It Works

1.  **GitHub Webhook Trigger**Listens for commits pushed to the repository.
2.  **ENV Change Check**Workflow continues **only if .env.staging changed**.
3.  **Fetch & Parse Files**Reads ENV and Gradle files and converts them into key-value format.
4.  **Compare Config Values**Finds missing or mismatched variables.
5.  **Create Safe Branch**Generates a timestamp-based branch from main.
6.  **Apply Updates**Updates only the required values in:
    *   build.gradle
    *   gradle.properties
7.  **Commit Changes**Saves updates to the new branch.
8.  **Create Pull Request**Opens a PR for review.
9.  **Notify Slack**Sends PR link and details to the team.
    

## Setup Steps

1.  Import the provided **n8n workflow JSON**.
2.  Configure **GitHub credentials** in all GitHub & HTTP nodes.
3.  Set your **repository name** and owner.
4.  Configure **Slack credentials** and select a channel.
5.  Ensure .env.staging exists in your repo.
6.  Activate the workflow.
7.  Push a change to .env.staging — automation starts instantly
    

## How To Customize Nodes

### Customize ENV File

*   Replace .env.staging with .env.production or others.
*   Update filename in GitHub fetch + check nodes.

### Customize Android Files

*   Extend logic to include:
    *   local.properties
    *   BuildConfig.kt
    *   settings.gradle

### Customize Branch Naming

*   Modify the **Generate New Branch Name** node.
*   Add environment names or commit IDs.

### Customize Slack Message

You can add:

*   Emojis
*   PR author name
*   Changed variable list
*   Mentions (@team, @android)
    

## Add-Ons (Optional Enhancements)

You can extend this workflow to:

*   Support multiple ENV files
*   Add approval checks before PR creation
*   Auto-merge after approval
*   Validate ENV variable formats
*   Send diff summary to Slack
*   Block secrets from being committed
*   Add Jira / Linear ticket creation
*   Trigger Android CI build after PR creation
    

## Use Case Examples

### 1\. Environment Sync

Keep Android configs aligned with staging ENV automatically.

### 2\. CI/CD Safety

Prevent broken builds due to mismatched config values.

### 3\. Team Transparency

Everyone sees config updates via Slack + PRs.

### 4\. DevOps Automation

Remove repetitive manual config updates.

### 5\. Audit Friendly

All changes tracked through Git history & PRs.

## Troubleshooting Guide

| Issue                  | Possible Cause                    | Solution                                             |
|------------------------|----------------------------------|------------------------------------------------------|
| Workflow not triggered | Webhook not configured            | Re-register GitHub webhook                            |
| No PR created          | `.env.staging` not changed        | Ensure the file is modified                           |
| Wrong values updated   | Parsing logic issue               | Check `KEY=VALUE` format                              |
| Slack message not sent | Invalid credentials               | Reconnect Slack API                                   |
| Commit failed          | Missing permissions               | Check GitHub token scopes                             |


## Need Help?

If you need help extending or customizing this workflow, adding production support, CI integrations, security checks or enterprise-scale automation, then our [n8n workflow development](https://www.weblineindia.com/n8n-automation/) team at **WeblineIndia** can help you build robust, production-ready workflows.

## 🔗 Nodes Used

GitHub, HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
