# ⚙️ Audit Android feature flags from GitHub with Firebase and send Slack reports

> ⚡ **30 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Android Feature Flag Cleanup Automation

This workflow automatically scans an Android GitHub repository, detects feature flags used in the codebase, compares them with Firebase Remote Config flags, identifies unused flags and sends a weekly cleanup report to Slack.

This workflow runs every week and checks Android source files (`.kt` / `.java`) inside your GitHub repository. It finds possible feature flags used in code, compares them with Firebase Remote Config flags and highlights flags that may no longer be used.

It then builds a clean summary report and sends the result to Slack for team review.

You receive:

* **Weekly automated Android flag audit**
* **Unused Firebase flag detection**
* **Slack summary report for cleanup review**
* **Better visibility of active vs stale flags**

Ideal for Android teams who want cleaner Firebase Remote Config management.

### Quick Start – Implementation Steps

1. [Login to your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi).
2. Add your GitHub credential in n8n.
3. Update repository owner, repo name and branch.
4. Add Slack credentials and choose a channel.
5. Add Firebase Remote Config API later (currently test data supported).
6. Activate workflow for weekly automation.


## What It Does

This workflow automates Android feature flag cleanup:

1. Runs automatically every week.
2. Connects to GitHub repository.
3. Fetches all Android `.kt` and `.java` files.
4. Reads source code files.
5. Detects possible feature flags inside code.
6. Loads Firebase Remote Config flags.
7. Compares code flags vs Firebase flags.
8. Finds unused Firebase flags.
9. Creates final summary report.
10. Sends report to Slack.

This helps teams remove stale flags and maintain clean configuration.


## Who It's For

This workflow is ideal for:

* Android development teams
* Tech leads
* QA teams
* DevOps / Release teams
* Firebase Remote Config users
* Teams maintaining multiple feature flags


## Requirements to Use This Workflow

To run this workflow, you need:

* [**n8n account** (cloud or self-hosted)](https://n8n.partnerlinks.io/om1efg2qgvwi)
* **GitHub repository access**
* **Slack workspace**
* **Firebase Remote Config project** (optional initially)
* Basic understanding of Android source files


## How It Works

1. **Weekly Trigger** – Workflow starts automatically every week.
2. **Load Settings** – Reads repository and workflow settings.
3. **Connect GitHub** – Fetches project files.
4. **Filter Android Files** – Only `.kt` and `.java` files selected.
5. **Read Code** – Downloads and decodes file content.
6. **Detect Flags** – Finds feature flags from source code.
7. **Load Firebase Flags** – Uses Firebase Remote Config flags.
8. **Compare Flags** – Finds used and unused flags.
9. **Create Report** – Builds totals and cleanup summary.
10. **Send Slack Alert** – Posts report to team channel.


## Setup Steps

1. Import the workflow JSON into n8n.
2. Open **Workflow Settings** node.
3. Enter:
   * GitHub Owner
   * GitHub Repo
   * Branch Name
4. Connect GitHub credentials.
5. Connect Slack credentials.
6. Select Slack channel.
7. Replace mock Firebase flags with real Firebase API later.
8. Activate workflow.


## How To Customize Nodes

### Customize Scan Schedule

Change Cron node:

* Weekly
* Daily
* Monthly

### Customize File Types

Change file filter:

* `.kt`
* `.java`
* `.xml`
* `.gradle`

### Customize Flag Detection

Improve regex to detect:

* `BuildConfig.FEATURE_*`
* `RemoteConfig.getString()`
* Custom wrappers

### Customize Slack Alerts

You may add:

* Emojis
* Mentions
* Team tags
* Priority warnings


## Add-Ons (Optional Enhancements)

You can extend this workflow to:

* Create Jira cleanup tickets
* Update Google Sheets catalog
* Create GitHub PR with markdown report
* Track first seen / last seen flags
* Team ownership by prefix
* Strict aging rules (30+ days unused)
* Multi-repository scanning


## Use Case Examples

### 1. Firebase Cleanup

Remove old Remote Config flags not used in app code.

### 2. Weekly Engineering Report

Send flag health report to Slack.

### 3. Release Readiness

Check unused experiments before release.

### 4. Tech Debt Reduction

Keep feature flag system clean and manageable.

### 5. Multi-Team Visibility

Know which flags are active or stale.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|----------------|----------|
| No files found | Wrong repo/branch | Check settings |
| Slack message failed | Wrong credentials | Reconnect Slack |
| No flags detected | Regex too strict | Improve detection logic |
| Too many files | Large repo | Reduce scan scope |
| Firebase data empty | API not connected | Use mock data or fix API |
| Workflow not running | Disabled trigger | Enable Cron node |

## Need Help?

If you need help customizing this workflow by adding Jira, Google Sheets, GitHub PR creation, real Firebase API integration or scaling for enterprise use then our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** can help build an advanced production-ready version.

## 🔗 Nodes Used

Cron, HTTP Request, Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
