# ⚙️ Back up GitHub repositories to Amazon S3 and send email reports

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs nightly to back up GitHub repositories by downloading each repo as a tarball and uploading it to Amazon S3, then deletes older archives based on a retention window and emails a run report via SMTP.

## How it works
1. Runs every night at 02:00 on a schedule.
2. Validates required settings like the S3 bucket, S3 prefix, retention days, and report email before doing any work.
3. Uses the GitHub API to identify the authenticated account (or a specified owner) and lists all owned repositories with pagination.
4. Downloads each repository as a GitHub tarball (retrying on failure) and uploads it to Amazon S3 with a timestamped filename under the configured prefix.
5. Lists existing objects in the S3 prefix, selects backups older than the retention window, and deletes the expired archives.
6. Builds a summary including successes, skipped empty repositories, failures, and deletions, then sends the report by email over SMTP.

## Setup
1. Add a GitHub API credential with access to the repositories you want to back up (including appropriate scopes for private repos).
2. Add an AWS credential with permission to list, upload, and delete objects in your target S3 bucket, and set the bucket name and a dedicated prefix in the workflow settings.
3. Add an SMTP credential for the email report and set the recipient (and optional sender) address in the workflow settings.
4. Review and adjust the schedule time, then run the workflow manually once to confirm backups, retention cleanup, and email reporting work as expected.

## Additional info
Full bucket and IAM setup guide: https://datadrifter.io/github-backup-s3-bucket-iam-setup/

Good to know: the backup is a tarball of each repository's default branch as
GitHub serves it, so it covers code and history as of the run, not issues,
pull requests, wikis or Actions logs. An empty repository is reported as
skipped rather than failed. Retention deletes everything under your prefix
older than retention_days, whatever put it there, so give this workflow a
prefix of its own.

Made by DataDrifter.

## 🔗 Nodes Used

Send Email, HTTP Request, AWS S3, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
