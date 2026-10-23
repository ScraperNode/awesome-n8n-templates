# 🔒 Collect SOC 2 and ISO 27001 evidence with GitHub, Google Workspace, AWS, and GPT-4o

> ⚡ **33 views** · 🔒 [SecOps & Security Automation](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs monthly to collect SOC 2 and ISO 27001 evidence from GitHub, Google Workspace, and AWS IAM, then logs results to Google Sheets, archives a JSON snapshot to Google Drive, and posts an OpenAI-generated compliance gap digest to Slack.

## How it works
1. Runs on the 1st of every month at 6:00 AM.
2. Fetches all repositories in a GitHub organization, filters to active repos, and checks default-branch protection settings via the GitHub API.
3. Lists active users from the Google Admin SDK Directory API and evaluates 2-Step Verification enrollment and enforcement, including separate checks for admin accounts.
4. Generates and downloads an AWS IAM credential report, then evaluates root account hardening, user MFA, access key rotation age, and stale accounts against the configured policy thresholds.
5. Merges all evidence, maps each check to SOC 2 and ISO 27001 control IDs, and calculates per-control and overall readiness statistics.
6. Appends evidence rows to an “Evidence Log” tab and upserts control summaries into a “Control Dashboard” tab in Google Sheets.
7. Saves a formatted, period-stamped JSON evidence file to Google Drive and uses OpenAI to draft a gap analysis that is posted as a monthly digest to a Slack channel.

## Setup
1. Add credentials for GitHub (token with access to read branch protection), Google OAuth2 (Admin SDK Directory read access), AWS (IAM read permissions including GenerateCredentialReport/GetCredentialReport), OpenAI, and Slack.
2. Create a Google Sheet with “Evidence Log” and “Control Dashboard” tabs, and create a Google Drive folder to store archived JSON snapshots.
3. Replace the placeholders in the workflow (GitHub org name, Google Sheet ID, Drive folder ID, and Slack channel ID) and adjust stale-days and key-rotation thresholds in the audit configuration.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Drive, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
