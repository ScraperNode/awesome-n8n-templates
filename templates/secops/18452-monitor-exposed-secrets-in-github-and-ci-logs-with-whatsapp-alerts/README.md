# 🔒 Monitor exposed secrets in GitHub and CI logs with WhatsApp alerts

> ⚡ **204 views** · 🔒 [SecOps & Security Automation](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every 6 hours (or on demand) to scan GitHub commits and CI/CD logs for leaked secrets, verify suspected credentials against GitHub and Stripe when possible, score risk severity, and send WhatsApp alerts with a remediation confirmation and re-verification loop.

## How it works
1. Runs on a 6-hour schedule or via a manual trigger and loads configuration values like GitHub repo details, CI log URL, and WhatsApp recipients.
2. Fetches the most recent commit list from the configured GitHub repository and then pulls CI/CD pipeline logs from the configured CI API endpoint.
3. Scans the collected text for common secret patterns (for example AWS keys, GitHub tokens, Stripe keys, and high-entropy strings), masks matches, deduplicates findings, and emits one item per suspected secret.
4. Routes each finding by category to verify validity using provider API calls (GitHub /user and Stripe /v1/account) or marks generic high-entropy matches as unverifiable for manual review.
5. Computes a risk score and severity level based on secret type, source (repo vs CI), confidence, and whether the credential appears still valid, and generates a remediation checklist and WhatsApp-ready message.
6. Sends WhatsApp notifications based on severity, and for critical/high findings waits for an external remediation confirmation webhook, pauses for a grace period, then re-verifies the credential and either sends a resolution message or escalates if it is still active.

## Setup
1. Add credentials for GitHub API access, a CI/CD API header-auth credential for fetching logs, and WhatsApp Business Cloud API credentials for sending messages.
2. Update the configuration values for repoOwner, repoName, baseBranch, ciApiUrl, whatsappBusinessPhoneId, and whatsappRecipientPhone.
3. Configure your on-call or ticketing tool to call the workflow’s remediation confirmation wait webhook and include a remediated=true value when rotation/revocation is complete.
4. Review and adjust the verification URLs/headers (especially the AWS STS placeholder, which requires SigV4 signing to work in production) and tune the secret-detection patterns, scoring thresholds, and grace-period duration as needed.

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
